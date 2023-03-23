import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import communication from "../assets/images/communicative.png";
import motivation from "../assets/images/self-motivation.png";
import work from "../assets/images/work-ethic.png";
import collaborative from "../assets/images/collaborative.png";
import { AiOutlineMail } from "react-icons/ai";
export default function Hiresection() {
  return (
    <Box    my="6rem"  mx="auto"  width={{base:"100%", md:"85%"}}>
      <Box px="0.5rem"  >
        <HStack justify="center" my="4rem" fontSize="2xl" as="b" mx="2rem">
          {" "}
          <Text color="#6fc2c5">Why Hire Me</Text>{" "}
          <Text color="brand.100">?</Text>
        </HStack>

        <SimpleGrid minChildWidth={{base:"200px" , md:"270" , xl:"270"}} spacing="2">
          <Box>
            <Box  px="2rem">  <Image
              margin="auto"
              borderRadius="45px"
              bg="white"
              src={communication}
              
            /></Box>
          
            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="brand.300">
                Communicative
              </Text>
              <Text color="brand.200">
                I balance talking and listening hence ensuring effective
                communication.
              </Text>
            </Box>
          </Box>
          <Box px="rem">

            <Box  px="2rem"> 
            <Image
              margin="auto"
              borderRadius="45px"
              bg="white"
              src={collaborative}
            />
            </Box>
           
            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="brand.300">
                collaborative
              </Text>
              <Text color="brand.200">
                Teamwork makes the dream work. Collaboration first, then work.
              </Text>
            </Box>
          </Box>
          <Box px="0rem">
            <Box px="2rem">  <Image margin="auto" borderRadius="45px" bg="white" src={work} /></Box>
           
            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="brand.300">
                Workaholic
              </Text>
              <Text color="brand.200">
                I don't wait for deadlines, deadlines wait for me.
              </Text>
            </Box>
          </Box>
          <Box px="0rem">
          
              <Box px="2rem">  <Image margin="auto" borderRadius="45px" bg="white" src={motivation} /></Box>
            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="brand.300">
                self Motivated
              </Text>
              <Text color="brand.200">
                I put myself into action to achieve my goals.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      {/* hire  me button and email button*/}
      <Box px="0.5rem"    my="6rem">
        <Grid  templateColumns="repeat(12, 1fr)" bg="#cd921e"  borderRadius="25px" p="4rem"  >
          <GridItem colSpan={{ base: 12, md:6, xl: 6 }} as="b"  fontSize="30" textAlign="center">
            
            Interested in working with me?
          </GridItem>
          <GridItem colSpan={{ base: 12, md:6, xl: 6 }} textAlign="center">
            <Flex
              flexDirection={{ base: "column", md: "column", xl: "row" }}
              alignItems="center"
              gap="5"
              justifyContent="center"
            >
              <Button
                p="6"
                fontSize="19"
                minwidth="120px"
                color="black"
                leftIcon={<AiOutlineMail />}
              >
                {" "}
                Email me
              </Button>
              <Button p="6" fontSize="19" minwidth="170px" variant={"outline"}>
                {" "}
                See more project
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
