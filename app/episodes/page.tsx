"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Pagination from "@/components/pagination";
import Loader from "@/components/loader";
import Error from "@/components/error";
import EmptyContent from "@/components/empty-content";
import { GET_EPISODES } from "@/graphql/queries/episodes";

export default function Episodes() {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page },
  });

  if (loading) return <Loader />;

  if (error) return <Error message="Something went wrong..." />;

  if (!data || !data.episodes)
    return <EmptyContent message="No data available" />;

  const { results, info } = data.episodes;

  return (
    <>
      <Heading as="h1" size="xl" mb={6}>
        Episodes
      </Heading>

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {results.map((episode: EpisodeBase) => (
          <Link href={`/episodes/${episode.id}`} key={episode.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
              <VStack align="start">
                <Heading as="h3" size="md">
                  {episode.name}
                </Heading>
                <Text>{episode.episode}</Text>
                <Text>{episode.air_date}</Text>
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
