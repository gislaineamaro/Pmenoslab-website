import React, { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import {
  Heading,
  Text,
  Flex,
  InputGroup,
  Input,
  Box,
  Select,
  Image,
  Button,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import { HeaderDefault } from '../../components/headerDefault'
import { Footer } from '../../components/footer'
import overlay from '../../assets/vectorAsteric.svg'
import vectorOverlay from '../../assets/vectorOverlay.svg'
import { animationFromLeft, animationFromRight } from '../../utils'

export const Jobs = () => {
  const sr = ScrollReveal()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [position, setPosition] = useState('')
  const [currentPosition, setCurrentPosition] = useState('')

  const [isInvalid, setIsInvalid] = useState(false)
  const toast = useToast()

  useEffect(() => {
    sr.reveal('.descrition', animationFromLeft)
    sr.reveal('.form', animationFromRight)
  }, [])

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    console.log('Cheguei aqui', e)
    e.preventDefault()

    if (!name || !email || !linkedin || !position || !currentPosition) {
      toast({
        title: 'Preencha todos os campos',
        status: 'error',
        duration: 3000,
        position: 'top-right',
        isClosable: true
      })
      setIsInvalid(true)
      return
    }

    const data = {
      name: name,
      email: email,
      linkedin: linkedin,
      position: position,
      currentPosition: currentPosition
    }

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }

    axios
      .post('http://localhost:5001/Subscription', data, config)
      .then(() => {
        toast({
          title: 'Resposta enviada com sucesso',
          status: 'success',
          position: 'top-right',
          duration: 3000,
          isClosable: true
        })
        setIsInvalid(false)
      })
      .catch(() => {
        toast({
          title: 'Aconteceu um erro ao enviar seu formulário',
          status: 'error',
          position: 'top-right',
          duration: 3000,
          isClosable: true
        })
      })
  }
  return (
    <>
      <HeaderDefault />
      <Image src={overlay} position="absolute" top="20%" />
      <Image
        src={vectorOverlay}
        w="90px"
        h="90px"
        position="absolute"
        top="20%"
        right="-4%"
      />
      <Flex flexDirection="row" align="center" justify="center" my="10%">
        <Flex flexDirection="column" w="50%" className="descrition">
          <Heading mb="2%">Faça parte da nossa empresa</Heading>
          <Text w="80%">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </Flex>

        <Flex flexDirection="column" w="40%" className="form">
          <Box
            as="form"
            onSubmit={handleSubmit}
            borderRadius="8px"
            boxShadow="lg"
            p="4%"
            w="80%"
          >
            <Text fontSize="20px" my="2%">
              Nos conte um pouco sobre você
            </Text>
            <InputGroup display="flex" flexDirection="column" w="auto">
              <Input
                type="text"
                onChange={e => handleChange(e, setName)}
                isInvalid={isInvalid}
                placeholder="Insira seu nome"
                my="2%"
              />
              <Input
                type="email"
                onChange={e => handleChange(e, setEmail)}
                isInvalid={isInvalid}
                placeholder="Insira seu email"
                my="2%"
              />
              <Input
                type="text"
                onChange={e => handleChange(e, setLinkedin)}
                isInvalid={isInvalid}
                placeholder="Como podemos te achar no linkedin?"
                my="2%"
              />
              <Input
                type="text"
                onChange={e => handleChange(e, setPosition)}
                isInvalid={isInvalid}
                placeholder="Em que área você tem interesse?"
                my="2%"
              />
              <Select
                placeholder="Qual seu cargo atual?"
                onChange={e => handleChange(e, setCurrentPosition)}
                isInvalid={isInvalid}
                my="2%"
              >
                <option value="estudante">Estudante</option>
                <option value="estagiario">Estágiario(a)</option>
                <option value="analista">Analista</option>
                <option value="desenvolvedor">Desenvolvedor(a)</option>
                <option value="gerente">Gerente</option>
              </Select>
              <Button
                type="submit"
                my="2%"
                bg="#0161C0"
                color="white"
                colorScheme="facebook"
                w="50%"
              >
                Enviar
              </Button>
            </InputGroup>
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
