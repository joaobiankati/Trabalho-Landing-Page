'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { IFOOD_FONT_TEXT, IFOOD_FONT_TITLE } from '@/src/theme/ifoodFonts'

const theme = extendTheme({
  fonts: {
    heading: IFOOD_FONT_TITLE,
    body: IFOOD_FONT_TEXT,
  },
  breakpoints: {
    sm: '375px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
  },
  styles: {
    global: {
      html: {
        color: '#717171',
        bg: '#fff',
        fontFamily: IFOOD_FONT_TEXT,
        fontSize: '16px',
        lineHeight: '18.4px',
        direction: 'ltr',
        overflowX: 'hidden',
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        textRendering: 'optimizeLegibility',
        height: '100%',
        scrollbarGutter: 'stable',
      },
      body: {
        color: '#717171',
        bg: '#fff',
        fontFamily: IFOOD_FONT_TEXT,
        fontSize: '16px',
        lineHeight: '18.4px',
        direction: 'ltr',
        overflowX: 'hidden',
        overflowY: 'visible',
        scrollBehavior: 'smooth',
        position: 'relative',
        minHeight: '100%',
        height: 'auto',
        fontFeatureSettings: '"kern"',
        textRendering: 'optimizeLegibility',
        WebkitTextSizeAdjust: '100%',
        WebkitFontSmoothing: 'antialiased',
      },
      '::selection': {
        bg: '#ea1d2c',
        color: '#fff',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: IFOOD_FONT_TITLE,
        fontWeight: 700,
      },
    },
    Text: {
      baseStyle: {
        fontFamily: IFOOD_FONT_TEXT,
        fontWeight: 400,
      },
    },
    Button: {
      baseStyle: {
        fontFamily: IFOOD_FONT_TEXT,
      },
    },
    Input: {
      baseStyle: {
        fontFamily: IFOOD_FONT_TEXT,
      },
    },
    Link: {
      baseStyle: {
        fontFamily: IFOOD_FONT_TEXT,
      },
    },
    IconButton: {
      baseStyle: {
        fontFamily: IFOOD_FONT_TEXT,
      },
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}