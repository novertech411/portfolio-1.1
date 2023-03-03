import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Projectsection() {
  return (
    <Box>
<Flex justifyContent="center" ><Text as="b">Recent Project</Text>   <Button
              fontSize="22"
              boxShadow="rgb(255 84 3) 0px 2px 8px 0px;"
              bg="brand.100"
              borderRadius={10}
              py={8}
              px={5}
              fontWeight="light"
              _hover={{ background: "brand.100" }}
            >
              <AiOutlineMail />
              View More
            </Button> </Flex>

    </Box>
  )
}
