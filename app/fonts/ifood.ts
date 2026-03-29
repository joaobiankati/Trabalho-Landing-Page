import localFont from 'next/font/local'

export const ifoodRcTextos = localFont({
  src: [
    {
      path: '../../public/fonts/iFoodRCTextos-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iFoodRCTextos-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iFoodRCTextos-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iFoodRCTextos-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ifood-rc-textos',
  display: 'swap',
})

export const ifoodRcTitulos = localFont({
  src: [
    {
      path: '../../public/fonts/iFoodRCTitulos-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iFoodRCTitulos-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iFoodRCTitulos-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iFoodRCTitulos-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ifood-rc-titulos',
  display: 'swap',
})
