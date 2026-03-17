import { useRef, useState, useCallback } from "react"
import { cn } from "../../lib/utils"

/* ─── InputOTP ─── */
interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  maxLength: number
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  pattern?: string
}

function InputOTP({ maxLength, value: controlled, onChange, disabled, pattern = "^[0-9]*$", className, ...props }: InputOTPProps) {
  const [uncontrolled, setUncontrolled] = useState("")
  const value = controlled ?? uncontrolled
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const setValue = useCallback((v: string) => {
    if (controlled === undefined) setUncontrolled(v)
    onChange?.(v)
  }, [controlled, onChange])

  const handleInput = (index: number, char: string) => {
    if (pattern && !new RegExp(pattern).test(char)) return
    const arr = value.split("")
    arr[index] = char
    const newVal = arr.join("").slice(0, maxLength)
    setValue(newVal)
    if (index < maxLength - 1) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      const arr = value.split("")
      if (arr[index]) {
        arr[index] = ""
        setValue(arr.join(""))
      } else if (index > 0) {
        arr[index - 1] = ""
        setValue(arr.join(""))
        inputRefs.current[index - 1]?.focus()
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === "ArrowRight" && index < maxLength - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData("text").slice(0, maxLength)
    if (pattern && !new RegExp(pattern).test(pasted)) return
    setValue(pasted)
    const focusIdx = Math.min(pasted.length, maxLength - 1)
    inputRefs.current[focusIdx]?.focus()
  }

  return (
    <div
      data-slot="input-otp"
      className={cn("flex items-center gap-2", disabled && "opacity-50", className)}
      onPaste={handlePaste}
      {...props}
    >
      {Array.from({ length: maxLength }).map((_, i) => (
        <input
          key={i}
          ref={(el) => { inputRefs.current[i] = el }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          disabled={disabled}
          value={value[i] ?? ""}
          className={cn(
            "flex size-10 items-center justify-center rounded-md border border-input bg-background text-center text-sm shadow-sm transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "disabled:cursor-not-allowed"
          )}
          onChange={(e) => {
            const char = e.target.value.slice(-1)
            if (char) handleInput(i, char)
          }}
          onKeyDown={(e) => handleKeyDown(i, e)}
        />
      ))}
    </div>
  )
}

/* ─── InputOTPGroup ─── */
function InputOTPGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="input-otp-group" className={cn("flex items-center", className)} {...props} />
}

/* ─── InputOTPSlot (display variant) ─── */
interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  char?: string
  isActive?: boolean
}

function InputOTPSlot({ char, isActive, className, ...props }: InputOTPSlotProps) {
  return (
    <div
      data-slot="input-otp-slot"
      className={cn(
        "relative flex size-10 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring",
        className
      )}
      {...props}
    >
      {char ?? <div className="absolute inset-0 flex items-center justify-center"><div className="h-4 w-px animate-pulse bg-foreground" /></div>}
    </div>
  )
}

/* ─── InputOTPSeparator ─── */
function InputOTPSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="input-otp-separator" role="separator" className={cn("flex items-center px-1 text-muted-foreground", className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
