import { Box, Button, FormControl, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function Contact() {
  return (
    <Box id="contact" bg='black' pt="5rem" pb="20rem" borderTop="1px solid gray" >
      <Stack gap={5} textAlign="center" justifyContent="center" p={{ xl: "5%" }} width={{ base: "80%", md: "75%", xl: "75%" }} m="auto" >
        <Heading color="white"> i'd love to hear from you</Heading>
        <Text color="gray.400">just a quick chat? - Dm on Twitter <Button color="white" _hover={{ color: "gray.300" }} variant="unstyled">@NoverPrime_at_Tweet</Button></Text>
        <Box mx="auto">
          <Heading m="" color="white">or</Heading>
          <FormControl width="20rem" m="auto" >
            <Text color="gray.400">Simple leave a message</Text>

            <Input my="1rem" py="2rem" border='1px solid gray' bg="gray.800" color="white" type='email' placeholder="Name" />
            <Input my="1rem" py="2rem" border='1px solid gray' bg="gray.800" color="white" type='email' placeholder="Email" />
            <Textarea height="" my="1rem" py="2rem" border='1px solid gray' bg="gray.800" color="white" placeholder="Message" >

            </Textarea>
          </FormControl>
          <Button ml="auto" bg="white" color="black" _hover={{ bg: "gray.300" }}> Send message</Button>
        </Box>

        <Box></Box>
      </Stack>
    </Box>
  )
}
//<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="back-to-top__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path></svg>