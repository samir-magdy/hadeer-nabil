import { EMAIL, PHONE_NUMBER, SOCIAL, WHATSAPP_URL } from "@/lib/constants";
import { Language, pageContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact({ language }: { language: Language }) {
  const content = pageContent[language].contact;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-warm-white py-24 md:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-heading mb-5 text-balance text-text-dark md:mb-6">
            {content.heading}
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-lead mx-auto mb-10 max-w-xl text-text-mid md:mb-12 rtl:leading-loose">
            {content.description}
          </p>
        </Reveal>

        {/* Primary action */}
        <Reveal delay={2}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white shadow-warm transition-all duration-200 hover:bg-whatsapp-deep hover:shadow-warm-lg active:scale-[0.98] md:px-10 md:text-lg"
          >
            <WhatsAppGlyph />
            <span>{content.cta}</span>
          </a>
        </Reveal>

        {/* Secondary: direct contact rows */}
        <Reveal delay={2}>
          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3 md:mt-14">
            <ContactRow
              href={`mailto:${EMAIL}`}
              value={EMAIL}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px] shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            />
            <ContactRow
              href={`tel:${PHONE_NUMBER}`}
              value={PHONE_NUMBER}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px] shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
          </div>
        </Reveal>

        {/* Tertiary: socials */}
        <Reveal delay={2}>
          <div className="mt-10 flex items-center justify-center gap-3 md:mt-12">
            <SocialLink href={SOCIAL.tiktok} label="TikTok">
              <TikTokIcon />
            </SocialLink>
            <SocialLink href={SOCIAL.instagram} label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={SOCIAL.youtube} label="YouTube">
              <YouTubeIcon />
            </SocialLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Local pieces ---------- */

function ContactRow({
  href,
  value,
  icon,
}: {
  href: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      dir="ltr"
      href={href}
      className="group flex items-center justify-center gap-2.5 rounded-2xl border border-border bg-cream/60 px-5 py-3.5 text-[0.9375rem] text-text-mid transition-all duration-200 hover:border-primary/40 hover:bg-primary-pale hover:text-text-dark md:text-base"
    >
      <span className="text-text-light transition-colors duration-200 group-hover:text-primary">
        {icon}
      </span>
      <span>{value}</span>
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-light transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary-pale hover:text-primary"
    >
      {children}
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:scale-110"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
