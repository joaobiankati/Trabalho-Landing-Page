import type { ReactNode } from 'react'
import { Box, Text, Link, Flex, Heading } from '@chakra-ui/react'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT, IFOOD_FONT_TITLE } from '@/src/theme/ifoodFonts'

const linkTransition = 'color 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
const fillTransition = 'fill 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'

const footerRootSx = {
  boxSizing: 'border-box' as const,
  display: 'block',
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  unicodeBidi: 'isolate' as const,
}

const footerTextSx = {
  fontFamily: IFOOD_FONT_TEXT,
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  unicodeBidi: 'isolate',
}

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Box
    as="li"
    listStyleType="none"
    minH="19.5156px"
    lineHeight="18.4px"
    w={{ base: '100%', xl: '287px' }}
    sx={{ listStyleImage: 'none' }}
  >
    <Link
      href={href}
      display="inline"
      color="#717171"
      fontSize="16px"
      fontWeight={400}
      lineHeight="19.52px"
      textDecoration="none"
      transition={linkTransition}
      _hover={{ color: '#3e3e3e', textDecoration: 'none' }}
      sx={{ fontFamily: IFOOD_FONT_TEXT, WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
    >
      {children}
    </Link>
  </Box>
)

const VisuallyHidden = ({ children }: { children: ReactNode }) => (
  <Box
    as="span"
    position="absolute"
    w="1px"
    h="1px"
    p={0}
    m="-1px"
    overflow="hidden"
    clipPath="inset(50%)"
    whiteSpace="nowrap"
    border={0}
  >
    {children}
  </Box>
)

const SocialLink = ({
  href,
  label,
  paths,
}: {
  href: string
  label: string
  paths: ReactNode
}) => (
  <Box as="li" w="55px" h="46px" listStyleType="none" flexShrink={0} top={0}>
    <Link
      href={href}
      isExternal
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w="30px"
      h="40px"
      mt="3px"
      mb="3px"
      ml="5px"
      mr="20px"
      color="#ea1d2c"
      textDecoration="none"
      position="relative"
      overflow="hidden"
      sx={{
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        transition: fillTransition,
        '& svg path': { transition: fillTransition },
        _hover: {
          '& svg path.fill-brand': { fill: '#3e3e3e' },
          '& svg path.fill-white': { fill: '#fff' },
        },
      }}
    >
      <Box as="span" position="relative" w="30px" h="30px" display="block">
        <VisuallyHidden>{label}</VisuallyHidden>
        <svg viewBox="0 0 48 48" width={30} height={30} style={{ display: 'inline', overflow: 'hidden' }} aria-hidden>
          {paths}
        </svg>
      </Box>
    </Link>
  </Box>
)

const columnTitleSx = {
  fontFamily: IFOOD_FONT_TITLE,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.52px',
  color: '#3e3e3e',
  mb: '30px',
  mt: 0,
  w: { base: '100%', xl: '287px' },
}

const IFoodSmilePath =
  'M 11.34 21.34 C 19.83 21.34 25.71 13.63 25.71 7.34 C 25.71 2.76 21.36 0.75 17.22 0.75 C 7.92 0.75 2.85 9.05 2.85 14.75 C 2.85 19.34 7.25 21.35 11.35 21.35 Z M 34 21.34 C 42.49 21.34 48.37 13.63 48.37 7.34 C 48.37 2.76 44.01 0.75 39.88 0.75 C 30.58 0.75 25.51 9.05 25.51 14.75 C 25.51 19.34 29.91 21.35 34.01 21.35 M 37.92 35.76 C 32.67 40.21 25.65 42.5 18.02 42.02 A 19.2 19.2 0 0 1 0.36 26.5 H 0.82 A 17.83 17.83 0 0 0 14.87 36.47 C 21.33 37.18 29.24 34.27 33.58 30.13 L 28.71 26.46 L 43.18 26.5 L 40.07 41.75 L 37.91 35.77 Z'

const companyCopySx = {
  display: 'block',
  boxSizing: 'border-box' as const,
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '13px',
  fontWeight: 300,
  lineHeight: '17.55px',
  color: 'rgb(113, 113, 113)',
  m: 0,
  w: { base: '100%', xl: '541px' },
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  unicodeBidi: 'isolate' as const,
}

const legalItems: { label: string; href: string; w: string }[] = [
  { label: 'Termos e condições de uso', href: '/404', w: '202.391px' },
  { label: 'Código de conduta', href: '/404', w: '143.641px' },
  { label: 'Privacidade', href: '/404', w: '89.7656px' },
  { label: 'Dicas de segurança', href: '/404', w: '145.203px' },
]

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="rgb(255, 255, 255)"
      mt="-40px"
      mb={0}
      mx="auto"
      maxW="1366px"
      w="100%"
      px="20px"
      pt={0}
      pb={0}
      sx={footerRootSx}
    >
      <Box
        as="section"
        display="grid"
        w={{ base: '100%', xl: '1238px' }}
        maxW="100%"
        mx={{ base: 0, xl: 'auto' }}
        pt={{ base: '48px', md: '56px' }}
        pb="10px"
        columnGap="30px"
        rowGap="30px"
        sx={{
          gridTemplateColumns: { base: '1fr', xl: 'repeat(4, 287px)' },
          ...footerTextSx,
        }}
      >
        <Box w={{ base: '100%', xl: '287px' }} maxW="100%">
          <Heading as="h2" sx={columnTitleSx}>
            iFood
          </Heading>
          <Box
            as="ul"
            m={0}
            mb="30px"
            p={0}
            display="grid"
            gridTemplateColumns={{ base: '1fr', xl: '287px' }}
            rowGap="30px"
            w={{ base: '100%', xl: '287px' }}
            sx={{ listStyleType: 'disc', listStyleImage: 'none' }}
          >
            <NavLink href="/404">Site Institucional</NavLink>
            <NavLink href="/404">Fale Conosco</NavLink>
            <NavLink href="/404">Conta e Segurança</NavLink>
            <NavLink href="/404">Carreiras</NavLink>
            <NavLink href="/404">Entregadores</NavLink>
          </Box>
        </Box>

        <Box w={{ base: '100%', xl: '287px' }} maxW="100%">
          <Heading as="h2" sx={columnTitleSx}>
            Descubra
          </Heading>
          <Box
            as="ul"
            m={0}
            mb="30px"
            p={0}
            display="grid"
            gridTemplateColumns={{ base: '1fr', xl: '287px' }}
            rowGap="30px"
            w={{ base: '100%', xl: '287px' }}
            sx={{ listStyleType: 'disc', listStyleImage: 'none' }}
          >
            <NavLink href="/404">Cadastre seu Restaurante ou Mercado</NavLink>
            <NavLink href="/404">iFood Shop</NavLink>
            <NavLink href="/404">iFood Benefícios</NavLink>
            <NavLink href="/404">Blog iFood Benefícios</NavLink>
          </Box>
        </Box>

        <Box w={{ base: '100%', xl: '287px' }} maxW="100%">
          <Heading as="h3" sx={columnTitleSx}>
            Social
          </Heading>
          <Flex
            as="ul"
            m={0}
            mt="-5px"
            mb={0}
            ml="-12px"
            p={0}
            display="inline-flex"
            h="46px"
            w="220px"
            maxW="100%"
            flexWrap="nowrap"
            alignItems="center"
            sx={{ listStyleType: 'disc', listStyleImage: 'none' }}
          >
            <SocialLink
              href="/404"
              label="Facebook"
              paths={
                <path
                  className="fill-brand"
                  fill="#717171"
                  d="M 27.629 47 V 23.997 H 34.138 L 35 16.07 H 27.629 L 27.64 12.103 C 27.64 10.036 27.841 8.928 30.885 8.928 H 34.954 V 1 H 28.444 C 20.626 1 17.874 4.845 17.874 11.312 V 16.072 H 13 V 23.998 H 17.874 V 47 H 27.629 Z"
                />
              }
            />
            <SocialLink
              href="/404"
              label="Twitter"
              paths={
                <path
                  className="fill-brand"
                  fill="#717171"
                  d="M 22.821 14.375 L 22.923 16.061 L 21.225 15.855 C 15.045 15.063 9.645 12.378 5.06 7.868 L 2.82 5.63 L 2.24 7.283 C 1.018 10.966 1.799 14.857 4.346 17.473 C 5.704 18.919 5.399 19.125 3.056 18.265 C 2.24 17.989 1.527 17.783 1.459 17.886 C 1.222 18.127 2.037 21.26 2.682 22.499 C 3.565 24.22 5.365 25.907 7.334 26.906 L 9 27.697 L 7.03 27.732 C 5.129 27.732 5.061 27.766 5.265 28.489 C 5.944 30.727 8.627 33.102 11.615 34.135 L 13.721 34.858 L 11.887 35.96 C 9.17 37.543 5.978 38.438 2.786 38.507 C 1.258 38.542 0.000999451 38.679 0.000999451 38.782 C 0.000999451 39.127 4.144 41.055 6.555 41.812 C 13.789 44.05 22.381 43.086 28.833 39.264 C 33.418 36.544 38.003 31.14 40.142 25.907 C 41.296 23.119 42.452 18.024 42.452 15.579 C 42.452 13.996 42.553 13.789 44.455 11.896 C 45.575 10.794 46.628 9.589 46.832 9.246 C 47.172 8.591 47.138 8.591 45.406 9.176 C 42.519 10.209 42.112 10.071 43.538 8.522 C 44.591 7.421 45.848 5.424 45.848 4.839 C 45.848 4.735 45.338 4.908 44.76 5.217 C 44.15 5.562 42.79 6.078 41.772 6.387 L 39.938 6.973 L 38.274 5.837 C 37.357 5.217 36.067 4.529 35.387 4.322 C 33.655 3.84 31.007 3.909 29.444 4.46 C 25.199 6.01 22.516 10.002 22.822 14.375 Z"
                />
              }
            />
            <SocialLink
              href="/404"
              label="YouTube"
              paths={
                <>
                  <path
                    className="fill-brand"
                    fill="#717171"
                    d="M 47 12.4 A 6 6 0 0 0 42.8 8 C 39 7 24 7 24 7 S 9 7 5.2 8 A 6 6 0 0 0 1 12.4 C 0 16.2 0 24.2 0 24.2 S 0 32.2 1 36.2 A 6 6 0 0 0 5.2 40.5 C 9 41.5 24 41.5 24 41.5 S 39 41.5 42.8 40.5 A 6 6 0 0 0 47 36 C 48 32.2 48 24.1 48 24.1 S 48 16.1 47 12.3 Z"
                  />
                  <path
                    className="fill-white"
                    fill="#ffffff"
                    d="M 19.5 32.5 V 17.5 L 31.5 25 L 19.5 32.5 Z"
                  />
                </>
              }
            />
            <SocialLink
              href="/404"
              label="Instagram"
              paths={
                <>
                  <path
                    className="fill-brand"
                    fill="#717171"
                    d="M 34.03 0 H 12.97 C 5.818 0 0 5.819 0 12.97 V 34.03 C 0 41.18 5.818 47 12.97 47 H 34.03 C 41.18 47 47 41.18 47 34.03 V 12.97 C 47 5.82 41.18 0 34.03 0 Z M 42.83 34.03 C 42.83 38.882 38.882 42.83 34.03 42.83 H 12.97 C 8.118 42.83 4.17 38.882 4.17 34.03 V 12.97 C 4.17 8.118 8.118 4.17 12.97 4.17 H 34.03 C 38.882 4.17 42.83 8.118 42.83 12.97 V 34.03 Z"
                  />
                  <path
                    className="fill-brand"
                    fill="#717171"
                    d="M 23.5 11.39 C 16.822 11.39 11.39 16.823 11.39 23.5 C 11.39 30.178 16.822 35.61 23.5 35.61 C 30.178 35.61 35.61 30.178 35.61 23.5 C 35.61 16.823 30.178 11.39 23.5 11.39 Z M 23.5 31.44 C 19.122 31.44 15.56 27.878 15.56 23.5 S 19.121 15.56 23.5 15.56 C 27.878 15.56 31.44 19.122 31.44 23.5 S 27.878 31.44 23.5 31.44 Z M 36.118 7.854 A 3.07 3.07 0 0 0 33.958 8.749 A 3.073 3.073 0 0 0 33.06 10.912 C 33.06 11.716 33.388 12.505 33.958 13.075 A 3.081 3.081 0 0 0 36.118 13.97 C 36.925 13.97 37.711 13.642 38.281 13.075 C 38.851 12.505 39.176 11.715 39.176 10.912 C 39.176 10.106 38.851 9.316 38.281 8.749 A 3.071 3.071 0 0 0 36.118 7.854 Z"
                  />
                </>
              }
            />
          </Flex>
        </Box>

        <Box display={{ base: 'none', xl: 'block' }} w="287px" aria-hidden />
      </Box>

      <Box
        as="section"
        aria-label="Rodapé legal"
        borderTop="1px solid #dcdcdc"
        w={{ base: '100%', xl: '1238px' }}
        maxW="100%"
        mx="auto"
        pt="40px"
        pb="40px"
        display="grid"
        columnGap="16px"
        rowGap="16px"
        sx={{
          gridAutoColumns: 'min-content',
          gridTemplateColumns: { base: '1fr', xl: '611px 611px' },
          ...footerTextSx,
        }}
      >
        <Box
          display="grid"
          alignItems="center"
          columnGap="20px"
          rowGap={0}
          minH="70.1875px"
          w={{ base: '100%', xl: '611px' }}
          sx={{
            gridTemplateAreas: `"logo-link company-copy" "logo-link company-info"`,
            gridTemplateColumns: { base: '50px minmax(0, 1fr)', xl: '50px 541px' },
          }}
        >
          <Link
            href="/"
            gridArea="logo-link"
            display="block"
            w="50px"
            minW="50px"
            h="47.2656px"
            position="relative"
            textDecoration="underline"
            color="inherit"
            sx={{
              ...footerTextSx,
              WebkitTapHighlightColor: 'rgba(0,0,0,0)',
              '&:link, &:visited': { color: 'inherit' },
            }}
          >
            <Box as="span" display="inline-block" position="relative" w="50px" h="47.2656px">
              <VisuallyHidden>Voltar para a home</VisuallyHidden>
              <svg
                viewBox="0 0 52 44"
                width={50}
                height={43.875}
                style={{ display: 'inline', overflow: 'hidden' }}
                aria-hidden
              >
                <path fill="#ea1d2c" d={IFoodSmilePath} />
              </svg>
            </Box>
          </Link>

          <Text gridArea="company-copy" sx={companyCopySx}>
          © Copyright 2021 - iFood - Todos os direitos reservados iFood com Agência de Restaurantes Online S.A.
          </Text>
          <Text gridArea="company-info" sx={companyCopySx}>
            CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP 06.020-902
          </Text>
        </Box>

        <Box w={{ base: '100%', xl: '611px' }} minH="70.1875px">
          <Box
            as="ul"
            m={0}
            p={0}
            display="grid"
            w={{ base: '100%', xl: '611px' }}
            sx={{
              listStyleType: 'disc',
              listStyleImage: 'none',
              gridTemplateColumns: {
                base: 'repeat(2, minmax(0, 1fr))',
                sm: 'repeat(4, minmax(0, 1fr))',
                xl: '202.391px 143.641px 89.7656px 145.203px',
              },
              columnGap: '10px',
            }}
          >
            {legalItems.map(({ label, href, w }) => (
              <Box key={label} as="li" listStyleType="none" sx={{ listStyleImage: 'none' }} maxW={{ xl: w }}>
                <Link
                  href={href}
                  display="inline-block"
                  color="#717171"
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="19.52px"
                  my="10px"
                  mx={0}
                  textDecoration="none"
                  transition={linkTransition}
                  w={{ base: '100%', xl: w }}
                  _hover={{ color: '#3e3e3e', textDecoration: 'none' }}
                  sx={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
                >
                  {label}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
