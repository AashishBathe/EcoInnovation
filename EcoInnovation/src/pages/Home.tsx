import HeroSection from "../sections/Home/Hero.tsx";
import { Box, BoxProps, Container, Text, TextProps, Title, TitleProps } from "@mantine/core";
import { TitleBadge } from "../components";
import FeaturesSection from "../sections/Home/Features.tsx";
import StatsSection from "../sections/Home/Stats";
import JoinUsSection from "../sections/Home/JoinUs";
import WaysToFundSection from "../sections/Home/WaysToFund";
import CampaignsSection from "../sections/Home/Campaigns";
import GetStartedSection from "../sections/Home/GetStarted";
import TestimonialsSection from "../sections/Home/Testimonials";
import { Helmet } from "react-helmet";

const HomePage = (): JSX.Element => {
    const boxProps: BoxProps = {
        mt: 50,
        mb: 50,
        py: 0
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 800,
        mb: "lg",
        transform: 'capitalize',
        sx: { lineHeight: '40px' }
    }

    const subTitleProps: TextProps = {
        size: 20,
        weight: 700,
        mb: "md",
        sx: { lineHeight: '28px' }
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Box>
                <HeroSection />
                <Container>
                    <Box {...boxProps}>
                        <TitleBadge title="About us" />
                        <Title {...titleProps}>more people more impact</Title>
                        <Text {...subTitleProps}>Because together, we can make a real difference. Investors can invest in green energy projects and can conserve the environment!</Text>
                    </Box>
                    <FeaturesSection boxProps={boxProps} subtitleProps={subTitleProps} />
                    {//<StatsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />
                    }

                </Container>
                <WaysToFundSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />
                <Container>
                    <CampaignsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />
                    <GetStartedSection boxProps={boxProps} titleProps={titleProps} />
                </Container>
            </Box>
        </>
    );
};

export default HomePage;
