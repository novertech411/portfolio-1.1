import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const experiences = [
    {
        company: "Greatercare",
        role: "Lead Frontend Developer (Contract)",
        date: "03/2025",
        description: [
            "Led the frontend development of a telemedicine web app, collaborating with backend and frontend engineers to enable patient-doctor consultations.",
            "Implemented the design for a management dashboard, supporting admin, doctor, and patient interactions for booking consultations, viewing schedules, managing subscriptions, and processing payments.",
            "Consumed APIs to facilitate patient booking, consultation views, and subscription tracking.",
            "Developed the admin dashboard to monitor patient and doctor activities, manage payments, and oversee consultation bookings."
        ]
    },
    {
        company: "Pashione",
        role: "Frontend Engineer",
        date: "09/2024 – 02/2025",
        description: [
            "Manage and optimize the frontend of a large-scale e-commerce marketplace (pashione.co) using Next.js, TypeScript, and Supabase, adding a product variant display feature and fixing navigation issues.",
            "Built and maintain the Careers page on the corporate site (corporate.pashione.co) with real-time job updates.",
            "Developed the Medlitics launch site, adding About Me and FAQ sections, a chatbot, and SEO enhancements.",
            "Maintain daily responsiveness to client technical needs and improve code performance."
        ]
    },
    {
        company: "Herrand Ltd.",
        role: "Team Lead - Frontend Developer",
        date: "08/2024 – 03/2025",
        description: [
            "Led the rewrite of a dashboard using React, Tailwind CSS, and Firebase to monitor mobile app interactions (signups, agents, transactions), adding finance tracking, admin privileges, and authentication.",
            "Converted the optimized web dashboard into Windows, Linux, and Mac desktop apps using Electron for marketing team use; handle ongoing updates and issue resolution.",
            "Revamped Herrand.com with a clean, accessible UI aligned with the company brand."
        ]
    },
    {
        company: "Chaincode Technologies Ltd",
        role: "Frontend Developer",
        date: "04/2024 – 07/2024",
        description: [
            "Developed the frontend of a database platform to monitor agricultural support beneficiaries.",
            "Built the company website, enabling signup and registration for farmers and extension workers."
        ]
    },
    {
        company: "Trocah",
        role: "Frontend Web Developer",
        date: "01/2024 – 05/2024",
        description: [
            "Collaborated on building the company landing page with TypeScript and Next.js for a fintech platform.",
            "Contributed to a monitoring dashboard tracking currency exchange data (customer evaluations, volumes, valuations).",
            "Worked with team to integrate frontend with backend systems under the team lead's guidance."
        ]
    },
    {
        company: "Yazapay",
        role: "Frontend Developer",
        date: "02/2023 – 09/2023",
        description: [
            "Developed the frontend of the Yazapay Payment Portal, enhancing transaction processing efficiency.",
            "Implemented cutting-edge web technologies, ensuring a responsive and user-friendly interface, boosting user satisfaction.",
            "Collaborated with cross-functional teams to define, design, and implement new features, reducing development time."
        ]
    },
    {
        company: "nHub Nigeria",
        role: "Project Manager & Lead Frontend Developer",
        date: "05/2022 – 09/2024",
        description: [
            "Led the frontend development and project management for Pandora's Box, an edtech solution mimicking Coursera, enabling students to access tutor content, track progress, and complete assessments.",
            "Collaborated with cloud engineers, backend developers, and UI/UX designers to deliver a seamless, scalable platform.",
            "Designed and implemented a responsive student dashboard with React and Next.js, enhancing user engagement and content accessibility.",
            "Integrated APIs to sync progress data and assessments, improving real-time tracking for students and tutors."
        ]
    }
];

export default function ExperienceTree() {
    return (
        <Box py={20} bg="#050505" color="white" id="experience">
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
                                    bg="#050505"
                                    border="4px solid #ff5403"
                                    borderRadius="full"
                                    zIndex={1}
                                />

                                {/* Content Box */}
                                <Box
                                    w={{ base: "calc(100% - 40px)", md: "45%" }}
                                    ml={{ base: "40px", md: 0 }}
                                    p={8}
                                    bg="rgba(255,255,255,0.02)"
                                    border="1px solid rgba(255,255,255,0.05)"
                                    borderRadius="2xl"
                                    position="relative"
                                    _hover={{
                                        borderColor: "rgba(255,84,3,0.5)",
                                        transform: "translateY(-5px)",
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
