import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  " h-9 rounded-md bg-surface text-[16px] text-on-surface-variant placeholder:text-outline-variant transition-colors disabled:pointer-events-none disabled:opacity-50 shadow-[inset_2px_2px_6px_#E8DED2]",
  {
    variants: {
      variant: {
        default: "w-full",
        small: "w-[200px]",
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
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, leftIcon,placeholder, rightIcon, type = "text", ...props },
    ref,
  ) => {
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-1 top-1/2 ml-1 -translate-y-1/2 text-[#8A7A71]">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          type={type}
          data-slot="input"
          placeholder={placeholder}
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
