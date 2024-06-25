"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      width="100%"
      as="footer"
      position="fixed"
      bottom="0"
      bg="gray.800"
      boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
    >
      <Flex height="60px" justify="center" alignItems="center" px={4}>
        <Text fontWeight="medium" fontSize="large" color="white">
          Crafted with <Icon as={FaHeart} color="red" mx={1} /> by{" "}
          <Link
            href="https://www.linkedin.com/in/bogdanstanescu/"
            target="_blank"
            textDecoration="underline"
            color="blue.300"
          >
            Stănescu Bogdan
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}
