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
import { CharacterBase } from "@/types/character";
import { LocationDetails } from "@/types/location";
import { GET_LOCATION } from "@/graphql/queries/locations";

export default function LocationDetail() {
  const { id } = useParams() as { id: string };

  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id },
  });

  if (loading) return <Loader />;

  if (error) return <Error message="Something went wrong..." />;

  if (!data || !data.location)
    return <EmptyContent message="No data available" />;

  const { location } = data as {
    location: LocationDetails;
  };

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading as="h1" size="2xl">
          {location.name}
        </Heading>

        <Text fontSize="xl" mt={2}>
          Type: {location.type}
        </Text>

        <Text fontSize="lg" mt={2}>
          Dimension: {location.dimension}
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Residents
        </Heading>

        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          {location.residents.map((resident: CharacterBase) => (
            <Link href={`/characters/${resident.id}`} key={resident.id}>
              <Box
                borderWidth={1}
                borderRadius="lg"
                overflow="hidden"
                _hover={{ boxShadow: "lg" }}
              >
                <Image src={resident.image} alt={resident.name} />

                <VStack p={4} align="start">
                  <Heading as="h3" size="md">
                    {resident.name}
                  </Heading>

                  <Badge
                    colorScheme={resident.status === "Alive" ? "green" : "red"}
                  >
                    {resident.status}
                  </Badge>
                  <Text>{resident.species}</Text>
                </VStack>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
}
