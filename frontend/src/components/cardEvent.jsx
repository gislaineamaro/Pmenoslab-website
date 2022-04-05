import React from 'react'
import { Flex, Image, Divider, Text, Tag, Heading } from '@chakra-ui/react'
import vectorSimbol from '../assets/vectorSimbol.svg'

export const CardEvent = ({
  number,
  eventName,
  tagName,
  description,
  local,
  data
}) => {
  return (
    <Flex my="4%" flexDirection="column">
      <Flex flexDirection="column">
        <Flex flexDirection="row" align="center">
          <Image src={vectorSimbol} />
          <Heading mx="12px">{number}</Heading>
          <Divider orientation="vertical" h="70px" />
          <Heading mx="12px">{eventName}</Heading>
          <Tag
            size="md"
            variant="solid"
            bg="#C0DCF8"
            textTransform="uppercase"
            fontWeight="bold"
            color="#004695"
          >
            {tagName}
          </Tag>
        </Flex>
      </Flex>
      <Flex flexDirection="column" mt="2%">
        <Text>
          <Text as="strong">Data: </Text>
          {data}
        </Text>
        <Text>
          <Text as="strong">Local: </Text>
          {local}
        </Text>
        <Text w="70%" mt="10px">
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
