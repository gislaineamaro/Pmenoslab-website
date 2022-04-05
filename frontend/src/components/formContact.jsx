import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import { AiOutlineMessage } from 'react-icons/ai'
import axios from 'axios'

export const FormContact = ({ className = '' }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)
  const toast = useToast()

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    console.log('Cheguei aqui', e)
    e.preventDefault()

    if (!name || !email || !message) {
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
      Name: name,
      Email: email,
      Text: message
    }

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }

    axios
      .post('http://localhost:5001/Comment', data, config)
      .then(() => {
        toast({
          title: 'Comentário publicado com sucesso',
          status: 'success',
          position: 'top-right',
          duration: 3000,
          isClosable: true
        })
        setIsInvalid(false)
      })
      .catch(() => {
        toast({
          title: 'Aconteceu um erro ao tentar salvar o comentário',
          status: 'error',
          position: 'top-right',
          duration: 3000,
          isClosable: true
        })
      })
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      backgroundColor="white"
      boxShadow="md"
      shadow="0px 3px 6px rgba(0, 0, 0, .1)"
      borderRadius="8px"
      className={className}
      h="auto"
      w="30%"
      p="2%"
    >
      <Flex display="flex" direction="row" mb="2rem">
        <Text mr="10px" color="#303030" fontSize="18px" fontWeight="600">
          Entre em contato conosco
        </Text>
        <AiOutlineMessage color="#0054A6" size="25px" />
      </Flex>
      <Input
        placeholder="Nome.."
        mb="1rem"
        h="50px"
        onChange={e => handleChange(e, setName)}
        isInvalid={isInvalid}
      />
      <Input
        placeholder="Email.."
        mb="1rem"
        h="50px"
        onChange={e => handleChange(e, setEmail)}
        isInvalid={isInvalid}
        type="email"
      />
      <Textarea
        placeholder="Conte-nos um pouco mais..."
        resize="none"
        onChange={e => handleChange(e, setMessage)}
        rows={6}
        isInvalid={isInvalid}
      />
      <Button
        type="submit"
        bgColor="#0054A6"
        color="white"
        mt="2rem"
        colorScheme="facebook"
      >
        Enviar
      </Button>
    </Box>
  )
}
