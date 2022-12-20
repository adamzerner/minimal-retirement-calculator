import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";
import { Link } from "../components/link";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

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
                <Button>{isMobile ? <BsGithub /> : "GitHub"}</Button>
              </Link>
              <Link isExternal href="https://www.buymeacoffee.com/adamzerner">
                <Button>
                  {isMobile ? <SiBuymeacoffee /> : "Buy Me a Coffee"}
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
