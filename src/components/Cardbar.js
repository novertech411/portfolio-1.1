import { Button, Card, CardBody, CardFooter, Divider, Flex, Image, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { ViewIcon } from "@chakra-ui/icons";
import { BiDetail } from "react-icons/bi";
import projectImage from "../assets/images/project1.webp";

export default function Cardbar({ title, description, techStack, previewLink, detailsLink }) {
  return (
    <Card bg="#1a1a1a" border="none" boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)" color="white" width={{ base: "100%", md: "300px", xl: "340px" }} pos="relative" overflow="hidden" _hover={{ transform: "translateY(-5px)", boxShadow: "10px 10px 20px rgba(0,0,0,0.9), -10px -10px 20px rgba(255,255,255,0.06)" }} transition="all 0.3s ease">
      <Image borderTopRadius="10px" objectFit="cover" h="200px" w="100%" src={projectImage} style={{ filter: "grayscale(0%)" }} />
      <CardBody px="5" py="5">
        <Stack spacing="4">
          <Text fontSize="xl" fontWeight="bold">{title}</Text>
          {description && <Text color="gray.400" fontSize="sm" minH="60px" lineHeight="1.6">{description}</Text>}

          <Flex wrap="wrap" gap={2} mt={2}>
            {techStack?.map((tech, i) => (
              <Box key={i} px={3} py={1} bg="#1a1a1a" border="none" boxShadow="inset 4px 4px 8px rgba(0,0,0,0.8), inset -4px -4px 8px rgba(255,255,255,0.05)" borderRadius="full" fontSize="xs" color="gray.300">
                {tech}
              </Box>
            ))}
          </Flex>
        </Stack>
      </CardBody>
      <Divider color="gray.600" />
      <CardFooter p="2">
        <Stack direction='row' justifyContent="space-around" width="100%">
          <Button width="50%" color="#ff5403" bg="#1a1a1a" boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)" _hover={{ boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.8), inset -2px -2px 4px rgba(255,255,255,0.05)" }} _active={{ outline: "none" }} variant="ghost" leftIcon={<BiDetail />}>Details</Button>
          <Button width="50%" ml="2" color="white" bg="#2c2c2c" boxShadow="4px 4px 8px rgba(0,0,0,0.8), -4px -4px 8px rgba(255,255,255,0.05)" _hover={{ boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.8), inset -2px -2px 4px rgba(255,255,255,0.05)", color: "#ff5403" }} _active={{ outline: "none" }} variant="ghost" leftIcon={<ViewIcon />}>Preview</Button>
        </Stack>
      </CardFooter>
    </Card>
  )
}
