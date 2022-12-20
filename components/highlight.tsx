import { Highlight as ChakraHighlight } from "@chakra-ui/react";

type Props = {
  query: string | string[];
  children: any;
};

export const Highlight = ({ query, children }: Props) => (
  <ChakraHighlight
    query={query}
    styles={{ px: "2px", py: "1px", bg: "orange.100" }}
  >
    {children}
  </ChakraHighlight>
);
