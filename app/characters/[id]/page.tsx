"use client";

import { useQuery } from "@apollo/client";
import { Box, Heading, Image, Text, VStack, Grid } from "@chakra-ui/react";

import { useParams } from "next/navigation";
import Loader from "@/components/loader";
import Error from "@/components/error";
import { CharacterDetails } from "@/types/character";
import { GET_CHARACTER } from "@/graphql/queries/characters";

export default function CharacterDetail() {
  const { id } = useParams() as { id: string };

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <Loader />;

  if (error) return <Error message="Something went wrong..." />;

  if (!data) return null;

  const { character } = data as { character: CharacterDetails };

  return (
    <>
      <Box display="flex" alignItems="flex-start">
        <Image
          src={character.image}
          alt={character.name}
          borderRadius="lg"
          mr={8}
        />

        <VStack align="start" spacing={4}>
          <Heading as="h1" size="2xl">
            {character.name}
          </Heading>
          <Text>
            <strong>Status:</strong> {character.status}
          </Text>

          <Text>
            <strong>Species:</strong> {character.species}
          </Text>

          <Text>
            <strong>Gender:</strong> {character.gender}
          </Text>

          <Text>
            <strong>Origin:</strong> {character.origin.name}
          </Text>

          <Text>
            <strong>Location:</strong> {character.location.name}
          </Text>
        </VStack>
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Episodes
        </Heading>

        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
          {character.episode.map((episode) => (
            <Box key={episode.id} borderWidth={1} borderRadius="lg" p={4}>
              <Text fontWeight="bold">{episode.name}</Text>
              <Text>{episode.episode}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}
