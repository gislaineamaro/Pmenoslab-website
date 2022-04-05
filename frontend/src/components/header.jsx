import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import ScrollReveal from 'scrollreveal'
import { Button, Flex, Text, Image } from '@chakra-ui/react'
import headerImage from './../assets/HeaderFachada.svg'
import logoPmenos from './../assets/LogoPmenos.svg'

import { animationFadein } from '../utils'

export const Header = () => {
  const navigate = useNavigate()
  const sr = ScrollReveal()

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
  const handleRedirectJobs = () => {
    navigate('/pmenoslab/jobs')
  }

  useEffect(() => {
    sr.reveal('.header-content', animationFadein)
  }, [])

  return (
    <Flex
      flexDirection="column"
      bgImage={headerImage}
      color="white"
      objectFit="cover"
      h="30rem"
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        mx="4%"
        my="2%"
      >
        <Flex flexDirection="row" fontWeight="medium" align="center">
          <Text mr="2rem" cursor="pointer" onClick={handleRedirectAbout}>
            Sobre
          </Text>
          <Text mr="2rem" cursor="pointer" onClick={handleRedirectPrograms}>
            Programas
          </Text>
          <Text mr="2rem" cursor="pointer" onClick={handleRedirectProducts}>
            Produtos
          </Text>
          <Text mr="2rem" cursor="pointer" onClick={handleRedirectEvents}>
            Eventos
          </Text>
          <Button
            bg="#E10613"
            color="white"
            colorScheme="none"
            onClick={handleRedirectJobs}
            size="sm"
          >
            Faça parte
          </Button>
        </Flex>

        <Image
          src={logoPmenos}
          w="15%"
          h="auto"
          cursor="pointer"
          onClick={handleRedirectHome}
        />
      </Flex>

      <Flex
        direction="column"
        mx="4%"
        my="8%"
        className="header-content"
        color="white"
      >
        <Text fontWeight="bold" fontSize="30px">
          Gente, Inovação e Processos
        </Text>
        <Text fontSize="25px" mb="10px">
          Aqui nós já estamos no Futuro
        </Text>
        <Button
          variant="outline"
          borderColor="white"
          _hover={{ backgroundColor: '#FFFFFF', color: '#0161C0' }}
          p="20px"
          w="19%"
        >
          Conheça o Pmenoslab
        </Button>
      </Flex>
    </Flex>
  )
}
