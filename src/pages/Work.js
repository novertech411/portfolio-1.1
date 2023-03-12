import { Box, Button, Flex, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Cardbar from '../components/Cardbar'

export default function Work() {
  return (
    <Box  width={{ base: "95%", md: "80%", xl: "70%" }}  mx="auto" >
      
      
      <Flex justifyContent="center"  mt="7" >
        <Text as="b"  color="white" fontSize={28}>
           Projects
        </Text>{" "}
        <Spacer />{" "}
        <Button
          fontSize="18"
          boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
          bg="brand.100"
          borderRadius={10}
          py={2}
          px={4}
          fontWeight="light"
         
          rightIcon={<ArrowForwardIcon/>}
        >
          See All Project 
        </Button>
      </Flex>
      <SimpleGrid
      pt={14}
     px="5.5%"
     minChildWidth={{base:"200px", md:"250px" , xl:"300px"}} 
     spacing='60px'
       
      >
<Cardbar/>
<Cardbar/>
<Cardbar/>

      </SimpleGrid>


      <Flex justifyContent="center"  mt="7" >
        <Text as="b"  color="white" fontSize={28}>
           Articles
        </Text>{" "}
        <Spacer />{" "}
        <Button
          fontSize="18"
          boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
          bg="brand.100"
          borderRadius={10}
          py={2}
          px={4}
          fontWeight="light"
         
          rightIcon={<ArrowForwardIcon/>}
        >
          See All articles
        </Button>
      </Flex>

      <SimpleGrid
      pt={14}
     px="5.5%"
     minChildWidth={{base:"200px", md:"250px" , xl:"300px"}} 
     spacing='60px'
       
      >
<Cardbar />
<Cardbar />


      </SimpleGrid>

      </Box>
  )
}
