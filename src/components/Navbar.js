import {
  Box,
  Flex,
  Spacer,
  Text,
  Avatar,
  Show,
  Hide,
  HStack,
  Circle,
  Stack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import Hamburger from "./hamburger/Hamburger";

export default function Navbar() {
  return (
    <Box>
      <Flex p="30px" px="5%">
        <Box
          bg="#dc3545"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          boxSize="40px"
          borderRadius="50%"
        ></Box>
        <Spacer />

        <Show above="md">
          <HStack spacing={6} mr="40px">
            <NavLink to="/">
              <Text as="b" color="brand.100">
                Home
              </Text>
            </NavLink>
            <NavLink to="/work">
              <Text _hover={{ color: "brand.100" }} as="b" color="WhiteAlpha">
                Work
              </Text>
            </NavLink>

            <NavLink to="/about">
              {" "}
              <Text _hover={{ color: "brand.100" }} as="b" color="WhiteAlpha">
                About me
              </Text>{" "}
            </NavLink>
            <NavLink to="/contact">
              {" "}
              <Text _hover={{ color: "brand.100" }} as="b" color="WhiteAlpha">
                Contact
              </Text>{" "}
            </NavLink>
          </HStack>
        </Show>
        <Show below="md">
          {" "}
          <Box pos="fixed" right="10" zIndex={2}>
            {" "}
            <Circle p="11" bg="brand.100">
              {" "}
              <Hamburger />{" "}
            </Circle>{" "}
          </Box>{" "}
        </Show>
      </Flex>

      <Flex pos="fixed"  bgGradient='linear( to-bl  , #000000 5% , #782701 )' 
      w="100%"
      h="100%"
    zIndex={1}
      top="0"
      left="0"
      flexDirection="column"
      >

        <Stack  textAlign="center" spacing={12}  fontSize="4xl"  margin="auto">  
 <NavLink to="/"> <Text as="b" color="white"> Home </Text></NavLink>
 <NavLink to="/"> <Text as="b" color="white"> Work </Text></NavLink>
 <NavLink to="/"> <Text as="b" color="white"> About </Text></NavLink>
 <NavLink to="/"> <Text as="b" color="white"> Contact </Text></NavLink>
            </Stack>
      </Flex>
    </Box>
  );
}
//  boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"
