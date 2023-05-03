import { CheckboxAcceptTerms } from "./Checkbox";
import { TVButton } from "../../../../packages/ui/src/button";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>

      <div>
        <CheckboxAcceptTerms />
      </div>
      <div className="flex gap-4">
        <TVButton
          size={{
            xs: "xs",
            sm: "sm",
            md: "md",
            lg: "lg",
            xl: "xl",
            "2xl": "2xl",
          }}
        >
          {" "}
          Documentation{" "}
        </TVButton>
        <TVButton
          variant="outline"
          // make size prop use the responsiveVariants to change the size of the button to match tailwindcss breakpoints so that when the screen size changes, the button size changes too
          size={{
            xs: "xs",
            sm: "sm",
            md: "md",
            lg: "lg",
            xl: "xl",
            "2xl": "2xl",
          }}
        >
          GitHub
        </TVButton>
        <TVButton
          variant="disabled"
          // make size prop use the responsiveVariants to change the size of the button to match tailwindcss breakpoints so that when the screen size changes, the button size changes too
          size={{
            xs: "xs",
            sm: "sm",
            md: "md",
            lg: "lg",
            xl: "xl",
            "2xl": "2xl",
          }}
        >
          Disabled
        </TVButton>
      </div>
    </section>
  );
}
