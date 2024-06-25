"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Pagination from "@/components/pagination";
import Loader from "@/components/loader";
import Error from "@/components/error";
import EmptyContent from "@/components/empty-content";
import { LocationBase } from "@/types/location";
import { GET_LOCATIONS } from "@/graphql/queries/locations";

export default function Locations() {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page },
  });

  if (loading) return <Loader />;

  if (error) return <Error message="Something went wrong..." />;

  if (!data || !data.locations)
    return <EmptyContent message="No data available" />;

  const { results, info } = data.locations;

  return (
    <>
      <Heading as="h1" size="xl" mb={6}>
        Locations
      </Heading>

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {results.map((location: LocationBase) => (
          <Link href={`/locations/${location.id}`} key={location.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
              <VStack align="start">
                <Heading as="h3" size="md">
                  {location.name}
                </Heading>

                <Text>Type: {location.type}</Text>
                <Text>Dimension: {location.dimension}</Text>
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
