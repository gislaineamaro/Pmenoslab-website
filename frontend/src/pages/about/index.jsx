import React from 'react'

import { Flex, Box, Image, Text } from '@chakra-ui/react'

import { HeaderDefault } from '../../components/headerDefault'
import { TimeLine } from '../../components/timeLine'
import { Footer } from '../../components/footer'
import { ShortBox } from '../../components/shortBox'
import historyHeader from '../../assets/nossaHistoria.svg'
import LiderPhoto from '../../assets/liderPhoto.png'
import Trophy from '../../assets/trophy.png'

export const AboutPage = () => {
  return (
    <>
      <HeaderDefault />
      <Box position="relative">
        <Image src={historyHeader} objectFit="cover" h="30rem" />
        <Flex
          flexDirection="column"
          align="end"
          color="white"
          position="absolute"
          mr="5%"
          right="0"
          bottom="100px"
        >
          <Text fontWeight="bold" fontSize="40px">
            #Nossa Historia
          </Text>
          <Text fontSize="15px" width="60%" textAlign="end">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </Flex>
      </Box>
      <Flex direction="row">
        <Box w="65%" my="5%" ml="4%" alignContent="center" position="relative">
          <TimeLine
            date="2019"
            title="Idealização do pmenoslab"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="blue"
            isDateVisibleDown="false"
            position="absolute"
            left="0"
          />
          <TimeLine
            date="2019"
            title="Primeira confência do Pmenoslab | 24/05"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="red"
            isDateVisibleUp={true}
            position="absolute"
            right="200"
          />
          <TimeLine
            date="2020"
            title="Primeiros projetos e resultados"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="blue"
            isDateVisibleDown="false"
            position="absolute"
            left="0"
          />
          <TimeLine
            date="2020"
            title="O reconhecimento da companhia | 20/08"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="red"
            isDateVisibleUp={true}
            position="absolute"
            right="200"
          />
          <TimeLine
            date="2021"
            title="Teste"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="blue"
            isDateVisibleDown="false"
            position="absolute"
            left="0"
          />
          <TimeLine
            date="2021"
            title="Teste"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="red"
            isDateVisibleUp={true}
            position="absolute"
            right="200"
          />
          <TimeLine
            date="2021"
            title="Teste"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="blue"
            isDateVisibleDown="false"
            position="absolute"
            left="0"
          />
          <TimeLine
            date="2021"
            title="Teste"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            color="red"
            isDateVisibleUp={true}
            position="absolute"
            right="200"
          />
        </Box>
        <Flex w="30%" mt="10%" mr="4%" flexDirection="column">
          <Image
            width="400px"
            h="400px"
            borderRadius="8px"
            src={historyHeader}
            mb="15%"
          />
          <Image
            width="400px"
            h="400px"
            borderRadius="8px"
            src={historyHeader}
            mb="15%"
          />
          <Image
            width="400px"
            h="400px"
            borderRadius="8px"
            src={historyHeader}
            mb="15%"
          />
          <Image width="400px" borderRadius="8px" src={historyHeader} />
        </Flex>
      </Flex>
      <Box mx="4%" mb="5%">
        <Text fontSize="30px" mb="2%">#Liderança</Text>
        <Flex>
          <ShortBox
            linkImage={LiderPhoto}
            name="Gilberto Caray"
            cargo="Diretor de Transformação & Inovação"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <ShortBox
            linkImage={LiderPhoto}
            name="Gilberto Caray"
            cargo="Diretor de Transformação & Inovação"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <ShortBox
            linkImage={LiderPhoto}
            name="Gilberto Caray"
            cargo="Diretor de Transformação & Inovação"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <ShortBox
            linkImage={LiderPhoto}
            name="Gilberto Caray"
            cargo="Diretor de Transformação & Inovação"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
        </Flex>
      </Box>
      <Box mx="4%" mb="10%">
        <Text fontSize="30px">#Conquistas</Text>
        <Text mb="5%">When an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
        <Flex>
          <Flex flexDirection="column" align="center" justify="center">
            <Image src={Trophy} width="30%"/>
            <Text w="50%" textAlign="center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </Flex>
          <Flex flexDirection="column" align="center" justify="center">
            <Image src={Trophy} width="30%"/>
            <Text w="50%" textAlign="center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </Flex>
          <Flex flexDirection="column" align="center" justify="center">
            <Image src={Trophy} width="30%"/>
            <Text w="50%" textAlign="center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}
