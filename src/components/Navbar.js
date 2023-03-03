import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";

import Hamburger from "./hamburger/Hamburger";

export default function Navbar() {
  return (
    <Flex p="30px">
      <Box
        display="flex"
        bg="#dc3545"
        fontSize="20px"
        justifyContent="center"
        alignItems="center"
        boxSize="55px"
        borderRadius="50%"
       
      >
      </Box>
      <Spacer />
      <Box p="3" m="auto" bg="brand.100" borderRadius="50%" boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)">
        <Hamburger />
      </Box>
    </Flex>
  );
}
