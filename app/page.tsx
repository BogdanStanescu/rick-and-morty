"use client";

import ButtonLink from "@/components/button-link";
import { Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Image
        src="/assets/rick-and-morty-bg.jpg"
        alt="Rick and Morty cover"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        objectFit="cover"
        zIndex="-1"
      />

      <VStack spacing={8} align="center" justify="center" minHeight="60vh">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          color="white"
          textShadow="2px 2px 5px black"
        >
          Welcome to the Rick & Morty API Explorer
        </Heading>

        <Text
          fontSize="xl"
          textAlign="center"
          maxWidth="600px"
          color="white"
          textShadow="2px 2px 5px black"
        >
          Explore characters, episodes, and locations from the Rick & Morty
          universe!
        </Text>

        <HStack spacing={4}>
          <ButtonLink title="Explore Characters" href="/characters" />
          <ButtonLink title="Explore Episodes" href="/episodes" />
          <ButtonLink title="Explore Locations" href="/locations" />
        </HStack>
      </VStack>
    </>
  );
}
