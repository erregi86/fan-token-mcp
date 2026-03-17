import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Avatar, AvatarImage, AvatarFallback } from "fan-tokens"

export function AvatarDoc() {
  return (
    <ComponentPage
      name="Avatar"
      description="An image element with a fallback for representing the user. Supports photos, initials, and graceful fallbacks."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for user profile photos in headers, comments, and lists." },
          { icon: "✅", text: "Use initials as a fallback when no image is available." },
          { icon: "✅", text: "Provide a meaningful fallback for every avatar." },
          { icon: "💡", text: "Group avatars to show collaborators or team members." },
          { icon: "⚠️", text: "Always include alt text on AvatarImage for accessibility." },
        ]}
      />

      <BreakpointInfo
        mobile="Use smaller sizes (32px) to conserve space. Limit avatar groups to 3-4 visible with an overflow indicator."
        desktop="Use larger sizes (40px) for better visibility. Avatar groups can show more members and pair with names."
      />

      <DemoSection title="With Image">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>

      <DemoSection title="Fallback Initials">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>

      <DemoSection title="Different Sizes">
        <div className="flex gap-4 items-end">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="Medium" />
            <AvatarFallback className="text-sm">MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="Extra large" />
            <AvatarFallback className="text-lg">XL</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Always provide a fallback with initials or a generic icon.",
          "Use appropriate sizes for the context (smaller in lists, larger in profiles).",
          "Include alt text on AvatarImage for screen readers.",
          "Use consistent sizing within the same UI region.",
        ]}
        donts={[
          "Use for decorative images or icons -- use <img> or Icon components instead.",
          "Skip alt text on avatar images.",
          "Use overly large avatars in dense layouts.",
          "Rely solely on the image loading -- always include AvatarFallback.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--avatar-size", value: "40px", description: "Default width and height of the avatar." },
          { name: "--avatar-radius", value: "9999px", description: "Border radius (fully rounded by default)." },
          { name: "--avatar-bg", value: "var(--muted)", description: "Background color for the fallback state." },
        ]}
      />

      <CodeBlock>{`import { Avatar, AvatarImage, AvatarFallback } from "fan-tokens"

{/* With image and fallback */}
<Avatar>
  <AvatarImage src="/user-photo.jpg" alt="Jane Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

{/* Custom size */}
<Avatar className="h-14 w-14">
  <AvatarImage src="/user-photo.jpg" alt="Jane Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

{/* Fallback only */}
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`}</CodeBlock>
    </ComponentPage>
  )
}
