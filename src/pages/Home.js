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
  Grid,
  GridItem,
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
export default function Home() {
  return (
    <Box>

      <Box  width={{base:'95%', md:'90%' , xl: '70%' }} margin="auto" >
      <Flex   flexDirection={{base:'column' , md:'row'}} justifyContent='space-around'    >
       
        <Box
         
         textAlign={{base:"center", md:"left"}}
        >
          <Text as="b" fontSize="xl">
            Hay!
          </Text>
          <Text fontSize="4xl">
            I'm <span style={{ color: "#ff5403" }}>Sholaye</span>
          </Text>
          <Box
            as="b"
            fontSize="4xl"
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
          <Box
          
            my="4"
            color="brand.200"
           
            flexDirection="row"
          >
           <NavLink><Button  fontSize="1xl" bg="none" p="0" color="brand.100" rightIcon={< AiOutlineLink />}>know More</Button></NavLink>
           about me
          </Box>
          <Flex fontSize="22" justifyContent={{base:"center", md:"left"}}>
           
            Follow me &nbsp;
            <Flex mt="1px" fontSize={34}>
             
              <a style={{ hover: { color: "#0d6efd" } }}>
                <AiOutlineTwitter />
              </a>
              <a>
               
                <AiFillGithub />
              </a>{" "}
              <a>
                {" "}
                <AiFillMediumSquare />
              </a>
            </Flex>{" "}
          </Flex>

          <Flex
            my={8}
            direction="row"
            gap={5}
            justifyContent={{base:"center", md:"left"}}
          >
            <Button
              fontSize="19"
              boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
              bg="brand.100"
              borderRadius={10}
              py={8}
              px={5}
              fontWeight="light"
              _hover={{ background: "brand.100" }}
              leftIcon={ <AiOutlineMail />}
            >
             
            Email me
            </Button>
            <Button
              fontSize="19"
              boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
              colorScheme="brand.100"
              py={8}
              px={5}
              border="1px"
              borderRadius={10}
              _hover={{ background: "brand.100" }}
              borderColor="brand.100"
              fontWeight="light"
              leftIcon={<AiOutlineCloudDownload />}
            >
               Resume
            </Button>
          </Flex>
        </Box>
        <Box   >
          <Box >
            <Image width={{base:'80%', md:'80%' , xl: '100%' }}   margin="auto" src={avater} />
          </Box>
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
