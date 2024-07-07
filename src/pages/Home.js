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
  Stack,
  Text,
} from "@chakra-ui/react";
import avater from "../assets/images/animate.png";
import { Typewriter } from "react-simple-typewriter";
import Herosection from "../components/Herosection";
import Projectsection from "../components/Projectsection";
import Hiresection from "../components/Hiresection";
import { NavLink } from "react-router-dom";
import "../components/bubble.css";
import { useState } from "react";

export default function Home() {
  const [isActive, setActive] = useState("false");

  function handleClick() {
    setActive(!isActive);
  }

  return (
    <Box>
      <Box
        p={{ basc: "0%", xl: "5%" }}
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
              I'm <span style={{ color: "#ff5403" }}>Sholaye</span>
            </Text>
            <Box
              as="b"
              fontSize="3xl"
              color="brand.300"
              justifyContent="center
          "
            >
              <Typewriter
                words={["web developer", "technical writer", "oss contributor"]}
                loop={"false"}
                cursor
                cursorStyle="<"
                typeSpeed={70}
                cursorColor="#ff5403"
                deleteSpeed={190}
                delaySpeed={2000}
              />
            </Box>
            <Box fontSize="1xl" color="brand.200">
              I have a passion for technology.
            </Box>
            <Box my="3" color="brand.200" flexDirection="row">
              <NavLink to="/about">
                <Button
                  fontSize="1xl"
                  variant="unstyled"
                  p="0"
                  _hover={{ color: "#b53b02" }}
                  color="brand.100"
                  rightIcon={<AiOutlineLink />}
                >
                  know More
                </Button>
              </NavLink>
              &nbsp;about me
            </Box>
            <Flex fontSize="18" justifyContent={{ base: "center", md: "left" }}>
              <Box my="auto"> Follow me &nbsp; </Box>

              <Flex>
                <NavLink>
                  <IconButton
                    variant="unstyled"
                    fontSize={30}
                    _hover={{ color: "#26a7de" }}
                    icon={<AiOutlineTwitter />}
                  />{" "}
                </NavLink>
                <NavLink>
                  <IconButton
                    variant="unstyled"
                    fontSize={30}
                    _hover={{ color: "#6c757d" }}
                    icon={<AiFillGithub />}
                  />{" "}
                </NavLink>
                <NavLink>
                  <IconButton
                    variant="unstyled"
                    fontSize={30}
                    _hover={{ color: "#6c757d" }}
                    icon={<AiFillMediumSquare />}
                  />{" "}
                </NavLink>
              </Flex>
            </Flex>

            <Stack
              my={8}
              direction="row"
              spacing={7}
              justifyContent={{ base: "center", md: "left" }}
            >
              <NavLink>
                {" "}
                <Button
                  fontSize="17"
                  boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
                  bg="brand.100"
                  borderRadius={10}
                  py={7}
                  px={4}
                  fontWeight="light"
                  _hover={{ background: "brand.100" }}
                  leftIcon={<AiOutlineMail />}
                  className={"confetti-button animate"}
                  id="button"
                  onClick={handleClick}
                >
                  Email me
                </Button>{" "}
              </NavLink>
              <NavLink>
                <Button
                  fontSize="17"
                  boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
                  colorScheme="brand.100"
                  py={7}
                  px={4}
                  border="1px"
                  borderRadius={10}
                  _hover={{ background: "brand.100" }}
                  borderColor="brand.100"
                  fontWeight="light"
                  leftIcon={<AiOutlineCloudDownload />}
                  className={"confetti-button animate"}
                >
                  Resume
                </Button>
              </NavLink>
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
        <Herosection />
        <Projectsection />
        <Hiresection />
      </Box>
    </Box>
  );
}
const heroLink = {
  color: "#ff5403",
  display: "flex",
  cursor: "pointer",
};
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
