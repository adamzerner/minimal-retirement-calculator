/* eslint-disable react/no-unescaped-entities */
import { Link, Text, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <main>
      <Heading>About</Heading>
      <Text mt={2}>
        A little calculator to explore retirement considerations. Inspired by{" "}
        <Link
          isExternal
          href="https://www.mrmoneymustache.com/2012/05/29/how-much-do-i-need-for-retirement/"
        >
          The 4% Rule: The Easy Answer to “How Much Do I Need for Retirement?”
        </Link>
        .
      </Text>
      <Text mt={2}>
        This calculator prioritizes minimalism over precision. If the "Years
        until retirement" value is off by 12 months or so, for a lot of people
        that's probably fine. They're just trying to get a solid ballpark
        answer. If you do need precision, something like{" "}
        <Link isExternal href="https://projectionlab.com/">
          ProjectionLab
        </Link>{" "}
        would be a better choice.
      </Text>
    </main>
  );
};

export default About;
