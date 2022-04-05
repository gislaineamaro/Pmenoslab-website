import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Roboto, sans-serif',
        overflowX: 'hidden'
      },
      a: {
        cursor: 'pointer'
      },
      button: {
        cursor: 'pointer',
        fontWeight: '800',
        fontFamily: 'Roboto, sans-serif'
      }
    }
  }
})
