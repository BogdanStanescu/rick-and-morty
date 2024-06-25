"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Pagination from "@/components/pagination";
import Loader from "@/components/loader";
import Error from "@/components/error";
import EmptyContent from "@/components/empty-content";
import { GET_CHARACTERS } from "@/graphql/queries/characters";
import { CharacterBase } from "@/types/character";

export default function Characters() {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <Loader />;

  if (error) return <Error message="Something went wrong..." />;

  if (!data || !data.characters)
    return <EmptyContent message="No data available" />;

  const { results, info } = data.characters;

  return (
    <>
      <Heading as="h1" size="xl" mb={6}>
        Characters
      </Heading>

      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {results.map((character: CharacterBase) => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={character.image} alt={character.name} />
              <VStack p={4} align="start">
                <Heading as="h3" size="md">
                  {character.name}
                </Heading>
                <Text>{character.species}</Text>
                <Text>{character.status}</Text>
              </VStack>
            </Box>
          </Link>
        ))}
      </Grid>

      <Pagination
        currentPage={page}
        totalPages={info.pages}
        onPageChange={setPage}
      />
    </>
  );
}
