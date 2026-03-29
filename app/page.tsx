import Header from '@/src/components/Header/header'
import Hero from '@/src/components/Hero/hero'
import { IFOOD_FONT_MAIN } from '@/src/theme/ifoodFonts'
import { Box } from '@chakra-ui/react'

const mainLayoutSx = {
  minHeight: '100vh',
  background: '#fff',
  paddingBottom: { base: '50px', lg: 0 },
  overflowX: { lg: 'unset' },
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
        
      </Box>
    </Box>
  )
}
