import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
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
          bg="rgba(255,255,255,0.1)"
          color="white"
          borderRadius="full"
          py={6}
          px={8}
          fontWeight="medium"
          _hover={{ background: "rgba(255,84,3,0.8)" }}
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
          <Cardbar key={index} {...project} />
        ))}
      </Flex>
    </Box>
  );
}
