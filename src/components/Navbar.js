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
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from '@chakra-ui/react'
import Hamburger from "./hamburger/Hamburger";
import "./hamburger/hamburger.css"

export default function Navbar() {
  const activeLink ="color: brand.100 ";
  const normalLink = ""

const [isOpen, setIsOpen] = useState('fales')

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
            <NavLink to="/"    >
              <Text as="b" color="brand.100">
                Home
              </Text>
            </NavLink>
            <NavLink to="/work"   
            
            >
              <Text className={(isActive)  => (isActive ? activeLink : normalLink)} as="b" color="WhiteAlpha">
                Work
              </Text>
            </NavLink>

            <NavLink to="/about">
              {" "}
              <Text className={(isActive)  => (isActive ? activeLink : normalLink)} as="b" color="WhiteAlpha">
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
        
          <Box pos="fixed" right="10" zIndex={2}  >
           
            <Circle p='2' bg="brand.100"    boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"  >
            <div id="menu_button"     >
      <Input type="checkbox" id="menu_checkbox"/>
      <label for="menu_checkbox" id="menu_label"   >
        <div id="menu_text_bar"   ></div>
      </label>
   
  </div>
            </Circle>
          </Box>
        </Show>
      </Flex>

{isOpen && 

      <Flex pos="fixed"  bgGradient='linear( to-bl  , #000000 5% , #782701 )' 
      w="100%"
      h="100%"
    zIndex={1}
      top="0"
      left="0"
      flexDirection="column"

      display="none"
      >

        <Stack  textAlign="center" spacing={12}  fontSize="4xl"  margin="auto">  
 <NavLink to="/"   onClick={()  => setIsOpen(!isOpen)}> <Text as="b" color="brand.100"> Home </Text></NavLink>
 <NavLink to="/work"   onClick={()  => setIsOpen(!isOpen)}> <Text as="b" color="white"> Work </Text></NavLink>
 <NavLink to="/about"  onClick={()  => setIsOpen(!isOpen)}> <Text as="b" color="white"> About </Text></NavLink>
 <NavLink to="/contact"  onClick={()  => setIsOpen(!isOpen)}> <Text as="b" color="white"> Contact </Text></NavLink>
            </Stack>
      </Flex>

}
    </Box>
  );
}
//  boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"
// onClick={()  => setIsOpen(!isOpen)}