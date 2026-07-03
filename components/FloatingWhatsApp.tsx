import { WHATSAPP_URL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <img
        src="/whatsapp-green.svg"
        alt=""
        width={56}
        height={56}
        className="w-14 h-14"
      />
    </a>
  );
}
