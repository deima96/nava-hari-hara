import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "outline" | "text";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#5F845E] text-on-primary hover:bg-[#9e3333] active:scale-95",
  outline:
    "border border-[#5F845E] text-[#5F845E] hover:bg-[#5F845E] hover:text-on-primary",
  text: "text-[#5F845E] hover:tracking-widest",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `
    font-label text-label-caps tracking-widest
    transition-all duration-200 cursor-pointer
    ${variant !== "text" ? "px-6 py-3 lg:px-8 lg:py-4" : ""}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  if ("href" in rest && rest.href) {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
