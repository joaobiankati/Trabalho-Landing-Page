import Header from '@/src/components/Header/header'
import { Box } from '@chakra-ui/react'

const mainLayoutSx = {
  minHeight: '100vh',
  background: '#fff',
  paddingBottom: { base: '50px', lg: 0 },
  overflowX: { lg: 'unset' },
}

export default function Home() {
  return (
    <Box sx={mainLayoutSx}>
      <Header />
    </Box>
  )
}
