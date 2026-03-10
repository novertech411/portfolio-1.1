import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Greatercare",
        role: "Lead Frontend Developer (Contract)",
        date: "03/2025",
        description: [
            "Developed the frontend for a telemedicine web app, featuring patient booking, dashboards, and payment management."
        ]
    },
    {
        company: "Pashione",
        role: "Frontend Engineer",
        date: "09/2024 – 02/2025",
        description: [
            "Optimized frontend of pashione.co marketplace using Next.js and Supabase, and developed real-time features."
        ]
    },
    {
        company: "Herrand Ltd.",
        role: "Team Lead - Frontend Developer",
        date: "08/2024 – 03/2025",
        description: [
            "Led dashboard rewrite using React and Firebase, later converted to Electron desktop apps across platforms."
        ]
    },
    {
        company: "Chaincode Technologies Ltd",
        role: "Frontend Developer",
        date: "04/2024 – 07/2024",
        description: [
            "Built agricultural database platform and company registration site for farmers."
        ]
    },
    {
        company: "Trocah",
        role: "Frontend Web Developer",
        date: "01/2024 – 05/2024",
        description: [
            "Built fintech landing page and currency exchange monitoring dashboard with Next.js."
        ]
    },
    {
        company: "Yazapay",
        role: "Frontend Developer",
        date: "02/2023 – 09/2023",
        description: [
            "Developed responsive Yazapay Payment Portal frontend to boost processing efficiency and user satisfaction."
        ]
    },
    {
        company: "nHub Nigeria",
        role: "Project Manager & Lead Frontend Developer",
        date: "05/2022 – 09/2024",
        description: [
            "Led frontend and project management for Pandora's Box edtech platform, creating an accessible student dashboard."
        ]
    }
];

export default function ExperienceTree() {
    return (
        <Box py={20} bg="#1a1a1a" color="white" id="experience">
            <Container maxW="container.xl">
                <Heading
                    fontSize={{ base: "3xl", md: "5xl" }}
                    mb={16}
                    textAlign="center"
                    position="relative"
                    _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "50px",
                        height: "4px",
                        backgroundColor: "#ff5403",
                        borderRadius: "full"
                    }}
                >
                    Work Journey
                </Heading>

                <Box position="relative" maxW="4xl" mx="auto">
                    {/* Vertical Line */}
                    <Box
                        position="absolute"
                        left={{ base: "20px", md: "50%" }}
                        transform={{ base: "none", md: "translateX(-50%)" }}
                        top="0"
                        bottom="0"
                        w="2px"
                        bg="rgba(255,255,255,0.1)"
                    />

                    <VStack spacing={12} align="stretch">
                        {experiences.map((exp, index) => (
                            <Flex
                                as={motion.div}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                key={index}
                                direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                                position="relative"
                                w="100%"
                            >
                                {/* Node Dot */}
                                <Box
                                    position="absolute"
                                    left={{ base: "20px", md: "50%" }}
                                    top={{ base: "24px", md: "0" }}
                                    transform={{ "base": "translateX(-50%)", "md": "translate(-50%, 0)" }}
                                    w="16px"
                                    h="16px"
                                    bg="#ff5403"
                                    border="none"
                                    boxShadow="0 0 10px rgba(255,84,3,0.8), inset 2px 2px 5px rgba(255,255,255,0.3)"
                                    borderRadius="full"
                                    zIndex={1}
                                />

                                {/* Content Box */}
                                <Box
                                    w={{ base: "calc(100% - 40px)", md: "45%" }}
                                    ml={{ base: "40px", md: 0 }}
                                    p={8}
                                    bg="#1a1a1a"
                                    border="none"
                                    boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)"
                                    borderRadius="2xl"
                                    position="relative"
                                    _hover={{
                                        transform: "translateY(-5px)",
                                        boxShadow: "10px 10px 20px rgba(0,0,0,0.9), -10px -10px 20px rgba(255,255,255,0.06)"
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    <Text color="#ff5403" fontWeight="600" fontSize="sm" mb={2}>
                                        {exp.date}
                                    </Text>
                                    <Heading fontSize="2xl" mb={1} color="white">
                                        {exp.company}
                                    </Heading>
                                    <Text color="gray.400" fontSize="lg" fontWeight="500" mb={6}>
                                        {exp.role}
                                    </Text>

                                    <VStack align="start" spacing={3}>
                                        {exp.description.map((item, i) => (
                                            <Flex key={i} align="start" gap={3}>
                                                <Box w="6px" h="6px" borderRadius="full" bg="gray.500" mt="8px" flexShrink={0} />
                                                <Text color="gray.300" fontSize="md" lineHeight="1.6">
                                                    {item}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </VStack>
                                </Box>
                            </Flex>
                        ))}
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}
