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
import "./hamburger/hamburger.css";
import { motion } from "framer-motion";
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
    <Box position="sticky" top="4" zIndex="1000" display="flex" justifyContent="center">
      <Flex 
        width={{ base: "95%", md: "90%" }} 
        bg="rgba(26, 26, 26, 0.6)" 
        backdropFilter="blur(12px)"
        boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)"
        border="1px solid rgba(255,255,255,0.05)"
        borderRadius="full" 
        p="10px" 
        px="30px"
        alignItems="center"
      >
        <Circle
          bg="rgba(26, 26, 26, 0.5)"
          backdropFilter="blur(5px)"
          boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)"
          border="1px solid rgba(255,255,255,0.05)"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          boxSize="50px"
          p={1}
          overflow="hidden"
        >
          <Image src={logo} />
        </Circle>
        <Spacer />

        <Show above="md">
          <HStack spacing={6} mr="40px">
            <a href="#home">
              <Text _hover={{ color: "#ff5403" }} as="b" color="white" transition="all 0.3s">
                Home
              </Text>
            </a>
            <a href="#experience">
              <Text _hover={{ color: "#ff5403" }} as="b" color="white" transition="all 0.3s">
                Experience
              </Text>
            </a>
            <a href="#projects">
              <Text _hover={{ color: "#ff5403" }} as="b" color="white" transition="all 0.3s">
                Projects
              </Text>
            </a>
            <a href="#skills">
              <Text _hover={{ color: "#ff5403" }} as="b" color="white" transition="all 0.3s">
                Skills
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
              href="#experience"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> Experience </Text>
            </a>
            <a
              href="#projects"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> Projects </Text>
            </a>
            <a
              href="#skills"
              onClick={() => {
                handleSet();
                handleCheck();
              }}
              style={{ color: "white" }}
            >
              <Text as="b"> Skills </Text>
            </a>
          </Stack>
        </Flex>
      </Show>
    </Box>
  );
}
//  boxShadow="0 7px 29px 0  rgb(255 84 3 / 30%)"
// onClick={()  => setIsOpen(!isOpen)}
