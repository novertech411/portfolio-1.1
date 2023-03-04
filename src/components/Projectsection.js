import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import express from "../assets/images/express.png"
import node from "../assets/images/nodejs.svg"
import mongodb from "../assets/images/mongodb.svg"
import react from "../assets/images/react.svg"
import { ViewIcon } from "@chakra-ui/icons";
import { BiDetail } from "react-icons/bi";
import projectImage from "../assets/images/project1.webp";
export default function Projectsection() {
  return (
    <Box py="34px" mx="auto" width="90%">
      <Flex justifyContent="center">
        <Text as="b" pt={3} color="#6fc2c5" fontSize={24}>
          Recent Projects
        </Text>{" "}
        <Spacer />{" "}
        <Button
          fontSize="18"
          boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
          bg="brand.100"
          borderRadius={10}
          py={8}
          px={4}
          fontWeight="light"
          _hover={{ background: "brand.100" }}
        >
          View More
        </Button>
      </Flex>

      <SimpleGrid
        px="0.5rem"
        pt="4rem"
        spacing={10}
        maxWidth="550px"
        justifyContent="center"
      >
        <Card mx="0.5rem" bg="dark.300" color="white">
          <Image borderTopRadius="5px" objectFit="cover" src={projectImage} />
          <CardBody>
            <Stack direction='row' p="0px" justifyContent="space-between" >
              
              <Text p="0px" fontSize="2xl"  >Personal Portfo...</Text>

              
              <Flex  p="7px" justifyItems="center" bg="#386163" borderRadius="20px">
              
                <Image  Width="30px" src={react} /> 
                <Image Width="30px" src={mongodb} /> 
                <Image  Width="30px" src={node} /> 
                <Image  Width="30px" src={express} /> 
              
              </Flex>
            </Stack>
          </CardBody>
          <Divider color="dark.100"/>
          <CardFooter>
            <Stack direction='row' spacing="20" justifyContent="center" width="100%"  >
              <Button   variant="ghost" leftIcon={<BiDetail />}> Details</Button> 

              <Button   variant="ghost" leftIcon={<ViewIcon />}>Live Preview</Button>
            </Stack>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
