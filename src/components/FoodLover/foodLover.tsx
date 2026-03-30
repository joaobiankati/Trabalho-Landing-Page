import { Box, Heading, Text, Link, Image } from '@chakra-ui/react'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

const MOSAIC = '/images/landing/food-lover-mosaic.png'

const foodLoverTitulosStack =
  `var(--font-ifood-rc-titulos), "iFood RC Titulos", var(--font-ifood-rc-textos), "iFood RC Textos", helvetica, sans-serif` as const

const sectionSx = {
  boxSizing: 'border-box' as const,
  unicodeBidi: 'isolate' as const,
  borderTopWidth: '2px',
  borderTopStyle: 'solid',
  borderTopColor: 'rgb(242, 242, 242)',
  width: '100%',
  maxWidth: '1278px',
  marginTop: { base: '28px', md: '40px', xl: '0' },
  marginBottom: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: { base: '20px', md: '40px' },
  paddingBottom: { base: '20px', md: '40px' },
  paddingLeft: { base: '16px', md: '23px' },
  paddingRight: { base: '16px', md: '23px' },
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '20px',
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  '@media (min-width: 768px)': {
    display: 'grid',
    gridTemplateAreas: '"title image" "content image"',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 1fr)',
    gridTemplateRows: 'auto 1fr',
    columnGap: '28px',
    rowGap: '28px',
    gap: 0,
  },
  '@media (min-width: 1024px)': {
    columnGap: '51.2px',
    rowGap: '40px',
    gridTemplateColumns: 'minmax(0, 279.016px) minmax(0, 731.797px)',
  },
  '@media (min-width: 1278px)': {
    display: 'grid',
    gridTemplateAreas: '"title image" "content image"',
    gridTemplateColumns: '279.016px 731.797px',
    gridTemplateRows: '132px 199.266px',
    columnGap: '51.2px',
    rowGap: '40px',
    width: '1278px',
    maxWidth: '1278px',
    minHeight: '533.266px',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '80px',
    paddingBottom: '80px',
    paddingLeft: '108px',
    paddingRight: '108px',
  },
}

const titleSx = {
  margin: 0,
  fontWeight: 500,
  color: '#1a1a1a',
  fontFamily: foodLoverTitulosStack,
  textAlign: 'center' as const,
  fontSize: { base: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '2.25rem' },
  lineHeight: { base: '1.375rem', sm: '1.625rem', md: '1.875rem', lg: '2.75rem' },
  '@media (min-width: 768px)': {
    gridArea: 'title',
    textAlign: 'left',
    maxWidth: '180px',
  },
  '@media (min-width: 1278px)': {
    gridColumn: 'title',
    gridRow: 'title',
    fontSize: '36px',
    lineHeight: '44px',
    width: '180px',
    maxWidth: '180px',
    height: '132px',
  },
}

const contentSx = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  gap: '12px',
  '@media (min-width: 768px)': {
    gridArea: 'content',
    alignItems: 'unset',
    gap: '20px',
  },
  '@media (min-width: 1278px)': {
    gridColumn: 'content',
    gridRow: 'content',
    width: '279.016px',
    minHeight: '199.266px',
    flexDirection: 'column',
    rowGap: '20px',
    columnGap: '20px',
  },
}

const textSx = {
  fontFamily: IFOOD_FONT_TEXT,
  fontWeight: 400,
  textAlign: 'center' as const,
  color: '#717171',
  margin: 0,
  fontSize: { base: '0.9375rem', md: '16px' },
  lineHeight: { base: 1.5, md: '20px' },
  maxWidth: '280px',
  '@media (min-width: 768px)': {
    textAlign: 'left',
    maxWidth: 'unset',
  },
  '@media (min-width: 1278px)': {
    width: '279.016px',
    minHeight: '40px',
  },
}

const actionSx = {
  display: 'block',
  boxSizing: 'border-box' as const,
  backgroundColor: 'rgb(234, 29, 44)',
  color: 'rgb(255, 255, 255)',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '16px',
  lineHeight: '19.79px',
  width: '120px',
  height: '43.7969px',
  minHeight: '43.7969px',
  paddingTop: '12px',
  paddingBottom: '12px',
  paddingLeft: '20px',
  paddingRight: '20px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  textDecorationLine: 'none',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  _hover: {
    textDecoration: 'none',
    color: 'rgb(255, 255, 255)',
  },
  _focus: { textDecoration: 'none', boxShadow: 'none' },
  _focusVisible: {
    textDecoration: 'none',
    boxShadow: '0 0 0 2px rgba(234, 29, 44, 0.35)',
  },
  _active: { textDecoration: 'none' },
}

const figureSx = {
  width: '442px',
  height: '224.25px',
  marginLeft: '-49px',
  alignSelf: 'center',
  '@media (min-width: 409px)': {
    marginLeft: 'calc(100vw - 458px)',
  },
  '@media (min-width: 442px)': {
    marginLeft: 'unset',
  },
  '@media (min-width: 768px)': {
    gridArea: 'image',
    width: '100%',
    maxWidth: '731.797px',
    height: 'auto',
    minHeight: { base: '200px', xl: '371.266px' },
    marginLeft: 0,
    alignSelf: 'stretch',
    justifySelf: 'stretch',
  },
  '@media (min-width: 1278px)': {
    gridColumn: 'image',
    gridRow: 'image',
    width: '731.797px',
    maxWidth: '731.797px',
    height: '100%',
    minHeight: '371.266px',
    alignSelf: 'stretch',
  },
}

const imgSx = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  borderRadius: '10px',
}

export default function FoodLover() {
  return (
    <Box as="section" aria-labelledby="food-lover-heading" sx={sectionSx}>
      <Heading as="h2" id="food-lover-heading" sx={titleSx}>
        Você tem fome do quê?
      </Heading>

      <Box sx={contentSx}>
        <Text sx={textSx}>
          Descubra como é ser um FoodLover e faça parte da nossa revolução!
        </Text>
        <Link href="/404" sx={actionSx}>
          Saiba mais
        </Link>
      </Box>

      <Box as="figure" sx={figureSx} margin={0}>
        <Image src={MOSAIC} alt="Comunidade de parceiros de entrega" width={732} height={371} sx={imgSx} />
      </Box>
    </Box>
  )
}
