import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Navbar = () => {
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="center">
            <ButtonGroup variant="ghost" spacing="1">
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Link href="/about">
                <Button>About</Button>
              </Link>
              <Link
                isExternal
                href="https://github.com/adamzerner/minimal-retirement-calculator"
              >
                <Button>GitHub</Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
