import {Helmet} from "react-helmet";
import {
    ActionIcon,
    Alert,
    Anchor,
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    Group,
    NumberInput,
    Paper,
    PaperProps,
    Radio,
    SegmentedControl,
    Select,
    SimpleGrid,
    Stack,
    Stepper,
    Text,
    TextInput,
    Title,
    TitleProps,
    useMantineTheme
} from "@mantine/core";
import {Link, RichTextEditor} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import React, {forwardRef, useState} from "react";
import {DateInput} from "@mantine/dates";
import {
    IconBrandFacebook,
    IconBrandGoogle,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandWhatsapp,
    IconBrandYoutube,
    IconCalendar,
    IconCheck,
    IconChevronLeft,
    IconChevronRight,
    IconCurrencyDollar,
    IconCurrencyRupee,
    IconInfoCircleFilled,
    IconLink,
    IconMail,
    IconPlus,
    IconTrash
} from "@tabler/icons-react";
import {CategorySelect, CountrySelect, CurrencySelect, FileDropzone} from "../components";
import {randomId} from "@mantine/hooks";
import {useForm} from "@mantine/form";

interface ISocialProps {
    icon: React.FC<any>;
    title: React.ReactNode;
}

const SocialSelectItem = forwardRef<HTMLDivElement, ISocialProps>(
    ({title, icon: Icon, ...others}: ISocialProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Icon size={18} stroke={1.5}/>
                <Text size="sm" transform="capitalize">{title}</Text>
            </Group>
        </div>
    )
);

const CreateCampaignPage = () => {
    const theme = useMantineTheme()
    const [active, setActive] = useState(0);
    const [target, setTarget] = useState('deadline');
    const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
    const [donationType, setDonationType] = useState('any');
    const [minimumCheck, setMinimumCheck] = useState(false);
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({types: ['heading', 'paragraph']}),
        ],
        content: '',
    });

    const socialForm = useForm({
        initialValues: {
            employees: [{name: '', active: false, key: randomId()}],
        },
    });

    const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));

    const socialFields = socialForm.values.employees.map((item, index) => (
        <Group key={item.key} mt="xs">
            <Select
                aria-label="social"
                data={
                    [
                        {title: 'Facebook', icon: IconBrandFacebook},
                        {title: 'Whatsapp', icon: IconBrandWhatsapp},
                        {title: 'LinkedIn', icon: IconBrandLinkedin},
                        {title: 'Twitter', icon: IconBrandTwitter},
                        {title: 'Youtube', icon: IconBrandYoutube},
                        {title: 'Other links', icon: IconLink},
                    ].map(c => ({value: c.title, label: c.title, ...c}))}
                itemComponent={SocialSelectItem}
            />
            <TextInput
                placeholder="https://"
                sx={{flex: 1}}
                {...socialForm.getInputProps(`employees.${index}.name`)}
            />
            <ActionIcon color="red" onClick={() => socialForm.removeListItem('employees', index)}>
                <IconTrash size="1rem"/>
            </ActionIcon>
        </Group>
    ));

    const titleProps: TitleProps = {
        size: 24,
        mb: "md"
    }

    const subTitleProps: TitleProps = {
        size: 18,
        mb: "sm"
    }

    const paperProps: PaperProps = {
        p: "md",
        withBorder: false,
        shadow: 'sm',
        mb: "md",
        sx: {backgroundColor: theme.white}
    }

    return (
        <>
            <Helmet>
                <title>Create campaign</title>
            </Helmet>
            <Box>
                <Container my={36}>
                    <Title mb="xl" align="center">Create your campaign</Title>
                    <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                        <Stepper.Step
                            label="Get started"
                            description="Set project details such as project title, target and % stake for public"
                        >
                            <Title {...titleProps}>Project information</Title>
                            <Paper {...paperProps}>
                                <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                                    <TextInput label="Title"/>
                                    <CategorySelect/>
                                </SimpleGrid>
                            </Paper>
                            <Paper {...paperProps}>
                                <Title {...subTitleProps}>Project location</Title>
                                <Text size="sm" mb="sm">Please select the location where the particular project is being made
                                    </Text>
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
                            </Paper>
                            <Paper {...paperProps}>
                                <Stack spacing="sm">
                                    <Title {...subTitleProps}>Fund & Registration details</Title>
                                    <Text size="sm">*Name of the person receiving funds. For organizations, the legal
                                        representative
                                        name (this can be amended later).</Text>
                                    <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                                        <TextInput label="First name"/>
                                        <TextInput label="Last name"/>
                                    </SimpleGrid>
                                    <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                                        <TextInput label="Contact No."/>
                                        <TextInput label="Email"/>
                                    </SimpleGrid>
                                    <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                                        <TextInput label="Organization Name"/>
                                        <TextInput label="% Stake for Public"/>
                                    </SimpleGrid>
                                    <Checkbox label={
                                        <>
                                            I agree to the EcoInnovation{' '}
                                            <Anchor href="#" target="_blank">
                                                terms and conditions & privacy policy
                                            </Anchor>
                                        </>
                                    }/>
                                </Stack>
                            </Paper>
                            <Paper {...paperProps}>
                                <Stack spacing="sm">
                                    <Title {...subTitleProps}>Donation information</Title>
                                    <Radio.Group
                                        label="What kind of project would you like to create?"
                                        value={target}
                                        onChange={setTarget}
                                    >
                                        <Group mt="xs">
                                            <Radio value="deadline" label="Project with a specific end date?"/>
                                            <Radio value="no-deadline" label="Ongoing (no deadline) Project?"/>
                                        </Group>
                                    </Radio.Group>
                                    <Paper {...paperProps}>
                                        {target === 'deadline' ?
                                            <Stack spacing="xs">
                                                <Text size="sm">Project with a specific end date?</Text>
                                                <Text size="sm">This creates urgency and should always be used when
                                                    money is needed before a certain time.</Text>
                                                <DateInput
                                                    value={deadlineDate}
                                                    onChange={setDeadlineDate}
                                                    label="Deadline"
                                                    placeholder="Date input"
                                                    icon={<IconCalendar size={18}/>}
                                                />
                                                <NumberInput
                                                    label="Target amount"
                                                    icon={<IconCurrencyRupee size={18}/>}/>
                                                <Checkbox
                                                    label="Allow your project to be funded over the needed amount?"/>
                                            </Stack> :
                                            <Stack spacing="xs">
                                                <Text size="sm">Ongoing (no deadline) Project?</Text>
                                                <Text size="sm">This should be used if you are collecting money on a
                                                    regular
                                                    basis.</Text>
                                                <Checkbox
                                                    checked={minimumCheck}
                                                    onChange={(event) => setMinimumCheck(event.currentTarget.checked)}
                                                    label="Select this if you would like to set a specific a minimum financial target"/>
                                                {minimumCheck &&
                                                    <NumberInput
                                                        label="Target amount"
                                                        icon={<IconCurrencyDollar size={18}/>}
                                                    />}
                                            </Stack>}
                                    </Paper>
                                </Stack>
                            </Paper>
                            <Paper {...paperProps}>
                                <Title {...subTitleProps}>Donation type</Title>
                                <SegmentedControl
                                    size="md"
                                    value={donationType}
                                    onChange={setDonationType}
                                    data={[
                                        {label: 'Any (popular option)', value: 'any'},
                                        {label: 'Minimum', value: 'minimum'},
                                        {label: 'Fixed', value: 'fixed'},
                                    ]}
                                    mb="sm"
                                />
                                {donationType === 'minimum' ?
                                    <NumberInput label="Minimum amount(s)"/> :
                                    <NumberInput label="Fixed amount(s)"/>}
                                <Checkbox
                                    label="Would you like your project investment page shown in more than one language?"
                                    mt="sm"
                                />
                            </Paper>
                            
                        </Stepper.Step>
                        <Stepper.Step
                            label="Project details"
                            description="Mention details like where the project is situated, the type of project">
                            <Title {...titleProps}>
                                Your project details
                            </Title>
                            <Paper {...paperProps}>
                                <Stack spacing="sm">
                                    <Text size="sm">Explain why you&apos;re making the project, and
                                        how much you value the support</Text>
                                    <RichTextEditor editor={editor}>
                                        <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Bold/>
                                                <RichTextEditor.Italic/>
                                                <RichTextEditor.Underline/>
                                                <RichTextEditor.Strikethrough/>
                                                <RichTextEditor.ClearFormatting/>
                                                <RichTextEditor.Highlight/>
                                                <RichTextEditor.Code/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.H1/>
                                                <RichTextEditor.H2/>
                                                <RichTextEditor.H3/>
                                                <RichTextEditor.H4/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Blockquote/>
                                                <RichTextEditor.Hr/>
                                                <RichTextEditor.BulletList/>
                                                <RichTextEditor.OrderedList/>
                                                <RichTextEditor.Subscript/>
                                                <RichTextEditor.Superscript/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Link/>
                                                <RichTextEditor.Unlink/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.AlignLeft/>
                                                <RichTextEditor.AlignCenter/>
                                                <RichTextEditor.AlignJustify/>
                                                <RichTextEditor.AlignRight/>
                                            </RichTextEditor.ControlsGroup>
                                        </RichTextEditor.Toolbar>

                                        <RichTextEditor.Content/>
                                    </RichTextEditor>
                                    <FileDropzone
                                        label="Upload project photos and location information"
                                        description="You can select and upload several in one go"/>
                                    <TextInput
                                        label="Video URL"
                                        description="The inclusion of a personalized video can help your project get more investors. We support links from YouTube and Vimeo. Simply copy paste your video link into the field below."
                                        icon={<IconLink size={18}/>}
                                    />
                                </Stack>
                            </Paper>
                        </Stepper.Step>
                        
                        <Stepper.Step label="Payment methods" description="Choose your investment method">
                            <Title {...titleProps}>Project Payment Methods</Title>
                            <Paper {...paperProps}>
                                <Stack spacing="sm">
                                    <Title {...subTitleProps}>Enable payment processors for your project investment
                                        page</Title>
                                    <Text size="sm">Available payment methods</Text>
                                    <Group>
                                        <Button variant="light" leftIcon={<IconBrandGoogle size={18}/>}>Connect with
                                            Google Pay</Button>
                                    </Group>
                                </Stack>
                            </Paper>
                        </Stepper.Step>
                        <Stepper.Completed>
                            <Title {...titleProps} align="center" my="xl">Completed, take a seat while we finish setting
                                up things for you</Title>
                        </Stepper.Completed>
                    </Stepper>

                    <Group position="center" mt="xl">
                        <Button
                            variant="default"
                            onClick={prevStep}
                            leftIcon={<IconChevronLeft size={18}/>}
                        >
                            Back
                        </Button>
                        {active < 4 ?
                            <Button onClick={nextStep} leftIcon={<IconChevronRight size={18}/>}>Next step</Button> :
                            <Button component="a" href="/dashboard" leftIcon={<IconCheck size={18}/>}>Launch
                                campaign</Button>
                        }
                    </Group>
                </Container>
            </Box>
        </>
    );
};

export default CreateCampaignPage;