import { Box, BoxProps, Container, Flex, Select, SimpleGrid, Stack, TextInput, Title, TitleProps } from "@mantine/core";
import campaignsData from "../data/Campaigns.json";
import { CampaignCard } from "../components";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mantine/hooks";

const CampaignsPage = (): JSX.Element => {
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    const boxProps: BoxProps = {
        mt: matchesMobile ? 2 : 2,
        mb: matchesMobile ? 2 : 2,
        py: matchesMobile ? 2 : 2
    }

    const titleProps: TitleProps = {
        size: 34,
        weight: 750,
        mb: "lg",
        transform: 'capitalize',
        sx: { lineHeight: '40px' }
    }

    const items = campaignsData.data.map(c => (<CampaignCard key={c.id} data={c} showActions={true} />))

    return (
        <>
            <Helmet>
                <title>Discover Projects to invest</title>
            </Helmet>
            <Box>
                <Container size="lg">
                    <Stack>
                        <Box {...boxProps}>
                            <Title {...titleProps} align="center">Discover Projects to invest</Title>
                        </Box>
                        <Flex
                            justify="space-between"
                            gap={{ base: 'sm', sm: 'lg' }}
                            direction={{ base: 'column-reverse', sm: 'row' }}
                        >
                            <TextInput placeholder="search projects..." sx={{ width: 750 }} />
                            <Flex align="center" gap="sm" justify={{ base: 'space-between', sm: 'flex-start' }}>
                                <Select
                                    label=""
                                    placeholder="Projects in"
                                    defaultValue=""
                                    data={[
                                        { value: '5', label: 'show: 5' },
                                        { value: '10', label: 'show: 10' },
                                        { value: '20', label: 'show: 20' },
                                        { value: '50', label: 'show: 50' },
                                    ]}
                                />
                                <Select
                                    label=""
                                    placeholder="Location"
                                    defaultValue="null"
                                    data={[
                                        { value: 'Mumbai' },
                                        { value: 'Thane' },
                                        { value: 'Navi Mumbai' },
                                        { value: 'Pune' },
                                        { value: 'Delhi' },
                                    ]}
                                />
                            </Flex>
                        </Flex>
                        <SimpleGrid
                            cols={2}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: 'md', cols: 2, spacing: 'md' },
                                { maxWidth: 'sm', cols: 1, spacing: 0 },
                            ]}
                        >
                            {items}
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default CampaignsPage;
