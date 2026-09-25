import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-ink lg:hidden">
      <a
        href="tel:+2348037428180"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 font-head text-[14px] font-semibold text-mist"
      >
        <Phone className="h-4 w-4 text-amber" /> Call
      </a>
      <div className="w-px bg-white/10" />
      <a
        href="https://wa.me/2348037428180"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 font-head text-[14px] font-semibold text-mist"
      >
        <MessageCircle className="h-4 w-4 text-amber" /> WhatsApp
      </a>
    </div>
  );
}
