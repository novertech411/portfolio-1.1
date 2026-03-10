import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import communication from "../assets/images/communicative.png";
import motivation from "../assets/images/self-motivation.png";
import work from "../assets/images/work-ethic.png";
import collaborative from "../assets/images/collaborative.png";
import { AiOutlineMail } from "react-icons/ai";
export default function Hiresection() {
  return (
    <Box my="6rem" mx="auto" width={{ base: "100%", md: "85%" }}>
      <Box px="0.5rem">
        <HStack justify="center" my="4rem" fontSize="2xl" as="b" mx="2rem">
          {" "}
          <Text color="gray.300">Why Hire Me</Text>{" "}
          <Text color="white">?</Text>
        </HStack>

        <SimpleGrid minChildWidth={{ base: "200px", md: "270", xl: "270" }} spacing="2">
          <Box as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Box px="2rem">  <Image
              margin="auto"
              borderRadius="45px"
              bg="transparent"
              border="2px solid #ff5403"
              p={4}
              src={communication}
              style={{ filter: "grayscale(0%)" }}
            /></Box>

            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="gray.300">
                Communicative
              </Text>
              <Text color="gray.400">
                I balance talking and listening hence ensuring effective
                communication.
              </Text>
            </Box>
          </Box>
          <Box as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} px="rem">

            <Box px="2rem">
              <Image
                margin="auto"
                borderRadius="45px"
                bg="transparent"
                border="2px solid #ff5403"
                p={4}
                src={collaborative}
                style={{ filter: "grayscale(0%)" }}
              />
            </Box>

            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="gray.300">
                collaborative
              </Text>
              <Text color="gray.400">
                Teamwork makes the dream work. Collaboration first, then work.
              </Text>
            </Box>
          </Box>
          <Box as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} px="0rem">
            <Box px="2rem">  <Image margin="auto" borderRadius="45px" bg="transparent" border="2px solid #ff5403" p={4} src={work} style={{ filter: "grayscale(0%)" }} /></Box>

            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="gray.300">
                Workaholic
              </Text>
              <Text color="gray.400">
                I don't wait for deadlines, deadlines wait for me.
              </Text>
            </Box>
          </Box>
          <Box as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} px="0rem">

            <Box px="2rem">  <Image margin="auto" borderRadius="45px" bg="transparent" border="2px solid #ff5403" p={4} src={motivation} style={{ filter: "grayscale(0%)" }} /></Box>
            <Box textAlign="center" my="8">
              <Text as="b" fontSize="2xl" color="gray.300">
                self Motivated
              </Text>
              <Text color="gray.400">
                I put myself into action to achieve my goals.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      {/* hire  me button and email button*/}
      <Box px="0.5rem" my="6rem">
        <Grid templateColumns="repeat(12, 1fr)" bg="transparent" border="1px solid #ff5403" color="white" borderRadius="25px" p="4rem">
          <GridItem colSpan={{ base: 12, md: 6, xl: 6 }} as="b" fontSize="30" textAlign="center">

            Interested in working with me?
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6, xl: 6 }} textAlign="center">
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
                bg="transparent"
                border="1px solid #ff5403"
                color="#ff5403"
                _hover={{ bg: "#ff5403", color: "white" }}
                transition="all 0.3s ease"
                leftIcon={<AiOutlineMail />}
              >
                {" "}
                Email me
              </Button>
              <Button p="6" fontSize="19" minwidth="170px" bg="transparent" border="1px solid #ff5403" color="#ff5403" _hover={{ bg: "#ff5403", color: "white" }} transition="all 0.3s ease">
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
