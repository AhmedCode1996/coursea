/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
  rem,
} from "@mantine/core";

import rangeIcon from "./../../assets/range.png";
import beginnerRangeIcon from "./../../assets/beginnerRange.png";
import intermediateRangeIcon from "./../../assets/intermediateRange.png";
import masterRangeIcon from "./../../assets/masterRange.png";

import categoryIcon from "./../../assets/category.png";
import allCategoriesIcon from "./../../assets/allCategories.png";
import designIcon from "./../../assets/design.png";
import developmentIcon from "./../../assets/development.png";
import softwareIcon from "./../../assets/software.png";
import marketingIcon from "./../../assets/marketing.png";

import sortIcon from "./../../assets/sort.png";
import popularSortIcon from "./../../assets/popularSort.png";
import ascendingSortIcon from "./../../assets/ascendingSort.png";
import descendingSortIcon from "./../../assets/descendingSort.png";
import ratingSortIcon from "./../../assets/ratingSort.png";

import { COLORS, TYPOGRAPHY } from "../../constants";
import { useDispatch } from "react-redux";
import { filter } from "../../features/courseSlice";

const inputData = {
  level: [
    { label: "level", image: rangeIcon },
    { label: "Beginner", image: beginnerRangeIcon },
    { label: "Intermediate", image: intermediateRangeIcon },
    { label: "Master", image: masterRangeIcon },
  ],
  category: [
    { label: "Category", image: categoryIcon },
    { label: "All Categories", image: allCategoriesIcon },
    { label: "Development", image: developmentIcon },
    { label: "Marketing", image: marketingIcon },
    { label: "Design", image: designIcon },
    { label: "Software", image: softwareIcon },
  ],
  sortBy: [
    { label: "Sort By:", image: sortIcon },
    { label: "Popular", image: popularSortIcon },
    { label: "Title: A-To-Z", image: ascendingSortIcon },
    { label: "Title: Z-To-A", image: descendingSortIcon },
    { label: "Rating", image: ratingSortIcon },
  ],
};

const useStyles = createStyles((theme, { opened }) => ({
  control: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0.750rem 2.5rem`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    color: COLORS.neutral.black,
    fontSize: TYPOGRAPHY.sm,
  },
}));

function FilterInput({ type }) {
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(inputData[type][0]);

  let targetData = [];
  if (type === "level") targetData = inputData[type];
  if (type === "sortBy") targetData = inputData[type];
  if (type === "category") targetData = inputData[type];

  const items = targetData?.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={20} height={20} />}
      onClick={() => {
        setSelected(item);
        dispatch(filter(item));
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={20} height={20} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

export default FilterInput;
