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
    <Box bg="#1a1a1a" boxShadow="inset 0px 10px 15px rgba(0,0,0,0.5)">
      <Box bg="#1a1a1a">
        <Box width="80%" margin="auto" py="4rem">
          <Flex direction={{ base: 'column', md: 'row', xl: 'row' }} mb="5" >
            <VStack  >
              <Text color="gray.300" as="b" fontSize="3xl"  >Let's Connect</Text>
              <HStack as="b" justifyItems="center">
                <Text color="gray.400">Visits:</Text>  <Text ml="1" py='0.5' px="1.5" borderRadius="10px" color={'#ff5403'} bg="#1a1a1a" boxShadow="inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)">
                  400938
                </Text>

              </HStack>

            </VStack>
            <HStack mt="0.6rem" mb="1.5rem" margin={{ md: 'auto' }} spacing={4}>
              <a href="https://x.com/NoverPrime" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="2xl" p="6" bg="#1a1a1a" color="#ff5403" boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)" border="none" borderRadius="full" _hover={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", color: "gray.300" }} icon={<AiOutlineTwitter />} />{" "}
              </a>
              <a href="https://github.com/novertech411" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="2xl" p="6" bg="#1a1a1a" color="#ff5403" boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)" border="none" borderRadius="full" _hover={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", color: "gray.300" }} icon={<AiFillGithub />} />
              </a>
              <a href="https://medium.com/@novertech4" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="2xl" p="6" bg="#1a1a1a" color="#ff5403" boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)" border="none" borderRadius="full" _hover={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", color: "gray.300" }} icon={<AiFillMediumSquare />} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <IconButton fontSize="2xl" p="6" bg="#1a1a1a" color="#ff5403" boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)" border="none" borderRadius="full" _hover={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", color: "gray.300" }} icon={<AiFillLinkedin />} />
              </a>
            </HStack>

          </Flex>
          <Box w="100%" h="2px" bg="#1a1a1a" boxShadow="inset 1px 1px 2px rgba(0,0,0,0.8), inset -1px -1px 2px rgba(255,255,255,0.05)" my={4}></Box>
          <Stack mt="1.5rem" color="gray.400" justifyContent="left"   >
            <Text cursor="pointer" _hover={{ color: "#ff5403" }}>Report</Text>
            <Text cursor="pointer" _hover={{ color: "#ff5403" }}>Feedback</Text>
            <Text cursor="pointer" _hover={{ color: "#ff5403" }}>Privacy Policy</Text>
          </Stack>
        </Box>
      </Box>
      <Flex px="8%" py="1.5rem" bg="#1a1a1a" color="gray.400" boxShadow="inset 0px 5px 10px rgba(0,0,0,0.5)">
        <Flex > <Text pt="0.5" pr="0.5" color="#ff5403"><AiOutlineCopyrightCircle /></Text>   <Text>2026 Sholaye. All rights reserved.</Text> </Flex>
        <Spacer />
        <Box>Made with <Text as="span" color="#ff5403">💖</Text> by Me!</Box>
      </Flex>

    </Box>
  );
}
