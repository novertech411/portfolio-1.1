import { Box, Container, Flex, Heading, Text, SimpleGrid, Badge, Icon, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiTrendingUp, FiFolder, FiBookOpen } from "react-icons/fi";

const skillCategories = [
    {
        title: "Languages & Core",
        icon: FiCode,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Sass", "jQuery"]
    },
    {
        title: "Technologies & Frameworks",
        icon: FiCpu,
        skills: ["React", "Next.js", "Tailwind CSS", "Chakra-UI", "Material UI", "Firebase", "Electron", "Netlify", "Postman", "Strapi", "Supabase", "Git"]
    },
    {
        title: "Project Management",
        icon: FiTrendingUp,
        skills: ["Agile Methodologies", "ClickUp", "Jira"]
    },
    {
        title: "Other Skills",
        icon: FiFolder,
        skills: ["API Integration", "Communication", "Problem-Solving", "SEO"]
    }
];

export default function SkillsAndEducation() {
    return (
        <Box py={20} bg="#1a1a1a" color="white" id="skills">
            <Container maxW="container.lg">
                <Flex direction="column" gap={16}>

                    {/* Education Section */}
                    <Box w="100%">
                        <Flex align="center" gap={3} mb={10}>
                            <Heading fontSize="3xl" color="white">
                                Education
                            </Heading>
                            <Box flex="1" h="1px" bg="rgba(255,255,255,0.1)" ml={4} />
                        </Flex>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Box
                                bg="#1f1f1f"
                                borderRadius="xl"
                                border="1px solid rgba(255, 255, 255, 0.05)"
                                boxShadow="2xl"
                                overflow="hidden"
                                maxW={{ base: "100%", md: "2xl" }}
                            >
                                {/* macOS-style Window Header */}
                                <Flex
                                    px={4}
                                    py={3}
                                    bg="#151515"
                                    borderBottom="1px solid rgba(255, 255, 255, 0.05)"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <HStack spacing={2}>
                                        <Box w="12px" h="12px" borderRadius="full" bg="#ff5f56" />
                                        <Box w="12px" h="12px" borderRadius="full" bg="#ffbd2e" />
                                        <Box w="12px" h="12px" borderRadius="full" bg="#27c93f" />
                                    </HStack>
                                    <HStack spacing={2} align="center">
                                        <Icon as={FiBookOpen} color="gray.500" fontSize="xs" />
                                        <Text color="gray.400" fontSize="xs" fontFamily="mono">
                                            education.json
                                        </Text>
                                    </HStack>
                                    <Box w="36px" />
                                </Flex>

                                {/* JSON Code Area */}
                                <Box p={6} fontFamily="mono" fontSize={{ base: "xs", md: "sm" }} lineHeight="1.6" textAlign="left" overflowX="auto">
                                    <Text color="gray.500" mb={1}>{"{"}</Text>
                                    <Box pl={4}>
                                        <Text as="span" color="#e06c75">"institution"</Text>
                                        <Text as="span" color="white">: </Text>
                                        <Text as="span" color="#98c379">"Federal University of Petroleum Resources"</Text>
                                        <Text color="white">,</Text>

                                        <Text as="span" color="#e06c75">"degree"</Text>
                                        <Text as="span" color="white">: </Text>
                                        <Text as="span" color="#98c379">"B.Sc. in Physics"</Text>
                                        <Text color="white">,</Text>

                                        <Text as="span" color="#e06c75">"timeline"</Text>
                                        <Text as="span" color="white">: </Text>
                                        <Text as="span" color="#98c379">"01/2015 – 01/2019"</Text>
                                    </Box>
                                    <Text color="gray.500">{"}"}</Text>
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Skills Section */}
                    <Box w="100%">
                        <Flex align="center" gap={3} mb={10}>
                            <Heading fontSize="3xl" color="white">
                                Skills & Expertise
                            </Heading>
                            <Box flex="1" h="1px" bg="rgba(255,255,255,0.1)" ml={4} />
                        </Flex>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <Box
                                        p={6}
                                        bg="#1f1f1f"
                                        borderRadius="xl"
                                        border="1px solid rgba(255, 255, 255, 0.05)"
                                        boxShadow="lg"
                                        role="group"
                                        _hover={{
                                            borderColor: "rgba(255, 84, 3, 0.3)",
                                            boxShadow: "0 10px 30px -15px rgba(255, 84, 3, 0.1)"
                                        }}
                                        transition="all 0.3s ease"
                                    >
                                        <Flex align="center" mb={4} gap={3}>
                                            <Icon
                                                as={category.icon}
                                                fontSize="xl"
                                                color="gray.400"
                                                _groupHover={{ color: "#ff5403", transform: "scale(1.1)" }}
                                                transition="all 0.3s ease"
                                            />
                                            <Heading fontSize="md" color="white">{category.title}</Heading>
                                        </Flex>

                                        <Flex wrap="wrap" gap={2}>
                                            {category.skills.map((skill, i) => (
                                                <Badge
                                                    key={i}
                                                    px={3}
                                                    py={1.5}
                                                    bg="rgba(255, 255, 255, 0.02)"
                                                    color="gray.300"
                                                    borderRadius="md"
                                                    textTransform="none"
                                                    fontSize="xs"
                                                    fontWeight="medium"
                                                    fontFamily="mono"
                                                    border="1px solid rgba(255, 255, 255, 0.08)"
                                                    _hover={{
                                                        bg: "#ff5403",
                                                        color: "white",
                                                        borderColor: "#ff5403",
                                                        transform: "translateY(-2px)"
                                                    }}
                                                    transition="all 0.2s"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </Flex>
                                    </Box>
                                </motion.div>
                            ))}
                        </SimpleGrid>
                    </Box>

                </Flex>
            </Container>
        </Box>
    );
}
