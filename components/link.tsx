import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({ children, underline = true, ...props }: any) => (
  <ChakraLink
    as={NextLink}
    sx={{ textDecoration: underline ? "underline" : "auto" }}
    {...props}
  >
    {children}
  </ChakraLink>
);
