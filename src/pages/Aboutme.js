import { Box, Button, Center, Divider, Flex,  IconButton,  Image,  Stack, Text } from "@chakra-ui/react";
import {  Link, NavLink } from "react-router-dom";
import avater from "../assets/images/animate.png"
import react from "../assets/images/react.svg"
import node from "../assets/images/nodejs.svg"
import git from "../assets/images/git.svg"
import github from "../assets/images/githubl.svg"
import css from "../assets/images/css3.svg"
import bootstrap from "../assets/images/bootstrap.svg"
import next from "../assets/images/nextjs.svg"
import sass from "../assets/images/sass.svg"
import html from "../assets/images/html5.svg"
import javescript from "../assets/images/javascript.svg"
import mongodb from "../assets/images/mongodb.svg"
import { AiFillGithub, AiFillMediumSquare, AiOutlineTwitter } from "react-icons/ai";

export default function Aboutme() {
  return (
    <Box>   

   
   <Box  p={{xl:"5%"}}  width={{ base: "80%", md: "75%", xl: "75%" }}   m="auto">

    <Flex   direction={{base:"column" , md:"row"}}>
<Box pb="1rem" > <Image  m="auto" width={{ base: "80%", md: "80%", xl: "90%" }} src={avater} /> </Box>
<Stack spacing={6} m="auto"   textAlign={{base:"center"  ,  md:"left"}}>
  <Text as="b"  fontSize="4xl">  Sholaye Eyinmosan   </Text>
  <Text   fontSize="1xl"  color="brand.200" >  web Developer, technical writer  and  a   passionate learner.  </Text>
  
  <Text  as="b" fontSize="xl">  Email Me   </Text>
  <NavLink> <Button  f bg="#386163"  borderRadius="20px" fontSize="15px" p='10px' > novertech4@gmail.com   </Button></NavLink>
  

  <Flex   gap={5}  py="20px"  justifyContent={{base:"center", md:"left"}} >
    <Link to='/work' ><Button  bg="brand.100"  >work</Button></Link>
    <Link to='/contact' ><Button  bg="#cd921e"  >contact</Button></Link>
    <Link to='/profile' ><Button  bg="#84a1ff"  >profile</Button></Link>
    
     </Flex>
     <Flex fontSize="18" justifyContent={{ base: "center", md: "left" }}>
              <Box  my="auto" >  Follow me &nbsp; </Box>
             
              <Flex >
                <Link><IconButton variant="unstyled"   fontSize={30} _hover={{color:'#26a7de'}} icon={ <AiOutlineTwitter /> }/> </Link>
                <Link><IconButton variant="unstyled"   fontSize={30} _hover={{color:'#6c757d'}} icon={  <AiFillGithub /> }/> </Link>
                <Link><IconButton variant="unstyled"   fontSize={30} _hover={{color:'#6c757d'}} icon={  <AiFillMediumSquare /> }/> </Link>
                </Flex>
            </Flex>
    
</Stack>
    </Flex>
    <Divider />
   
      <Box my="3rem" color="brand.200" lineHeight="30px" textAlign={{base:"center" , md:"left"}} >
    Hi there! Thanks for visiting my portfolio. <br/>
I'm  <span  style={{color:"#ff5403"}}>Sholaye Eyinmosan</span>,  a Web Developer, Technical
 Writer, and a passionate learner. I am pursuing B.Tech 
 in Computer Science and Engineering at 
 Lovely Professional University, Punjab, 
 India. I have worked on a wide range of technologies 
 and have worked on projects ranging from small to 
 large scale. I am a self-motivated and self-driven 
 individual who is always looking for new challenges 
 and opportunities. I love participating in hackathons 
 and engaging in communities.
 </Box>
   
    <Box   my="2rem">  
<Text textAlign={{base:"center" , md:"left"}}   as="" fontSize="4xl"  color="#fc0">Tools ,Languages & Frameworks/Libraries  </Text>
<Flex bg="" mx="auto"  my="2rem"flexWrap="wrap"  width="90%"   Height={500}  gap={5}  justifyContent="center">
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={react} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> react JS </Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={node} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> node js</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={mongodb} />   <Text flexWrap="nowrap" as="b" fontSize="10px">mongodb</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={html} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> html5</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={git} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> git</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={sass} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> sass</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image m="auto" Width="54px" src={css } />   <Text flexWrap="nowrap" as="b" fontSize="10px"> css </Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image m="auto" Width="54px" src={bootstrap} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> bootstrap</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image  m="auto" Width="54px" src={javescript} />   <Text flexWrap="nowrap" as="b" fontSize="10px"> javescript</Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image bg="white" m="auto" Width="54px" src={github } />   <Text flexWrap="nowrap" as="b" fontSize="10px">github  </Text></Box>
<Box bg="#121212" borderRadius="10px" py="0.7rem" px="1.5rem"  textAlign={"center"}> <Image bg="white" m="auto" Width="54px" src={next } />   <Text flexWrap="nowrap" as="b" fontSize="10px">next js  </Text></Box>

</Flex>
    </Box>

<Box  mb='3rem'>
<Text  fontSize="4xl" color="brand.100">Skills</Text>
<Box  width="80%" m="auto" textAlign="center"  my="2rem"  fontSize={30} >  
<Box  mb="2rem" bg="dark.200" borderRadius="20px" fontWeight={"bold"}  p="2rem" > Web Development</Box>
<Box bg="dark.200" borderRadius="20px" fontWeight={"bold"}  p="2rem" > Technical Writing</Box>

</Box>
</Box>


   </Box>
   </Box>
  )
}
