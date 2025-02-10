import { Flex } from "@chakra-ui/react";
import { gridStyles } from "../Styles";

export const PokeGrid = () => {
  const pokemon = [0, 1, 2, 3];

  const { container } = gridStyles;

  return (
    <Flex {...container}>
      {pokemon.map((poke, index) => {
        return <Flex>Pokemon {index}</Flex>;
      })}
    </Flex>
  );
};
