import {
  Alert,
  AlertIcon,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { Link } from "../components/link";
import { NumberInput } from "../components/number-input";

const Expanded = () => {
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  return (
    <main>
      <Card>
        <CardHeader>
          <Heading size="md">Introduction</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={3}>
            <Text>
              Want to retire early? This app tells you how long it will take.
            </Text>
            <Text>
              Well, approximately. It'll get you in the right ballpark. If
              you're like me, the right ballpark is good enough. I'd prefer to
              not have to think about dozens of parameters like interest rates
              and inflation. If you do need more precision I'd recommend
              checking out{" "}
              <Link isExternal href="https://projectionlab.com/">
                ProjectionLab
              </Link>
              .
            </Text>
            <Text>
              If you're already familiar with this stuff, check out the{" "}
              <Link underline href="/condensed">
                condensed page
              </Link>
              . If not, this page will walk you through things more slowly.
            </Text>
            <Text>
              At a high level, step one is to figure out how much you need to
              save and step two is to figure out how long it'll take to reach
              that amount of savings.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card mt={5}>
        <CardHeader>
          <Heading size="md">Safe Withdrawal Rate</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={3}>
            <Text>
              I'd like to introduce a term: the{" "}
              <strong>Safe Withdrawal Rate (SWR)</strong>. Suppose you have a
              $1M nest egg. A SWR of 4% would mean that if you withdrew 4% of
              your nest egg each year — $40k — it'd last forever. The interest
              it generates would offset the money you take out.
            </Text>
            <Text>
              That begs the question of what the SWR is. The short answer to
              that question is <strong>4%</strong>.
            </Text>
            <Text>
              Here is a longer answer to that question. In 1998 there was a
              paper by three professors of finance at Trinity University. This
              paper is known as the{" "}
              <Link
                isExternal
                href="https://en.wikipedia.org/wiki/Trinity_study"
              >
                Trinity Study
              </Link>
              . They asked the question: if you retired in 1925, what would the
              SWR be? What about 1926? 1927? 1928? So on and so forth up until
              1981. The answers depend on things like stock market performance
              and inflation, but have always ranged from 4-8.5%.
            </Text>
            <Image
              alt="Trinity study results"
              src="https://www.mrmoneymustache.com/wp-content/uploads/2012/05/SWR-by-year.jpg"
              width={600}
              height={453}
            />
            <Text>What would you like to use for your withdrawal rate?</Text>
            <NumberInput
              label="Withdrawal rate"
              value={withdrawalRate}
              onChange={(_, v) => setWithdrawalRate(v)}
              min={0}
              max={20}
              step={0.25}
              slider={{
                min: 2,
                max: 8,
                step: 0.25,
              }}
            />
            <Alert status="info">
              <AlertIcon />
              <Text>
                The numbers can go past the range of the slider. Ie. the slider
                has a max of 8 but if you type in the input field directly it
                can go up to 20.
              </Text>
            </Alert>
            <Alert status="info">
              <AlertIcon />
              <Text>
                Mr. Money Mustache has a great{" "}
                <Link
                  isExternal
                  href="https://www.mrmoneymustache.com/2012/05/29/how-much-do-i-need-for-retirement/"
                >
                  blog post
                </Link>{" "}
                on safe withdrawal rates.
              </Text>
            </Alert>
            <Alert status="info">
              <AlertIcon />
              <Text>
                The math works out to be pretty nifty. At a 4% SWR you can
                multiply your yearly spending by 25 to get the size of the nest
                egg you'll need. At 5% you multiply by 20. More generally, you
                multiply by <code>100 / SWR</code>.
              </Text>
            </Alert>
          </Stack>
        </CardBody>
      </Card>
    </main>
  );
};

export default Expanded;
