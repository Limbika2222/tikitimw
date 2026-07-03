import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function GradientButton({
  className,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        `
        rounded-2xl
        bg-linear-to-r
        from-violet-600
        to-purple-500
        px-6
        py-3
        font-medium
        text-white
        shadow-lg
        shadow-violet-900/40
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:from-violet-500
        hover:to-purple-400
        active:scale-100
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}