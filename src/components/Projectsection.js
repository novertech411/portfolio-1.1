import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { BiDetail } from "react-icons/bi";
import projectImage from "../assets/images/project1.webp";
export default function Projectsection() {
  return (
    <Box py="34px" mx="auto" width="90%">
      <Flex justifyContent="center">
        <Text as="b" pt={3} color="#6fc2c5" fontSize={24}>
          Recent Projects
        </Text>{" "}
        <Spacer />{" "}
        <Button
          fontSize="18"
          boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
          bg="brand.100"
          borderRadius={10}
          py={8}
          px={4}
          fontWeight="light"
          _hover={{ background: "brand.100" }}
        >
          View More
        </Button>{" "}
      </Flex>

      <SimpleGrid
        px="0.5rem"
        pt="4rem"
        spacing={10}
        minChildWidth="250px"
        justifyContent="center"
      >
        <Card mx="1rem" bg="dark.300" color="white">
          <Image borderTopRadius="5px" objectFit="cover" src={projectImage} />
          <CardBody>
            <Flex>
              {" "}
              <Heading>Personal Portfo.....</Heading>
              <Flex bg="#386163" borderRadius="20px">
                {/* <Image w="19px" h="19px" src={} /> 
                <Image w="19px" h="19px" src={} /> 
                <Image w="19px" h="19px" src={} /> 
                <Image w="19px" h="19px" src={} />  */}
              </Flex>
            </Flex>
          </CardBody>
          <Divider color="dark.100"/>
          <CardFooter>
            <Flex p="auto" alignContent="center" width="100%">
              <Button variant="ghost" leftIcon={<BiDetail />}> Details</Button>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Live Preview</Button>
            </Flex>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
