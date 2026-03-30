import { Box, Flex, Text, Link, Image } from '@chakra-ui/react'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

const cards = [
  {
    title: 'Quer fazer entregas pelo iFood?',
    description: 'Faça agora o seu cadastro e comece o quanto antes.',
    image: '/images/landing/delivery-man.svg',
    figureHeight: '203.391px',
    imageHeight: '200px',
  },
  {
    title: 'A sua fome de crescer ta no iFood',
    description: 'Cadastre seu restaurante ou o seu mercado',
    image: '/images/landing/store.svg',
    figureHeight: '171.391px',
    imageHeight: '168px',
  },
] as const

export default function Banners() {
  return (
    <Flex
      w={{ base: '100%', lg: '1050px' }}
      maxW="1050px"
      h={{ base: 'auto', lg: '449px' }}
      mx={{ base: 'auto', lg: '114px' }}
      mt={0}
      mb={{ base: '40px', lg: '80px' }}
      align="center"
      justify="space-between"
      direction={{ base: 'column', lg: 'row' }}
      gap={{ base: '24px', lg: 0 }}
      fontFamily={IFOOD_FONT_TEXT}
      fontSize="16px"
      lineHeight="18.4px"
      sx={{ textRendering: 'optimizeLegibility', WebkitTextSizeAdjust: '100%', WebkitFontSmoothing: 'antialiased' }}
    >
      {cards.map((card) => (
        <Flex
          key={card.title}
          w={{ base: '100%', lg: '472.5px' }}
          h="449px"
          position="relative"
          align="center"
          justify="flex-end"
          pb="100px"
          backgroundImage="url('/images/landing/link-background.svg')"
          backgroundRepeat="no-repeat"
          backgroundPosition="0 68%"
          backgroundSize="85%"
        >
          <Box as="figure" m={0} position="absolute" left="10px" bottom="25px" w="236.25px" h={card.figureHeight}>
            <Image src={card.image} alt="" w="200.812px" h={card.imageHeight} display="inline" />
          </Box>

          <Box w="236.25px" h="349px" pt="35px" pb="35px">
            <Text
              m="12px 0 0"
              w="236.25px"
              h="132px"
              color="#1a1a1a"
              fontSize="36px"
              lineHeight="44px"
              fontWeight="500"
              fontFamily={IFOOD_FONT_MAIN}
            >
              {card.title}
            </Text>
            <Text
              m="25px 24px 16px 0"
              w="212.625px"
              h="40px"
              color="#717171"
              fontSize="16px"
              lineHeight="20px"
              fontFamily={IFOOD_FONT_TEXT}
            >
              {card.description}
            </Text>
            <Link
              href="/404"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w="138px"
              h="48px"
              px="20px"
              my="3px"
              bg="#ea1d2c"
              color="#fff"
              borderRadius="4px"
              fontFamily={IFOOD_FONT_TEXT}
              fontSize="18px"
              lineHeight="20.7px"
              fontWeight="500"
              textDecoration="none"
              transition="all 0.1s ease"
              _hover={{ bg: '#cc1825', textDecoration: 'none', color: '#fff' }}
              _focus={{ textDecoration: 'none', boxShadow: 'none' }}
              _active={{ textDecoration: 'none' }}
            >
              Saiba mais
            </Link>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}
