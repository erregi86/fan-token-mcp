import { useState } from "react"
import { cn } from "../../lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {}

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <span
      data-slot="avatar"
      className={cn(
        /* Tokens: --avatar-size, --avatar-radius */
        "relative flex size-[var(--avatar-size)] shrink-0 overflow-hidden rounded-[var(--avatar-radius)]",
        className
      )}
      {...props}
    />
  )
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function AvatarImage({ className, src, alt, ...props }: AvatarImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) return null

  return (
    <img
      data-slot="avatar-image"
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <span
      data-slot="avatar-fallback"
      className={cn(
        /* Tokens: --avatar-radius, --avatar-bg, --avatar-fg, --avatar-font-size, --avatar-font-weight */
        "flex size-full items-center justify-center rounded-[var(--avatar-radius)] bg-[var(--avatar-bg)] text-[length:var(--avatar-font-size)] font-[number:var(--avatar-font-weight)] text-[var(--avatar-fg)]",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps }
