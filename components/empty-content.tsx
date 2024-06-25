"use client";
import { Box, Text, Center } from "@chakra-ui/react";

export default function EmptyContent({ message }: { message: string }) {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Text fontSize="xl" color="gray.500">
          {message}
        </Text>
      </Box>
    </Center>
  );
}
