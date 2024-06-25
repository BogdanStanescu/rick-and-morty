"use client";
import { Center, Spinner } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Center h="100vh">
      <Spinner size="xl" color="blue.500" />
    </Center>
  );
}
