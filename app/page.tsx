import Header from '@/src/components/Header/header'
import Hero from '@/src/components/Hero/hero'
import Categories from '@/src/components/Categories/categories'
import Restaurants from '@/src/components/Restaurants/restaurants'
import PromoBanners from '@/src/components/PromoBanners/promoBanners'
import Markets from '@/src/components/Markets/markets'
import Banners from '@/src/components/Banners/banners'
import FoodLover from '@/src/components/FoodLover/foodLover'
import BenefitsSection from '@/src/components/BenefitsSection/benefitsSection'
import BenefitsFooterStrip from '@/src/components/BenefitsFooterStrip/benefitsFooterStrip'
import Footer from '@/src/components/Footer/footer'
import { IFOOD_FONT_MAIN } from '@/src/theme/ifoodFonts'
import { Box } from '@chakra-ui/react'

const mainLayoutSx = {
  minHeight: '100vh',
  background: '#fff',
  paddingBottom: { base: '50px', lg: 0 },
  overflowX: { lg: 'unset' },
}

const mainContainerSx = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 0,
  width: '100%',
  maxWidth: '1278px',
  margin: '0 auto',
  paddingLeft: { base: '16px', md: '23px', lg: 0 },
  paddingRight: { base: '16px', md: '23px', lg: 0 },
  background: '#fff',
}

export default function Home() {
  return (
    <Box sx={mainLayoutSx}>
      <Header />

      <Box
        as="main"
        display="block"
        boxSizing="border-box"
        w="100%"
        maxW="100%"
        p={0}
        pt={0}
        pb={0}
        px={0}
        m={0}
        bg="#fff"
        overflowX="visible"
        fontFamily={IFOOD_FONT_MAIN}
        fontSize="16px"
        lineHeight="18.4px"
        sx={{
          backgroundImage: 'none',
          unicodeBidi: 'isolate',
          textRendering: 'optimizeLegibility',
          WebkitTextSizeAdjust: '100%',
          WebkitFontSmoothing: 'antialiased',
          transition: 'all 0.5s ease',
        }}
      >
        <Hero />
        <Categories />

         <Box sx={mainContainerSx}>
          <Restaurants />
          <PromoBanners />
          <Markets />
          <Banners />
        </Box>

        <Box bg="#fff" w="100%">
          <FoodLover />
          <BenefitsSection />
        </Box>

        <BenefitsFooterStrip />
      </Box>
      <Footer />
    </Box>
  )
}
