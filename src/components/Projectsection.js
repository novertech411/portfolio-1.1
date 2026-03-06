import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";

import Cardbar from "./Cardbar";
export default function Projectsection() {
  return (
    <Box py="34px" mx="auto" width={{ base: "100%", md: "85%" }}>
      <Flex
        justifyContent={{ base: "left", md: "center" }}
        direction={{ base: "column", md: "row" }}
      >
        <Text as="b" pt={3} color="white" fontSize={24}>
          Recent Projects
        </Text>{" "}
        <Spacer />{" "}
        <Button
          mt={{ base: "30px", md: "0px" }}
          ml="auto"
          width={{ base: "150px", md: "auto" }}
          fontSize="18"
          boxShadow="0px 2px 8px 0px rgba(255,255,255,0.2)"
          bg="white"
          color="black"
          borderRadius={10}
          py={8}
          px={4}
          fontWeight="light"
          _hover={{ background: "gray.300" }}
          className={"confetti-button animate"}
        >
          View More
        </Button>
      </Flex>

      <Flex pt="4rem" gap={10}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "left" }}


      >
        <Cardbar /> <Cardbar />
      </Flex>
    </Box>
  );
}
