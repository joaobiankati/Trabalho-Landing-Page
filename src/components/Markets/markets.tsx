import { Box, Heading } from '@chakra-ui/react'
import { merchantCarouselHeadingSx, merchantCarouselSectionSx } from '@/src/theme/merchantCarouselSx'
import { MerchantCarousel, MerchantTile } from '@/src/components/MerchantCarousel/merchantCarousel'

const markets = [
  { name: 'Dia Supermercado', logo: '/images/landing/dia.png' },
  { name: 'Big', logo: '/images/landing/big.png' },
  { name: 'Eataly', logo: '/images/landing/eataly.png' },
]

export default function Markets() {
  return (
    <Box as="section" aria-labelledby="mercados-heading" sx={merchantCarouselSectionSx}>
      <Box display="none" justifyContent="center" overflowX="hidden" overflowY="hidden" />
      <Heading as="h2" id="mercados-heading" sx={merchantCarouselHeadingSx}>
        Os melhores mercados
      </Heading>
      <MerchantCarousel>
        {markets.map((m) => (
          <MerchantTile key={m.name} name={m.name} logo={m.logo} />
        ))}
      </MerchantCarousel>
    </Box>
  )
}
