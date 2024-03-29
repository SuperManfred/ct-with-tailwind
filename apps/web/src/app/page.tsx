import { CheckboxAcceptTerms } from "./Checkbox";
import { Button } from "../../../../packages/ui/src/button";
import {
  ButtonGroup,
  ButtonGroupSizes,
  ButtonGroupStates,
  ButtonGroupVariants,
  ButtonIcon,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from "./components/buttons";

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
      <div
        // leave some whitespace between the elements here
        className="flex flex-col items-start gap-4"
      >
        {/* render ever export of buttons */}
        <ButtonVariants />
        <ButtonSizes />
        <ButtonStates />
        <ButtonIcon />
      </div>
    </section>
  );
}
