"use client";
import { Box, Container, Flex, Link, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" width="full" bg="teal.500" py={4}>
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Link href="/" color="white" fontWeight="bold" fontSize="xl">
            Rick & Morty Explorer
          </Link>

          <Spacer />

          <Flex>
            <Link href="/characters" color="white" mr={4}>
              Characters
            </Link>

            <Link href="/episodes" color="white" mr={4}>
              Episodes
            </Link>

            <Link href="/locations" color="white">
              Locations
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
