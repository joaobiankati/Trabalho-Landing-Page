import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

const LOGO_SRC = '/images/landing/logo-benefits-card.svg'
const CARD_SRC = '/images/landing/benefits-card.svg'

const benefitTypographySx = {
  fontFamily: IFOOD_FONT_TEXT,
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  unicodeBidi: 'isolate',
}

const desktop = '@media (min-width: 1278px)'

const promoCopyStrongSx = {
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '20px',
  color: 'rgb(253, 248, 241)',
  display: 'inline',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
}

export default function BenefitsSection() {
  return (
    <Box bg="#fff" w="100%" pb="0"
    >
      <Box maxW="1278px" w="100%" mx="auto" px={{ base: '16px', md: '32px' }}
        sx={{ [desktop]: {
            px: 0,
            maxWidth: '1278px',
          },
        }}
      >
        <Flex justify="center" w="100%"
          sx={{
            ...benefitTypographySx, [desktop]: {
              height: '106px',
              minHeight: '106px',
            },
          }}
        >
          <Box as="a" href="/404" display="block" w="100%" maxW="1278px" mx="auto" textDecoration="none" cursor="pointer"
            sx={{
              ...benefitTypographySx,
              WebkitTapHighlightColor: 'rgba(0,0,0,0)',
              color: 'inherit',
              '&:link, &:visited': { color: 'inherit', textDecoration: 'none' },
              [desktop]: {
                height: '106px',
                minHeight: '106px',
              },
            }}
          >
            <Flex as="section" position="relative" w="100%" minH={{ base: 'auto' }} bg="#69022d" direction="column" align="stretch" cursor="pointer" sx={{
                ...benefitTypographySx,
                WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                [desktop]: {
                  flexDirection: 'row',
                  height: '106px',
                  minHeight: '106px',
                  maxWidth: '1278px',
                },
              }}
            >
              <Flex align="center" bg="#fdf8f1" borderTopRadius="12px" w="100%" flexShrink={0} minH={{ base: '72px' }} zIndex={2} position="relative"
                sx={{
                  ...benefitTypographySx,
                  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                  [desktop]: {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: '100px',
                    width: '639px',
                    minWidth: '639px',
                    height: '106px',
                    minHeight: '106px',
                  },
                }}
              >
                <Image src={LOGO_SRC} alt="iFood Benefícios" width={220} height={57} w="220px" maxW={{ base: 'min(220px, 70vw)' }} h="57.3281px"
                  ml={{ base: '24px' }}
                  mr={{ base: '24px' }}
                  objectFit="contain"
                  objectPosition="left center"
                  flexShrink={0}
                  overflow="hidden"
                  sx={{
                    ...benefitTypographySx,
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    [desktop]: {
                      marginLeft: '58px',
                      marginRight: '60px',
                      maxWidth: '220px',
                    },
                  }}
                />
              </Flex>

              <Image src={CARD_SRC} alt="" aria-hidden width={190} height={89}  position="absolute" display="none" bottom="0" w="190px" h="88.5px" zIndex={3} pointerEvents="none" overflow="hidden"
                sx={{
                  ...benefitTypographySx,
                  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                  [desktop]: {
                    display: 'block',
                    left: '485.625px',
                  },
                }}
              />

              <Flex flex="1" align="center" justify="center" minW={0} zIndex={1} borderBottomRadius="12px"
                py={{ base: 5 }}
                px={{ base: 4 }}
                sx={{
                  ...benefitTypographySx,
                  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                  [desktop]: {
                    height: '106px',
                    minHeight: '106px',
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <Flex align="center" w="100%"
                  sx={{
                    ...benefitTypographySx,
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    [desktop]: {
                      width: '533px',
                      height: '106px',
                      minHeight: '106px',
                    },
                  }}
                >
                  <Text
                    as="p"
                    fontWeight={400}
                    my="16px"
                    mx={0}
                    w="100%"
                    maxW="280px"
                    sx={{
                      boxSizing: 'border-box',
                      display: 'block',
                      fontFamily: IFOOD_FONT_MAIN,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: 'rgb(253, 248, 241)',
                      textRendering: 'optimizeLegibility' as const,
                      WebkitTextSizeAdjust: '100%',
                      WebkitFontSmoothing: 'antialiased',
                      unicodeBidi: 'isolate' as const,
                      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                      [desktop]: {
                        height: '40px',
                        minHeight: '40px',
                        marginTop: '16px',
                        marginBottom: '16px',
                        marginInlineStart: '62px',
                        marginLeft: '132.5px',
                        width: '224px',
                        maxWidth: '224px',
                        textAlign: 'left',
                      },
                      '& strong': promoCopyStrongSx,
                    }}
                  >
                    {'O '}
                    <strong>vale-alimentação</strong>
                    {' do iFood '}
                    <strong>taxa zero</strong>
                    {' para a sua empresa'}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
