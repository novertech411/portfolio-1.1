import { Box , Icon, Text} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import "../layouts/RootLayout.css"
export default function RootLayout() {
  return (
    <Box bg="dark.100"  px="0.5rem" color="white"  minHeight= "100vh" className="layout" >
      <Box>
       <Text fontSize="2xl" align="center" p="0.6rem" bgGradient='linear(to-r, #4158d0, #c850c0 , #ffcc70)'>Open to opportunities<Link  to='/contact' as='u'> Contact me</Link> <Icon as={ArrowForwardIcon} /> </Text>
      </Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}
