import { cn } from "../../lib/utils"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        /* Tokens: --textarea-min-height, --textarea-radius, --textarea-padding-x/y, --textarea-font-size */
        "flex w-full min-h-[var(--textarea-min-height)]",
        "rounded-[var(--textarea-radius)] border border-[var(--input-border-color)] bg-[var(--input-bg)]",
        "px-[var(--textarea-padding-x)] py-[var(--textarea-padding-y)]",
        "text-[length:var(--textarea-font-size)]",
        "placeholder:text-[var(--input-placeholder-color)]",
        "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--input-focus-ring-color)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
export type { TextareaProps }
