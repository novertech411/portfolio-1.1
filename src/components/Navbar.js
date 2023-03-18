import {
  Box,
  Flex,
  Spacer,
  Text,
  Show,
  HStack,
  Circle,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import Hamburger from "./hamburger/Hamburger";
import "./hamburger/hamburger.css";
import { motion, Variants } from "framer-motion";
import logo from "../assets/images/brand.png"

export default function Navbar() {
  const activeLink = { color: "rgb(255, 84, 3)" };
  const normalLink = "";
  const [isOpen, setIsOpen] = useState("false");
  const [checked, setChecked] = useState("true");
  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSet = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at  90% 70px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 91%  95px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
      },
    },
  };
  const childVariants = {
    open: {
      x: 0,
      transition: { type: "spring", dely: 2 },
    },

    closed: {
      x: "100vw",
      transition: { type: "spring", dely: 2 },
    },
  };

  return (
    <Box>
      <Flex p="30px" px="5%">
        <Circle
          bg="#F44133"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          boxSize="50px"
          p={1}
        
        >
          <Image src={logo} />
        </Circle>
        <Spacer />

        <Show above="md">
          <HStack spacing={6} mr="40px">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              <Text _hover={{ color: "brand.100" }} as="b">
                Home
              </Text>
            </NavLink>
            <NavLink
              to="/work"
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              <Text _hover={{ color: "brand.100" }} as="b" color="WhiteAlpha">
                Work
              </Text>
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              {" "}
              <Text _hover={{ color: "brand.100" }} as="b" color="WhiteAlpha">
                About me
              </Text>{" "}
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              {" "}
              <Text _hover={{ color: "brand.100" }} as="b" color="WhiteAlpha">
                Contact
              </Text>{" "}
            </NavLink>
          </HStack>
        </Show>
        <Show below="md">
          <Box pos="fixed" right="10" zIndex={2}>
            <Circle
              p="2"
              bg="brand.100"
              boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"
            >
              <div id="menu_button">
                <Input
                  type="checkbox"
                  id="menu_checkbox"
                  checked={checked}
                  onClick={() => {
                    handleSet();
                    handleCheck();
                  }}
                />
                <label for="menu_checkbox" id="menu_label">
                  <div id="menu_text_bar"></div>
                </label>
              </div>
            </Circle>
          </Box>
        </Show>
      </Flex>

      <Show below="md">
        <Flex
          pos="fixed"
          bgGradient="linear( to-bl  , #000000 5% , #782701 )"
          w="100%"
          h="100%"
          zIndex={1}
          top="0"
          left="0"
          flexDirection="column"
          as={motion.div}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={containerVariants}
        
        >
          <Stack
            textAlign="center"
            spacing={12}
            fontSize="4xl"
            margin="auto"
            as={motion.div}
            initial={{ x: "100vw" }}
            variants={childVariants}
            animate={isOpen ? "open" : "closed"}
          >
            <NavLink
              to="/"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              {" "}
              <Text as="b"> Home </Text>
            </NavLink>
            <NavLink
              to="/work"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              {" "}
              <Text as="b"> Work </Text>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              {" "}
              <Text as="b"> About </Text>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={({ isActive }) => ({
                color: isActive ? "#ff5403" : "#ffff",
              })}
            >
              {" "}
              <Text as="b"> Contact </Text>
            </NavLink>
          </Stack>
        </Flex>
      </Show>
    </Box>
  );
}
//  boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"
// onClick={()  => setIsOpen(!isOpen)}
