import { forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "px-2.5 py-1.5 font-sulphur font-extrabold text-base border-[1.5px] border-solid border-navy rounded-[50px] text-navy bg-cream2 cursor-pointer shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
