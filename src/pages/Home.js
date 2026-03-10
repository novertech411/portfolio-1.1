import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineCloudDownload,
  AiFillLinkedin
} from "react-icons/ai";

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
import "../components/bubble.css";
import { useState } from "react";
import resuma from "../assets/resuma/Emmanuel sholaye.pdf";

export default function Home() {
  return (
    <Box id="home" pt="10rem" pb="5rem" bg="#050505" color="white" minH="100vh">
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

            <Text fontSize="lg" color="gray.400" mb={8} maxW="container.md" mx={{ base: "auto", lg: "0" }} lineHeight="1.8">
              Frontend Developer with experience in designing, building, and maintaining web applications.
              Proficient in React, Next.js, CSS, JavaScript, TypeScript, and various front-end development tools.
              Proven track record in collaborating with cross-functional teams to develop and implement innovative features.
              Passionate about leveraging expertise to support cutting-edge web solutions, ensure top software performance,
              and nurture vibrant developer communities.
            </Text>

            <Flex
              gap={8}
              mb={8}
              flexWrap="wrap"
              justifyContent={{ base: "center", lg: "flex-start" }}
              borderTop="1px solid rgba(255,255,255,0.1)"
              borderBottom="1px solid rgba(255,255,255,0.1)"
              py={6}
            >
              <Box>
                <Text color="gray.500" fontSize="sm" mb={1}>Email</Text>
                <Link href="mailto:sholayeeyinmosan@gmail.com" fontWeight="medium" _hover={{ color: "#ff5403" }}>
                  sholayeeyinmosan@gmail.com
                </Link>
              </Box>
              <Box>
                <Text color="gray.500" fontSize="sm" mb={1}>Phone</Text>
                <Text fontWeight="medium">+234 906 756 6893</Text>
              </Box>
              <Box>
                <Text color="gray.500" fontSize="sm" mb={1}>Website</Text>
                <Link href="https://sholadev.vercel.app/" isExternal fontWeight="medium" _hover={{ color: "#ff5403" }}>
                  sholadev.vercel.app
                </Link>
              </Box>
            </Flex>

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

              <Link as="a" href={resuma} download="Emmanuel_Sholaye.pdf" style={{ textDecoration: 'none', marginLeft: 'auto' }}>
                <Button
                  bg="transparent"
                  color="white"
                  border="1px solid rgba(255,255,255,0.2)"
                  px={8}
                  py={6}
                  borderRadius="full"
                  _hover={{ bg: "white", color: "black" }}
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
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-5%",
                left: "-5%",
                width: "110%",
                height: "110%",
                background: "radial-gradient(circle, rgba(255,84,3,0.15) 0%, rgba(0,0,0,0) 70%)",
                zIndex: 0
              }}
            >
              <Image
                src={avater}
                alt="Eyinmosan Sholaye"
                width={{ base: "80%", md: "400px" }}
                height="auto"
                mx="auto"
                position="relative"
                zIndex={1}
                filter="drop-shadow(0px 20px 30px rgba(0,0,0,0.5))"
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
    </Box>
  );
}
