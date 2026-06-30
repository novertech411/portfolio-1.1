import { Box, IconButton, HStack, VStack, Text, Flex, Link } from "@chakra-ui/react";
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
    <Box bg="#151515" borderTop="1px solid rgba(255, 255, 255, 0.05)">
      <Box width="90%" maxW="container.lg" margin="auto" py="4rem">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={8}
          mb={8}
        >
          {/* Brand & Connect */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text color="white" fontWeight="bold" fontSize="2xl" fontFamily="mono">
              Let's Connect
            </Text>
            <HStack fontSize="sm" color="gray.400">
              <Text>Visits:</Text>
              <Text
                fontFamily="mono"
                px={2.5}
                py={0.5}
                borderRadius="full"
                color="#ff5403"
                bg="rgba(255, 84, 3, 0.08)"
                border="1px solid rgba(255, 84, 3, 0.15)"
                fontSize="xs"
                fontWeight="bold"
              >
                40,093
              </Text>
            </HStack>
          </VStack>

          {/* Socials */}
          <HStack spacing={4}>
            <IconButton
              as="a"
              href="https://x.com/NoverPrime"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              fontSize="xl"
              variant="outline"
              borderColor="rgba(255,255,255,0.1)"
              color="gray.400"
              borderRadius="full"
              w="50px"
              h="50px"
              _hover={{
                borderColor: "#1DA1F2",
                color: "#1DA1F2",
                bg: "rgba(29, 161, 242, 0.05)",
                transform: "translateY(-2px)"
              }}
              icon={<AiOutlineTwitter />}
              transition="all 0.2s"
            />
            <IconButton
              as="a"
              href="https://github.com/novertech411"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              fontSize="xl"
              variant="outline"
              borderColor="rgba(255,255,255,0.1)"
              color="gray.400"
              borderRadius="full"
              w="50px"
              h="50px"
              _hover={{
                borderColor: "white",
                color: "white",
                bg: "rgba(255, 255, 255, 0.05)",
                transform: "translateY(-2px)"
              }}
              icon={<AiFillGithub />}
              transition="all 0.2s"
            />
            <IconButton
              as="a"
              href="https://medium.com/@novertech4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              fontSize="xl"
              variant="outline"
              borderColor="rgba(255,255,255,0.1)"
              color="gray.400"
              borderRadius="full"
              w="50px"
              h="50px"
              _hover={{
                borderColor: "#ff5403",
                color: "#ff5403",
                bg: "rgba(255, 84, 3, 0.05)",
                transform: "translateY(-2px)"
              }}
              icon={<AiFillMediumSquare />}
              transition="all 0.2s"
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/eyinmosan-sholaye-080732172"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              fontSize="xl"
              variant="outline"
              borderColor="rgba(255,255,255,0.1)"
              color="gray.400"
              borderRadius="full"
              w="50px"
              h="50px"
              _hover={{
                borderColor: "#0077b5",
                color: "#0077b5",
                bg: "rgba(0, 119, 181, 0.05)",
                transform: "translateY(-2px)"
              }}
              icon={<AiFillLinkedin />}
              transition="all 0.2s"
            />
          </HStack>
        </Flex>

        <Box w="100%" h="1px" bg="rgba(255, 255, 255, 0.05)" my={6}></Box>

        {/* Footer bottom meta info */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap={4}
          fontSize="xs"
          color="gray.500"
          fontFamily="mono"
        >
          <Flex align="center" gap={1}>
            <Text pt="0.5" pr="0.5" color="#ff5403">
              <AiOutlineCopyrightCircle />
            </Text>
            <Text>2026 Emmanuel Sholaye. All rights reserved.</Text>
          </Flex>

          <HStack spacing={4}>
            <Link _hover={{ color: "#ff5403" }}>Report</Link>
            <Link _hover={{ color: "#ff5403" }}>Feedback</Link>
            <Link _hover={{ color: "#ff5403" }}>Privacy Policy</Link>
          </HStack>

          <Box>
            Made with <Text as="span" color="#ff5403">💖</Text> by Emmanuel
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
