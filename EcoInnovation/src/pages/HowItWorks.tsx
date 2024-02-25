import { Helmet } from "react-helmet";
import {
    AspectRatio,
    Box,
    BoxProps,
    Button,
    Card,
    CardProps,
    Container,
    Image,
    ImageProps,
    List,
    ListProps,
    SimpleGrid,
    Stack,
    Text,
    Title,
    TitleProps
} from "@mantine/core";
import a from "../assets/img/a.png";
import aa from "../assets/img/aa.png";
import aaa from "../assets/img/aaa.jpg";
import aaaa from "../assets/img/aaaa.jpg";
import { Link } from "react-router-dom";

const HowItWorksPage = (): JSX.Element => {
    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 0
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 900,
        mb: "xl",
        transform: 'capitalize',
        sx: { lineHeight: '40px' }
    }

    const listProps: Omit<ListProps, 'children'> = {
        size: "sm",
        withPadding: false
    }

    const cardProps: Omit<CardProps, 'children'> = {
        radius: "sm",
        shadow: "md",
        padding: "lg",
        sx: {
            backdropFilter: `blur(16px) saturate(180%)`,
            backgroundColor: `rgba(255, 255, 255, 0.75)`,
            border: `none`,
        }
    }

    const imageProps: ImageProps = {
        height: 160,
        fit: "contain",
        py: "xl"
    }

    return (
        <>
            <Helmet>
                <title>How it works</title>
            </Helmet>
            <Box>
                <Container>
                    <Box {...boxProps} sx={{ textAlign: 'center' }}>
                        <Title mb={48} fw={800}>How Investing Works</Title>
                        <Text>Investment on our platform works by providing investment opportunities for already established projects.
                            Through our platform, investors can browse projects, evaluate their potential, and choose to invest based on their interests and objectives.
                        </Text>
                    </Box>
                    <Box {...boxProps}>
                        <Title {...titleProps} align="center">Here's how it works</Title>
                        <SimpleGrid
                            cols={4}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: 'md', cols: 4, spacing: 'md' },
                                { maxWidth: 'sm', cols: 1, spacing: 0 },
                            ]}
                        >
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={a} {...imageProps} />
                                </Card.Section>
                                <Text my="sm" fw={600}>1. Make a Project</Text>
                                <List {...listProps}>
                                    <List.Item>Set investment goal.</List.Item>
                                    <List.Item>Give details of project.</List.Item>
                                    <List.Item>Give estimation of power generated.</List.Item>
                                </List>
                            </Card>
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={aa} {...imageProps} />
                                </Card.Section>
                                <Text my="sm" fw={600}>2. Project Division</Text>
                                <List {...listProps} >
                                    <List.Item>Set price of shares.</List.Item>
                                    <List.Item>Number of shares total.</List.Item>
                                    <List.Item>Total revenue required<br></br> by project.</List.Item>
                                </List>
                            </Card>
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={aaa} {...imageProps} />
                                </Card.Section>
                                <Text my="sm" fw={600}>3. Investment</Text>
                                <List {...listProps}>
                                    <List.Item>Investors can buy shares.</List.Item>
                                    <List.Item>Untradeable shares</List.Item>
                                    <List.Item>Shared investment</List.Item>
                                </List>
                            </Card>
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={aaaa} {...imageProps} />
                                </Card.Section>
                                <Text my="sm" fw={600}>4. Investor Benefits</Text>
                                <List {...listProps}>
                                    <List.Item>Fraction of total electricity generated to be distributed to investors.</List.Item>
                                    <List.Item>Supporting clean energy.</List.Item>
                                </List>
                            </Card>
                        </SimpleGrid>
                    </Box>
                    <Box {...boxProps}>
                        <SimpleGrid
                            cols={2}
                            breakpoints={[
                                { maxWidth: 'sm', cols: 1, spacing: 0 },
                            ]}
                        >
                            <Card
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/campaigns"
                            >
                                <Card.Section>
                                    <Image height='250px'
                                        src="https://www.dexma.com/wp-content/uploads/2019/08/How-Efficient-are-Solar-Energy-Technologies-for-Buildings.png" />
                                </Card.Section>
                                <Stack spacing="sm" align="start" mt="md">
                                    <Text size="lg" fw={500}>Be a part of projects that save future</Text>
                                    <Button size="md" style={{ backgroundColor: "#DAA520" }} component={Link} to="/campaigns">Fund Project</Button>
                                </Stack>
                            </Card>
                            <Card
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/create-campaign"
                            >
                                <Card.Section>
                                    <Image height='250px'
                                        src="https://www.buildinggreen.com/sites/default/files/styles/smartphone_full/public/articles/Norwin.jpg?itok=1aeoXOaO&timestamp=1548356783" />
                                </Card.Section>
                                <Stack spacing="sm" align="start" mt="md">
                                    <Text size="lg" fw={500}>Create your Project</Text>
                                    <Button size="md" style={{ backgroundColor: "#DAA520" }}>Start Project</Button>
                                </Stack>
                            </Card>
                        </SimpleGrid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default HowItWorksPage;
