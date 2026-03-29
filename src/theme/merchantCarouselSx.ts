import { IFOOD_FONT_TITLE } from './ifoodFonts'

export const merchantCarouselSectionSx = {
  pt: '70px',
  pb: '50px',
  width: '100%',
  maxWidth: '1278px',
  h: { base: 'auto', lg: '376px' },
  mx: 'auto',
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
}

export const merchantCarouselHeadingSx = {
  fontSize: '24px',
  lineHeight: '30px',
  fontFamily: IFOOD_FONT_TITLE,
  fontWeight: 500,
  color: '#1a1a1a',
  boxSizing: 'border-box' as const,
  borderTop: '2px solid #f2f2f2',
  h: '124px',
  w: '100%',
  margin: 0,
  padding: '60px 0 32px',
  textAlign: 'left' as const,
}
