import {
  Box,
  Flex,
  Spacer,
  Text,
  Show,
  HStack,
  Circle,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      display: "block",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transitionEnd: {
        display: "none"
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <Box
      position="sticky"
      top="4"
      zIndex="1000"
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100%"
    >
      {/* Main Navbar Bar */}
      <Flex
        width={{ base: "92%", md: "90%" }}
        bg="rgba(26, 26, 26, 0.7)"
        backdropFilter="blur(12px)"
        border="1px solid rgba(255, 255, 255, 0.05)"
        boxShadow="0 20px 40px -15px rgba(0, 0, 0, 0.5)"
        borderRadius="full"
        p="8px"
        px="24px"
        alignItems="center"
        transition="all 0.3s ease"
      >
        {/* Logo / Brand Circle */}
        <Link href="#home" style={{ textDecoration: "none" }}>
          <Circle
            bg="rgba(26, 26, 26, 0.8)"
            border="1px solid rgba(255, 255, 255, 0.08)"
            fontSize="lg"
            fontWeight="bold"
            boxSize="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ borderColor: "#ff5403", transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            <Text color="#ff5403">S</Text>
          </Circle>
        </Link>
        
        <Spacer />

        {/* Desktop Links (Show above md) */}
        <Show above="md">
          <HStack spacing={8} mr={4}>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                _hover={{ textDecoration: "none" }}
              >
                <HStack spacing={1.5} color="gray.400" _hover={{ color: "white" }} transition="color 0.2s">
                  <Text fontSize="sm" fontWeight="bold">
                    {link.name}
                  </Text>
                </HStack>
              </Link>
            ))}
          </HStack>
        </Show>

        {/* Mobile Hamburger (Show below md) */}
        <Show below="md">
          <Box mr={2}>
            {/* Hamburger Button */}
            <Box
              as="button"
              onClick={toggleMenu}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              width="22px"
              height="16px"
              background="transparent"
              border="none"
              cursor="pointer"
              padding="0"
              _focus={{ outline: "none" }}
              aria-label="Toggle Menu"
            >
              <motion.div
                style={{ width: "22px", height: "2px", backgroundColor: "#ff5403", borderRadius: "10px", transformOrigin: "left center" }}
                animate={isOpen ? { rotate: 45, x: 2, y: -0.5 } : { rotate: 0, x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                style={{ width: "22px", height: "2px", backgroundColor: "#ff5403", borderRadius: "10px" }}
                animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.div
                style={{ width: "22px", height: "2px", backgroundColor: "#ff5403", borderRadius: "10px", transformOrigin: "left center" }}
                animate={isOpen ? { rotate: -45, x: 2, y: 0.5 } : { rotate: 0, x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Box>
          </Box>
        </Show>
      </Flex>

      {/* Mobile Dropdown Panel (Show below md) */}
      <Show below="md">
        <Box w="100%" display="flex" justifyContent="center">
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            style={{
              width: "92%",
              marginTop: "8px",
              pointerEvents: isOpen ? "auto" : "none",
              zIndex: 999
            }}
          >
            <Flex
              direction="column"
              bg="rgba(26, 26, 26, 0.95)"
              backdropFilter="blur(16px)"
              border="1px solid rgba(255, 255, 255, 0.05)"
              boxShadow="0 20px 40px rgba(0,0,0,0.6)"
              borderRadius="2xl"
              p={6}
              gap={4}
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={toggleMenu}
                  _hover={{ textDecoration: "none" }}
                >
                  <HStack spacing={3} py={2} borderBottom="1px solid rgba(255,255,255,0.02)">
                    <Text fontSize="md" fontWeight="bold" color="white" _hover={{ color: "#ff5403" }}>
                      {link.name}
                    </Text>
                  </HStack>
                </Link>
              ))}
            </Flex>
          </motion.div>
        </Box>
      </Show>
    </Box>
  );
}
