import Image from "next/image";
import type { PageImage } from "@/content/types";

/** Foto arredondada sobre um bloco na cor da marca, como na referência. */
export function Media({
  image,
  priority = false,
  variant = "right",
  sizes = "(max-width: 960px) 100vw, 50vw",
}: {
  image: PageImage;
  priority?: boolean;
  variant?: "right" | "left";
  sizes?: string;
}) {
  return (
    <div className={`media media--${variant}`}>
      <span className="media__block" aria-hidden="true" />
      <div className="media__frame">
        <Image
          src={image.photo.src}
          width={image.photo.width}
          height={image.photo.height}
          alt={image.alt}
          priority={priority}
          sizes={sizes}
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
    </div>
  );
}
