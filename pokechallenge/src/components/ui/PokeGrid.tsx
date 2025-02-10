import { Flex, Image, Text } from "@chakra-ui/react";
import { gridStyles } from "../Styles";
import { PokeContext } from "../../helpers/context";
import { useContext } from "react";

export const PokeGrid = () => {
  const context = useContext(PokeContext);

  const { poke } = context;

  const { container, card, image, outContainer } = gridStyles;

  return (
    <Flex
      justifyContent={"center"}
      {...outContainer}
    >
      <Flex {...container}>
        {poke?.length > 0 &&
          poke.map((poke, index) => {
            return (
              <Flex
                {...card}
                key={index}
              >
                <Image
                  {...image}
                  src={poke?.sprites?.front_default}
                />
                <Text>{poke?.name}</Text>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};
