"use client";

import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: LucideIcon;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "a";
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-base gap-3",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-5 w-5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:brightness-120 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30",
  secondary:
    "bg-transparent border border-primary text-primary hover:bg-primary/10 shadow-lg shadow-primary/10 hover:shadow-xl",
  ghost:
    "bg-neutral-800/50 hover:bg-neutral-700/50 text-gray-300 backdrop-blur-sm",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "left",
    className = "",
    disabled = false,
    loading = false,
    loadingIcon: LoadingIcon,
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all !cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const iconElement =
    loading && LoadingIcon ? (
      <LoadingIcon className={`${iconSizes[size]} animate-spin`} />
    ) : Icon ? (
      <Icon className={iconSizes[size]} />
    ) : null;

  const content = (
    <>
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </>
  );

  if (props.as === "a") {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.target === "_blank" ? "noopener noreferrer" : props.rel}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}
