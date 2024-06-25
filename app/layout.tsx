"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ApolloProvider from "@/providers/apollo";
import ChakraProvider from "@/providers/chakra-ui";
import { Box, Container, VStack } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <ChakraProvider>
            <Box position="relative" minHeight="100vh" width="100%">
              <VStack
                spacing={0}
                flexDirection="column"
                minHeight="100vh"
                w="100%"
              >
                <Header />

                <Box as="main" width="full" flex={1} pb="60px">
                  <Container maxW="container.xl" py={8}>
                    {children}
                  </Container>
                </Box>

                <Footer />
              </VStack>
            </Box>
          </ChakraProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
