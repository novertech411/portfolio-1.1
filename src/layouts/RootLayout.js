import { Box , Flex, Icon, Text} from "@chakra-ui/react";
import {  NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import "../layouts/RootLayout.css"
import Footersection from "../components/Footersection";
export default function RootLayout() {
  return (
    <Box bg="dark.100"  color="white"  minHeight= "100vh" className="layout" >
      <Flex fontSize="1xl" justifyContent="center" p="0.6rem" bgGradient='linear(to-r, #4158d0, #c850c0 , #ffcc70)'>
       <Text  >Open to opportunities  </Text>
       <NavLink  to='/contact' as='u'>  &nbsp;<Text as="u">Contact me  </Text> &nbsp;</NavLink>
       <Icon as={ArrowForwardIcon} />
      </Flex>


      <Navbar />
      <Outlet />
      
      <Footersection />
    </Box>
  );
}
