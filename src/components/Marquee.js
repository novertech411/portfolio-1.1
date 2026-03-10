import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const sentences = [
    "Frontend Developer",
    "React & Next.js Expert",
    "UI/UX Enthusiast",
    "Interactive Web Apps",
    "Performance Optimization",
    "Creative Coder",
    "Pixel Perfect Design",
    "Responsive Layouts",
    "Modern JavaScript"
];

const MarqueeItem = ({ text }) => (
    <Text
        as="span"
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight="900"
        color="transparent"
        textTransform="uppercase"
        mx="1rem"
        style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
        }}
    >
        {text}
    </Text>
);

export default function Marquee() {
    const repeatedContent = [...sentences, ...sentences]; // Duplicate to ensure seamless loop
    return (
        <Box
            w="100%"
            overflow="hidden"
            py={10}
            my={{ base: 10, md: 24 }}
            position="relative"
            display="flex"
            whiteSpace="nowrap"
            borderTop="1px solid rgba(255,255,255,0.05)"
            borderBottom="1px solid rgba(255,255,255,0.05)"
        >
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                }}
                style={{ display: "flex" }}
            >
                {repeatedContent.map((sentence, index) => (
                    <MarqueeItem key={index} text={sentence} />
                ))}
            </motion.div>
        </Box>
    );
}
