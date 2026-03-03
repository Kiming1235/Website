import RegionalPageLayout from '@/components/RegionalPageLayout'

type Props = {
  regionName?: string
  regionDescription?: string
}

export default function GunwiPage({ regionName = '군위', regionDescription }: Props) {
  const galleryImages = Array.from({ length: 12 }, () => ({
    src: '/android-icon-192x192.png',
    alt: 'Gallery image'
  }))

  return (
    <RegionalPageLayout
      regionName={regionName}
      regionTitle={`${regionName} 서비스`}
      address="문의 페이지에서 위치/주소를 확인해주세요."
      phone="010-2332-4822"
      heroImage="/android-icon-192x192.png"
      galleryImages={galleryImages}
      description={regionDescription}
    />
  )
}

