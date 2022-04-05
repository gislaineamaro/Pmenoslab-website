import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import {
  Flex,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Avatar
} from '@chakra-ui/react'
import ScrollReveal from 'scrollreveal'
import { AddIcon } from '@chakra-ui/icons'
import newsBanner from '../assets/newsBanner.svg'
import news from '../assets/pmenosTeam.jpg'
import { animationFadein } from '../utils'

export const TabBanner = () => {
  const navigate = useNavigate()
  const sr = ScrollReveal()

  useEffect(() => {
    sr.reveal('.inovation-week-content', animationFadein)
    sr.reveal('.save-date-image', animationFadein)
    // sr.reveal('.inovation-week-schedule', animationFromLeft)
  }, [])
  const handleRedirectEvents = () => {
    navigate('/pmenoslab/events')
  }
  return (
    <Flex>
      <Tabs
        colorScheme="blue"
        color="black"
        display="flex"
        flexDirection="column"
        bgImage={newsBanner}
        bgSize="cover"
        w="100%"
        bgRepeat="no-repeat"
      >
        <TabList mx="5%">
          <Tab fontWeight="light">Destaques</Tab>
          <Tab fontWeight="light">Agenda</Tab>
        </TabList>
        <TabPanels px="5%">
          <TabPanel
            display="flex"
            flexDirection="column"
            mt="20%"
            className="inovation-week-content"
          >
            <Text fontWeight="bold" fontSize="20px">
              Semana da inovação
            </Text>
            <Text w="70%" mb="2%">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Button
              onClick={handleRedirectEvents}
              variant="outline"
              borderColor="#0053A4"
              color="#0053A4"
              w="15%"
            >
              Saiba mais+
            </Button>
          </TabPanel>
          <TabPanel mx="5%" className="inovation-week-schedule">
            <Flex flexDirection="column">
              <Box my="2%">
                <Text fontWeight="bold" fontSize="20px">
                  #Save the date
                </Text>
                <Text w="70%">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </Text>
              </Box>
            </Flex>
            <Flex flexDirection="row">
              <Accordion w="500px" h="auto" allowToggle>
                <AccordionItem width="auto">
                  <AccordionButton position="relative" h="50px">
                    <Flex textAlign="left" alignItems="center">
                      <Avatar name="1 0" size="sm" bgColor="#0054A6" />
                      <Text fontWeight="light" ml="15px">
                        {' '}
                        Nome do Evento | 20/10{' '}
                      </Text>
                    </Flex>
                    <AddIcon position="absolute" right="5" color="blue" />
                  </AccordionButton>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem width="auto">
                  <AccordionButton position="relative" h="50px">
                    <Flex textAlign="left" alignItems="center">
                      <Avatar name="1 0" size="sm" bgColor="#0054A6" />
                      <Text fontWeight="light" ml="15px">
                        {' '}
                        Nome do Evento | 20/10{' '}
                      </Text>
                    </Flex>
                    <AddIcon position="absolute" right="5" color="blue" />
                  </AccordionButton>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Flex
                p="5%"
                ml="5%"
                w="30%"
                h="300px"
                flexDirection="column"
                align="end"
                justifyContent="end"
                bgImage={news}
                bgSize="cover"
                borderRadius="8px"
                className="save-date-image"
              >
                <Text w="80%" textAlign="end" color="white">
                  Fique por dentro da nossa programação
                </Text>
                <Button variant="outline" color="white" onClick={handleRedirectEvents}>
                  Saiba mais+
                </Button>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
