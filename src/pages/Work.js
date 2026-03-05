import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Cardbar from '../components/Cardbar'

export default function Work() {
  return (
    <Box id="work" pt="5rem" width={{ base: "95%", md: "80%", xl: "70%" }} mx="auto" >


      <Flex justifyContent="center" mt="7" >
        <Text as="b" color="white" fontSize={28}>
          Projects
        </Text>{" "}
        <Spacer />{" "}
        <Button
          fontSize="18"
          boxShadow="0px 2px 8px 0px rgba(255,255,255,0.2)"
          bg="white"
          color="black"
          _hover={{ bg: "gray.300" }}
          borderRadius={10}
          py={2}
          px={4}
          fontWeight="light"

          rightIcon={<ArrowForwardIcon />}
        >
          See All Project
        </Button>
      </Flex>
      <Flex
        mt="5rem"
        mb="5rem"
        gap={10}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "left" }}
      >
        <Cardbar />
        <Cardbar />
        <Cardbar />

      </Flex>


      <Flex justifyContent="center" mt="7" >
        <Text as="b" color="white" fontSize={28}>
          Articles
        </Text>{" "}
        <Spacer />{" "}
        <Button
          fontSize="18"
          boxShadow="0px 2px 8px 0px rgba(255,255,255,0.2)"
          bg="white"
          color="black"
          _hover={{ bg: "gray.300" }}
          borderRadius={10}
          py={2}
          px={4}
          fontWeight="light"

          rightIcon={<ArrowForwardIcon />}
        >
          See All articles
        </Button>
      </Flex>

      <Flex
        mt="5rem"
        mb="5rem"
        gap={10}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "left" }}



      >
        <Cardbar />
        <Cardbar />


      </Flex>

    </Box>
  )
}
