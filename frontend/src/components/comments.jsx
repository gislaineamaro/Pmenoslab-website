import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Comments = ({ name, email, message }) => {
  return (
    <>
      <Box p="4%" boxShadow="lg" borderRadius="8px">
        <Flex>
          <Avatar name={name} />
          <Text>{email}</Text>
        </Flex>
        <Text>{message}</Text>
      </Box>
    </>
  )
}
