"use client";

import { Box, Text } from "@chakra-ui/react";

export default function Error({ message }: { message: string }) {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="xl" fontWeight="bold" color="red.500">
        {message}
      </Text>
    </Box>
  );
}
