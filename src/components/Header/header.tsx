'use client'

import {
  Box,
  Flex,
  Button,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

const NAV = ['Entregador', 'Restaurante e Mercado', 'Carreiras', 'iFood Card', 'iFood Benefícios'] as const

const shellSx = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#f7f7f7',
  zIndex: 9997,
  fontFamily: IFOOD_FONT_TEXT,
  fontSize: '16px',
  lineHeight: '18.4px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
}

const desktopInnerSx = {
  display: { base: 'none', lg: 'grid' },
  alignItems: 'center',
  columnGap: '20px',
  gridTemplateColumns: '88px 848px 114px 104px',
  boxSizing: 'border-box' as const,
  height: '136px',
  maxWidth: '1278px',
  width: 'min(1278px, calc(100% - 46px))',
  margin: '0 auto',
  padding: '40px 32px',
  position: 'relative' as const,
}

const headerLogoOuterSx = {
  boxSizing: 'border-box' as const,
  display: 'block',
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '16px',
  height: '46.3906px',
  lineHeight: '18.4px',
  width: '88px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  unicodeBidi: 'isolate' as const,
}

const headerLogoInnerSx = {
  display: 'inline-block',
  fontFamily: IFOOD_FONT_MAIN,
  fontSize: '16px',
  height: '46.3906px',
  lineHeight: '18.4px',
  position: 'relative' as const,
  width: '80px',
  textRendering: 'optimizeLegibility' as const,
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
}

function HeaderIfoodLogo() {
  return (
    <Box sx={headerLogoOuterSx}>
      <Box as="span" display="block" sx={headerLogoInnerSx}>
        <svg
          width="80"
          height="43"
          viewBox="0 0 80 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="iFood"
        >
            <g fill="#ea1d2c">
              <path d="M0 24.2583H6.08948L9.49868 7.47168H3.40838L0 24.2583Z" />
              <path d="M3.94678 4.83583H10.0338L11.016 0H4.92165L3.94678 4.83583Z" />
              <path d="M8.49829 28.9853H14.5878L18.283 10.818H22.7267L23.4262 7.47195H18.9449L19.0985 6.6962C19.3853 5.26503 19.8503 3.6004 22.1465 3.6004C23.5071 3.6004 24.8113 3.74801 26.0762 4.27989L26.7692 0.744473C25.361 0.250433 23.8765 -0.00141515 22.381 5.98087e-06C17.4871 5.98087e-06 14.1163 2.9137 12.8824 7.47195H10.7675L10.1065 10.818H12.1902L8.49829 28.9853Z" />
              <path d="M27.7899 24.6327C34.9809 24.6327 39.9705 18.0641 39.9705 12.706C39.9705 8.80399 36.2819 7.09766 32.7754 7.09766C24.8849 7.09766 20.5916 14.1613 20.5916 19.0252C20.5916 22.9272 24.3178 24.6327 27.7899 24.6327Z" />
              <path d="M47.0008 24.6327C54.1918 24.6327 59.1814 18.0641 59.1814 12.706C59.1814 8.80399 55.4854 7.09766 51.9822 7.09766C44.0958 7.09766 39.7959 14.1613 39.7959 19.0252C39.7959 22.9272 43.5262 24.6327 46.9975 24.6327" />
              <path d="M69.082 24.2579H75.1372L80.0001 0.374023H73.9098L72.4585 7.47133C71.6501 7.29637 70.8258 7.20203 69.9981 7.18974C64.0328 7.18974 58.6077 14.778 58.6077 20.2011C58.6077 22.4321 60.0581 24.6318 62.5202 24.6318C66.0193 24.6318 68.4414 22.919 69.4522 21.3138H69.8297L69.082 24.2579Z" />
              <path d="M50.3215 36.9096C45.868 40.7017 39.9142 42.6487 33.4431 42.2468C25.2837 41.7454 19.6265 35.4279 18.489 29.0197H18.8763C20.7117 33.111 25.1799 36.8887 30.7873 37.5096C36.2623 38.1137 42.9711 35.6397 46.6525 32.1082L42.5225 28.9844L54.7865 29.0197L52.1471 42.0029L50.3215 36.9096Z" />
            </g>
        </svg>
      </Box>
    </Box>
  )
}

const navLinkProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  h: '50px',
  px: '20px',
  my: '3px',
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 400,
  color: '#3e3e3e',
  borderRadius: '4px',
  transition: 'all 0.1s ease',
  whiteSpace: 'nowrap' as const,
  _hover: { color: '#3e3e3e', textDecoration: 'none' },
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="header" sx={shellSx} h={{ base: 'auto', lg: '136px' }} minH={{ base: '64px', lg: '136px' }}>
      <Flex
        display={{ base: 'flex', lg: 'none' }}
        align="center"
        justify="space-between"
        gap="16px"
        w="100%"
        maxW="1278px"
        mx="auto"
        px="16px"
        py="20px"
        boxSizing="border-box"
        fontFamily={IFOOD_FONT_TEXT}
        fontSize="16px"
        lineHeight="18.4px"
      >
        <Flex align="center" gap="12px" minW={0}>
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon boxSize={6} />}
            variant="ghost"
            onClick={onOpen}
            size="sm"
            flexShrink={0}
          />
          <HeaderIfoodLogo />
        </Flex>
        <Button
          as="a"
          href="/404"
          bg="#ea1d2c"
          color="#fff"
          fontWeight="700"
          borderRadius="6px"
          h="44px"
          w="104px"
          minW="104px"
          fontSize="16px"
          lineHeight="18.4px"
          fontFamily={IFOOD_FONT_TEXT}
          my="3px"
          p={0}
          _hover={{ bg: '#cc1825' }}
        >
          Entrar
        </Button>
      </Flex>

      <Box sx={desktopInnerSx}>
        <HeaderIfoodLogo />

        <Flex as="nav" aria-label="Principal" h="56px" w="848px" align="center" justify="flex-start" flexWrap="nowrap" minW={0} overflow="hidden">
          {NAV.map((item) => (
            <Link key={item} href="/404" {...navLinkProps}>
              {item}
            </Link>
          ))}
        </Flex>

        <Button
          as="a"
          href="/404"
          variant="ghost"
          color="#ea1d2c"
          fontWeight="500"
          fontSize="16px"
          lineHeight="18.4px"
          fontFamily={IFOOD_FONT_TEXT}
          h="44px"
          w="114px"
          minW="114px"
          p={0}
          my="3px"
          borderRadius="6px"
          textTransform="lowercase"
          transition="all 0.1s ease"
          _hover={{ bg: 'transparent', color: '#cc1825' }}
        >
          criar conta
        </Button>

        <Button
          as="a"
          href="/404"
          bg="#ea1d2c"
          color="#fff"
          fontWeight="500"
          fontSize="16px"
          lineHeight="18.4px"
          fontFamily={IFOOD_FONT_TEXT}
          h="44px"
          w="104px"
          minW="104px"
          p={0}
          my="3px"
          borderRadius="6px"
          transition="all 0.1s ease"
          _hover={{ bg: '#cc1825' }}
        >
          Entrar
        </Button>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4} pt={2}>
              {NAV.map((item) => (
                <Link
                  key={item}
                  href="/404"
                  fontSize="16px"
                  fontWeight={400}
                  color="#3e3e3e"
                  _hover={{ color: '#3e3e3e', textDecoration: 'none' }}
                  onClick={onClose}
                >
                  {item}
                </Link>
              ))}
              <Button
                as="a"
                href="/404"
                variant="outline"
                borderColor="#ea1d2c"
                color="#ea1d2c"
                fontWeight={400}
                mt={4}
              >
                Criar conta
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
