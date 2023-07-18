import { useState } from "react";
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
  rem,
} from "@mantine/core";
import range from "./../../assets/range.png";
import beginnerRange from "./../../assets/beginnerRange.png";
import intermediateRange from "./../../assets/intermediateRange.png";
import masterRange from "./../../assets/masterRange.png";
import { COLORS, TYPOGRAPHY } from "../../constants";
const data = [
  { label: "level", image: range },
  { label: "Beginner", image: beginnerRange },
  { label: "Intermediate", image: intermediateRange },
  { label: "Master", image: masterRange },
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

function FilterInput() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={12} height={12} />}
      onClick={() => setSelected(item)}
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
            <Image src={selected.image} width={13} height={12} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

export default FilterInput;
