import React from 'react'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import News from '../assets/pmenosTeam.jpg'

export const CardNews = ({
  title,
  description,
  textButton,
  className = ''
}) => {
  return (
    <Flex
      flexDirection="column"
      className={className}
      mx="2%"
      py="2%"
      px="2%"
      boxShadow="md"
      borderRadius="8px"
      alignSelf="flex-start"
    >
      <Image borderRadius="10px" w="100%" h="150px" mb="20px" src={News} />
      <Text fontWeight="regular" fontSize="18px" mb="15px" textAlign="start">
        {title}
      </Text>
      <Text noOfLines="4" fontSize="14px">
        {description}
      </Text>
      <Flex flexDirection="row" justify="center">
        <Button
          variant="outline"
          color="#0054A6"
          w="80%"
          mt="15px"
          fontSize="14px"
        >
          {textButton}
          <ExternalLinkIcon mx="10px" />
        </Button>
      </Flex>
    </Flex>
  )
}
