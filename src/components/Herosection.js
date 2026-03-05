import { Box, Flex, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import hero from "../assets/images/herosection.png"
import React from 'react'

export default function heroSection() {
  return (
    <Box px={{ base: '0', md: '2%', xl: '8%' }} my="4rem" >
      <Grid width={{ base: '100%', md: '100%', }} m="auto" borderRadius="45px" bg="gray.800" p="1rem" templateColumns="repeat(12, 1fr)" >
        <GridItem p="10px" colSpan={{ base: 12, md: 6, xl: 6 }}>
          <Image justify="center" src={hero} style={{ filter: "grayscale(100%)" }} />
        </GridItem>
        <GridItem p="10px" textAlign={{ base: "center", md: "left" }} colSpan={{ base: 12, md: 6, xl: 6 }} my='auto'>

          <Flex justifyContent={{ base: "center", md: "left" }} fontSize="35px" as="b"  ><Text color="white" >4</Text><Text color="gray.300">+</Text> </Flex>
          <Box as="b">
            <Text color="white" fontSize="22px" my="2">Completed projects </Text>
            <Text color="gray.400" fontSize="30px"> Glad to help you! </Text>
          </Box>

          <Text color="gray.400" lineHeight="30px" fontSize="18px"> As a web developer, technical writer and a passionate learner,
            I'm always on the lookout for new challenges and opportunities to further improve
            my knowledge and skills.</Text>

        </GridItem>

      </Grid>
    </Box>
  )
}

