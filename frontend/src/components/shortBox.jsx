import React from 'react'
import { Box, Text, Avatar } from '@chakra-ui/react'
// eslint-disable-next-line react/prop-types
export const ShortBox = ({ linkImage, name, cargo, description }) => {
  return (
    <>
      <Box boxShadow="sm" borderRadius="8px" p="15px" w="50%" align="center" m="2%">
        <Avatar src={linkImage} size="xl" mb="10px"/>
        <Box>
          <Text fontWeight="bold" fontSize="14px" mb="14px">
            {name} | {cargo}
          </Text>
          <Text w="85%">{description}</Text>
        </Box>
      </Box>
    </>
  )
}
