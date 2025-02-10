import { Flex, Image, Text } from "@chakra-ui/react";

export const PokeCard = (name, img, key = 0) => {
  return (
    <Flex key={key}>
      <Image src={img} />
      <Text>{name}</Text>
    </Flex>
  );
};
