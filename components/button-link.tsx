import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

type ButtonLink = {
  title: string;
  href: string;
};

export default function ButtonLink({ href, title }: ButtonLink) {
  return (
    <NextLink href={href} passHref color="white">
      <Button
        colorScheme="blue"
        size="lg"
        color="white"
        textShadow="2px 2px 5px black"
      >
        {title}
      </Button>
    </NextLink>
  );
}
