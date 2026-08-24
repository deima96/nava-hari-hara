import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:+917330740709"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917330740709"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
