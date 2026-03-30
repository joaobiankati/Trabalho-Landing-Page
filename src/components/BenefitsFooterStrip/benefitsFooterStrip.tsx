import { Box } from '@chakra-ui/react'
import { IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

const stripFontSx = {
  fontFamily: IFOOD_FONT_TEXT,
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  unicodeBidi: 'isolate',
}

export default function BenefitsFooterStrip() {
  return (
    <Box w="100%" flexShrink={0} mt="32px" mb={{ base: '40px', md: '56px' }}>
      <Box
        bg="#f2f2f2"
        display="block"
        h="64px"
        px={0}
        sx={{
          boxSizing: 'border-box',
          ...stripFontSx,
          width: '100vw',
          maxWidth: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </Box>
  )
}
