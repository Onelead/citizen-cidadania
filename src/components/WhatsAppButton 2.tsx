import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/site";

/** Todo CTA do site abre o WhatsApp com a mensagem do serviço da página. */
export function WhatsAppButton({
  message,
  children,
  className = "btn",
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
