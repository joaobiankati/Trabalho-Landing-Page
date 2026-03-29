import { Box, Heading } from '@chakra-ui/react'
import { merchantCarouselHeadingSx, merchantCarouselSectionSx } from '@/src/theme/merchantCarouselSx'
import { MerchantCarousel, MerchantTile } from '@/src/components/MerchantCarousel/merchantCarousel'

const merchants = [
  { name: "Mcdonald's", category: 'Lanches', logo: '/images/landing/mcdonalds.png' },
  { name: 'Coco Bambu', category: 'Frutos Do Mar', logo: '/images/landing/coco-bambu.png' },
  { name: 'China in Box', category: 'Chinesa', logo: '/images/landing/china-in-box.png' },
  { name: "Habib's", category: 'Lanches', logo: '/images/landing/habibs.png' },
  { name: 'Outback Steakhouse', category: 'Lanches', logo: '/images/landing/outback.png' },
]

export default function Restaurants() {
  return (
    <Box as="section" aria-labelledby="restaurantes-heading" sx={merchantCarouselSectionSx}>
      <Heading as="h2" id="restaurantes-heading" sx={merchantCarouselHeadingSx}>
        Os melhores restaurantes
      </Heading>
      <MerchantCarousel>
        {merchants.map((m) => (
          <MerchantTile key={m.name} name={m.name} category={m.category} logo={m.logo} showBadge />
        ))}
      </MerchantCarousel>
    </Box>
  )
}
