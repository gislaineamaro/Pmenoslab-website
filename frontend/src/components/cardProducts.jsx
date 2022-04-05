import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const CardProducts = ({
  image,
  description,
  imageProduct,
  imageWidth,
  className = ''
}) => {
  return (
    <>
      <Flex my="8%" className={className}>
        <Flex flexDirection="column" className="product-info">
          <Image src={image} w={imageWidth} />
          <Flex flexDirection="column">
            <Text ml="5%" w="70%">
              {description}
            </Text>
          </Flex>
        </Flex>
        <Flex mr="2%" className="product-image">
          <Image src={imageProduct} />
        </Flex>
      </Flex>
    </>
  )
}
