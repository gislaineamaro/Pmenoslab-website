import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Flex, Image, Text, Button, Box, Heading } from '@chakra-ui/react'
import ScrollReveal from 'scrollreveal'

import { Header } from '../../components/header'
import { TabBanner } from '../../components/tabBanner'
import { Card } from '../../components/card'
import { Footer } from '../../components/footer'

import pmenosHall from '../../assets/pmenosHall.jpg'
import conection from '../../assets/InternetConnection.svg'
import partner from '../../assets/B2B.svg'
import rocket from '../../assets/Rocket.svg'
import { FormContact } from '../../components/formContact'
import { CardNews } from '../../components/cardNews'
import overlay from '../../assets/vectorAsteric.svg'
import vectorOverlay from '../../assets/vectorOverlay.svg'

import {
  animationFromLeft,
  animationFromRight,
  animationFadein,
  animationFromBottom
} from '../../utils'

export const HomePage = () => {
  const navigate = useNavigate()
  const sr = ScrollReveal()

  useEffect(() => {
    sr.reveal('.whats-pmenos-lab .image', animationFromLeft)
    sr.reveal('.whats-pmenos-lab .content', animationFromRight)
    sr.reveal('.discover-our-space .content', animationFromLeft)
    sr.reveal('.discover-our-space .video', animationFromRight)
    sr.reveal('.this-is-your-achievements .header', animationFadein)
    sr.reveal('.this-is-your-achievements .card', animationFromLeft)
    sr.reveal('.whats-talking-about-us .header', animationFromLeft)
    sr.reveal('.whats-talking-about-us .cards', animationFromBottom)
    sr.reveal('.contact-info-content', animationFromRight)
    sr.reveal('.contact-form', animationFromLeft)
  }, [])

  const handleRedirectJobs = () => {
    navigate('/pmenoslab/jobs')
  }
  return (
    <>
      <Header />
      <Image src={overlay} position="absolute" top="15%" w="70px" h="70px"/>
      <Flex flexDirection="column" mt="4%" className="whats-pmenos-lab">
        <Flex direction="row" mx="4%" my="5%" justify="center">
          <Image
            src={pmenosHall}
            w="30%"
            borderRadius="8px"
            className="image"
          />
          <Flex flexDirection="column" ml="4%" w="55%" className="content">
            <Heading fontWeight="bold" mb="10px">
              O que é o PmenosLab?
            </Heading>
            <Text fontWeight="light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="row"
          my="4%"
          justify="center"
          className="discover-our-space"
        >
          <Flex direction="column" width="40%" mr="4%" className="content">
            <Heading fontWeight="bold" mb="2%">
              Conheça o nosso espaço físico
            </Heading>
            <Text mb="2%">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Button
              mt="2%"
              bg="#0161C0"
              alignSelf="flex-start"
              colorScheme="blue"
            >
              Reserve sua visita
            </Button>
          </Flex>
          <iframe
            title="Publicação incorporada"
            className="video"
            style={{
              width: '650px',
              height: '300px',
              overflow: 'hidden',
              overflowX: 'hidden'
            }}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6879804743363907584?compact=1"
            allowFullScreen
          />
        </Flex>
      </Flex>
      <Image src={vectorOverlay} position="absolute" top="32%" right="0px" w="70px" h="70px"/>

      <Box my="10%" w="100%">
        <TabBanner />
      </Box>
      <Flex
        flexDirection="column"
        align="center"
        className="this-is-your-achievements"
      >
        <Box align="center" my="5%">
          <Heading fontWeight="bold" mb="2%" className="header">
            Essas são as conquistas que alcançamos
          </Heading>
          <Text
            textAlign="center"
            fontWeight="light"
            width="70%"
            className="header"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Flex
            flexDirection="row"
            justify="space-around"
            align="center"
            my="5%"
          >
            <Card
              image={rocket}
              text="startups mentoradas"
              data="+100"
              className="card"
            />
            <Card
              image={partner}
              text="ideias curadas"
              data="100"
              className="card"
            />
            <Card
              image={conection}
              text="eventos produzidos"
              data="20"
              className="card"
            />
          </Flex>
        </Box>
      </Flex>
      <Image src={vectorOverlay} position="absolute" top="50%" left="0px" w="70px" h="70px"/>

      <Flex
        flexDirection="column"
        my="4%"
        mx="4%"
        className="whats-talking-about-us"
      >
        <Heading mb="4%" className="header">
          O que andam falando sobre nós?
        </Heading>
        <Flex className="cards">
          <CardNews
            title="Pague menos inaugura o Pmenoslab"
            description="Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            textButton="Acessar materia"
          />
          <CardNews
            title="Pague menos inaugura o Pmenoslab"
            description="Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            textButton="Acessar materia"
          />
          <CardNews
            title="Pague menos inaugura o Pmenoslab"
            description="Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            textButton="Acessar materia"
          />
        </Flex>
      </Flex>
      <Image src={vectorOverlay} position="absolute" top="80%" left="0px" w="70px" h="70px"/>

      <Flex
        flexDirection="row"
        mb="5%"
        mx="4%"
        my="10%"
        alignItems="center"
        justify="center"
      >
        <FormContact className="contact-form" />
        <Flex
          flexDirection="column"
          w="40%"
          ml="4%"
          className="contact-info-content"
        >
          <Text fontWeight="bold" mb="15px">
            Faça parte dessa historia!
          </Text>
          <Text fontSize="15px" mb="10px" color="#6A6969">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Text fontSize="15px" color="#6A6969">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </Text>
          <Flex mt="2rem">
            <Button variant="outline" borderColor="#0054A6" color="#0054A6" onClick={handleRedirectJobs}>
              Acessar conteúdo
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
