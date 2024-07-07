import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "../layouts/RootLayout.css";
import Footersection from "../components/Footersection";
import { FaArrowCircleUp } from "react-icons/fa";
import { useState } from "react";

export default function RootLayout() {
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
        bgGradient="linear(to-r, #4158d0, #c850c0 , #ffcc70)"
      >
        <Text>Open to opportunities </Text>
        <NavLink to="/contact" as="u">
          {" "}
          &nbsp;<Text as="u">Contact me </Text> &nbsp;
        </NavLink>
        <Icon as={ArrowForwardIcon} />
      </Flex>

      {visible && (
        <Icon
          pos="fixed"
          zIndex={2}
          bottom="20"
          right="10"
          color="#6fc2c5"
          fontSize="3rem"
          as={FaArrowCircleUp}
          onClick={scrollToTop}
        />
      )}

      <Navbar />
      <Outlet />

      <Footersection />
    </Box>
  );
}
