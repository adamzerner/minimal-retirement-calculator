import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "../components/link";

export const Navbar = () => {
  return (
    <Box as="section" pb={{ base: "2", md: "4" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="center">
            <ButtonGroup variant="ghost" spacing="1">
              <Link href="/">
                <Button>Expanded</Button>
              </Link>
              <Link href="/condensed">
                <Button>Condensed</Button>
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
