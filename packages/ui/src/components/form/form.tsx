import { createContext, useContext, useId, cloneElement, isValidElement } from "react"
import { cn } from "../../lib/utils"
import { Label } from "../label"

/* ─── FormField context ─── */
interface FormFieldContextValue {
  id: string
  name: string
  error?: string
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null)

function useFormField() {
  const ctx = useContext(FormFieldContext)
  if (!ctx) throw new Error("Form field components must be within <FormField>")
  return ctx
}

/* ─── Form (just a native form wrapper) ─── */
function Form({ className, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form data-slot="form" className={className} {...props} />
}

/* ─── FormField ─── */
interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  error?: string
}

function FormField({ name, error, children, className, ...props }: FormFieldProps) {
  const id = useId()
  return (
    <FormFieldContext.Provider value={{ id, name, error }}>
      <div data-slot="form-field" className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </FormFieldContext.Provider>
  )
}

/* ─── FormLabel ─── */
function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { id, error } = useFormField()
  return (
    <Label
      data-slot="form-label"
      htmlFor={id}
      className={cn(error && "text-destructive", className)}
      {...props}
    />
  )
}

/* ─── FormControl ─── */
function FormControl({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { id, error } = useFormField()
  return (
    <div data-slot="form-control" className={className} {...props}>
      {typeof children === "object" && children !== null
        ? (() => {
            if (isValidElement(children)) {
              return cloneElement(children as React.ReactElement<Record<string, unknown>>, {
                id,
                "aria-invalid": !!error,
                "aria-describedby": error ? `${id}-error` : undefined,
              })
            }
            return children
          })()
        : children}
    </div>
  )
}

/* ─── FormDescription ─── */
function FormDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p data-slot="form-description" className={cn("text-[0.8rem] text-muted-foreground", className)} {...props} />
  )
}

/* ─── FormMessage ─── */
function FormMessage({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const { id, error } = useFormField()
  const message = error || children

  if (!message) return null

  return (
    <p
      data-slot="form-message"
      id={`${id}-error`}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {message}
    </p>
  )
}

export { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, useFormField }
