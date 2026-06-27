import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "w-full h-9 rounded-2xl bg-white text-[16px] text-outline-variant placeholder:text-outline-variant transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.18)]",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, leftIcon, rightIcon, type = "text", ...props },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7A71]">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          type={type}
          data-slot="input"
          className={cn(
            inputVariants({ variant }),
            leftIcon ? "pl-12" : "pl-4",
            rightIcon ? "pr-12" : "pr-4",
            className,
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A7A71] cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
