import { useState } from "react"
import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "fan-tokens"

export function InputOTPDoc() {
  const [fourDigit, setFourDigit] = useState("")
  const [sixDigit, setSixDigit] = useState("")

  return (
    <ComponentPage
      name="Input OTP"
      description="One-time password input with auto-focus, paste support, and keyboard navigation."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "\u2705", text: "Use for one-time password verification codes sent via SMS or email." },
          { icon: "\u2705", text: "Use for PIN inputs where a fixed number of digits is expected." },
          { icon: "\u2705", text: "Use for multi-factor authentication flows requiring short numeric codes." },
          { icon: "\ud83d\udca1", text: "Always indicate the expected code length to the user before the input." },
          { icon: "\u26a0\ufe0f", text: "Not suitable for free-form text input \u2014 use a standard Input component instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Larger input cells for touch targets. Auto-focuses the next cell on input for a seamless mobile experience."
        desktop="Standard-size cells optimized for keyboard-focused entry. Supports full keyboard navigation between cells."
      />

      <DemoSection title="4-Digit OTP">
        <div className="flex flex-col items-center gap-3">
          <InputOTP maxLength={4} value={fourDigit} onChange={setFourDigit}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Value: <span className="font-mono">{fourDigit || "\u2014"}</span>
          </p>
        </div>
      </DemoSection>

      <DemoSection title="6-Digit OTP">
        <div className="flex flex-col items-center gap-3">
          <InputOTP maxLength={6} value={sixDigit} onChange={setSixDigit}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Value: <span className="font-mono">{sixDigit || "\u2014"}</span>
          </p>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Auto-focus the next cell when a digit is entered.",
          "Support paste so users can paste the full code at once.",
          "Auto-submit the form when all digits are filled.",
        ]}
        donts={[
          "Use for regular text input \u2014 this component is strictly for fixed-length numeric codes.",
          "Make cells too small on mobile \u2014 ensure adequate touch target size (at least 44x44px).",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--ring", value: "hsl(var(--ring))", description: "Focus ring color applied to the active OTP slot." },
          { name: "--input", value: "hsl(var(--input))", description: "Border color for each OTP cell." },
          { name: "--background", value: "hsl(var(--background))", description: "Background of each input slot." },
          { name: "--foreground", value: "hsl(var(--foreground))", description: "Text color for entered digits." },
        ]}
      />

      <CodeBlock>{`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "fan-tokens"

const [otp, setOtp] = useState("")

{/* 4-digit OTP */}
<InputOTP maxLength={4} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>

{/* 6-digit OTP with separator */}
<InputOTP maxLength={6} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}</CodeBlock>
    </ComponentPage>
  )
}
