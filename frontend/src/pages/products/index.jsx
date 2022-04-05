import React, { useEffect } from 'react'
import { Flex, Text, Box, Heading } from '@chakra-ui/react'
import { HeaderDefault } from '../../components/headerDefault'
import { Footer } from '../../components/footer'
import { CardProducts } from '../../components/cardProducts'
import hashtagAlexa from '../../assets/Group 5489.svg'
import alexa from '../../assets/image 3.svg'
import hashtagConcierge from '../../assets/Group 5489-1.svg'
import concierge from '../../assets/image 3-1.svg'
import hashtagHub from '../../assets/Group 5489-2.svg'
import hub from '../../assets/image 5.svg'
import hashtagMarketplace from '../../assets/Group 5489-3.svg'
import marketplace from '../../assets/Group 5498.svg'
import ScrollReveal from 'scrollreveal'
import {
  animationFadein,
  animationFromLeft,
  animationFromRight
} from '../../utils'

export const Products = () => {
  const sr = ScrollReveal()

  useEffect(() => {
    sr.reveal('.header', animationFadein)

    const products = ['alexa', 'concierge', 'hub', 'marketplace']
    products.forEach(product => {
      sr.reveal(`.product-card-${product} .product-info`, animationFromLeft)
      sr.reveal(`.product-card-${product} .product-image`, animationFromRight)
    })
  }, [])

  return (
    <Box>
      <HeaderDefault />
      <Flex my="5%" mx="4%" flexDirection="column" className="header">
        <Heading fontWeight="bold" mb="2%">
          #Projetos
        </Heading>
        <Text width="80%">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.Amet minim mollit
          non deserunt ullamco est sit aliqua dolor do amet sint.
        </Text>
      </Flex>
      <Flex flexDirection="column" mx="4%">
        <CardProducts
          image={hashtagAlexa}
          className="product-card-alexa"
          imageWidth="20%"
          description="
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          "
          imageProduct={alexa}
        />
        <CardProducts
          image={hashtagConcierge}
          className="product-card-concierge"
          imageWidth="30%"
          description="
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          "
          imageProduct={concierge}
        />
        <CardProducts
          image={hashtagHub}
          className="product-card-hub"
          imageWidth="50%"
          description="
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          "
          imageProduct={hub}
        />
        <CardProducts
          image={hashtagMarketplace}
          className="product-card-marketplace"
          imageWidth="50%"
          description="
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          "
          imageProduct={marketplace}
        />
      </Flex>
      <Footer />
    </Box>
  )
}
