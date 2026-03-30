import { Box, Flex, Link, Image } from '@chakra-ui/react'
import { IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

const BANNERS = [
  { src: '/images/landing/landing-banner-1.png', alt: 'Promoção de almoço', widthLg: '396.938px' },
  { src: '/images/landing/landing-banner-2.png', alt: 'Desconto em pratos', widthLg: '398.969px' },
  { src: '/images/landing/landing-banner-3.png', alt: 'Destaques em restaurantes', widthLg: '400px' },
]

export default function PromoBanners() {
  return (
    <Box
      w="100%"
      maxW="1366px"
      h={{ base: 'auto', lg: '200px' }}
      p={0}
      m={0}
      fontFamily={IFOOD_FONT_TEXT}
      fontSize="16px"
      lineHeight="18.4px"
      sx={{ textRendering: 'optimizeLegibility', WebkitTextSizeAdjust: '100%', WebkitFontSmoothing: 'antialiased' }}
      mb={0}
    >
      <Box w="100%" h={{ base: 'auto', lg: '200px' }} p={0}>
        <Box
          position="relative"
          overflowX="visible"
          overflowY="visible"
          w={{ base: '100%', lg: '1398px' }}
          h={{ base: 'auto', lg: '200px' }}
          mr={{ base: 0, lg: '-120px' }}
          zIndex={1}
        >
          <Flex
            position="relative"
            h={{ base: 'auto', lg: '200px' }}
            w={{ base: '100%', lg: '1398px' }}
            gap={0}
            direction={{ base: 'column', md: 'row' }}
          >
            {BANNERS.map((b, index) => (
              <Box
                key={b.src}
                flexShrink={0}
                w={{ base: '100%', md: 'calc((100% - 24px) / 2)', lg: b.widthLg }}
                h={{ base: '160px', sm: '180px', md: '200px' }}
                mr={{ base: 0, md: '15.7px' }}
                position="relative"
                sx={{ backfaceVisibility: 'hidden', transitionProperty: 'transform' }}
              >
                <Flex direction="column" w="100%" h="100%">
                  <Link href="/404" w="100%" h="100%" textDecoration="none">
                    <Box as="figure" m={0} w="100%" h="100%" borderRadius="4px" overflow="hidden" position="relative">
                      <Image src={b.src} alt={b.alt} w="100%" h="100%" objectFit="cover" />
                    </Box>
                  </Link>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
