"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center transition-transform duration-300",
          isHovered ? "-translate-x-2" : "translate-x-0"
        )}
      >
        {children}
      </span>
      <ArrowRight
        className={cn(
          "absolute right-4 h-4 w-4 transition-all duration-300",
          isHovered
            ? "translate-x-0 opacity-100"
            : "translate-x-4 opacity-0"
        )}
      />
    </Button>
  );
}