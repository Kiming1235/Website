import RegionalPageLayout from '@/components/RegionalPageLayout'

export default function HomePage() {
  const galleryImages = Array.from({ length: 12 }, () => ({
    src: '/android-icon-192x192.png',
    alt: 'Gallery image'
  }))

  return (
    <RegionalPageLayout
      regionName="대한카고크레인"
      regionTitle="대한카고크레인"
      address="문의 페이지에서 위치/주소를 확인해주세요."
      phone="010-2332-4822"
      heroImage="/android-icon-192x192.png"
      galleryImages={galleryImages}
      description="중량물 운송, 자재 운반, 장비·설비 이전 등 현장 맞춤형 운송 서비스를 제공합니다."
    />
  )
}

