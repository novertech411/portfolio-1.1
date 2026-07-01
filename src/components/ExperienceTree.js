import { Box, Container, Flex, Heading, Text, VStack, Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Geodel.AI",
    role: " Engineering Lead",
    date: "2026",
    location: "Remote",
    description: [
      "Led frontend architecting the full stack for Geodel's AI-powered subsurface intelligence platform, using Next.js, Supabase, and Plotly.js to convert geophysical (ERT) survey data into decision-ready models and risk interpretations.",
      "integrated Anthropic Claude API and Ollama for AI-driven geological analysis, and designed the Supabase backend for authentication, data persistence, and analysis retrieval.",
      "Developed interactive time-lapse visualizations and diagnosed a major performance bottleneck in large-file uploads, cutting backend payload size by moving summarization to the client."
    ],
    tags: ["Next.js", "Tailwind CSS", "TanStack", "TypeScript", "Claude API", "Ollama", "Plotly.js", "Supabase"]
  },
  {
    company: "Wazi HR",
    role: "Frontend Team Lead",
    date: "2025 – 2026",
    location: "Lagos, Nigeria",
    description: [
      "Led frontend development and built the entire frontend and three role-based dashboards for WaziHR (www.wazihr.com), an all-in-one HR, Payroll, and ERP suite, using Next.js, Tailwind CSS, TanStack and supporting libraries.",
      "Developed a large library of reusable components for Employee, Company, and Core Team views.",
      "Implemented key modules including personnel management, payroll automation, leave & attendance, performance, recruitment, and self-service portals.",
      "Built the Core Team dashboard for full system monitoring, access control, and security analysis."
    ],
    tags: ["Next.js", "Tailwind CSS", "TanStack", "TypeScript", "ERP"]
  },
  {
    company: "Soval Labs",
    role: "Frontend Engineer Contract",
    date: "2025",
    location: "Lagos, Nigeria",
    description: [
      "Led Part of the team that built a loan management and monitoring platform for a Nigerian bank, enabling tracking, analysis, and evaluation of disbursements, repayments, and beneficiaries, using Next.js, Chakra UI, TanStack, and Axios.",
      "Implemented multiple role-based dashboards spanning the full approval flow, from Executive Directors to Risk Analysts to Checkpoint Officers, each with tailored views and permissions.",
      "Replicated and adapted the platform architecture for additional loan programs, enabling rapid rollout across multiple initiatives.",
    ],
    tags: ["Next.js", "Chakra UI", "TanStack", "TypeScript", "ERP"]
  },
  {
    company: "Greatercare",
    role: "Lead Frontend Developer (Contract)",
    date: "03/2025",
    location: "Remote",
    description: [
      "Led the frontend development of a telemedicine web app, collaborating with backend and frontend engineers to enable patient-doctor consultations.",
      "Implemented the design for a management dashboard, supporting admin, doctor, and patient interactions for booking consultations, viewing schedules, managing subscriptions, and processing payments.",
      "Consumed APIs to facilitate patient booking, consultation views, and subscription tracking.",
      "Developed the admin dashboard to monitor patient and doctor activities, manage payments, and oversee consultation bookings."
    ],
    tags: ["React", "APIs", "CSS", "JavaScript", "Telemedicine"]
  },
  {
    company: "Pashione",
    role: "Frontend Engineer",
    date: "09/2024 – 02/2025",
    location: "Lagos, Nigeria",
    description: [
      "Manage and optimize the frontend of a large-scale e-commerce marketplace (pashione.co) using Next.js, TypeScript, and Supabase, adding a product variant display feature and fixing navigation issues.",
      "Built and maintain the Careers page on the corporate site (corporate.pashione.co) with real-time job updates.",
      "Developed the Medlitics launch site, adding About Me and FAQ sections, a chatbot, and SEO enhancements.",
      "Maintain daily responsiveness to client technical needs and improve code performance."
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "SEO", "E-commerce"]
  },
  {
    company: "Herrand Ltd.",
    role: "Team Lead - Frontend Developer",
    date: "08/2024 – 03/2025",
    location: "Lagos, Nigeria",
    description: [
      "Led the rewrite of a dashboard using React, Tailwind CSS, and Firebase to monitor mobile app interactions (signups, agents, transactions), adding finance tracking, admin privileges, and authentication.",
      "Converted the optimized web dashboard into Windows, Linux, and Mac desktop apps using Electron for marketing team use; handle ongoing updates and issue resolution.",
      "Revamped Herrand.com with a clean, accessible UI aligned with the company brand."
    ],
    tags: ["React", "Tailwind CSS", "Firebase", "Electron", "Desktop Apps"]
  },

  {
    company: "Trocah",
    role: "Frontend Web Developer",
    date: "01/2024 – 05/2024",
    location: "Lagos, Nigeria",
    description: [
      "Collaborated on building the company landing page with TypeScript and Next.js for a fintech platform.",
      "Contributed to a monitoring dashboard tracking currency exchange data (customer evaluations, volumes, valuations).",
      "Worked with team to integrate frontend with backend systems under the team lead's guidance."
    ],
    tags: ["Next.js", "TypeScript", "APIs", "Fintech"]
  },

];

export default function ExperienceTree() {
  return (
    <Box py={20} bg="#1a1a1a" color="white" id="experience">
      <Container maxW="container.lg">
        {/* Section Heading */}
        <Flex align="center" gap={4} mb={16}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color="white">
            Where I've Worked
          </Heading>
          <Box flex="1" h="1px" bg="rgba(255,255,255,0.1)" ml={4} />
        </Flex>

        <VStack spacing={0} align="stretch">
          {experiences.map((exp, index) => (
            <Flex
              key={index}
              position="relative"
              gap={{ base: 4, md: 6 }}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Timeline Indicator Column */}
              <Flex direction="column" align="center" w="24px" flexShrink={0} position="relative">
                {/* Timeline dot marker */}
                <Box
                  w="14px"
                  h="14px"
                  borderRadius="full"
                  border="3px solid"
                  borderColor="#ff5403"
                  bg={index === 0 ? "#ff5403" : "#1a1a1a"}
                  boxShadow={index === 0 ? "0 0 10px rgba(255, 84, 3, 0.6)" : "none"}
                  zIndex={2}
                  mt="6px"
                />
                {/* Timeline line segment connecting to next dot */}
                {index < experiences.length - 1 && (
                  <Box
                    w="2px"
                    flex="1"
                    bg="rgba(255, 255, 255, 0.1)"
                    position="absolute"
                    top="20px"
                    bottom="-32px"
                    left="50%"
                    transform="translateX(-50%)"
                    zIndex={1}
                  />
                )}
              </Flex>

              {/* Content Area */}
              <Box pb={12} flex="1">
                {/* Job Title and Company */}
                <Heading fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="white" mb={2}>
                  {exp.role}{" "}
                  <Text as="span" color="#ff5403">
                    @ {exp.company}
                  </Text>
                </Heading>

                {/* Dates & Location */}
                <Flex gap={2} fontSize="sm" fontFamily="mono" color="gray.400" mb={4} align="center" flexWrap="wrap">
                  <Text>{exp.date}</Text>
                  <Text color="gray.600">•</Text>
                  <Text>{exp.location}</Text>
                </Flex>

                {/* Bullet points */}
                <VStack align="stretch" spacing={3} mb={5}>
                  {exp.description.map((bullet, i) => (
                    <Flex key={i} gap={3} align="start">
                      <Text color="#ff5403" fontSize="sm" lineHeight="1.3">▹</Text>
                      <Text color="gray.300" fontSize="sm" md="md" lineHeight="1.6">
                        {bullet}
                      </Text>
                    </Flex>
                  ))}
                </VStack>

                {/* Technology Tags */}
                <Wrap spacing={2}>
                  {exp.tags.map((tag, i) => (
                    <WrapItem key={i}>
                      <Tag
                        size="md"
                        variant="subtle"
                        bg="rgba(255, 84, 3, 0.08)"
                        color="rgba(255, 84, 3, 0.9)"
                        borderRadius="full"
                        border="1px solid rgba(255, 84, 3, 0.15)"
                        px={3}
                        py={1}
                      >
                        <TagLabel fontSize="xs" fontWeight="semibold" fontFamily="mono">
                          {tag}
                        </TagLabel>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
