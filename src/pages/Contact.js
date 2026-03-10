import { Box, Button, FormControl, Heading, Input, Stack, Text, Textarea, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'

export default function Contact() {
  return (
    <Box id="contact" bg='rgba(26, 26, 26, 0.6)' backdropFilter="blur(20px)" pt="8rem" pb="12rem" borderTop="1px solid rgba(255,255,255,0.05)" boxShadow="0 -10px 15px rgba(0,0,0,0.5)">
      <Stack gap={10} p={{ xl: "5%" }} width={{ base: "90%", md: "85%", xl: "75%" }} m="auto" >
        <Box textAlign="center">
          <Heading color="white" mb={4}>Get In Touch</Heading>
          <Text color="gray.400">Let's build something amazing together.</Text>
        </Box>

        <Flex direction={{ base: "column", lg: "row" }} gap={10} justifyContent="center" alignItems="center">
          {/* Contact Details */}
          <Box flex="1" w="100%" bg="#1a1a1a" p={10} borderRadius="2xl" boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)">
            <Stack spacing={8}>
              <Flex align="center" gap={5}>
                <Box p={4} bg="rgba(26,26,26,0.5)" borderRadius="full" boxShadow="inset 4px 4px 8px rgba(0,0,0,0.8), inset -4px -4px 8px rgba(255,255,255,0.05)">
                  <AiOutlineMail size={24} color="#ff5403" />
                </Box>
                <Box>
                  <Text color="gray.500" fontSize="sm">Email</Text>
                  <Link href="mailto:sholayeeyinmosan@gmail.com" color="white" fontWeight="medium" _hover={{ color: "#ff5403" }}>
                    sholayeeyinmosan@gmail.com
                  </Link>
                </Box>
              </Flex>

              <Flex align="center" gap={5}>
                <Box p={4} bg="rgba(26,26,26,0.5)" borderRadius="full" boxShadow="inset 4px 4px 8px rgba(0,0,0,0.8), inset -4px -4px 8px rgba(255,255,255,0.05)">
                  <AiOutlinePhone size={24} color="#ff5403" />
                </Box>
                <Box>
                  <Text color="gray.500" fontSize="sm">Phone</Text>
                  <Text color="white" fontWeight="medium">+234 906 756 6893</Text>
                </Box>
              </Flex>

              <Flex align="center" gap={5}>
                <Box p={4} bg="rgba(26,26,26,0.5)" borderRadius="full" boxShadow="inset 4px 4px 8px rgba(0,0,0,0.8), inset -4px -4px 8px rgba(255,255,255,0.05)">
                  <AiOutlineEnvironment size={24} color="#ff5403" />
                </Box>
                <Box>
                  <Text color="gray.500" fontSize="sm">Location</Text>
                  <Text color="white" fontWeight="medium">Lagos, Nigeria</Text>
                </Box>
              </Flex>
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box flex="1" w="100%">
            <FormControl m="auto" >
              <Input mb="1.5rem" py="2rem" border='1px solid rgba(255,255,255,0.05)' borderRadius="15px" bg="rgba(26,26,26,0.3)" backdropFilter="blur(10px)" boxShadow="inset 5px 5px 10px rgba(0,0,0,0.8), inset -5px -5px 10px rgba(255,255,255,0.05)" color="white" _focus={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", outline: "none" }} type='text' placeholder="Your Name" />
              <Input mb="1.5rem" py="2rem" border='1px solid rgba(255,255,255,0.05)' borderRadius="15px" bg="rgba(26,26,26,0.3)" backdropFilter="blur(10px)" boxShadow="inset 5px 5px 10px rgba(0,0,0,0.8), inset -5px -5px 10px rgba(255,255,255,0.05)" color="white" _focus={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", outline: "none" }} type='email' placeholder="Your Email" />
              <Textarea height="150px" mb="1.5rem" py="1.5rem" border='1px solid rgba(255,255,255,0.05)' borderRadius="15px" bg="rgba(26,26,26,0.3)" backdropFilter="blur(10px)" boxShadow="inset 5px 5px 10px rgba(0,0,0,0.8), inset -5px -5px 10px rgba(255,255,255,0.05)" color="white" _focus={{ boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.8), inset -2px -2px 5px rgba(255,255,255,0.05)", outline: "none" }} placeholder="Your Message" >

              </Textarea>
            </FormControl>
            <Button w="100%" py="2rem" top="0" bg="#ff5403" color="white" border="none" borderRadius="full" boxShadow="8px 8px 16px rgba(0,0,0,0.8), -8px -8px 16px rgba(255,255,255,0.05)" _hover={{ opacity: 0.9 }} _active={{ outline: "none", boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.8), inset -5px -5px 10px rgba(255,255,255,0.05)" }}> Send Message</Button>
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}