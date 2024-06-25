"use client";

import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  Image,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import Loader from "@/components/loader";
import Error from "@/components/error";
import EmptyContent from "@/components/empty-content";
import { GET_EPISODE } from "@/graphql/queries/episodes";
import { CharacterBase } from "@/types/character";

export default function EpisodeDetail() {
  const { id } = useParams() as { id: string };

  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id },
  });

  if (loading) return <Loader />;

  if (error) return <Error message="Something went wrong..." />;

  if (!data || !data.episode)
    return <EmptyContent message="No data available" />;

  const { episode } = data;

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading as="h1" size="2xl">
          {episode.name}
        </Heading>
        <Text fontSize="xl" mt={2}>
          {episode.episode}
        </Text>
        <Text fontSize="lg" mt={2}>
          Air Date: {episode.air_date}
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Characters
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          {episode.characters.map((character: CharacterBase) => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <Box
                borderWidth={1}
                borderRadius="lg"
                overflow="hidden"
                _hover={{ boxShadow: "lg" }}
              >
                <Image src={character.image} alt={character.name} />
                <VStack p={4} align="start">
                  <Heading as="h3" size="md">
                    {character.name}
                  </Heading>
                  <Badge
                    colorScheme={character.status === "Alive" ? "green" : "red"}
                  >
                    {character.status}
                  </Badge>
                  <Text>{character.species}</Text>
                </VStack>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
}
