import { Box, IconButton, HStack, VStack, Stack, Divider , Text, Flex , Spacer } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
   
    AiOutlineTwitter,
    AiFillMediumSquare,
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineCopyrightCircle
    
  } from "react-icons/ai";

export default function Footersection() {
  return (
    <Box >
      <Box bg="black">
        <Box width="80%"  margin="auto" mt="1.5rem" py="4rem">
          <Flex direction={{base:'column', md:'row' , xl: 'row' }} mb="5" >
            <vStack  >
              <Text as="b" fontSize="3xl"  >Let's Connect</Text>
              <HStack as="b" justifyItems="center">
               <Text>Visits:</Text>  <Text ml="1" py='0.5' px="1.5" borderRadius="10px" color={'black'} bg="#ffcc00">
                  400938
                </Text>
               
              </HStack>
             
            </vStack>
            <HStack mt="0.6rem" mb="1.5rem" margin={{md:'auto'}}>
              <NavLink>
              
                <IconButton fontSize="4xl" border="none" variant={"outline"} icon={<AiOutlineTwitter />} />{" "}
              </NavLink>
              <NavLink>
              
                <IconButton fontSize="4xl" border="none" variant={"outline"} icon={<AiFillGithub />} />
              </NavLink>
              <NavLink>
               
                <IconButton fontSize="4xl" border="none" variant={"outline"} icon={<AiFillMediumSquare />} />
              </NavLink>
              <NavLink>
               
                <IconButton fontSize="4xl" border="none" variant={"outline"} icon={<AiFillLinkedin/>} />
              </NavLink>
            </HStack>
         
          </Flex>
          <Divider />
          <Stack  mt="1.5rem" color="white" justifyContent="left"   >
           <NavLink>
            <Text>Report</Text>
           </NavLink> 
           <NavLink>
            <Text>Feedback</Text>
           </NavLink>
           <NavLink>
            <Text>Privacy Policy</Text>
           </NavLink>
          </Stack>
        </Box>
      </Box>
<Flex px="8%" py="1.5rem" >
<Flex > <Text pt="0.5" pr="0.5" ><AiOutlineCopyrightCircle /></Text>   <Text>2023 Sholaye. All right reserved.</Text> </Flex>
<Spacer />
<Box>Made with 💖 by Me!</Box>
</Flex>
      
    </Box>
  );
}
