import React, { useEffect } from 'react'
import { HeaderDefault } from '../../components/headerDefault'
import { Footer } from '../../components/footer'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { CardEvent } from '../../components/cardEvent'
import { CardNews } from '../../components/cardNews'
import dateBanner from '../../assets/saveTheDate.svg'
import eventBanner from '../../assets/pmenosTalk.PNG'
import startupDay from '../../assets/startupDay.png'
import ScrollReveal from 'scrollreveal'
import {
  animationFadein,
  animationFromLeft,
  animationFromRight
} from '../../utils'

export const Events = () => {
  const sr = ScrollReveal()

  useEffect(() => {
    sr.reveal('.save-the-date-banner', animationFadein)
    sr.reveal('.our-events-title', animationFromLeft)
    sr.reveal('.event-thumb-image', animationFromRight)
    sr.reveal('.event-info', animationFromLeft)
    sr.reveal('.previous-events', animationFadein)
    sr.reveal('.card-news', animationFromLeft)
  }, [])

  return (
    <>
      <HeaderDefault />
      <Flex direction="row" align="center" my="4%" mx="2%">
        <Image
          src={dateBanner}
          h="500px"
          w="100%"
          className="save-the-date-banner"
          objectFit="cover"
          borderRadius="8px"
        />
      </Flex>
      <Box mx="4%">
        <Box className="our-events-title">
          <Heading mb="15px">Acompanhe nossos eventos</Heading>
          <Text w="80%">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </Box>
        <Box>
          <Flex direction="column" my="4%">
            <Flex flexDirection="row" justifyContent="space-between">
              <Box w="60%" className="event-info">
                <CardEvent
                  number="01"
                  eventName="PmenosTalk"
                  tagName="Online"
                  data="10/03"
                  local=" https:/zoom.com/union=291380"
                  description="
                  O pmenostalk é um bate-papo que fazemos com convidados especiais,vindos de várias empresas gigantes no mercado e das mais diversas áreas.
                  Esse programa tem como finalidade trazer ao  nosso time de gigantes, o conhecimento sobre a realidade do mercado."
                />
                <Button variant="outline" color="#004695" fontSize="14px">
                  Salvar na agenda
                  <CalendarIcon ml="10px" />
                </Button>
              </Box>
              <Box my="2%" className="event-thumb-image">
                <Image
                  src={eventBanner}
                  h="340px"
                  w="600px"
                  borderRadius="8px"
                />
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" my="4%">
            <Flex flexDirection="row" justifyContent="space-between">
              <Box w="60%" className="event-info">
                <CardEvent
                  number="02"
                  eventName="StartupDay"
                  tagName="Presencial"
                  data="19/03"
                  local=" https:/zoom.com/union=291380"
                  description="
                  Esse programa tem como objetivo de entender como uma startup consegue ser tão eficiente e produtiva quanto grandes empresas, incentivar mais startups a participarem e evoluir o processo de medir as principais métricas e práticas de negócios."
                />
                <Button variant="outline" color="#004695" fontSize="14px">
                  Salvar na agenda
                  <CalendarIcon ml="10px" />
                </Button>
              </Box>
              <Box my="2%" className="event-thumb-image">
                <Image
                  src={startupDay}
                  objectFit="fill"
                  h="340px"
                  w="600px"
                  borderRadius="8px"
                />
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" my="4%">
            <Flex flexDirection="row" justifyContent="space-between">
              <Box w="60%" className="event-info">
                <CardEvent
                  number="03"
                  eventName="PmenosTalk"
                  tagName="Online"
                  data="10/03"
                  local=" https:/zoom.com/union=291380"
                  description="
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <Button variant="outline" color="#004695" fontSize="14px">
                  Salvar na agenda
                  <CalendarIcon ml="10px" />
                </Button>
              </Box>
              <Box my="2%" className="event-thumb-image">
                <Image
                  src={eventBanner}
                  h="340px"
                  w="600px"
                  borderRadius="8px"
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box my="4%">
          <Heading className="previous-events">Eventos anteriores</Heading>
          <Text mb="4%" className="previous-events">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
          <Flex>
            <CardNews
              className="card-news"
              title="Papo UxFor"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit."
              textButton="Ver evento"
            />
            <CardNews
              className="card-news"
              title="Papo UxFor"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit."
              textButton="Ver evento"
            />
            <CardNews
              className="card-news"
              title="Papo UxFor"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit."
              textButton="Ver evento"
            />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
