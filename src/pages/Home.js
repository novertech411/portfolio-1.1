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
  Link,
  Text,
  Container,
  Circle,
  VStack,
  HStack
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import Projectsection from "../components/Projectsection";
import Hiresection from "../components/Hiresection";
import Marquee from "../components/Marquee";
import ExperienceTree from "../components/ExperienceTree";
import SkillsAndEducation from "../components/SkillsAndEducation";
import Contact from "./Contact";
import "../components/bubble.css";
import resuma from "../assets/resuma/Eyinmosan_Sholaye_new.pdf";

// A beautiful, interactive syntax-highlighted code editor mockup
const CodeBox = () => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      w="100%"
      maxW={{ base: "100%", md: "500px", lg: "520px" }}
      minW={0}
      bg="#121212"
      borderRadius="2xl"
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.7), 8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.02)"
      border="1px solid rgba(255, 255, 255, 0.05)"
      overflow="hidden"
    >
      {/* OS-style Title Bar */}
      <Flex
        bg="#181818"
        px={5}
        py={3.5}
        alignItems="center"
        borderBottom="1px solid rgba(255, 255, 255, 0.05)"
        justifyContent="space-between"
      >
        <Flex gap={2}>
          <Circle size="12px" bg="#ff5f56" />
          <Circle size="12px" bg="#ffbd2e" />
          <Circle size="12px" bg="#27c93f" />
        </Flex>

        {/* Filename tab with active state styling */}
        <Flex
          bg="#121212"
          px={4}
          py={1.5}
          borderRadius="md"
          border="1px solid rgba(255, 255, 255, 0.05)"
          borderBottom="none"
          alignItems="center"
          gap={2}
        >
          <Text fontSize="xs" fontWeight="bold" color="#ff5403">JS</Text>
          <Text color="gray.300" fontSize="xs" fontWeight="semibold">
            developer.js
          </Text>
        </Flex>

        <Box w="36px" /> {/* spacing placeholder */}
      </Flex>

      {/* Editor Body */}
      <Flex p={5} overflowX="auto" fontSize={{ base: "xs", md: "sm" }} fontFamily="mono" lineHeight="1.6" textAlign="left" minW={0}>
        {/* Line Numbers */}
        <VStack spacing={0} align="flex-end" pr={4} color="gray.600" userSelect="none" borderRight="1px solid rgba(255, 255, 255, 0.05)">
          {Array.from({ length: 18 }, (_, i) => (
            <Text key={i} fontSize="xs">{String(i + 1).padStart(2, '0')}</Text>
          ))}
        </VStack>

        {/* Code Content */}
        <Box pl={4} flex="1" whiteSpace="pre" minW={0}>
          <Text as="span" color="#c678dd">const </Text>
          <Text as="span" color="#e5c07b">developer </Text>
          <Text as="span" color="#56b6c2">= </Text>
          <Text as="span" color="white">{"{"}</Text>
          {"\n"}
          <Text as="span" color="#e06c75">  name</Text>
          <Text as="span" color="white">: </Text>
          <Text as="span" color="#98c379">"Eyinmosan Sholaye"</Text>
          <Text as="span" color="white">,</Text>
          {"\n"}
          <Text as="span" color="#e06c75">  role</Text>
          <Text as="span" color="white">: </Text>
          <Text as="span" color="#98c379">"Lead Frontend Developer"</Text>
          <Text as="span" color="white">,</Text>
          {"\n"}
          <Text as="span" color="#e06c75">  experience</Text>
          <Text as="span" color="white">: </Text>
          <Text as="span" color="#98c379">"6+ Years"</Text>
          <Text as="span" color="white">,</Text>
          {"\n"}
          <Text as="span" color="#e06c75">  skills</Text>
          <Text as="span" color="white">: [</Text>
          {"\n"}
          <Text as="span" color="#98c379">    "React"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"Next.js"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"TypeScript"</Text>
          <Text as="span" color="white">,</Text>
          {"\n"}
          <Text as="span" color="#98c379">    "Chakra UI"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"Tailwind CSS"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"Sass"</Text>
          <Text as="span" color="white">,</Text>
          {"\n"}
          <Text as="span" color="#98c379">    "Redux"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"Firebase"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"Supabase"</Text>
          <Text as="span" color="white">,</Text>
          {"\n"}
          <Text as="span" color="#98c379">    "Electron"</Text>
          <Text as="span" color="white">, </Text>
          <Text as="span" color="#98c379">"Git & GitHub"</Text>
          {"\n"}
          <Text as="span" color="white">  ],</Text>
          {"\n"}
          <Text as="span" color="#e06c75">  passion</Text>
          <Text as="span" color="white">: </Text>
          <Text as="span" color="#98c379">"Crafting beautiful & interactive interfaces"</Text>
          {"\n"}
          <Text as="span" color="white">{"};"}</Text>
          {"\n"}
          {"\n"}
          <Text as="span" color="gray.600">{"// Happy coding! 🚀"}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

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
          <Box flex="1.2" textAlign={{ base: "center", lg: "left" }}>
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

            {/* Premium Stats Grid */}
            <Flex
              gap={{ base: 6, md: 10 }}
              my={8}
              justifyContent={{ base: "center", lg: "flex-start" }}
              alignItems="center"
            >
              <Box>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="#ff5403" lineHeight="1">
                  6+
                </Text>
                <Text fontSize="xs" color="gray.400" mt={1} fontWeight="medium" textTransform="uppercase" letterSpacing="wider">
                  Years Experience
                </Text>
              </Box>
              <Box height="40px" width="1px" bg="rgba(255,255,255,0.1)" />
              <Box>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="#ff5403" lineHeight="1">
                  20+
                </Text>
                <Text fontSize="xs" color="gray.400" mt={1} fontWeight="medium" textTransform="uppercase" letterSpacing="wider">
                  Projects Done
                </Text>
              </Box>
              <Box height="40px" width="1px" bg="rgba(255,255,255,0.1)" />
              <Box>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="#ff5403" lineHeight="1">
                  100%
                </Text>
                <Text fontSize="xs" color="gray.400" mt={1} fontWeight="medium" textTransform="uppercase" letterSpacing="wider">
                  Satisfaction
                </Text>
              </Box>
            </Flex>

            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={6}
              my={6}
              alignItems="center"
              justifyContent={{ base: "center", lg: "flex-start" }}
              w="100%"
            >
              <HStack spacing={4} justifyContent="center">
                <Link href="https://www.linkedin.com/in/eyinmosan-sholaye-080732172" isExternal>
                  <IconButton
                    variant="unstyled"
                    fontSize="2xl"
                    color="gray.400"
                    _hover={{ color: "#0077b5", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                    icon={<AiFillLinkedin />}
                    aria-label="LinkedIn Link"
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
                    aria-label="GitHub Link"
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
                    aria-label="Twitter Link"
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
                    aria-label="WhatsApp Link"
                  />
                </Link>
              </HStack>

              <Link as="a" href={resuma} download="Emmanuel_Sholaye.pdf" style={{ textDecoration: 'none' }} ml={{ base: 0, sm: "auto", lg: 0 }}>
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

          <Box flex="0.8" w="100%" display="flex" justifyContent={{ base: "center", lg: "flex-end" }} minW={0}>
            <CodeBox />
          </Box>
        </Flex>
      </Container>

      <Marquee />

      <ExperienceTree />

      <Projectsection />

      <SkillsAndEducation />

      <Hiresection />
      {/* <Contact /> */}
    </Box>
  );
}
