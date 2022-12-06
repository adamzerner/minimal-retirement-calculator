import { Link } from "@chakra-ui/react";

const About = () => {
  return (
    <main>
      <p>
        A little calculator to explore retirement considerations. Inspired by{" "}
        <Link
          isExternal
          href="https://www.mrmoneymustache.com/2012/05/29/how-much-do-i-need-for-retirement/"
        >
          The 4% Rule: The Easy Answer to “How Much Do I Need for Retirement?”
        </Link>
        .
      </p>
    </main>
  );
};

export default About;
