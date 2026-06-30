import { Box, Button, Flex, Heading, Text, Image, Link, HStack, IconButton, Container, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Geodel.AI",
    description: "a subsurface intelligence platform that harnesses the power of AI to analyze raw geophysical data and deliver decision-ready insights—models, drilling targets, and risk interpretations—for the energy sector..",
    techStack: ["React", "Next.js", "APIs", "Claude API", "LLM", "Supabase"],
    image: "/img/geodel.png",
    external: "https://www.geodel.io/",
    github: "https://github.com/novertech411"
  },
  {
    title: "WaziHR",
    description: "An all-in-one HR, Payroll, and ERP suite designed to streamline business operations, manage employee lifecycles, and support strategic decision-making for SMEs.",
    techStack: ["Next.js", "TypeScript", "Supabase"],
    image: "/img/warzi.png",
    external: "https://www.wazihr.com/",
    github: "https://github.com/novertech411"
  },
  {
    title: "Trocah",
    description: "Trocah is a peer-to-peer marketplace for currency. See real offers from real people across the CAD and Naira corridor. Settle in seconds. Free bank transfers in Canada and Nigeria.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Electron"],
    image: "/img/trocah.png",
    external: "https://www.trocah.com/en/home",
    github: "https://github.com/novertech411"
  },
  {
    title: "Loan Monitoring & Tracking Platform",
    description: "Secure enterprise web platform to monitor and track loan pipelines from disbursement to repayment, managing customer data for a prominent Nigerian bank.",
    techStack: ["React", "Next.js", "APIs"],
    image: "/img/bank.png",
    isConfidential: true
    // Confidential - no external or github links provided
  }
];

export default function Projectsection() {
  return (
    <Box py={20} bg="#1a1a1a" color="white" id="projects">
      <Container maxW="container.lg">
        {/* Section Heading */}
        <Flex align="center" gap={4} mb={16}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color="white">
            Things I've Built
          </Heading>
          <Box flex="1" h="1px" bg="rgba(255,255,255,0.1)" ml={4} />
        </Flex>

        <VStack spacing={{ base: 16, lg: 28 }} align="stretch">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <Flex
                key={index}
                direction={{ base: "column", lg: "row" }}
                alignItems="center"
                position="relative"
                w="100%"
                gap={8}
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Project Image Column */}
                <Box
                  w={{ base: "100%", lg: "60%" }}
                  h={{ base: "240px", md: "360px" }}
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  order={{ base: 1, lg: isEven ? 1 : 2 }}
                  role="group"
                  bg="#000"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    opacity={0.9}
                    style={{ transition: "all 0.3s ease" }}
                    _groupHover={{ opacity: 1, transform: "scale(1.03)" }}
                  />
                </Box>

                {/* Project Details Column */}
                <Box
                  w={{ base: "100%", lg: "50%" }}
                  ml={{ lg: isEven ? "-10%" : "0" }}
                  mr={{ lg: isEven ? "0" : "-10%" }}
                  order={{ base: 2, lg: isEven ? 2 : 1 }}
                  zIndex={2}
                  textAlign={{ base: "left", lg: isEven ? "right" : "left" }}
                  mt={{ base: 4, lg: 0 }}
                >
                  <Flex
                    align="center"
                    gap={2.5}
                    justifyContent={{ base: "flex-start", lg: isEven ? "flex-end" : "flex-start" }}
                    mb={1.5}
                  >
                    <Text fontFamily="mono" fontSize="xs" color="#ff5403" letterSpacing="wider">
                      Featured Project
                    </Text>
                    {project.isConfidential && (
                      <Box
                        px={2.5}
                        py={0.5}
                        borderRadius="full"
                        bg="rgba(255, 84, 3, 0.1)"
                        border="1px solid rgba(255, 84, 3, 0.3)"
                      >
                        <Text fontSize="9px" fontWeight="bold" fontFamily="mono" color="#ff5403" letterSpacing="wider">
                          CONFIDENTIAL
                        </Text>
                      </Box>
                    )}
                  </Flex>
                  <Heading fontSize="2xl" fontWeight="bold" color="white" mb={4}>
                    {project.title}
                  </Heading>

                  {/* Floating Description Card */}
                  <Box
                    bg="#222222"
                    p={6}
                    borderRadius="xl"
                    boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.02)"
                    border="1px solid rgba(255, 255, 255, 0.05)"
                    mb={4}
                    textAlign="left"
                  >
                    <Text color="gray.300" fontSize="sm" lineHeight="1.6">
                      {project.description}
                    </Text>
                  </Box>

                  {/* Tech Stack List */}
                  <Flex
                    wrap="wrap"
                    gap={3}
                    justifyContent={{ base: "flex-start", lg: isEven ? "flex-end" : "flex-start" }}
                    mb={6}
                  >
                    {project.techStack.map((tech, i) => (
                      <Text key={i} fontFamily="mono" fontSize="xs" color="gray.400">
                        {tech}
                      </Text>
                    ))}
                  </Flex>

                  {/* Project Links */}
                  <HStack spacing={4} justifyContent={{ base: "flex-start", lg: isEven ? "flex-end" : "flex-start" }}>
                    {project.github && (
                      <Link href={project.github} isExternal>
                        <IconButton
                          variant="unstyled"
                          icon={<AiFillGithub size={22} />}
                          color="gray.400"
                          _hover={{ color: "#ff5403" }}
                          aria-label="GitHub Link"
                        />
                      </Link>
                    )}
                    {project.external && (
                      <Link href={project.external} isExternal>
                        <IconButton
                          variant="unstyled"
                          icon={<FiExternalLink size={20} />}
                          color="gray.400"
                          _hover={{ color: "#ff5403" }}
                          aria-label="External Link"
                        />
                      </Link>
                    )}
                  </HStack>
                </Box>
              </Flex>
            );
          })}
        </VStack>

        {/* View More Button */}
        <Flex justifyContent="center" mt={20}>
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
      </Container>
    </Box>
  );
}
