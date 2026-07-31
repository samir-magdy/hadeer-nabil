import { pageContent, Language } from "@/lib/content";

export default function FooterCredit({ language }: { language: Language }) {
  const content = pageContent[language].footer;

  return (
    <footer className="bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hairline closes the page rather than letting it trail off */}
        <div className="border-t border-border py-8 text-center md:py-10">
          <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-sm text-text-light">
            <span dir={language === "ar" ? "rtl" : "ltr"}>
              {content.creditPrefix}
            </span>
            <a
              href={
                language === "ar"
                  ? "https://smweb.studio/ar"
                  : "https://smweb.studio"
              }
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="font-medium text-text-mid underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-primary hover:decoration-primary"
            >
              SM Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
