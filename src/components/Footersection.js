import { Box, IconButton, HStack, VStack, Stack, Divider, Text, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle
} from "react-icons/ai";

export default function Footersection() {
  return (
    <Box >
      <Box bg="black">
        <Box width="80%" margin="auto" py="4rem">
          <Flex direction={{ base: 'column', md: 'row', xl: 'row' }} mb="5" >
            <VStack  >
              <Text as="b" fontSize="3xl"  >Let's Connect</Text>
              <HStack as="b" justifyItems="center">
                <Text>Visits:</Text>  <Text ml="1" py='0.5' px="1.5" borderRadius="10px" color={'black'} bg="white">
                  400938
                </Text>

              </HStack>

            </VStack>
            <HStack mt="0.6rem" mb="1.5rem" margin={{ md: 'auto' }}>
              <a href="https://x.com/NoverPrime" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="4xl" border="none" color="white" _hover={{ color: "gray.300" }} variant={"outline"} icon={<AiOutlineTwitter />} />{" "}
              </a>
              <a href="https://github.com/novertech411" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="4xl" border="none" color="white" _hover={{ color: "gray.300" }} variant={"outline"} icon={<AiFillGithub />} />
              </a>
              <a href="https://medium.com/@novertech4" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="4xl" border="none" color="white" _hover={{ color: "gray.300" }} variant={"outline"} icon={<AiFillMediumSquare />} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="4xl" border="none" color="white" _hover={{ color: "gray.300" }} variant={"outline"} icon={<AiFillLinkedin />} />
              </a>
            </HStack>

          </Flex>
          <Divider color="gray.600" />
          <Stack mt="1.5rem" color="white" justifyContent="left"   >
            <Text cursor="pointer" _hover={{ color: "gray.300" }}>Report</Text>
            <Text cursor="pointer" _hover={{ color: "gray.300" }}>Feedback</Text>
            <Text cursor="pointer" _hover={{ color: "gray.300" }}>Privacy Policy</Text>
          </Stack>
        </Box>
      </Box>
      <Flex px="8%" py="1.5rem" >
        <Flex > <Text pt="0.5" pr="0.5" ><AiOutlineCopyrightCircle /></Text>   <Text>2026 Sholaye. All rights reserved.</Text> </Flex>
        <Spacer />
        <Box>Made with 💖 by Me!</Box>
      </Flex>

    </Box>
  );
}
