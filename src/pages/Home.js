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
import avater from "../assets/images/animate.png"
import { Typewriter } from "react-simple-typewriter";

import Herosection from "../components/Herosection";
import Projectsection from "../components/Projectsection";
import Hiresection from "../components/Hiresection";
export default function Home() {
  return (
    <Box> 
      <Grid templateColumns="repeat(12, 1fr)"  >
        <GridItem  my={6} justifyContent="cener" colSpan={{ base: 12, md:6, xl: 6 }}  >
<Box     >
  <Image   margin="auto" src={avater}/>
</Box>

        </GridItem >
        <GridItem  my={6} colSpan={{ base: 12, md: 6, xl: 6}} textAlign="center">
          <Text as="b" fontSize="xl">
            Hay!
          </Text>
          <Text fontSize="5xl">
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
          <Box fontSize="2xl" color="brand.200">
            I have a passion for technology.
          </Box>
          <Flex
            justifyContent="center"
            m="5"
            color="brand.200"
            fontSize="2xl"
            flexDirection="row"
          >
            <a style={heroLink}>
              Know More&nbsp;
              <span style={{ marginTop: "7px" }}>
                <AiOutlineLink />
              </span>
            </a>
            &nbsp;about me
          </Flex>
          <Flex fontSize="22" justifyContent="center">
            {" "}
            Follow me &nbsp;{" "}
            <Flex mt="1px" fontSize={34}>
              {" "}
              <a style={{ hover: { color: "#0d6efd" } }}>
                <AiOutlineTwitter />
              </a>
              <a>
                {" "}
                <AiFillGithub />
              </a>{" "}
              <a>
                {" "}
                <AiFillMediumSquare />
              </a>
            </Flex>{" "}
          </Flex>

          <Stack
            m={8}
            direction="row"
            spacing={5}
            align="center
          "
            justifyContent="center"
          >
            <Button
              fontSize="22"
              boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
              bg="brand.100"
              borderRadius={10}
              py={8}
              px={5}
              fontWeight="light"
              _hover={{ background: "brand.100" }}
            >
              <AiOutlineMail />
              &nbsp;Email me
            </Button>
            <Button
              fontSize="21"
              boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
              colorScheme="brand.100"
              py={8}
              px={5}
              border="1px"
              borderRadius={10}
              _hover={{ background: "brand.100" }}
              borderColor="brand.100"
              fontWeight="light"
            >
              <AiOutlineCloudDownload /> &nbsp;Resume
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    <Herosection/>
    <Projectsection />
    <Hiresection />
    </Box>
  );
}
const heroLink = {
  color: "#ff5403",
  display: "flex",
  cursor: "pointer",
};
