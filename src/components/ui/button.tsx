import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none disabled:opacity-50";
    const variants = {
      default: "bg-foreground text-background hover:opacity-90",
      outline: "border border-border hover:bg-muted",
      ghost: "hover:bg-muted",
    };
    const sizes = {
      default: "h-10 px-5 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-7 text-base",
    };
    const classes = cn(base, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
