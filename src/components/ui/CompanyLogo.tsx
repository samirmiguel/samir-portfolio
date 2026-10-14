import { useState } from "react";
import { cn } from "../../lib/cn";

type CompanyLogoProps = {
  name: string;
  src?: string;
  /** Classes de l'image (hauteur notamment) */
  className?: string;
  /** Classes du texte affiché si le logo est absent */
  fallbackClassName?: string;
  /** Dimensions intrinsèques indicatives (évite les décalages de mise en page) */
  width?: number;
  height?: number;
};

/**
 * Logo d'entreprise avec repli : si le fichier est absent ou invalide,
 * le nom de l'entreprise est affiché en texte (jamais d'image cassée).
 */
export function CompanyLogo({
  name,
  src,
  className,
  fallbackClassName,
  width = 160,
  height = 48,
}: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span
        className={cn(
          "text-center text-sm leading-tight font-semibold text-zinc-600 dark:text-zinc-300",
          fallbackClassName,
        )}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`Logo ${name}`}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("w-auto object-contain", className)}
    />
  );
}
