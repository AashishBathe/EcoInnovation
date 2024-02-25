import {forwardRef} from 'react';
import {Group, Select, Text} from "@mantine/core";
import {
    IconAugmentedReality,
    IconCat,
    IconClipboardHeart,
    IconDeviceTv,
    IconFireHydrant,
    IconHeartHandshake,
    IconLeaf,
    IconReportMoney,
    IconSos,
    IconWaterpolo,
    IconWind
} from "@tabler/icons-react";

const mockdata = [
    {
        icon: IconClipboardHeart,
        title: 'Solar Energy',
    },
    {
        icon: IconWind,
        title: 'Wind Energy',
    },
    {
        icon: IconHeartHandshake,
        title: 'Hydropower',
    },
    {
        icon: IconLeaf,
        title: 'BioEnergy',
    },
];

const CategorySelectItem = forwardRef<HTMLDivElement, any>(
    ({title, ...others}: any, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <others.icon size={18}/>

                <div>
                    <Text size="sm">{title}</Text>
                </div>
            </Group>
        </div>
    )
);


const CategorySelect = () => {
    return (
        <Select
            label="Category"
            itemComponent={CategorySelectItem}
            data={mockdata.map(c => ({value: c.title, label: c.title, ...c}))}
            searchable
            clearable
            maxDropdownHeight={300}
            nothingFound="Nothing found"
            filter={(value, item) =>
                item?.title?.toLowerCase().includes(value?.toLowerCase().trim())
            }
        />
    );
};

export default CategorySelect;
