import { Box, Flex, Text, Image, Icon, HStack } from '@chakra-ui/react'
import type { ComponentProps } from 'react'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT, IFOOD_FONT_TITLE } from '@/src/theme/ifoodFonts'

const CategoryChevronIcon = (
  props: ComponentProps<typeof Icon> & { iconStrokeWidth?: number },
) => {
  const { sx, w = '14px', h = '10px', iconStrokeWidth = 3, ...rest } = props
  return (
    <Icon
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      w={w}
      h={h}
      sx={{
        display: 'block',
        boxSizing: 'border-box',
        overflow: 'hidden',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        textRendering: 'optimizeLegibility' as const,
        WebkitTextSizeAdjust: '100%',
        WebkitFontSmoothing: 'antialiased',
        ...sx,
      }}
      {...rest}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinecap="round">
        <g transform="translate(-144, -1296)" stroke="currentColor" strokeWidth={iconStrokeWidth}>
          <g transform="translate(47, 1227)">
            <g transform="translate(97, 69)">
              <polyline
                transform="translate(23.5, 23.5) rotate(-90) translate(-23.5, -23.5)"
                points="6 16 23.5 31 41 16"
                fill="none"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  )
}

export default function Categories() {
  const smallCategories = [
    {
      title: 'Bebidas',
      src: '/images/landing/category-drinks.png',
      bg: '#f6d553',
      imgW: '140px',
      imgH: '96px',
      transform: 'translate(70px, 0)',
    },
    {
      title: 'Farmácia',
      src: '/images/landing/category-pharmacy.png',
      bg: '#f9879c',
      imgW: '100px',
      imgH: '86px',
      transform: 'translate(50px, 0)',
    },
    {
      title: 'Pet shop',
      src: '/images/landing/category-petshop.png',
      bg: '#8c60c5',
      imgW: '135px',
      imgH: '77px',
      transform: 'translate(67.5px, 0)',
    },
  ]

  const sectionSx = {
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
    overflow: 'visible' as const,
    textRendering: 'optimizeLegibility' as const,
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
  }

  const wrapperSx = {
    position: 'relative' as const,
    zIndex: 0,
  }

  const bgBandSx = {
    position: 'absolute' as const,
    top: -3.5,
    left: '50%',
    width: '100vw',
    marginLeft: '-50vw',
    height: { base: '116px', md: '108px' },
    backgroundColor: '#f7f7f7',
    zIndex: 0,
    pointerEvents: 'none' as const,
  }

  const innerSx = {
    position: 'relative' as const,
    zIndex: 1,
    overflow: 'visible' as const,
  }

  return (
    <Box
      as="section"
      w="100%"
      maxW="100%"
      bg="#fff"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h={{ base: 'auto', md: '374px' }}
      minH={{ base: 'auto', md: '374px' }}
      overflow="visible"
      fontFamily={IFOOD_FONT_TEXT}
      fontSize="16px"
      lineHeight="18.4px"
      sx={sectionSx}
    >
      <Box w="100%" maxW="100%" mx="auto" overflow="visible" sx={wrapperSx}>
        <Box sx={bgBandSx} />
        <Box w="100%" maxW="842px" mx="auto" px={{ base: '16px', md: 0 }} sx={innerSx}>
          <Flex
            w={{ base: '100%', md: '842px' }}
            maxW="842px"
            mx="auto"
            mb={{ base: '20px', md: 0 }}
            h={{ base: 'auto', md: '214px' }}
            minH={{ base: 'auto', md: '214px' }}
            align="stretch"
            justify="space-between"
            gap={{ base: '16px', md: '34px' }}
            flexDirection={{ base: 'column', md: 'row' }}
            overflow="visible"
          >
            <Box
              as="a"
              href="/404"
              display="block"
              borderRadius="20px"
              h={{ base: '200px', md: '214px' }}
              minH={{ base: '200px', md: '214px' }}
              w={{ base: '100%', md: '404px' }}
              maxW={{ md: '404px' }}
              flexShrink={0}
              position="relative"
              overflow="visible"
              transition="all 0.2s cubic-bezier(0, 0, 0.5, 1)"
              transformOrigin="top center"
              _hover={{ transform: 'scale(1.019)', zIndex: 1 }}
            >
              <Box
                position="absolute"
                inset={0}
                borderRadius="20px"
                overflow="hidden"
                bg="#ea1d2c"
              >
                <Flex
                  position="relative"
                  h="100%"
                  w="100%"
                  align="stretch"
                  justify="flex-start"
                >
                  <Flex
                    direction="column"
                    align="flex-start"
                    justify="space-around"
                    h={{ base: '100%', md: '214px' }}
                    minH={{ base: '180px', md: '214px' }}
                    w="100%"
                    maxW="364px"
                    pl={{ base: '16px', md: '20px' }}
                    pr="8px"
                    position="relative"
                    zIndex={2}
                    textAlign="start"
                  >
                    <Text
                      as="p"
                      fontFamily={IFOOD_FONT_TITLE}
                      fontSize={{ base: '28px', md: '36px' }}
                      fontWeight="500"
                      lineHeight={{ base: '32px', md: '41.4px' }}
                      color="#fff"
                      mb="10px"
                      textAlign="start"
                      w="auto"
                    >
                      Restaurante
                    </Text>
                    <Flex
                      as="span"
                      bg="#cc1825"
                      color="#fff"
                      borderRadius="12px"
                      h="36px"
                      w="146px"
                      minW="146px"
                      align="center"
                      justify="center"
                      gap="6px"
                      px="12px"
                      fontSize="16px"
                      fontWeight="500"
                      fontFamily={IFOOD_FONT_TEXT}
                    >
                      Ver opções{' '}
                      <CategoryChevronIcon color="#fff" iconStrokeWidth={10} ml="5px" flexShrink={0} aria-hidden />
                    </Flex>
                  </Flex>
                  <Box
                    as="figure"
                    position="absolute"
                    bottom="8px"
                    right="9px"
                    w="225.5px"
                    h="160.938px"
                    m={0}
                    overflow="visible"
                    pointerEvents="none"
                  >
                    <Image
                      src="/images/landing/category-restaurant.png"
                      alt=""
                      w="225.5px"
                      h="auto"
                      maxH="161px"
                      objectFit="contain"
                      display="inline"
                      transform="translateY(13px)"
                      transformOrigin="center center"
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              as="a"
              href="/404"
              display="block"
              borderRadius="20px"
              h={{ base: '200px', md: '214px' }}
              minH={{ base: '200px', md: '214px' }}
              w={{ base: '100%', md: '404px' }}
              maxW={{ md: '404px' }}
              flexShrink={0}
              position="relative"
              overflow="visible"
              transition="all 0.2s cubic-bezier(0, 0, 0.5, 1)"
              transformOrigin="top center"
              _hover={{ transform: 'scale(1.019)', zIndex: 1 }}
            >
              <Box
                position="absolute"
                inset={0}
                borderRadius="20px"
                overflow="hidden"
                bg="#b6d048"
              >
                <Flex
                  position="relative"
                  h="100%"
                  w="100%"
                  align="stretch"
                  justify="flex-start"
                >
                  <Flex
                    direction="column"
                    align="flex-start"
                    justify="space-around"
                    h={{ base: '100%', md: '214px' }}
                    minH={{ base: '180px', md: '214px' }}
                    w="100%"
                    maxW="364px"
                    pl={{ base: '16px', md: '20px' }}
                    pr="8px"
                    position="relative"
                    zIndex={2}
                    textAlign="start"
                  >
                    <Text
                      as="p"
                      fontFamily={IFOOD_FONT_TITLE}
                      fontSize={{ base: '28px', md: '36px' }}
                      fontWeight="500"
                      lineHeight={{ base: '32px', md: '41.4px' }}
                      color="#fff"
                      mb="10px"
                      textAlign="start"
                      w="auto"
                    >
                      Mercado
                    </Text>
                    <Flex
                      as="span"
                      bg="#9eb53e"
                      color="#fff"
                      borderRadius="12px"
                      h="36px"
                      w="146px"
                      minW="146px"
                      align="center"
                      justify="center"
                      gap="6px"
                      px="12px"
                      fontSize="16px"
                      fontWeight="500"
                      fontFamily={IFOOD_FONT_TEXT}
                    >
                      Buscar lojas{' '}
                      <CategoryChevronIcon color="#fff" iconStrokeWidth={10} ml="5px" flexShrink={0} aria-hidden />
                    </Flex>
                  </Flex>
                  <Box
                    as="figure"
                    position="absolute"
                    bottom="8px"
                    right="9px"
                    w="225.5px"
                    h="173.234px"
                    m={0}
                    overflow="visible"
                    pointerEvents="none"
                  >
                    <Image
                      src="/images/landing/category-market.png"
                      alt=""
                      w="225.5px"
                      h="auto"
                      maxH="174px"
                      objectFit="contain"
                      display="inline"
                      transform="translateY(13px)"
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>

          <Flex
            w={{ base: '100%', md: '842px' }}
            maxW="842px"
            mx="auto"
            h={{ base: 'auto', md: '160px' }}
            minH={{ base: '140px', md: '160px' }}
            justify="space-between"
            align="flex-end"
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            gap={{ base: '24px', md: 0 }}
            rowGap={{ base: '24px', md: 0 }}
          >
            {smallCategories.map((item, index) => (
              <Flex
                as="a"
                href="/404"
                key={index}
                direction="column"
                align="center"
                justify="flex-end"
                w={{ base: 'calc(50% - 8px)', md: '188px' }}
                minW={{ md: '188px' }}
                maxW={{ base: 'none', md: '188px' }}
                h="160px"
                flex="1 1 auto"
                cursor="pointer"
                textDecoration="none"
                sx={{
                  '&:hover > figure': {
                    transform: 'scale(1.025)',
                  },
                  '&:hover > p': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  as="figure"
                  position="relative"
                  w="188px"
                  maxW="100%"
                  h="47px"
                  bg={item.bg}
                  borderRadius="6px"
                  m={0}
                  p={0}
                  overflow="visible"
                  alignSelf="center"
                  transformOrigin="center bottom"
                  transition="transform 0.2s cubic-bezier(0, 0, 0.5, 1)"
                >
                  <Image
                    src={item.src}
                    alt=""
                    position="absolute"
                    bottom="0"
                    right="94px"
                    w={item.imgW}
                    h={item.imgH}
                    maxW="none"
                    objectFit="contain"
                    transform={item.transform}
                  />
                </Box>
                <HStack
                  as="p"
                  spacing={0}
                  justify="center"
                  align="center"
                  mt="12px"
                  mb={0}
                  mx={0}
                  color="#000000"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="18.4px"
                  fontFamily={IFOOD_FONT_MAIN}
                  textAlign="center"
                  transformOrigin="center center"
                  transition="transform 0.2s cubic-bezier(0, 0, 0.5, 1)"
                  sx={{
                    boxSizing: 'border-box',
                    textRendering: 'optimizeLegibility' as const,
                    WebkitTextSizeAdjust: '100%',
                    WebkitFontSmoothing: 'antialiased',
                    unicodeBidi: 'isolate' as const,
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                  }}
                >
                  <Text
                    as="span"
                    display="block"
                    position="relative"
                    textAlign="center"
                    color="#000000"
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="18.4px"
                    fontFamily={IFOOD_FONT_MAIN}
                    mr="-3px"
                    sx={{
                      boxSizing: 'border-box',
                      textRendering: 'optimizeLegibility' as const,
                      WebkitTextSizeAdjust: '100%',
                      WebkitFontSmoothing: 'antialiased',
                      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    }}
                  >
                    {item.title}
                  </Text>
                  <Box
                    as="span"
                    display="block"
                    position="relative"
                    w="13px"
                    flexShrink={0}
                    ml="5px"
                    lineHeight="18.4px"
                    sx={{
                      boxSizing: 'border-box',
                      color: '#ea1d2c',
                      textRendering: 'optimizeLegibility' as const,
                      WebkitTextSizeAdjust: '100%',
                      WebkitFontSmoothing: 'antialiased',
                      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    }}
                  >
                    <CategoryChevronIcon
                      color="#ea1d2c"
                      w="13px"
                      h="10px"
                      iconStrokeWidth={12}
                      flexShrink={0}
                      aria-hidden
                    />
                  </Box>
                </HStack>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
