"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import type { CrmCourseId } from "@/lib/crm/bitrix24-config";
import { captureUtmFromLocation, readUtmParams } from "@/lib/crm/utm";
import { normalizeUzPhone, isValidAge } from "@/lib/crm/validate-lead";
import type { BranchSlug } from "@/lib/i18n/landing-sections";

type FormState = {
  name: string;
  phone: string;
  age: string;
  course: CrmCourseId | "";
  branch: BranchSlug | "";
};

type FormErrors = {
  name?: boolean;
  phone?: boolean;
  age?: boolean;
  branch?: boolean;
  course?: boolean;
};

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  age: "",
  course: "",
  branch: "",
};

type LeadFormProps = {
  /** `web` — asosiy landing; boshqa qiymatlar `/lead/[source]` slug */
  source?: string;
  className?: string;
  /** Berilsa, muvaffaqiyatli yuborishdan keyin shu sahifaga o'tiladi
      (inline "rahmat" bloki o'rniga) */
  successHref?: string;
};

/** Meta Pixel'ga konversiya hodisasini yuborish (pixel yuklanmagan bo'lsa jim o'tadi) */
function trackLeadConversion() {
  const fbq = (window as { fbq?: (...args: unknown[]) => void }).fbq;
  fbq?.("track", "Lead");
}

export function LeadForm({
  source = "web",
  className = "",
  successHref,
}: LeadFormProps) {
  const router = useRouter();

  // Reklama linkidagi UTM'larni sessiyaga yozib qo'yamiz (submit'da o'qiladi)
  useEffect(() => {
    captureUtmFromLocation();
  }, []);
  const { t } = useI18n();
  const f = t.contact.form;

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSubmitError(null);
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: false }));
    }
  }

  function validate(): FormErrors {
    const ageNum = parseInt(form.age, 10);
    return {
      name: form.name.trim().length === 0,
      phone: normalizeUzPhone(form.phone) === null,
      age: !isValidAge(ageNum),
      branch: form.branch === "",
      course: form.course === "",
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone,
          age: parseInt(form.age, 10),
          branch: form.branch,
          course: form.course,
          source,
          utm: readUtmParams(),
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        details?: string;
      };

      if (!response.ok || !data.ok) {
        setSubmitError(
          [data.error, data.details].filter(Boolean).join(" — ") || f.submitError,
        );
        setSubmitting(false);
        return;
      }

      trackLeadConversion();

      if (successHref) {
        // Yangi sahifada "rahmat" — submitting holati redirect tugaguncha qoladi
        router.push(successHref);
        return;
      }

      setSubmitted(true);
      setSubmitting(false);
    } catch {
      setSubmitError(f.submitError);
      setSubmitting(false);
    }
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div
        className={`contact-form contact-success${className ? ` ${className}` : ""}`}
        role="status"
      >
        <span className="contact-success-icon" aria-hidden="true">
          <Icon name="check" size={28} strokeWidth={2.5} />
        </span>
        <h3 className="contact-success-title">{f.successTitle}</h3>
        <p className="contact-success-text">{f.successText}</p>
        <button type="button" className="contact-reset" onClick={resetForm}>
          {f.reset}
        </button>
      </div>
    );
  }

  return (
    <form
      className={`contact-form${className ? ` ${className}` : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact-form-row">
        <div className={`contact-field${errors.name ? " contact-field--error" : ""}`}>
          <label className="contact-field-label" htmlFor="lead-name">
            {f.nameLabel} <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-name"
            className="contact-input"
            type="text"
            autoComplete="name"
            placeholder={f.namePlaceholder}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name ? (
            <span className="contact-error">{f.nameError}</span>
          ) : null}
        </div>

        <div className={`contact-field${errors.phone ? " contact-field--error" : ""}`}>
          <label className="contact-field-label" htmlFor="lead-phone">
            {f.phoneLabel} <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-phone"
            className="contact-input"
            type="tel"
            autoComplete="tel"
            placeholder={f.phonePlaceholder}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          {errors.phone ? (
            <span className="contact-error">{f.phoneError}</span>
          ) : null}
        </div>
      </div>

      <div className="contact-form-row">
        <div className={`contact-field${errors.age ? " contact-field--error" : ""}`}>
          <label className="contact-field-label" htmlFor="lead-age">
            {f.ageLabel} <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-age"
            className="contact-input"
            type="number"
            inputMode="numeric"
            min={7}
            max={99}
            placeholder={f.agePlaceholder}
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
          />
          {errors.age ? (
            <span className="contact-error">{f.ageError}</span>
          ) : null}
        </div>

        <div className={`contact-field${errors.branch ? " contact-field--error" : ""}`}>
          <label className="contact-field-label" htmlFor="lead-branch">
            {f.branchLabel} <span aria-hidden="true">*</span>
          </label>
          <select
            id="lead-branch"
            className="contact-select"
            value={form.branch}
            onChange={(e) => update("branch", e.target.value as BranchSlug | "")}
          >
            <option value="">{f.branchPlaceholder}</option>
            {t.branches.items.map((branch) => (
              <option key={branch.slug} value={branch.slug}>
                {branch.city}
              </option>
            ))}
          </select>
          {errors.branch ? (
            <span className="contact-error">{f.branchError}</span>
          ) : null}
        </div>
      </div>

      <div className={`contact-field${errors.course ? " contact-field--error" : ""}`}>
        <label className="contact-field-label" htmlFor="lead-course">
          {f.courseLabel} <span aria-hidden="true">*</span>
        </label>
        <select
          id="lead-course"
          className="contact-select"
          value={form.course}
          onChange={(e) => update("course", e.target.value as CrmCourseId | "")}
        >
          <option value="">{f.coursePlaceholder}</option>
          {t.courses.items.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
        {errors.course ? (
          <span className="contact-error">{f.courseError}</span>
        ) : null}
      </div>

      {submitError ? (
        <p className="contact-submit-error" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-shiny contact-submit"
        disabled={submitting}
      >
        <span>{submitting ? f.submitting : f.submit}</span>
        {!submitting ? <Icon name="send" size={15} /> : null}
      </button>

      <p className="contact-privacy">{f.privacy}</p>
    </form>
  );
}
