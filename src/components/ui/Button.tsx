import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { buttonVariants, type ButtonSize, type ButtonVariant } from "./button-variants";

type VariantProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonVariants(variant, size, className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonVariants(variant, size, className)} {...props} />;
}
