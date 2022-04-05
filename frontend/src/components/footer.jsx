import React from 'react'
import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'
// import { AiFillHeart } from 'react-icons/ai'
import logoPmenos from '../assets/LogoPmenos.svg'
import instagram from '../assets/Instagram.svg'
import linkedin from '../assets/LinkedIn.svg'
import facebook from '../assets/Facebook.svg'

export const Footer = () => {
  return (
    <Flex flexDirection="row" bg="#0054A6" p="5%" justify="space-between">
      <Flex direction="column">
        <Image src={logoPmenos} w="70%" h="auto" />
        <Flex flexDirection="row" fontSize="14px" color="white" mt="1rem">
          <Flex flexDirection="column" mr="10%">
            <Text fontWeight="bold">Institucional</Text>
            <Text>Acesse a sessão</Text>
            <Text>Acesse a sessão</Text>
            <Text>Acesse a sessão</Text>
            <Text>Acesse a sessão</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontWeight="bold">Serviços</Text>
            <Text>Acesse a sessão</Text>
            <Text>Acesse a sessão</Text>
            <Text>Acesse a sessão</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" color="white" mr="4%">
        <Flex flexDirection="row">
          <Image src={instagram} width="34px" mr="1rem" />
          <Image src={linkedin} width="24px" mr="1rem" />
          <Image src={facebook} width="30px" mr="1rem" />
        </Flex>
        <Text fontWeight="bold" mt="0.5rem">
          Fique por dentro!
        </Text>
        <Text w="80%" mt="0.5rem" fontSize="14px">
          Cadastre seu email para receber novidades sobre a nossa comunidade.
        </Text>

        <Flex w="80%" h="50px" mt="1rem">
          <Input
            placeholder="Insira seu email..."
            bgColor="#fff"
            color="#000"
            fontSize="14px"
            h="100%"
          />
          <Button
            variant="outline"
            size="sm"
            mr="5px"
            h="100%"
            width="150px"
            ml="1rem"
            colorScheme="white"
            _hover={{
              background: 'white',
              color: '#0054A6'
            }}
          >
            Enviar
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column">
        {/* <Text>Feito com <AiFillHeart /> Pmenoslab.</Text> */}
      </Flex>
    </Flex>
  )
}
