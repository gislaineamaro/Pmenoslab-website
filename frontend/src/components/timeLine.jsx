import React from 'react'
import { Text, Flex } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export const TimeLine = ({ date, title, description, color, isDateVisibleUp }) => {
  return (
    <Flex flexDirection="row">
      <Text
        fontSize="30px"
        alignSelf="center"
        className="dateLine"
        mx="10px"
        width='12%'
        style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
      >
        {isDateVisibleUp && date}
      </Text>
      <Flex
        bg={color}
        py="5%"
        width="10px"
        height="auto"
        minHeight='200px'
        flexDirection="column">
      </Flex>
      <Flex flexDirection="column" justify="center" mx="15px">
        <Text fontWeight="bold">{title}</Text>
        <Text w="50%">{description}</Text>
      </Flex>
    </Flex>
  )
}
