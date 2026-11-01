import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat({ message }: { message: string }) {
  return (
    <a
      className="wa-float"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Citizen Cidadania no WhatsApp"
    >
      <WhatsAppIcon size={22} />
      <span className="wa-float__label">WhatsApp</span>
    </a>
  );
}
