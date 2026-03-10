import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Badge, Icon } from "@chakra-ui/react";
import { AiOutlineCode, AiOutlineTool, AiOutlineProject } from "react-icons/ai";

const education = [
    {
        institution: "Federal University of Petroleum Resources",
        degree: "Bachelor of Science in Physics",
        date: "01/2015 – 01/2019"
    }
];

const skillCategories = [
    {
        title: "Languages & Core",
        icon: AiOutlineCode,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Sass", "jQuery"]
    },
    {
        title: "Technologies & Frameworks",
        icon: AiOutlineTool,
        skills: ["React", "Next.js", "Tailwind CSS", "Chakra-UI", "Material UI", "Firebase", "Electron", "Netlify", "Postman", "Strapi", "Supabase", "Git"]
    },
    {
        title: "Project Management",
        icon: AiOutlineProject,
        skills: ["Agile Methodologies", "ClickUp", "Jira"]
    },
    {
        title: "Other Skills",
        icon: AiOutlineTool,
        skills: ["API Integration", "Communication", "Problem-Solving", "SEO"]
    }
];

export default function SkillsAndEducation() {
    return (
        <Box py={20} bg="#050505" color="white" id="skills">
            <Container maxW="container.xl">
                <Flex direction={{ base: "column", lg: "row" }} gap={16}>

                    {/* Education Section */}
                    <Box flex={{ base: "1", lg: "0.4" }}>
                        <Heading
                            fontSize="3xl"
                            mb={10}
                            position="relative"
                            _after={{
                                content: '""',
                                position: "absolute",
                                bottom: "-10px",
                                left: "0",
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#ff5403",
                                borderRadius: "full"
                            }}
                        >
                            Education
                        </Heading>

                        <VStack align="stretch" spacing={6}>
                            {education.map((edu, index) => (
                                <Box
                                    key={index}
                                    p={8}
                                    bg="rgba(255,255,255,0.02)"
                                    border="1px solid rgba(255,255,255,0.05)"
                                    borderRadius="2xl"
                                    _hover={{ borderColor: "rgba(255,84,3,0.3)" }}
                                    transition="all 0.3s ease"
                                >
                                    <Text color="#ff5403" fontWeight="600" fontSize="sm" mb={2}>
                                        {edu.date}
                                    </Text>
                                    <Heading fontSize="xl" mb={2} color="white">
                                        {edu.institution}
                                    </Heading>
                                    <Text color="gray.400" fontSize="md">
                                        {edu.degree}
                                    </Text>
                                </Box>
                            ))}
                        </VStack>
                    </Box>

                    {/* Skills Section */}
                    <Box flex={{ base: "1", lg: "0.6" }}>
                        <Heading
                            fontSize="3xl"
                            mb={10}
                            position="relative"
                            _after={{
                                content: '""',
                                position: "absolute",
                                bottom: "-10px",
                                left: "0",
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#ff5403",
                                borderRadius: "full"
                            }}
                        >
                            Skills & Expertise
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            {skillCategories.map((category, index) => (
                                <Box
                                    key={index}
                                    p={6}
                                    bg="rgba(255,255,255,0.02)"
                                    border="1px solid rgba(255,255,255,0.05)"
                                    borderRadius="2xl"
                                    _hover={{ borderColor: "rgba(255,84,3,0.3)", bg: "rgba(255,255,255,0.03)" }}
                                    transition="all 0.3s ease"
                                >
                                    <Flex align="center" mb={4} gap={3}>
                                        <Icon as={category.icon} fontSize="2xl" color="#ff5403" />
                                        <Heading fontSize="lg" color="white">{category.title}</Heading>
                                    </Flex>
                                    <Flex wrap="wrap" gap={2}>
                                        {category.skills.map((skill, i) => (
                                            <Badge
                                                key={i}
                                                px={3}
                                                py={1}
                                                bg="rgba(255,255,255,0.05)"
                                                color="gray.300"
                                                borderRadius="full"
                                                textTransform="none"
                                                fontSize="sm"
                                                fontWeight="normal"
                                                border="1px solid rgba(255,255,255,0.1)"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </Flex>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                </Flex>
            </Container>
        </Box>
    );
}
