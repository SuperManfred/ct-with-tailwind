import { tv, type VariantProps } from "tailwind-variants";

export const button = tv(
  {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        disabled: "border text-gray-400 bg-gray-300/30 s cursor-not-allowed",
      },
      size: {
        default: "h-10 py-2 px-4",
        xs: ["h-8 px-2 rounded-md", "text-xs"],
        sm: ["h-9 px-3 rounded-md", "text-sm"],
        md: ["h-10 px-4 rounded-md", "text-sm"],
        lg: ["h-11 px-5 rounded-md", "text-base"],
        xl: ["h-12 px-6 rounded-md", "text-base"],
        "2xl": ["h-14 px-7 rounded-md", "text-lg"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    // compoundVariants: [
    //   {
    //     variant: "outline",
    //     size: "xs",
    //     css: {
    //       padding: "0.25rem 0.5rem",
    //       fontSize: "0.75rem",
    //     },
    //   },
    // ],
  },
  {
    responsiveVariants: true,
  }
);

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}

export const TVButton = (props: ButtonProps) => {
  return <button className={button(props)}>{props.children}</button>;
};
