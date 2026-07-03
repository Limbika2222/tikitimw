import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        `
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-white/5
        bg-white/3
        transition-all
        duration-300
        hover:bg-white/5
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}