"use client";

import { useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

type FormState = {
  name: string;
  phone: string;
  course: string;
  branch: string;
  comment: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  course: "",
  branch: "",
  comment: "",
};

export function ContactSection() {
  const { t } = useI18n();
  const c = t.contact;
  const f = c.form;

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "name" || key === "phone") {
      setErrors((prev) => ({ ...prev, [key]: false }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = {
      name: form.name.trim().length === 0,
      phone: form.phone.replace(/\D/g, "").length < 7,
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) return;

    // TODO: connect to a backend / Telegram bot / Google Sheet.
    setSubmitted(true);
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section id="enroll" className="contact-section" aria-label={c.ariaLabel}>
      <div className="contact-section-glow" aria-hidden="true" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="contact-layout">
          <ScrollReveal className="contact-head">
            <SectionHeader {...getSectionHeaderProps(c)} />
          </ScrollReveal>

          <ScrollReveal className="contact-form-wrap" delay={120}>
            {submitted ? (
              <div className="contact-form contact-success" role="status">
                <span className="contact-success-icon" aria-hidden="true">
                  <Icon name="check" size={28} strokeWidth={2.5} />
                </span>
                <h3 className="contact-success-title">{f.successTitle}</h3>
                <p className="contact-success-text">{f.successText}</p>
                <button
                  type="button"
                  className="contact-reset"
                  onClick={resetForm}
                >
                  {f.reset}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <div
                    className={`contact-field${errors.name ? " contact-field--error" : ""}`}
                  >
                    <label className="contact-field-label" htmlFor="contact-name">
                      {f.nameLabel} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
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

                  <div
                    className={`contact-field${errors.phone ? " contact-field--error" : ""}`}
                  >
                    <label
                      className="contact-field-label"
                      htmlFor="contact-phone"
                    >
                      {f.phoneLabel} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-phone"
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
                  <div className="contact-field">
                    <label
                      className="contact-field-label"
                      htmlFor="contact-course"
                    >
                      {f.courseLabel}
                    </label>
                    <select
                      id="contact-course"
                      className="contact-select"
                      value={form.course}
                      onChange={(e) => update("course", e.target.value)}
                    >
                      <option value="">{f.coursePlaceholder}</option>
                      {t.courses.items.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-field">
                    <label
                      className="contact-field-label"
                      htmlFor="contact-branch"
                    >
                      {f.branchLabel}
                    </label>
                    <select
                      id="contact-branch"
                      className="contact-select"
                      value={form.branch}
                      onChange={(e) => update("branch", e.target.value)}
                    >
                      <option value="">{f.branchPlaceholder}</option>
                      {t.branches.items.map((branch) => (
                        <option key={branch.slug} value={branch.city}>
                          {branch.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-shiny contact-submit">
                  <span>{f.submit}</span>
                  <Icon name="send" size={15} />
                </button>

                <p className="contact-privacy">{f.privacy}</p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
