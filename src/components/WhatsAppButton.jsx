import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919894197412"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      text-white
      flex
      items-center
      justify-center
      text-3xl
      shadow-[0_0_25px_rgba(34,197,94,0.6)]
      hover:scale-110
      transition-all
      duration-300"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;