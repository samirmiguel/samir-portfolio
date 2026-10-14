import * as m from "motion/react-m";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Délai en secondes, pour échelonner des éléments voisins */
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/**
 * Apparition discrète au scroll (fondu + léger déplacement), une seule fois par élément.
 * Le déplacement est désactivé si l'utilisateur préfère réduire les animations (MotionConfig).
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Component = as === "li" ? m.li : m.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
