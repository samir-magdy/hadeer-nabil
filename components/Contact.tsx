import { EMAIL, PHONE_NUMBER, SOCIAL, WHATSAPP_URL } from "@/lib/constants";
import { Language, pageContent } from "@/lib/content";

export default function Contact({ language }: { language: Language }) {
  const content = pageContent[language].contact;
  return (
    <section id="contact" className="bg-warm-white py-20 md:py-28 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl text-text-dark italic mb-4 sm:mb-6 md:mb-8"
          data-arabic-ui={language === "ar" ? "true" : undefined}
        >
          {content.heading}
        </h2>
        <p
          className="text-base md:text-lg lg:text-xl text-text-mid leading-relaxed mb-8 md:mb-10 max-w-md md:max-w-lg mx-auto"
          data-arabic-ui={language === "ar" ? "true" : undefined}
        >
          {content.description}
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 sm:gap-4 rounded-full bg-[#25D366] px-8 py-3 sm:px-6 sm:py-3.5 text-xl rtl:text-xl sm:rtl:text-2xl md:px-7 md:py-4 lg:px-8 lg:py-4 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#20b958] hover:shadow-md mb-8 md:mb-10"
          data-arabic-ui={language === "ar" ? "true" : undefined}
        >
          <WhatsAppIcon />
          <span>{content.cta}</span>
        </a>

        {/* Contact details */}
        <div className="mb-8 md:mb-10 flex flex-col items-center gap-3 md:gap-4">
      <a
      dir="ltr"
  href={`mailto:${EMAIL}`}
  className="inline-flex items-center gap-2 cursor-pointer text-base md:text-xl text-text-light hover:text-text-mid transition-colors underline underline-offset-4 decoration-border"
  data-arabic-ui={language === "ar" ? "true" : undefined}
>
  {/* Mail Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  <span>{EMAIL}</span>
</a>

<a
  dir="ltr"
  href={`tel:${PHONE_NUMBER}`}
  className="inline-flex items-center gap-2 cursor-pointer text-base md:text-xl text-text-light hover:text-text-mid transition-colors underline underline-offset-4 decoration-border"
  data-arabic-ui={language === "ar" ? "true" : undefined}
>
  {/* Phone Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  <span>{PHONE_NUMBER}</span>
</a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <a
            href={SOCIAL.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="cursor-pointer w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-border text-text-light hover:text-text-dark hover:border-text-mid transition-colors"
            data-arabic-ui={language === "ar" ? "true" : undefined}
          >
            <TikTokIcon />
          </a>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="cursor-pointer w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-border text-text-light hover:text-text-dark hover:border-text-mid transition-colors"
            data-arabic-ui={language === "ar" ? "true" : undefined}
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="cursor-pointer w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-border text-text-light hover:text-text-dark hover:border-text-mid transition-colors"
            data-arabic-ui={language === "ar" ? "true" : undefined}
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <img src="/whatsapp-green.svg" alt="" className="w-6 sm:w-8" />
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
