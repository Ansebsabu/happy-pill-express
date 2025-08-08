import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-bouncy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:scale-105 shadow-soft hover:shadow-medicine",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105",
        secondary:
          "bg-gradient-secondary text-secondary-foreground hover:scale-105 shadow-soft hover:shadow-medicine",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        // Medical Delivery specific variants
        medicine: "bg-gradient-primary text-primary-foreground rounded-2xl hover:scale-110 shadow-medicine hover:shadow-bounce wiggle-hover font-bold text-base",
        prescription: "bg-gradient-card text-accent border-2 border-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 shadow-soft",
        delivery: "bg-accent text-accent-foreground rounded-2xl hover:scale-110 shadow-bounce hover:shake-excitement font-bold",
        gentle: "bg-gentle text-gentle-foreground hover:scale-105 shadow-soft hover:shadow-medicine rounded-full",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-16 rounded-2xl px-8 text-lg font-bold",
        icon: "h-12 w-12 rounded-xl",
        medicine: "h-14 px-8 py-4 rounded-2xl text-lg font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
