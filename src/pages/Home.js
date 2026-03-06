import {
  AiOutlineLink,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineCloudDownload,
} from "react-icons/ai";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import avater from "../assets/images/animate.png";
import { Typewriter } from "react-simple-typewriter";
import Projectsection from "../components/Projectsection";
import Hiresection from "../components/Hiresection";
import "../components/bubble.css";
import { useState } from "react";
import resuma from "../assets/resuma/Emmanuel sholaye.pdf";
export default function Home() {
  const [isActive, setActive] = useState("false");

  function handleClick() {
    setActive(!isActive);
  }

  return (
    <Box id="home" py="5rem">
      <Box
        p={{ base: "0%", xl: "5%" }}
        width={{ base: "90%", md: "75%", xl: "75%" }}
        mx="auto"
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ md: "space-evenly", xl: "space-evenly" }}
        >
          <Box
            textAlign={{ base: "center", md: "left" }}
            ml={{ md: "2rem", xl: "2rem" }}
            py="1rem"
          >
            <Text as="b" fontSize="xl">
              Hay!
            </Text>
            <Text fontSize="5xl">
              I'm <span style={{ color: "white" }}>Sholaye</span>
            </Text>
            <Box
              as="b"
              fontSize="3xl"
              color="gray.400"
              justifyContent="center"
            >
              <Typewriter
                words={["web developer", "technical writer", "oss contributor"]}
                loop={false}
                cursor
                cursorStyle="<"
                typeSpeed={70}
                cursorColor="white"
                deleteSpeed={190}
                delaySpeed={2000}
              />
            </Box>
            <Box fontSize="1xl" color="gray.400">
              I have a passion for technology.
            </Box>
            <Box my="3" color="gray.400" flexDirection="row">
              <a href="#about">
                <Button
                  fontSize="1xl"
                  variant="unstyled"
                  p="0"
                  _hover={{ color: "gray.300" }}
                  color="white"
                  rightIcon={<AiOutlineLink />}
                >
                  know More
                </Button>
              </a>
              &nbsp;about me
            </Box>
            <Flex fontSize="18" justifyContent={{ base: "center", md: "left" }}>
              <Box my="auto"> Follow me &nbsp; </Box>

              <Flex>
                <Link href="https://x.com/NoverPrime" isExternal>
                  <IconButton
                    variant="unstyled"
                    fontSize={30}
                    _hover={{ color: "#26a7de" }}
                    icon={<AiOutlineTwitter />}
                  />{" "}
                </Link>

                <Link href="https://github.com/novertech411" isExternal>
                  <IconButton
                    variant="unstyled"
                    fontSize={30}
                    _hover={{ color: "#6c757d" }}
                    icon={<AiFillGithub />}
                  />{" "}
                </Link>
                <Link href="https://medium.com/@novertech4" isExternal>
                  <IconButton
                    variant="unstyled"
                    fontSize={30}
                    _hover={{ color: "#6c757d" }}
                    icon={<AiFillMediumSquare />}
                  />{" "}
                </Link>
              </Flex>
            </Flex>

            <Stack
              my={8}
              direction="row"
              spacing={7}
              justifyContent={{ base: "center", md: "left" }}
            >
              <a href="#contact">
                <Button
                  fontSize="17"
                  boxShadow="0px 2px 8px 0px rgba(255,255,255,0.2)"
                  bg="white"
                  color="black"
                  borderRadius={10}
                  py={7}
                  px={4}
                  fontWeight="light"
                  _hover={{ background: "gray.300" }}
                  leftIcon={<AiOutlineMail />}
                  className={"confetti-button animate"}
                  id="button"
                  onClick={handleClick}
                >
                  Email me
                </Button>
              </a>
              <Link as="a" href={resuma} download="Emmanuel_Sholaye.pdf" style={{ textDecoration: 'none' }}>
                <Button
                  fontSize="17"
                  boxShadow="0px 2px 8px 0px rgba(255,255,255,0.2)"
                  colorScheme="gray"
                  color="white"
                  py={7}
                  px={4}
                  border="1px"
                  borderRadius={10}
                  _hover={{ background: "gray.700" }}
                  borderColor="white"
                  fontWeight="light"
                  leftIcon={<AiOutlineCloudDownload />}
                  className={"confetti-button animate"}
                >
                  Resume
                </Button>
              </Link>
            </Stack>
          </Box>
          <Box pb="3rem">
            <Image
              ml={{}}
              m={{ base: "auto", md: "left", xl: "auto" }}
              width={{ base: "80%", md: "80%", xl: "90%" }}
              src={avater}
            />
          </Box>
        </Flex>
        {/* <Herosection /> */}
        <Projectsection />
        <Hiresection />
      </Box >
    </Box >
  );
}

// //  <a style={{ hover: { color: "#0d6efd" } }}>
// <AiOutlineTwitter />
// </a>
// <a>

//   <AiFillGithub />
// </a>{" "}
// <a>
//   {" "}
//   <AiFillMediumSquare />
// </a>
///*{`confetti-button ${isActive ? "animate":"null"}` }  */
