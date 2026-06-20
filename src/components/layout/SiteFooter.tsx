"use client";

import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { SocialIcon } from "@/components/ui/SocialIcon";
import {
  aboutDropdownLinks,
  mainNavLinks,
} from "@/lib/i18n/translations";

export function SiteFooter() {
  const { locale, t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true" />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <Image
              src="/logo-white.svg"
              alt="GIGU Moda Akademiyasi"
              width={240}
              height={72}
              className="site-footer-logo"
            />
            <p className="site-footer-tagline">{t.footer.tagline}</p>
            <a href="#enroll" className="btn-shiny site-footer-cta">
              <span>{t.footer.cta}</span>
            </a>
          </div>

          <div className="site-footer-columns">
            <div className="site-footer-col">
              <h3 className="site-footer-heading">{t.footer.navTitle}</h3>
              <ul className="site-footer-links">
                {aboutDropdownLinks.map(({ key, href }) => (
                  <li key={key}>
                    <a href={href}>{t.nav[key]}</a>
                  </li>
                ))}
                {mainNavLinks.map(({ key, href }) => (
                  <li key={key}>
                    <a href={href}>{t.nav[key]}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-col">
              <h3 className="site-footer-heading">{t.footer.socialTitle}</h3>
              <ul className="site-footer-social">
                {t.footer.social.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="site-footer-social-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="site-footer-social-link" aria-hidden="true">
                        <SocialIcon name={item.icon} size={16} />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-col">
              <h3 className="site-footer-heading">{t.footer.contactTitle}</h3>
              <ul className="site-footer-contact">
                <li>
                  <a href={`tel:${t.footer.phone.replace(/\s/g, "")}`}>
                    {t.footer.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
                </li>
                <li>{t.footer.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>
            © {new Date().getFullYear()} GIGU Moda Akademiyasi. {t.footer.rights}
          </p>
          <p className="site-footer-locale" lang={locale}>
            {locale.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}
