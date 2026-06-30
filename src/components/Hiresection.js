import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Container,
  VStack,
  HStack,
  Icon,
  Tooltip,
  Input,
  Textarea
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiCopy, FiCheck } from "react-icons/fi";

import communication from "../assets/images/communicative.png";
import motivation from "../assets/images/self-motivation.png";
import work from "../assets/images/work-ethic.png";
import collaborative from "../assets/images/collaborative.png";

const hireCards = [
  {
    title: "Communicative",
    img: communication,
    text: "I balance active talking and listening to ensure clear and effective project alignment."
  },
  {
    title: "Collaborative",
    img: collaborative,
    text: "Collaboration is key to building scalable, user-first web applications and team success."
  },
  {
    title: "Strong Work Ethic",
    img: work,
    text: "Committed to delivering high-performance, clean code and meeting project milestones."
  },
  {
    title: "Self Motivated",
    img: motivation,
    text: "Proactive problem solver, always eager to take ownership and implement robust solutions."
  }
];

export default function Hiresection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopy = () => {
    navigator.clipboard.writeText("sholayeeyinmosan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:sholayeeyinmosan@gmail.com?subject=Portfolio Message from ${encodeURIComponent(
      form.name
    )}&body=Name: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(
      form.email
    )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(form.message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Box py={20} bg="#1a1a1a" color="white">
      <Container maxW="container.lg">
        {/* Why Hire Me Title */}
        <Flex align="center" gap={3} mb={12} justify="center">
          <Heading fontSize="3xl" color="white">
            Why Hire Me?
          </Heading>
        </Flex>

        {/* Why Hire Me Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} mb={24}>
          {hireCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Box
                h="100%"
                p={6}
                bg="#1f1f1f"
                borderRadius="xl"
                border="1px solid rgba(255, 255, 255, 0.05)"
                textAlign="center"
                role="group"
                _hover={{
                  borderColor: "rgba(255, 84, 3, 0.3)",
                  boxShadow: "0 10px 30px -15px rgba(255, 84, 3, 0.15)",
                  transform: "translateY(-5px)"
                }}
                transition="all 0.3s ease"
              >
                {/* Image Container with Glow */}
                <Box
                  w="90px"
                  h="90px"
                  mx="auto"
                  mb={6}
                  borderRadius="full"
                  border="2px solid rgba(255, 84, 3, 0.2)"
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="rgba(255, 84, 3, 0.02)"
                  _groupHover={{
                    borderColor: "#ff5403",
                    boxShadow: "0 0 15px rgba(255, 84, 3, 0.3)",
                    bg: "rgba(255, 84, 3, 0.08)"
                  }}
                  transition="all 0.3s ease"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </Box>

                <Heading fontSize="lg" mb={3} color="white">
                  {card.title}
                </Heading>
                <Text color="gray.400" fontSize="sm" lineHeight="1.6">
                  {card.text}
                </Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>

        {/* Interested in working with me? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            bg="#1f1f1f"
            border="1px solid rgba(255, 84, 3, 0.15)"
            boxShadow="0 20px 40px -15px rgba(0,0,0,0.5)"
            position="relative"
            overflow="hidden"
            id="contact"
          >
            {/* Background Accent Glow */}
            <Box
              position="absolute"
              top="-50%"
              left="50%"
              w="300px"
              h="300px"
              borderRadius="full"
              bg="rgba(255, 84, 3, 0.05)"
              filter="blur(60px)"
              transform="translateX(-50%)"
              pointerEvents="none"
            />

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 16 }} position="relative" zIndex={1}>
              {/* Left Column: Info & Badges */}
              <VStack align={{ base: "center", md: "start" }} spacing={6} textAlign={{ base: "center", md: "left" }} justify="center">
                <VStack align={{ base: "center", md: "start" }} spacing={3}>
                  <Text fontSize="md" fontFamily="mono" color="#ff5403">
                    What's Next?
                  </Text>
                  <Heading fontSize={{ base: "3xl", md: "4xl" }} color="white">
                    Get In Touch
                  </Heading>
                </VStack>
                <Text
                  color="gray.400"
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="1.6"
                >
                  I'm currently open to new opportunities, freelance projects, and collaborations. 
                  Whether you have a question, want to discuss a role, or just want to say hello, 
                  feel free to reach out!
                </Text>

                {/* Copyable Email Badge */}
                <Tooltip label={copied ? "Copied!" : "Click to copy email"} closeOnClick={false} hasArrow>
                  <HStack
                    spacing={3}
                    bg="rgba(0, 0, 0, 0.2)"
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    border="1px solid rgba(255, 84, 3, 0.2)"
                    cursor="pointer"
                    onClick={handleCopy}
                    _hover={{
                      borderColor: "#ff5403",
                      bg: "rgba(255, 84, 3, 0.05)",
                      transform: "translateY(-1px)"
                    }}
                    transition="all 0.2s"
                  >
                    <Icon as={copied ? FiCheck : FiCopy} color="#ff5403" />
                    <Text fontSize="sm" fontFamily="mono" color="gray.300">
                      sholayeeyinmosan@gmail.com
                    </Text>
                  </HStack>
                </Tooltip>

                <Button
                  as="a"
                  href="https://wa.me/2349067566893"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="outline"
                  borderColor="rgba(255, 84, 3, 0.4)"
                  color="#ff5403"
                  bg="transparent"
                  px={8}
                  py={6}
                  borderRadius="full"
                  _hover={{
                    borderColor: "#ff5403",
                    bg: "rgba(255, 84, 3, 0.08)",
                    transform: "translateY(-2px)"
                  }}
                  leftIcon={<AiOutlineWhatsApp />}
                  transition="all 0.2s"
                >
                  WhatsApp Chat
                </Button>
              </VStack>

              {/* Right Column: Contact Form */}
              <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text fontSize="xs" fontFamily="mono" color="gray.400" mb={2}>
                      NAME
                    </Text>
                    <Input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      bg="rgba(0, 0, 0, 0.15)"
                      border="1px solid rgba(255, 255, 255, 0.08)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: "gray.600" }}
                      _focus={{
                        borderColor: "#ff5403",
                        boxShadow: "0 0 0 1px #ff5403"
                      }}
                    />
                  </Box>

                  <Box>
                    <Text fontSize="xs" fontFamily="mono" color="gray.400" mb={2}>
                      EMAIL
                    </Text>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      bg="rgba(0, 0, 0, 0.15)"
                      border="1px solid rgba(255, 255, 255, 0.08)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: "gray.600" }}
                      _focus={{
                        borderColor: "#ff5403",
                        boxShadow: "0 0 0 1px #ff5403"
                      }}
                    />
                  </Box>

                  <Box>
                    <Text fontSize="xs" fontFamily="mono" color="gray.400" mb={2}>
                      MESSAGE
                    </Text>
                    <Textarea
                      placeholder="Hi, I'd love to chat..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      bg="rgba(0, 0, 0, 0.15)"
                      border="1px solid rgba(255, 255, 255, 0.08)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: "gray.600" }}
                      _focus={{
                        borderColor: "#ff5403",
                        boxShadow: "0 0 0 1px #ff5403"
                      }}
                      resize="none"
                    />
                  </Box>

                  <Button
                    type="submit"
                    bg="#ff5403"
                    color="white"
                    borderRadius="lg"
                    py={6}
                    _hover={{
                      bg: "#e04800",
                      boxShadow: "0 0 15px rgba(255, 84, 3, 0.4)"
                    }}
                    transition="all 0.2s"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
