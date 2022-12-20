import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({ children, ...props }: any) => (
  <ChakraLink as={NextLink} {...props}>
    {children}
  </ChakraLink>
);
