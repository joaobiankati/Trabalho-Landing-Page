'use client'

import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { IFOOD_FONT_TEXT, IFOOD_FONT_TITLE } from '@/src/theme/ifoodFonts'

const scrollOuterSx = {
  position: 'relative' as const,
  overflow: 'visible' as const,
  height: '132px',
  width: { base: '100%', lg: '1398px' },
  marginRight: { base: 0, lg: '-120px' },
  touchAction: 'pan-y',
  zIndex: 1,
}

const wrapperSx = {
  width: { base: '100%', lg: '1398px' },
  overflowY: 'visible' as const,
  overflowX: { base: 'auto', lg: 'visible' } as const,
  pb: 0,
  boxSizing: 'content-box' as const,
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
}

const containerSx = {
  height: '132px',
  position: 'relative' as const,
  display: 'flex',
  width: { base: 'max-content', lg: '1398px' },
  justifyContent: 'flex-start',
  transitionProperty: 'transform',
  '& > *': { mr: { base: 0, md: '15.9px' } },
}

const tileSx = {
  position: 'relative' as const,
  width: '250px',
  minWidth: '250px',
  height: '132px',
  padding: '20px 16px',
  borderRadius: '8px',
  border: '1px solid #dcdcdc',
  display: 'grid',
  gridTemplateColumns: '56px 152px',
  columnGap: '8px',
  alignItems: 'center',
  transition: 'border-color 0.35s ease-in-out',
  textDecoration: 'none',
  color: 'inherit',
  bg: '#fff',
  flexShrink: 0,
  _hover: { borderColor: '#a6a29f' },
}

const logoSx = {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  objectFit: 'cover' as const,
}

export function MerchantCarousel({ children }: { children: ReactNode }) {
  return (
    <Box sx={scrollOuterSx}>
      <Box sx={wrapperSx}>
        <Flex sx={containerSx}>{children}</Flex>
      </Box>
    </Box>
  )
}

const verifiedBadgePath =
  'M7.27379 0.633281C6.63354 -0.211093 5.36417 -0.211094 4.72392 0.63328L4.11112 1.44146L3.10633 1.30331C2.05655 1.15897 1.15897 2.05655 1.30331 3.10633L1.44146 4.11112L0.633281 4.72392C-0.211093 5.36417 -0.211094 6.63354 0.63328 7.27379L1.44146 7.88659L1.30331 8.89137C1.15897 9.94116 2.05655 10.8387 3.10633 10.6944L4.11112 10.5562L4.72392 11.3644C5.36417 12.2088 6.63354 12.2088 7.27379 11.3644L7.88659 10.5562L8.89137 10.6944C9.94116 10.8387 10.8387 9.94116 10.6944 8.89138L10.5562 7.88659L11.3644 7.27379C12.2088 6.63354 12.2088 5.36417 11.3644 4.72392L10.5562 4.11112L10.6944 3.10633C10.8387 2.05655 9.94116 1.15897 8.89138 1.30331L7.88659 1.44146L7.27379 0.633281ZM3.92199 5.89974C4.12291 5.6966 4.44867 5.6966 4.64959 5.89974L5.2897 6.5469L7.32851 4.19116C7.51562 3.97497 7.84066 3.95306 8.0545 4.14223C8.26834 4.3314 8.29001 4.66002 8.1029 4.87621L5.33982 8.0688L3.92199 6.63535C3.72107 6.43221 3.72107 6.10287 3.92199 5.89974Z'

function VerifiedBadge() {
  return (
    <Box ml="auto" w="16px" h="16px" p="2px" role="presentation">
      <Flex
        w="12px"
        h="12px"
        align="center"
        justify="center"
        color="#ef5753"
        aria-hidden
      >
        <Icon viewBox="0 0 12 12" boxSize="12px" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d={verifiedBadgePath} fill="currentColor" />
        </Icon>
      </Flex>
    </Box>
  )
}

type MerchantTileProps = {
  name: string
  category?: string
  logo: string
  showBadge?: boolean
}

export function MerchantTile({ name, category, logo, showBadge }: MerchantTileProps) {
  return (
    <Box
      flexShrink={0}
      position="relative"
      width="250px"
      height="132px"
      marginRight="14px"
      transitionProperty="transform"
      sx={{ backfaceVisibility: 'hidden' }}
    >
      <Box as="a" href="/404" sx={tileSx}>
        {showBadge ? (
          <Flex position="absolute" top="8px" right="8px" left="8px">
            <VerifiedBadge />
          </Flex>
        ) : null}
        <Image src={logo} alt="" width={56} height={56} sx={logoSx} />
        <Box minW={0} w="152px" h={category ? '36px' : '56px'} display="flex" flexDirection="column" justifyContent="center">
          <Text
            as="h3"
            m={0}
            fontFamily={IFOOD_FONT_TITLE}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="400"
            color="#1a1a1a"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            sx={{ WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}
          >
            {name}
          </Text>
          {category ? (
            <Text
              as="p"
              m="2px 0 0"
              fontSize="12px"
              lineHeight="16px"
              fontWeight="400"
              color="#717171"
              fontFamily={IFOOD_FONT_TEXT}
            >
              {category}
            </Text>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}
