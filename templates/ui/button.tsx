import { useRef, useState, type ReactNode } from "@lynx-js/react";
import type { NodesRef, ViewProps } from "@lynx-js/types";
import { cn } from "../../utils/cn.js";

interface ButtonProps extends ViewProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "error" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const variants = {
  variant: {
    primary: "bg-primary-500 text-white active:bg-primary-800 focus:ring-blue-500",
    secondary: "bg-neutral-500 text-white active:bg-neutral-800 focus:ring-neutral-500",
    success: "bg-success-500 text-white active:bg-success-800 focus:ring-success-500",
    error: "bg-error-500 text-white active:bg-error-800 focus:ring-error-500",
    outline:
      "border border-neutral-800 text-neutral-800 bg-transparent active:bg-neutral-200 focus:ring-neutral-500",
    ghost:
      "bg-transparent active:text-neutral-900 active:bg-neutral-200 focus:ring-neutral-500",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10 p-2 justify-center",
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "default",
  bindtap,
  ...rest
}) => {
  const buttonRef = useRef<NodesRef>(null);
  const [pressed, setPressed] = useState(false);

  const handlePress = (e: any) => {
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 500);

    bindtap?.(e);
  };

  const baseClasses =
    "relative overflow-hidden text-lg m-2 inline-flex justify-center items-center rounded-lg font-medium shadow-md transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2";

  const mergedClasses = cn(
    baseClasses,
    variants.variant[variant],
    variants.size[size],
    pressed && "scale-95 opacity-80",
    className
  );

  return (
    <view>
      <text
        ref={buttonRef}
        bindtap={handlePress}
        className={mergedClasses}
        {...rest}
      >
        {children}
      </text>
    </view>
  );
};

export default Button;
