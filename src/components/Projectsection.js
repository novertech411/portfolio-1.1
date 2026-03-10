import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Cardbar from "./Cardbar";

const projects = [
  {
    title: "Greatercare Telemedicine",
    description: "Telemedicine web app and management dashboard with consultation booking and payment processing.",
    techStack: ["React", "Next.js", "APIs"],
  },
  {
    title: "Pashione Marketplace",
    description: "Large-scale e-commerce marketplace and Medlitics launch site with real-time job and product updates.",
    techStack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    title: "Herrand Dashboard",
    description: "Admin dashboard to monitor mobile app interactions, converted to Windows/Linux/Mac desktop apps.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Electron"],
  },
  {
    title: "Pandora's Box",
    description: "Edtech solution mimicking Coursera for accessing tutor content, tracking progress, and assessments.",
    techStack: ["React", "Next.js", "APIs"],
  }
];

export default function Projectsection() {
  return (
    <Box py="4rem" mx="auto" width={{ base: "90%", md: "85%" }} id="projects">
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Text as="b" color="white" fontSize={{ base: "3xl", md: "4xl" }} mb={{ base: 4, md: 0 }}>
          Selected Works
        </Text>
        <Button
          bg="#ff5403"
          color="white"
          boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)"
          border="none"
          borderRadius="full"
          py={6}
          px={8}
          fontWeight="medium"
          _hover={{ opacity: 0.9 }}
          _active={{ outline: "none", boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.8), inset -5px -5px 10px rgba(255,255,255,0.05)" }}
          transition="all 0.3s ease"
        >
          View More Projects
        </Button>
      </Flex>

      <Flex
        pt="4rem"
        gap={8}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "center", xl: "flex-start" }}
      >
        {projects.map((project, index) => (
          <Box as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} key={index}>
            <Cardbar {...project} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
