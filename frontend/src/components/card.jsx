import React from 'react'
import { Flex, Image, Text, Heading } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export const Card = ({ image, text, data, className = '' }) => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      className={className}
    >
      <Image src={image} w="40%" mb="4%" />
      <Text fontWeight="light" textAlign="center">
        <Heading fontWeight="Bold">{data}</Heading>
        {text}
      </Text>
    </Flex>
  )
}
