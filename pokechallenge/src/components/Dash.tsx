import { Flex } from "@chakra-ui/react";
import { dashStyles } from "./Styles";
import { NavDrawer } from "./ui/NavDrawer";
import { PokeGrid } from "./ui/PokeGrid";
import { useContext, useEffect } from "react";
import { PokeContext } from "../helpers/context";
import { pokeAPI } from "../helpers/axios";
import { PokeCard } from "./ui/PokeCard";

export const Dash = () => {
  const { container } = dashStyles;
  const context = useContext(PokeContext);
  const { setPokeTypes, currType, currPage, setPoke } = context;

  const getPokeTypes = async () => {
    const pokeTypes = await pokeAPI.get("/type");
    setPokeTypes(pokeTypes?.data?.results);
  };
  const getPokeListByType = async () => {
    const itemsPerPage = 25;

    try {
      const pokes = await pokeAPI.get(`/type/${currType}/?limit=25&offset=0`);

      const startIndex = (currPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const pokeList = pokes?.data?.pokemon?.slice(startIndex, endIndex);

      const pokeDetails = await Promise.all(
        pokeList.map(async pokemon => {
          const details = await pokeAPI.get(pokemon.pokemon.url);
          return details?.data;
        })
      );

      console.log(pokeDetails);
      setPoke(pokeDetails);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  // init poke type list from api
  useEffect(() => {
    getPokeTypes();
  }, []);

  // fetch pokes when poketype is changed
  useEffect(() => {
    getPokeListByType();
  }, [currType, currPage]);

  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
    >
      <PokeCard />
      <Flex {...container}>
        <NavDrawer />
        <PokeGrid />
      </Flex>
    </Flex>
  );
};
