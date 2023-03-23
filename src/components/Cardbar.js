import {  Button, Card, CardBody, CardFooter, Divider, Flex, Image,  Stack, Text } from '@chakra-ui/react'
import React from 'react'
import node from "../assets/images/nodejs.svg"
import mongodb from "../assets/images/mongodb.svg"
import react from "../assets/images/react.svg"
import { ViewIcon } from "@chakra-ui/icons";
import { BiDetail } from "react-icons/bi";
import projectImage from "../assets/images/project1.webp";


export default function Cardbar() {
  return (
    
 <Card bg="dark.300" color="white"  width={{base:"80%" , md:"250px" , xl:"340px"}}   pos="relative"  >
          <Image borderTopRadius="10px" objectFit="cover" src={projectImage} />
          <CardBody px="1" >
            <Stack   gap={{xl:"8"}}  direction={{base:'row' , md:'column', xl:"row" }} p="5px" justifyContent="center" >
              
              <Text p="px" fontSize="2xl"  >Personal Portfolio website</Text>

              
              <Flex justifyContent="center" pos="absolute"  width="30%"  p="4px"  bg="#386163e3" borderRadius="20px"   top="7rem" right="3">
            
                <Image  Width="30%" src={react} /> 
                <Image Width="30%" src={mongodb} /> 
                <Image  Width="30%" src={node} /> 
               
              
              </Flex>
            </Stack>
          </CardBody>
          <Divider color="dark.100"/>
          <CardFooter p="5px">
            <Stack direction='row'  justifyContent="center" width="100%"  gap={{base:"12" , md:"5"}} >
              <Button px="0px"  _hover={ { background:"dark.300"  } }  variant="ghost"  leftIcon={<BiDetail />}>Details</Button> 
 
              <Button  px="0px"  _hover={ { background:"dark.300"  } }   variant="ghost"  leftIcon={<ViewIcon />}>Live Preview</Button>
            </Stack>
          </CardFooter>
        </Card>

  
  )
}
