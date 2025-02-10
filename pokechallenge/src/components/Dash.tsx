import { Flex } from "@chakra-ui/react";
import { dashStyles } from "./Styles";
import { NavDrawer } from "./ui/NavDrawer";
import { PokeGrid } from "./ui/PokeGrid";
import { useContext, useEffect } from "react";
import { PokeContext } from "../helpers/context";
import { pokeAPI } from "../helpers/axios";

export const Dash = () => {
  const { container } = dashStyles;
  const context = useContext(PokeContext);
  const { setPokeTypes, pokeTypes } = context;

  const getPokeInit = async () => {
    const pokeTypes = await pokeAPI.get("/type");
    setPokeTypes(pokeTypes?.data?.results);
  };

  useEffect(() => {
    getPokeInit();
  }, [pokeTypes]);

  return (
    <Flex {...container}>
      <NavDrawer />
      <PokeGrid />
    </Flex>
  );
};
