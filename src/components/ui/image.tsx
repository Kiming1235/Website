import { forwardRef, type ImgHTMLAttributes, useEffect, useState } from 'react'
import './image.css'

const FALLBACK_IMAGE_URL = "https://www.daehancargocrane.com/android-icon-192x192.png";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, ...props }, ref) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  if (!src) {
    return <div data-empty-image ref={ref as any} {...props} />
  }

  return (
    <img
      data-error-image={imgSrc === FALLBACK_IMAGE_URL}
      ref={ref}
      src={imgSrc}
      onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
      {...props}
    />
  )
})
Image.displayName = 'Image'
