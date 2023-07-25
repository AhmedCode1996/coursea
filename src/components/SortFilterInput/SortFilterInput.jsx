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

import { COLORS, TYPOGRAPHY } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { sortFilter } from "../../features/courseSlice";

import sortIcon from "./../../assets/sort.png";
import popularSortIcon from "./../../assets/popularSort.png";
import ascendingSortIcon from "./../../assets/ascendingSort.png";
import descendingSortIcon from "./../../assets/descendingSort.png";
import ratingSortIcon from "./../../assets/ratingSort.png";

const sortData = [
  { label: "Sort By:", image: sortIcon },
  { label: "Popular", image: popularSortIcon },
  { label: "Title: A-To-Z", image: ascendingSortIcon },
  { label: "Title: Z-To-A", image: descendingSortIcon },
  { label: "Rating", image: ratingSortIcon },
];

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

function SortFilterInput() {
  const dispatch = useDispatch();
  const { sortFilterState } = useSelector((state) => state.courseSlice);

  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(sortData[0]);

  const items = sortData?.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={20} height={20} />}
      onClick={() => {
        setSelected(item);
        dispatch(sortFilter(item));
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

export default SortFilterInput;
