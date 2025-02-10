import { Box, Button, Flex } from "@chakra-ui/react";
import { dashStyles } from "./Styles";
import { useContext } from "react";
import { PokeContext } from "../helpers/context";
import { NavDrawer } from "./ui/NavDrawer";
import { PokeGrid } from "./ui/PokeGrid";

export const Dash = () => {
  const { container } = dashStyles;

  const context = useContext(PokeContext);

  const { onDrawerOpen } = context;

  return (
    <Flex
      flexDir={"column"}
      {...container}
    >
      <NavDrawer />
      <PokeGrid />
    </Flex>
  );
};
