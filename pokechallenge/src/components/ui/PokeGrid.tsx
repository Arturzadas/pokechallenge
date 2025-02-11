import { Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { gridStyles } from "../Styles";
import { PokeContext } from "../../helpers/context";
import { useContext } from "react";

export const PokeGrid = () => {
  const context = useContext(PokeContext);

  const { poke, onModalOpen, setCurrPoke } = context;

  const { container, card, image, outContainer } = gridStyles;

  const handlePokeClick = item => {
    setCurrPoke(item);
    onModalOpen();
  };

  return (
    <Flex
      justifyContent={"center"}
      {...outContainer}
    >
      <Flex {...container}>
        {poke?.length > 0 &&
          poke.map((item, index) => {
            return (
              <Flex
                {...card}
                key={index}
                onClick={() => handlePokeClick(item)}
              >
                <Image
                  {...image}
                  src={item?.sprites?.front_default}
                />
                <Text>{item?.name}</Text>
              </Flex>
            );
          })}
        {poke?.length === 0 && (
          <Spinner
            position={"fixed"}
            h={"200px"}
            w={"200px"}
            top={"calc(50vh - 100px)"}
            left={"calc(50vw - 100px)"}
          />
        )}
      </Flex>
    </Flex>
  );
};
