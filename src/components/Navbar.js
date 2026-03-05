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
import { Input } from "@chakra-ui/react"
import Hamburger from "./hamburger/Hamburger";
import "./hamburger/hamburger.css";
import { motion, Variants } from "framer-motion";
import logo from "../assets/images/brand.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(true);
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
    <Box bg="black" color="white" position="sticky" top="0" zIndex="1000">
      <Flex p="20px" px="5%">
        <Circle
          bg="white"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          boxSize="50px"
          p={1}
        >
          <Image src={logo} style={{ filter: 'grayscale(100%)' }} />
        </Circle>
        <Spacer />

        <Show above="md">
          <HStack spacing={6} mr="40px">
            <a href="#home">
              <Text _hover={{ color: "gray.300" }} as="b" color="white">
                Home
              </Text>
            </a>
            <a href="#work">
              <Text _hover={{ color: "gray.300" }} as="b" color="white">
                Work
              </Text>
            </a>
            <a href="#about">
              <Text _hover={{ color: "gray.300" }} as="b" color="white">
                About me
              </Text>
            </a>
            <a href="#contact">
              <Text _hover={{ color: "gray.300" }} as="b" color="white">
                Contact
              </Text>
            </a>
          </HStack>
        </Show>
        <Show below="md">
          <Box pos="fixed" right="7" zIndex={3}>
            <Circle
              p="2"
              bg="white"
              boxShadow="0 7px 29px 0 rgba(0, 0, 0, 0.3)"
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
          bg="black"
          w="100%"
          h="100%"
          zIndex={2}
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
            <a
              href="#home"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> Home </Text>
            </a>
            <a
              href="#work"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> Work </Text>
            </a>
            <a
              href="#about"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> About </Text>
            </a>
            <a
              href="#contact"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> Contact </Text>
            </a>
          </Stack>
        </Flex>
      </Show>
    </Box>
  );
}
//  boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"
// onClick={()  => setIsOpen(!isOpen)}
