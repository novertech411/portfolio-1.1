import { Box, Flex, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import hero from "../assets/images/herosection.png"
import React from 'react'

export default function heroSection() {
  return (
    <Box  > 
    <Grid   m="auto" borderRadius="45px"  bg="dark.200" p="2rem" templateColumns="repeat(12, 1fr)"  w="80%">
    <GridItem   colSpan={{ base: 12, md:6, xl: 6 }}>
    <Image src={hero}/>
    </GridItem>
    <GridItem  textAlign="center" colSpan={{ base: 12, md:6, xl: 6 }}>
      
      <Flex  justifyContent="center" fontSize="35px" as="b"  ><Text  >4</Text><Text color=" rgb(142, 210, 169);">+</Text> </Flex>
      <Box as="b">
      <Text  fontSize="22px" my="2">Completed projects </Text>
    <Text color="brand.400"  fontSize="30px"> Glad to help you! </Text>
      </Box>
     
    <Text color="brand.200"lineHeight="43px"  fontSize="23px"> As a web developer, technical writer and a passionate learner,
     I'm always on the lookout for new challenges and opportunities to further improve 
     my knowledge and skills.</Text>
    
    </GridItem>
    
        </Grid>
        </Box>
  )
}

