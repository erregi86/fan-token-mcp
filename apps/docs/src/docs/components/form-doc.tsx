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
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
  Button,
} from "fan-tokens"

export function FormDoc() {
  const [basicSubmitted, setBasicSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleBasicSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBasicSubmitted(true)
    setTimeout(() => setBasicSubmitted(false), 2000)
  }

  const handleValidationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const errs: Record<string, string> = {}

    if (!data.get("username")) errs.username = "Username is required."
    if (!data.get("email")) errs.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email") as string))
      errs.email = "Please enter a valid email address."
    if (!data.get("password")) errs.password = "Password is required."
    else if ((data.get("password") as string).length < 8)
      errs.password = "Password must be at least 8 characters."

    setErrors(errs)
  }

  return (
    <ComponentPage
      name="Form"
      description="Form wrapper with field-level validation, labels, descriptions, and error messages."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for structured data collection that requires validation and error handling." },
          { icon: "✅", text: "Wrap related inputs in a Form to manage submission, validation state, and accessibility." },
          { icon: "💡", text: "Pair with FormField, FormLabel, FormControl, FormDescription, and FormMessage for a complete accessible form experience." },
          { icon: "⚠️", text: "Always provide clear error messages near the relevant field, not just at the top of the form." },
        ]}
      />

      <BreakpointInfo
        mobile="Single column layout. Stack all fields vertically with full-width submit button for easy touch interaction."
        desktop="Multi-column layout for related fields (e.g., first/last name side by side). Inline labels are possible for compact forms."
      />

      <DemoSection title="Basic Form with Fields">
        <Form onSubmit={handleBasicSubmit} className="max-w-sm space-y-4">
          <FormField name="name">
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input name="name" placeholder="Jane Doe" />
            </FormControl>
            <FormDescription>Your first and last name.</FormDescription>
            <FormMessage />
          </FormField>

          <FormField name="bio">
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Input name="bio" placeholder="Tell us about yourself" />
            </FormControl>
            <FormDescription>A short description for your profile.</FormDescription>
            <FormMessage />
          </FormField>

          <Button type="submit">
            {basicSubmitted ? "Submitted!" : "Submit"}
          </Button>
        </Form>
      </DemoSection>

      <DemoSection title="Form with Validation Errors">
        <Form onSubmit={handleValidationSubmit} className="max-w-sm space-y-4">
          <FormField name="username" error={errors.username}>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input name="username" placeholder="johndoe" />
            </FormControl>
            <FormDescription>Your public display name.</FormDescription>
            <FormMessage />
          </FormField>

          <FormField name="email" error={errors.email}>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input name="email" type="email" placeholder="john@example.com" />
            </FormControl>
            <FormDescription>We'll never share your email.</FormDescription>
            <FormMessage />
          </FormField>

          <FormField name="password" error={errors.password}>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input name="password" type="password" placeholder="At least 8 characters" />
            </FormControl>
            <FormDescription>Must be at least 8 characters long.</FormDescription>
            <FormMessage />
          </FormField>

          <Button type="submit">Submit</Button>
        </Form>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Validate on submit and on blur for immediate feedback without being intrusive.",
          "Show clear error messages near the field they relate to.",
          "Disable the submit button while the form is in an invalid or submitting state.",
        ]}
        donts={[
          "Validate on every keystroke  —  this is too aggressive and distracting for users.",
          "Clear the entire form on error  —  preserve user input so they can correct mistakes.",
          "Hide all errors at the top of the form only  —  always show errors inline near the relevant field.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--destructive", value: "var(--destructive)", description: "Color used for error messages and invalid field borders." },
          { name: "--muted-foreground", value: "var(--muted-foreground)", description: "Color for form descriptions and helper text." },
          { name: "--ring", value: "var(--ring)", description: "Focus ring color on form controls." },
          { name: "--input", value: "var(--input)", description: "Default border color for input fields." },
          { name: "--primary", value: "var(--primary)", description: "Color for the submit button and active labels." },
        ]}
      />

      <CodeBlock>{`import { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, Input, Button } from "fan-tokens"

const [errors, setErrors] = useState<Record<string, string>>({})

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const data = new FormData(e.target as HTMLFormElement)
  const errs: Record<string, string> = {}
  if (!data.get("email")) errs.email = "Email is required."
  setErrors(errs)
}

<Form onSubmit={handleSubmit}>
  <FormField name="email" error={errors.email}>
    <FormLabel>Email</FormLabel>
    <FormControl>
      <Input name="email" type="email" />
    </FormControl>
    <FormDescription>Your email address.</FormDescription>
    <FormMessage />
  </FormField>

  <Button type="submit">Submit</Button>
</Form>`}</CodeBlock>
    </ComponentPage>
  )
}
