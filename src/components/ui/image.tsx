import { forwardRef, type ImgHTMLAttributes, useEffect, useState } from 'react'

const DEFAULT_FALLBACK_SRC = '/error.svg'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fallbackSrc = DEFAULT_FALLBACK_SRC, onError, ...imgProps }, ref) => {
    const [currentSrc, setCurrentSrc] = useState<string | undefined>(
      typeof src === 'string' ? src : undefined
    )

    useEffect(() => {
      setCurrentSrc(typeof src === 'string' ? src : undefined)
    }, [src])

    const resolvedSrc = currentSrc || fallbackSrc

    return (
      <img
        ref={ref}
        {...imgProps}
        src={resolvedSrc}
        onError={(event) => {
          if (resolvedSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc)
          }
          onError?.(event)
        }}
      />
    )
  }
)
Image.displayName = 'Image'

