import {
    Box,
    BoxProps,
    Button,
    Card,
    createStyles,
    Image,
    PaperProps,
    SimpleGrid,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps
} from '@mantine/core';
import { TitleBadge } from "../../components";

const useStyles = createStyles((theme) => ({
    feature: {
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`
    },
}));

interface FeatureProps extends PaperProps {
    image: string
    title: string;
    description: string;
    action: string;
}

const mockdata = [
    {
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Community',
        description:
            'EcoInnovation believes in the power of collaboration. Together, we are stronger than alone. Connect with fellow enthusiasts and glean insights from seasoned experts. Join our electric community of innovators or attend events showcasing pioneering minds in the realm of sustainable energy.',
        action: `Check out what's going on`
    },
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        title: 'Education',
        description:
            `Education about renewable energy plays a pivotal role in fostering a sustainable and environmentally conscious society. By imparting knowledge on the benefits and applications of renewable energy sources, individuals can make informed choices that contribute to a cleaner and greener future. `,
        action: 'Learn more about upcoming programs & opportunities'
    },
    {
        image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        title: 'Investment',
        description:
            `Ready to invest in ongoing projects that make a positive impact? EcoInnovation offers investment opportunities in existing projects that align with our mission of promoting sustainability and innovation. Join us in supporting these initiatives and contributing to a brighter future.`,
        action: 'See investment options'
    },
    {
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Partnerships',
        description:
            `EcoInnovation collaborates with industry leaders, esteemed institutions, and governmental bodies to empower agents of change. We expedite progress through innovative challenges, accelerator programs, and funding initiatives.`,
        action: 'Find out how we can work together '
    },
];

function Feature({ image, title, description, action }: FeatureProps) {
    const { classes, cx } = useStyles();

    return (
        <Card className={cx(classes.feature, 'card')} shadow="md" radius="sm">
            <Card.Section>
                <Image src={image} height={240} fit="cover" />
            </Card.Section>
            <Stack spacing="sm" mt="md">
                <Title order={4}>{title}</Title>
                <Text size="sm">{description}</Text>
                <Button variant="subtle" color="secondary">{action}</Button>
            </Stack>
        </Card>
    );
}

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps
    subtitleProps?: TextProps
}

const FeaturesSection = ({ boxProps, subtitleProps }: IProps) => {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Box {...boxProps}>
            <Box mb="lg">
                <TitleBadge title="what to expect" />
                <Text {...subtitleProps}>EcoInnovation empowers social impact projects, enterprises, and founders. What electrifying innovation can we help you spark?</Text>
            </Box>
            <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 2, spacing: 'sm' }]} >
                {items}
            </SimpleGrid>
        </Box>
    );
}

export default FeaturesSection;
