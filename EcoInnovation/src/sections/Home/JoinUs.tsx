import {
    Avatar,
    Box,
    BoxProps,
    Button,
    Flex,
    Image,
    Progress,
    Stack,
    Text,
    TextProps,
    ThemeIcon,
    TitleProps
} from "@mantine/core";
import { IconUsers, IconWorld } from "@tabler/icons-react"
import { TitleBadge } from "../../components";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
}

const JoinUsSection = ({ boxProps, subtitleProps }: IProps) => {
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Box {...boxProps}>
            <Flex gap={{ base: 'sm', sm: 'lg' }} direction={{ base: 'column-reverse', md: 'row' }}>
                <Stack>
                    <TitleBadge title='Open partnership - Start your journey' />
                    <Text {...subtitleProps}>Socialize and get to know more</Text>
                    <Flex gap="xs">
                        <ThemeIcon size="xl" color="secondary" variant="filled">
                            <IconWorld />
                        </ThemeIcon>
                        <Stack spacing={2}>
                            <Text weight={600}>Global community</Text>
                            <Text size="sm">Reach a community that can make us strong and useful.</Text>
                        </Stack>
                    </Flex>
                    <Flex gap="xs">
                        <ThemeIcon size="xl" color="secondary" variant="filled">
                            <IconUsers />
                        </ThemeIcon>
                        <Stack spacing={2}>
                            <Text weight={600}>Investment</Text>
                            <Text size="sm">Affordable ceiling and are very suitable for novice funders.</Text>
                        </Stack>
                    </Flex>
                    <Progress color="#DAA520" value={50} />
                    <Button style={{ backgroundColor: "#DAA520" }}>Join Us</Button>
                </Stack>
                <Box mx={matchesMobile ? 0 : 'auto'}>
                    <Image
                        src="https://blog.checkiant.com/images/5952_fkhclf.jpg"
                        width={matchesMobile ? '100%' : 500}
                        height={400}
                        radius="sm"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default JoinUsSection;
