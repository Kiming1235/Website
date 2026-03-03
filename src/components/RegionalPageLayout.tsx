import { useMemo, useState } from 'react'
import { X } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'

export type GalleryImage = { src: string; alt: string }

type ServiceItem = {
  title: string
  description: string
  image: string
}

type StrengthItem = {
  title: string
  description: string
  iconImage: string
}

export type RegionalPageLayoutProps = {
  regionName: string
  regionTitle: string
  address: string
  phone: string
  galleryImages: GalleryImage[]
  heroImage?: string
  description?: string
  services?: ServiceItem[]
  strengths?: StrengthItem[]
}

const DEFAULT_IMAGE = '/android-icon-192x192.png'

export default function RegionalPageLayout({
  regionName,
  regionTitle,
  address,
  phone,
  galleryImages,
  heroImage = DEFAULT_IMAGE,
  description,
  services,
  strengths
}: RegionalPageLayoutProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  const displayServices = useMemo<ServiceItem[]>(
    () =>
      services ?? [
        {
          title: '중량물 운송',
          description: '안전하고 신속한 중량물 운송 서비스',
          image: DEFAULT_IMAGE
        },
        {
          title: '자재 운반',
          description: '현장 자재 운반 솔루션',
          image: DEFAULT_IMAGE
        },
        {
          title: '장비·설비 이전',
          description: '산업 장비 및 설비 이전 서비스',
          image: DEFAULT_IMAGE
        },
        {
          title: '장비 연계 운송 지원',
          description: '맞춤형 운송 지원',
          image: DEFAULT_IMAGE
        }
      ],
    [services]
  )

  const displayStrengths = useMemo<StrengthItem[]>(
    () =>
      strengths ?? [
        {
          title: '안전 우선',
          description: '모든 작업에서 안전을 최우선으로 합니다',
          iconImage: DEFAULT_IMAGE
        },
        {
          title: '일정 준수',
          description: '약속된 일정을 철저히 준수합니다',
          iconImage: DEFAULT_IMAGE
        },
        {
          title: '현장 맞춤 대응',
          description: '현장 특성에 맞는 솔루션을 제공합니다',
          iconImage: DEFAULT_IMAGE
        }
      ],
    [strengths]
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative h-[42vh] min-h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${regionName} hero`}
            className="w-full h-full object-cover"
            width={1920}
            height={900}
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="font-heading font-bold text-white text-4xl md:text-6xl m-0">
              {regionTitle}
            </h1>
            {description ? (
              <p className="mt-6 text-white/90 max-w-3xl mx-auto">{description}</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8">현장 사진</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                className="block rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-colors"
                onClick={() => setSelected(img)}
              >
                <Image src={img.src} alt={img.alt} className="w-full h-36 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8">주요 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayServices.map((service) => (
              <Card key={service.title} className="bg-background/5 border-secondary/20">
                <CardContent className="p-6 flex gap-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 object-contain flex-none"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-xl font-heading font-semibold m-0">{service.title}</h3>
                    <p className="mt-2 text-secondary-foreground m-0">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8">강점</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayStrengths.map((strength) => (
              <Card key={strength.title} className="bg-dark-gray border-secondary/20">
                <CardContent className="p-6 text-center">
                  <Image
                    src={strength.iconImage}
                    alt={strength.title}
                    className="w-16 h-16 mx-auto object-contain"
                    width={64}
                    height={64}
                  />
                  <h3 className="mt-4 text-xl font-heading font-semibold">{strength.title}</h3>
                  <p className="mt-2 text-secondary-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">문의</h2>
          <p className="text-secondary-foreground m-0">{address}</p>
          <p className="mt-3 m-0">
            <a className="text-primary hover:underline" href={`tel:${phone}`}>
              {phone}
            </a>
          </p>
          <div className="mt-8">
            <a href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                문의 페이지로 이동
              </Button>
            </a>
          </div>
        </div>
      </section>

      {selected ? (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-12 right-0 text-white"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <Image src={selected.src} alt={selected.alt} className="w-full max-h-[80vh] object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

