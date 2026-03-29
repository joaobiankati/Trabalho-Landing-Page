import { Box, Flex, Text, Input, Button, Icon } from '@chakra-ui/react'
import type { ComponentProps } from 'react'
import { IFOOD_FONT_MAIN, IFOOD_FONT_TEXT, IFOOD_FONT_TITLE } from '@/src/theme/ifoodFonts'

const PinIcon = (props: ComponentProps<typeof Icon>) => (
  <Icon viewBox="0 0 18 19" fill="none" {...props}>
    <path
      d="M8.83483 17.2742C8.27983 17.2742 7.77733 16.9496 7.52233 16.4192L4.30483 9.6346C3.51733 7.96418 3.55483 5.99293 4.40983 4.34626C5.21983 2.78668 6.62983 1.78918 8.26483 1.61501C8.63233 1.57543 9.02233 1.57543 9.38983 1.61501C11.0248 1.78918 12.4273 2.78668 13.2448 4.34626C14.0998 5.99293 14.1448 7.96418 13.3498 9.6346C13.2073 9.92752 12.8773 10.0463 12.5923 9.90376C12.3148 9.75335 12.2023 9.3971 12.3373 9.10418C12.9598 7.7821 12.9298 6.22251 12.2473 4.91626C11.6398 3.70501 10.5523 2.92918 9.28483 2.7946C8.99233 2.76293 8.68483 2.76293 8.38483 2.7946C7.12483 2.92918 6.03733 3.70501 5.40733 4.91626C4.73233 6.22251 4.69483 7.7821 5.32483 9.10418L8.54233 15.8888C8.62483 16.0629 8.78233 16.0867 8.84233 16.0867C8.90233 16.0867 9.05983 16.0708 9.14233 15.8888L10.7548 12.4767C10.8973 12.1838 11.2348 12.065 11.5123 12.2075C11.7898 12.3579 11.9023 12.7142 11.7673 13.0071L10.1548 16.4192C9.89983 16.9417 9.39733 17.2742 8.83483 17.2742Z"
      fill="currentColor"
    />
    <path
      d="M8.83508 9.55546C7.56008 9.55546 6.51758 8.45505 6.51758 7.10921C6.51758 5.75546 7.56008 4.66296 8.83508 4.66296C10.1101 4.66296 11.1526 5.76338 11.1526 7.10921C11.1601 8.46296 10.1176 9.55546 8.83508 9.55546ZM8.83508 5.85046C8.17508 5.85046 7.64258 6.41255 7.64258 7.10921C7.64258 7.80588 8.17508 8.36796 8.83508 8.36796C9.49508 8.36796 10.0276 7.80588 10.0276 7.10921C10.0351 6.41255 9.49508 5.85046 8.83508 5.85046Z"
      fill="currentColor"
    />
  </Icon>
)

export default function Hero() {
  return (
    <Box
      as="section"
      bg="#f7f7f7"
      w="100%"
      h={{ base: 'auto', md: '416.141px' }}
      position="relative"
      zIndex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: '92px', md: '174.36px' }}
      pb="35px"
    >
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        maxW="842px"
        w={{ base: '100%', md: '842px' }}
        mx="auto"
        px={{ base: '16px', md: 0 }}
        justify="center"
        h={{ base: 'auto', md: '206.781px' }}
        minH={{ base: 'auto', md: '206.781px' }}
      >
        <Text
          as="h1"
          color="#1a1a1a"
          fontFamily={IFOOD_FONT_TITLE}
          fontWeight="500"
          fontSize={{ base: '1.5rem', md: '36px' }}
          lineHeight={{ base: '1.25', md: '41.4px' }}
          mt={{ base: '12px', md: '15px' }}
          mb="14px"
          maxW="100%"
        >
          Tudo pra facilitar seu dia a dia
        </Text>

        <Text
          color="#717171"
          fontFamily={IFOOD_FONT_TEXT}
          fontSize="16px"
          fontWeight="400"
          lineHeight="18.4px"
          mb="40px"
          maxW="100%"
        >
          O que você precisa está aqui. Peça e receba onde estiver.
        </Text>

        <Flex
          role="search"
          w={{ base: '100%', md: '842px' }}
          maxW="842px"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'stretch', md: 'flex-start' }}
          justify={{ base: 'stretch', md: 'space-between' }}
          h={{ base: 'auto', md: '63px' }}
          minH={{ base: '49px', md: '63px' }}
          mb="15px"
          gap={{ base: '14px', md: 0 }}
          flexShrink={0}
        >
          <Flex
            flex="1"
            minW={0}
            w="100%"
            maxW={{ md: '683.453px' }}
            mr={{ base: 0, md: '20px' }}
            mb={{ base: 0, md: '14px' }}
            bg="#fff"
            h="49px"
            minH="49px"
            borderRadius="4px"
            align="center"
            border="1px solid #f2f2f2"
            overflow="hidden"
          >
            <Flex align="center" justify="center" flexShrink={0} ml="16px" mr="16px" aria-hidden>
              <PinIcon color="#ea1d2c" boxSize="25px" />
            </Flex>
            <Input
              type="text"
              name="address"
              placeholder="Endereço de entrega e número"
              border="none"
              _focus={{ boxShadow: 'none' }}
              fontFamily={IFOOD_FONT_MAIN}
              fontSize="16px"
              lineHeight="18.4px"
              fontWeight={100}
              color="#3e3e3e"
              bg="transparent"
              h="47px"
              minH="47px"
              pt="4px"
              pb="1px"
              pl="2px"
              pr="2px"
              ml="4px"
              mt={0}
              mb={0}
              mr={0}
              w={{ base: '100%', md: '620px' }}
              maxW="100%"
              textAlign="start"
              sx={{
                boxSizing: 'border-box',
                appearance: 'auto',
                overflowX: 'clip',
                overflowY: 'clip',
                WebkitFontSmoothing: 'antialiased',
                WebkitTextSizeAdjust: '100%',
              }}
              _placeholder={{ color: 'rgb(166, 166, 166)' }}
            />
          </Flex>

          <Button
            as="a"
            href="/404"
            bg="#ea1d2c"
            color="#fff"
            h="49px"
            minH="49px"
            w={{ base: '100%', md: '138.547px' }}
            minW={{ md: '138.547px' }}
            flexShrink={0}
            fontFamily={IFOOD_FONT_TEXT}
            fontWeight="700"
            fontSize="16px"
            lineHeight="18.4px"
            borderRadius="4px"
            px="6px"
            py="1px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="2px 2px 10px rgba(0,0,0,0.1)"
            _hover={{ bg: '#cc1825' }}
          >
            Buscar
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
