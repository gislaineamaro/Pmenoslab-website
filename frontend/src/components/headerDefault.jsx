import React from 'react'
import { useNavigate } from 'react-router'
import { Flex, Image, Text } from '@chakra-ui/react'
import logoPmenos from '../assets/LogoPmenos.svg'

export const HeaderDefault = () => {
  const navigate = useNavigate()
  const handleRedirectHome = () => {
    navigate('/pmenoslab/home')
  }
  const handleRedirectAbout = () => {
    navigate('/pmenoslab/about')
  }
  const handleRedirectPrograms = () => {
    navigate('/pmenoslab/programs')
  }
  const handleRedirectProducts = () => {
    navigate('/pmenoslab/products')
  }
  const handleRedirectEvents = () => {
    navigate('/pmenoslab/events')
  }
  return (
    <Flex
      direction="row"
      bgColor="#0054A6"
      color="white"
      justify="space-between"
      py="1.5%"
      px="4%"
      h="auto"
    >
      <Image
        src={logoPmenos}
        w="15%"
        h="auto"
        cursor="pointer"
        onClick={handleRedirectHome}
      />
      <Flex direction="row" mr="2%" align="center" justify="flex-end" w="50%">
        <Text mr="2rem" cursor="pointer" onClick={handleRedirectHome}>
          Home
        </Text>
        <Text mr="2rem" cursor="pointer" onClick={handleRedirectAbout}>
          Sobre
        </Text>
        <Text mr="2rem" cursor="pointer" onClick={handleRedirectPrograms}>
          Programas
        </Text>
        <Text mr="2rem" cursor="pointer" onClick={handleRedirectProducts}>
          Produtos
        </Text>
        <Text cursor="pointer" onClick={handleRedirectEvents}>
          Eventos
        </Text>
      </Flex>
    </Flex>
  )
}
