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
import { levelFilter } from "../../features/courseSlice";

import rangeIcon from "./../../assets/range.png";
import beginnerRangeIcon from "./../../assets/beginnerRange.png";
import intermediateRangeIcon from "./../../assets/intermediateRange.png";
import masterRangeIcon from "./../../assets/masterRange.png";

const levelData = [
  { label: "level", image: rangeIcon },
  { label: "Beginner", image: beginnerRangeIcon },
  { label: "Intermediate", image: intermediateRangeIcon },
  { label: "Master", image: masterRangeIcon },
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

function LevelFilterInput() {
  const dispatch = useDispatch();
  const { levelFilterState } = useSelector((state) => state.courseSlice);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState({
    ...levelData[0],
    label: levelFilterState,
  });

  const items = levelData?.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={20} height={20} />}
      onClick={() => {
        setSelected(item);
        dispatch(levelFilter(item));
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

export default LevelFilterInput;
