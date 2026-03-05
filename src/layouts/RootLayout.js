import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "../layouts/RootLayout.css";
import Footersection from "../components/Footersection";
import { FaArrowCircleUp } from "react-icons/fa";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled < 300) {
      setVisible(false);
      console.log("king");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <Box bg="dark.100" color="white" minHeight="100vh" className="layout">
      <Flex
        fontSize="1xl"
        justifyContent="center"
        p="0.6rem"
        bg="gray.800"
        color="gray.300"
      >
        <Text>Open to opportunities </Text>
        <a href="#contact" style={{ display: "flex", alignItems: "center" }}>
          {" "}
          &nbsp;<Text as="u">Contact me </Text> &nbsp;
          <Icon as={ArrowForwardIcon} />
        </a>
      </Flex>

      {visible && (
        <Icon
          pos="fixed"
          zIndex={2}
          bottom="20"
          right="10"
          color="white"
          fontSize="3rem"
          as={FaArrowCircleUp}
          onClick={scrollToTop}
          cursor="pointer"
        />
      )}

      <Navbar />
      {children}

      <Footersection />
    </Box>
  );
}
