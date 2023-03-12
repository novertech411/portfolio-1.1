import { Button, Card, CardBody, CardFooter, Divider, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import express from "../assets/images/express.png"
import node from "../assets/images/nodejs.svg"
import mongodb from "../assets/images/mongodb.svg"
import react from "../assets/images/react.svg"
import { ViewIcon } from "@chakra-ui/icons";
import { BiDetail } from "react-icons/bi";
import projectImage from "../assets/images/project1.webp";


export default function Cardbar() {
  return (
    
 <Card bg="dark.300" color="white"  maxWidth={{base:'100%'}}  >
          <Image borderTopRadius="5px" objectFit="cover" src={projectImage} />
          <CardBody px="1" >
            <Stack direction={{base:'row' , md:'column'}} p="0px" justifyContent="space-evenly ">
              
              <Text p="0px" fontSize="2xl"  >Personal Portfo...</Text>

              
              <Flex  justifyContent="center"  width={{base:'100px', md:'100'}}    bg="#386163" borderRadius="20px">
              
                <Image  Width="30%" src={react} /> 
                <Image Width="30%" src={mongodb} /> 
                <Image  Width="30%" src={node} /> 
               
              
              </Flex>
            </Stack>
          </CardBody>
          <Divider color="dark.100"/>
          <CardFooter>
            <Stack direction='row' spacing="14" justifyContent="center" width="100%" px={3}  >
              <Button   variant="ghost" leftIcon={<BiDetail />}> Details</Button> 

              <Button   variant="ghost" leftIcon={<ViewIcon />}>Live Preview</Button>
            </Stack>
          </CardFooter>
        </Card>

  
  )
}
