import React, { useEffect } from 'react'
import { HeaderDefault } from '../../components/headerDefault'
import { Footer } from '../../components/footer'

import { Image, Flex, Text, Box, Button } from '@chakra-ui/react'
import HallPmenos2 from '../../assets/pmenosHall.jpg'
import FastdatingLogo from '../../assets/fastdatingLogo.svg'
import ManagerImage1 from '../../assets/mention.png'
import fastdatingIcon01 from '../../assets/fastdatingIcon01.svg'
import fastdatingIcon02 from '../../assets/fastdatingIcon02.svg'
import fastdatingIcon03 from '../../assets/fastdatingIcon03.svg'
import fastdatingIcon04 from '../../assets/fastdatingIcon04.svg'
import qrCode from '../../assets/QRCode.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import ScrollReveal from 'scrollreveal'
import SwiperCore, { Autoplay, Navigation, Pagination, Parallax } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  animationFromTop,
  animationFromLeft,
  animationFromRight,
  animationFadein
} from '../../utils'

export const Programs = () => {
  SwiperCore.use([Autoplay])

  const sr = ScrollReveal()

  useEffect(() => {
    sr.reveal('.program-header', animationFromTop)
    sr.reveal('.manager-session', animationFromLeft)
    sr.reveal('.program-info-column-item', animationFromLeft)
    sr.reveal('.about-program-description', animationFromLeft)
    sr.reveal('.about-program-video', animationFromRight)
    sr.reveal('.statistics-content .header', animationFadein)
    sr.reveal('.statistics-content .card-item', animationFromLeft)
    sr.reveal('.program-subscription .description', animationFromLeft)
    sr.reveal('.program-subscription .qrcode', animationFromRight)
  }, [])

  return (
    <Flex flexDirection="column">
      <HeaderDefault />

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          width: '100%'
        }}
        speed={600}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        modules={[Navigation, Pagination, Parallax]}
        pagination={{ clickable: true }}
        navigation={true}
        onSwiper={swiper => {}}
        className="slide-container"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)'
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <Image src={HallPmenos2} w="100%" h="500px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HallPmenos2} w="100%" h="500px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HallPmenos2} w="100%" h="500px" />
        </SwiperSlide>
      </Swiper>

      <Flex
        w="90%"
        mx="auto"
        flexDirection="column"
        mt="6rem"
        className="program-header"
      >
        <Flex flexDirection="column">
          <Image src={FastdatingLogo} w="25%" />
          <Text ml="5%" mt="1rem" w="80%">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </Text>
        </Flex>

        <Flex alignItems="center" mt="3rem" className="manager-session">
          <Image src={ManagerImage1} w="20%" />

          <Text w="60%" mx="auto" fontWeight="700">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </Text>
        </Flex>

        <Flex justifyContent="center" mt="6rem" alignItems="center">
          <Flex
            flexDirection="column"
            w="20%"
            mx="1rem"
            alignItems="center"
            className="program-info-column-item"
          >
            <Image src={fastdatingIcon01} w="50px" />
            <Text mt="1rem" fontSize="14px" textAlign="center">
              Você cadastra uma proposta de solução no formulário abaixo
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            w="20%"
            mx="1rem"
            alignItems="center"
            className="program-info-column-item"
          >
            <Image src={fastdatingIcon02} w="50px" />
            <Text mt="1rem" fontSize="14px" textAlign="center">
              Nós analisamos sua proposta e uma vez selecionada, você será
              convidado para um <b>pitch</b>.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            w="20%"
            mx="1rem"
            alignItems="center"
            className="program-info-column-item"
          >
            <Image src={fastdatingIcon03} w="50px" />
            <Text mt="1rem" fontSize="14px" textAlign="center">
              Apresente a solução! Você tem <b>5 minutos</b> de <b>Pitch</b> e
              <b>5 minutos</b> de <b>tira-dúvidas</b>
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            w="20%"
            mx="1rem"
            alignItems="center"
            className="program-info-column-item"
          >
            <Image src={fastdatingIcon04} w="50px" />
            <Text mt="1rem" fontSize="14px" textAlign="center">
              Chegou o <b>momento esperado</b>! Sua solução nos interessou.
              Vamos bater um papo?
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDirection="row"
          mt="6rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            flexDirection="column"
            w="50%"
            className="about-program-description"
          >
            <Text fontWeight="700" fontSize="20px">
              Quem é a equipe responsável por isso?
            </Text>

            <Text mt="1rem" fontWeight="500">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
              {'\n\n'}
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </Text>
          </Flex>

          <Box w="45%" h="300px" className="about-program-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dLvmk2zyMZA"
              title="YouTube
              video
              player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          mt="8rem"
          className="statistics-content"
        >
          <Text fontWeight="700" fontSize="20px" className="header">
            O que conquistamos nas edições passadas?
          </Text>

          <Flex flexDirection="row" justifyContent="center" mt="4rem">
            <Flex
              flexDirection="column"
              alignItems="center"
              mx="3rem"
              className="card-item"
            >
              <Text fontSize="2rem" fontWeight="700">
                +200
              </Text>
              <Text>Startups cadastradas</Text>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              mx="3rem"
              className="card-item"
            >
              <Text fontSize="2rem" fontWeight="700">
                40K
              </Text>
              <Text>Lucrados pela companhia</Text>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              mx="3rem"
              className="card-item"
            >
              <Text fontSize="2rem" fontWeight="700">
                +5
              </Text>
              <Text>Eventos produzidos</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex my="8rem" className="program-subscription">
          <Flex flexDirection="column" w="70%" className="description">
            <Text fontWeight="700" fontSize="20px">
              Sua empresa uma solução inovadora?
            </Text>
            <Text fontWeight="500" mt="1rem">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
              {'\n\n'}
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </Text>

            <Button
              variant="outline"
              color="#05498B"
              colorScheme="#05498B"
              mt="1.5rem"
              alignSelf="flex-start"
              textTransform="uppercase"
            >
              Inscreva-se
            </Button>
          </Flex>

          <Image src={qrCode} w="200px" h="auto" ml="4rem" className="qrcode" />
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}
