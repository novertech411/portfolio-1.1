import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineCloudDownload,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { motion } from "framer-motion";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  Container
} from "@chakra-ui/react";
import avater from "../assets/images/animate.png";
import { Typewriter } from "react-simple-typewriter";
import Projectsection from "../components/Projectsection";
import Hiresection from "../components/Hiresection";
import Marquee from "../components/Marquee";
import ExperienceTree from "../components/ExperienceTree";
import SkillsAndEducation from "../components/SkillsAndEducation";
import Contact from "./Contact";
import "../components/bubble.css";
import { useState } from "react";
import resuma from "../assets/resuma/Emmanuel sholaye.pdf";

export default function Home() {
  return (
    <Box id="home" pt="10rem" pb="5rem" bg="#1a1a1a" color="white" minH="100vh">
      <Container maxW="container.xl">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={10}
        >
          <Box flex="1" textAlign={{ base: "center", lg: "left" }}>
            <Flex alignItems="center" gap={2} mb={4} justifyContent={{ base: "center", lg: "flex-start" }}>
              <Text color="yellow.400" fontSize="xl">👋</Text>
              <Text color="gray.400" fontSize="lg" fontWeight="medium">Hey There!</Text>
            </Flex>

            <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight="800" lineHeight="1.1" mb={6}>
              I'm Eyinmosan <br />
              <Text as="span" color="#ff5403">Sholaye</Text>
            </Text>

            <Box fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600" color="gray.300" mb={6}>
              <Typewriter
                words={["Frontend Developer", "React & Next.js Expert", "UI/UX Enthusiast"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                cursorColor="#ff5403"
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </Box>

            <Text as={motion.p} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} fontSize="lg" color="gray.400" mb={8} maxW="container.md" mx={{ base: "auto", lg: "0" }} lineHeight="1.8">
              Creative Frontend Developer focused on building dynamic, high-performance web applications with modern minimalist designs.
            </Text>



            <Flex gap={4} justifyContent={{ base: "center", lg: "flex-start" }} alignItems="center">
              <Link href="https://www.linkedin.com/in/eyinmosan-sholaye-080732172" isExternal>
                <IconButton
                  variant="unstyled"
                  fontSize="2xl"
                  color="gray.400"
                  _hover={{ color: "#0077b5", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  icon={<AiFillLinkedin />}
                />
              </Link>
              <Link href="https://github.com/novertech411" isExternal>
                <IconButton
                  variant="unstyled"
                  fontSize="2xl"
                  color="gray.400"
                  _hover={{ color: "white", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  icon={<AiFillGithub />}
                />
              </Link>
              <Link href="https://x.com/NoverPrime" isExternal>
                <IconButton
                  variant="unstyled"
                  fontSize="2xl"
                  color="gray.400"
                  _hover={{ color: "#1DA1F2", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  icon={<AiOutlineTwitter />}
                />
              </Link>
              <Link href="https://wa.me/2349067566893" isExternal>
                <IconButton
                  variant="unstyled"
                  fontSize="2xl"
                  color="gray.400"
                  _hover={{ color: "#25D366", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  icon={<AiOutlineWhatsApp />}
                />
              </Link>

              <Link as="a" href={resuma} download="Emmanuel_Sholaye.pdf" style={{ textDecoration: 'none', marginLeft: 'auto' }}>
                <Button
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.8), inset -5px -5px 10px rgba(255,255,255,0.05)", scale: 0.98 }}
                  bg="#ff5403"
                  color="white"
                  border="none"
                  boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)"
                  px={8}
                  py={6}
                  borderRadius="full"
                  _focus={{ outline: "none" }}
                  rightIcon={<AiOutlineCloudDownload />}
                  transition="all 0.3s ease"
                >
                  Download Resume
                </Button>
              </Link>
            </Flex>
          </Box>

          <Box flex="1" display="flex" justifyContent={{ base: "center", lg: "flex-end" }}>
            <Box
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              position="relative"
              display="inline-block"
              borderRadius="full"
              border="none"
              boxShadow="12px 12px 24px rgba(0, 0, 0, 0.8), -12px -12px 24px rgba(255, 255, 255, 0.05)"
              p={4}
              bg="#1a1a1a"
            >
              <Image
                src={avater}
                alt="Eyinmosan Sholaye"
                width={{ base: "80%", md: "400px" }}
                height="auto"
                mx="auto"
                position="relative"
                zIndex={1}
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      <Marquee />
      <ExperienceTree />
      <SkillsAndEducation />

      <Projectsection />
      <Hiresection />
      <Contact />
    </Box>
  );
}
