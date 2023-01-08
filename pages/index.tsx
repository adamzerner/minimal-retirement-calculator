import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { Highlight } from "../components/highlight";
import { Link } from "../components/link";
import { NumberInput } from "../components/number-input";
import { getYearsToRetirement } from "../utilities/get-years-to-retirement";
import { toCurrencyDisplay } from "../utilities/to-currency-display";

const Expanded = () => {
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [monthlySpending, setMonthlySpending] = useState(2500);
  const [additionalYearlySpending, setAdditionalYearlySpending] =
    useState(5000);
  const [retirementBuffer, setRetirementBuffer] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(300000);
  const [savingsPerYear, setSavingsPerYear] = useState(40000);
  const [interestPerYear, setInterestPerYear] = useState(7);
  const totalYearlySpending = additionalYearlySpending + monthlySpending * 12;
  const retirementTarget =
    totalYearlySpending * (100 / withdrawalRate) + retirementBuffer;
  const yearsToRetirement = getYearsToRetirement(
    retirementTarget - currentSavings,
    savingsPerYear,
    interestPerYear / 100
  );

  return (
    <main>
      <Stack spacing={5}>
        <Card>
          <CardHeader>
            <Heading size="md">Introduction</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Text>
                <Highlight query={["retire early", "how long it will take"]}>
                  Want to retire early? This app tells you how long it will
                  take.
                </Highlight>
              </Text>
              <Text>
                At a high level, step one is to figure out how much you need to
                save and step two is to figure out how long it'll take to reach
                that amount of savings.
              </Text>
              <Alert status="info">
                <Text>
                  If you're already familiar with this stuff, check out the{" "}
                  <Link underline href="/condensed">
                    condensed page
                  </Link>
                  . If not, this page will walk you through things more slowly.
                </Text>
              </Alert>
              <Alert status="info">
                <Text>
                  Well, it'll get you in the right ballpark. If you're like me,
                  the right ballpark is good enough. I'd prefer to not have to
                  think about dozens of parameters like interest rates and
                  inflation. If you do need more precision I'd recommend
                  checking out{" "}
                  <Link isExternal href="https://projectionlab.com/">
                    ProjectionLab
                  </Link>
                  .
                </Text>
              </Alert>
              <Alert status="info">
                <Text>
                  What if you're not planning to retire early? You plan to
                  retire at a normal age but still want to use this tool? Well,
                  you can. Things get a little more imprecise as you get further
                  from retirement though. Just make a mental note of that and
                  take the results with an appropriate grain of salt.
                </Text>
              </Alert>
            </Stack>
          </CardBody>
        </Card>
        <Card>
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
                . They asked the question: if you retired in 1926, what would
                the SWR be? What about 1927? 1928? 1929? So on and so forth up
                until 1981. The answers depend on things like stock market
                performance and inflation, but have always ranged from 4-8.5%.
              </Text>
              <Image
                alt="Trinity study results"
                src="https://www.mrmoneymustache.com/wp-content/uploads/2012/05/SWR-by-year.jpg"
                width={600}
                height={453}
              />
              <Text>
                What would you like to use for your withdrawal rate? Think about
                how aggressive or conservative you want to be. 4% is
                conservative, 7% is aggressive.{" "}
              </Text>
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
              <Alert style={{ marginTop: 25 }} status="info">
                <Text>
                  The numbers can go past the range of the slider. Ie. the
                  slider has a max of 8 but if you type in the input field
                  directly it can go up to 20.
                </Text>
              </Alert>
              <Alert status="info">
                <Stack spacing={3}>
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
                  <Text>
                    The math works out to be pretty nifty. At a 4% SWR you can
                    multiply your yearly spending by 25 to get the size of the
                    nest egg you'll need. At 5% you multiply by 20. More
                    generally, you multiply by <code>100 / SWR</code>.
                  </Text>
                </Stack>
              </Alert>
              <Alert status="info">
                <Stack spacing={3}>
                  <Text>
                    Note that the Trinity Study took place between 1926 and
                    2010. Do you expect 2010 to 2094 to look much different?
                    Also note that there are{" "}
                    <Link
                      isExternal
                      href="https://en.wikipedia.org/wiki/Trinity_study#Other_studies,_impact_and_criticisms"
                    >
                      criticisms
                    </Link>{" "}
                    of the Trinity Study.
                  </Text>
                  <Text>
                    On the other hand, note that in practice you can be
                    flexible. If you retire early and your nest egg is looking a
                    little small you can always earn some side income, decrease
                    your spending, or in an extreme scenario return temporarily
                    to full-time work. See{" "}
                    <Link href="https://www.mrmoneymustache.com/2011/10/17/its-all-about-the-safety-margin/">
                      It's All About the Safety Margin
                    </Link>
                    .
                  </Text>
                </Stack>
              </Alert>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Nest Egg</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Text>
                Now that we have your withdrawal rate we're quite close to
                figuring out how big of a nest egg you need. We'll approach it
                with the following two questions:
              </Text>
              <OrderedList stylePosition="inside">
                <ListItem>
                  How much do you spend <strong>per month</strong>? Think: rent,
                  groceries, etc.
                </ListItem>
                <ListItem>
                  How much do you spend{" "}
                  <strong>on top of that every year</strong>? Think: vacations,
                  medical, miscellaneous, etc.
                </ListItem>
              </OrderedList>
              <NumberInput
                isCurrency
                label="Monthly spending"
                value={monthlySpending}
                onChange={(_, v) => setMonthlySpending(v)}
                min={0}
                max={20000}
                step={100}
                slider={{
                  min: 1500,
                  max: 6000,
                  step: 100,
                }}
              />
              <NumberInput
                isCurrency
                label="Additional yearly spending"
                value={additionalYearlySpending}
                onChange={(_, v) => setAdditionalYearlySpending(v)}
                min={0}
                max={1000000}
                step={100}
                slider={{
                  min: 0,
                  max: 30000,
                  step: 100,
                }}
              />
              <Text>
                To be clear, the question at hand is how much you're planning on
                spending once you're retired, not what you're spending right
                now. You might spend less during retirement because eg. you have
                more time to cook. Or you might spend more because you want to
                indulge in travel and hobbies.
              </Text>
              <Alert style={{ marginTop: 25 }}>
                <Stack spacing={3}>
                  <Text>
                    Note sure how much you spend? I'd highly recommend{" "}
                    <strong>tracking your spending</strong>. If you aren't
                    currently doing so, the actual numbers might surprise you.
                  </Text>
                  <UnorderedList stylePosition="inside">
                    <ListItem>
                      Personally I use a minimal and lightweight app called{" "}
                      <Link isExternal href="https://greenbooks.app/">
                        GreenBooks
                      </Link>
                      .
                    </ListItem>
                    <ListItem>
                      The more popular alternative is{" "}
                      <Link isExternal href="https://mint.intuit.com/">
                        Mint
                      </Link>
                      . Mint categorizes things automatically but I don't like
                      worrying that it got something wrong. What if your trip to
                      Target was for <code>groceries</code> instead of{" "}
                      <code>household</code>?
                    </ListItem>
                    <ListItem>
                      <Link isExternal href="https://www.youneedabudget.com/">
                        You Need A Budget
                      </Link>{" "}
                      is another popular alternative.
                    </ListItem>
                  </UnorderedList>
                  <Text>
                    Yes, life is full of surprises, but once you have a few
                    years of data on how much you spend I think that plus some
                    common sense gives you a pretty good idea of what you'll
                    need during retirement.
                  </Text>
                </Stack>
              </Alert>
              <Text>
                With the three parameters we've entered in so far, we can
                compute two useful results:
              </Text>
              <StatGroup style={{ marginTop: 25 }}>
                <Stat>
                  <StatLabel>Total yearly spending</StatLabel>
                  <StatNumber>
                    {toCurrencyDisplay(totalYearlySpending)}
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Retirement target (nest egg)</StatLabel>
                  <StatNumber>{toCurrencyDisplay(retirementTarget)}</StatNumber>
                </Stat>
              </StatGroup>
              <Text style={{ marginTop: 25 }}>
                If you're extra conservative, you may want to add a little
                buffer to your retirement target. Ie. maybe you want to add an
                extra $50k to the previous result to provide additional
                breathing rooom. You can do so below.
              </Text>
              <NumberInput
                isCurrency
                label="Retirement buffer"
                value={retirementBuffer}
                onChange={(_, v) => setRetirementBuffer(v)}
                min={0}
                max={1000000}
                step={1000}
                slider={{
                  min: 0,
                  max: 200000,
                  step: 5000,
                }}
              />
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Years Until Retirement</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Text>
                Cool. We know that you are{" "}
                <strong>
                  targeting a {toCurrencyDisplay(retirementTarget)} nest egg
                </strong>
                . The question now becomes: how long will it take to get there?
              </Text>
              <Text>
                In the spirit of keeping things simple and accepting results
                that are in the right ballpark, let's take an easy approach to
                answering this question.
              </Text>
              <Text>How much do you currently have saved up?</Text>
              <NumberInput
                isCurrency
                label="Current savings"
                value={currentSavings}
                onChange={(_, v) => setCurrentSavings(v)}
                min={-1000000}
                max={100000000}
                step={1000}
              />
              <Text>
                Awesome. That means that you need{" "}
                <strong>
                  {toCurrencyDisplay(retirementTarget - currentSavings)} more to
                  retire
                </strong>
                .
              </Text>
              <Text>Now, how much do you think you can save each year?</Text>
              <NumberInput
                isCurrency
                label="Savings per year"
                value={savingsPerYear}
                onChange={(_, v) => setSavingsPerYear(v)}
                min={0}
                max={1000000}
                step={100}
              />
              <Text>
                And how much interest do you expect it to generate each year?
              </Text>
              <NumberInput
                label="Interest per year (%)"
                value={interestPerYear}
                onChange={(_, v) => setInterestPerYear(v)}
                min={0}
                max={30}
                step={0.5}
                slider={{
                  min: 0,
                  max: 10,
                  step: 1,
                }}
              />
              <Alert status="info">
                <Stack spacing={3}>
                  <Text>
                    You probably want to use something like 5-7%. From Mr. Money
                    Mustache's post{" "}
                    <Link
                      isExternal
                      href="https://www.mrmoneymustache.com/2014/11/04/why-i-put-my-last-100000-into-betterment/"
                    >
                      Why I Put My Last $100,000 into Betterment
                    </Link>
                    :
                  </Text>
                  <Image
                    src="https://www.mrmoneymustache.com/wp-content/uploads/2014/11/investment.png"
                    alt="A few asset types with expected annual return after inflation."
                    width={356}
                    height={474}
                  />
                </Stack>
              </Alert>
              <Text>
                With these three values we can now get our final answer of...
              </Text>
              <Stat>
                <StatLabel>Years until retirement</StatLabel>
                <StatNumber>{yearsToRetirement.toFixed(2)}</StatNumber>
              </Stat>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Condensed page</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Text>Congratulations, you made it through!</Text>
              <Text>
                At this point you probably want to play around with the numbers
                some more. For that, I'd recommend heading over to the{" "}
                <Link href="/condensed">condensed page</Link>. It's easier to
                play around with the numbers on that page. It also has a cool
                feature where you could compare stuff to a baseline and set a
                new baseline. Check it out.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Wrapping Up</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Text>
                I hope you enjoyed using this tool. If you did it'd be great if
                you shared it with your friends. If you're interested in early
                retirement I'd recommend{" "}
                <Link isExternal href="https://www.mrmoneymustache.com/">
                  Mr. Money Mustache
                </Link>
                . If you have any questions or comments,{" "}
                <Link isExternal href="mailto:adamzerner@protonmail.com">
                  shoot me an email
                </Link>
                . You can also{" "}
                <Link isExternal href="https://www.buymeacoffee.com/adamzerner">
                  buy me a coffee
                </Link>{" "}
                or check out the{" "}
                <Link
                  isExternal
                  href="https://github.com/adamzerner/minimal-retirement-calculator"
                >
                  code on GitHub
                </Link>
                .
              </Text>
              <Text>Cheers! 👋</Text>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </main>
  );
};

export default Expanded;
