import { useContext } from "react";
import { PokeContext } from "../../helpers/context";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import { navStyles } from "../Styles";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavDrawer = () => {
  const context = useContext(PokeContext);

  const {
    isDrawerOpen,
    onDrawerClose,
    onDrawerOpen,
    pokeTypes,
    currType,
    setCurrType,
  } = context;

  const { container } = navStyles;

  const handleTypeClick = type => {
    setCurrType(type);
  };

  return (
    <>
      <Flex {...container}>
        <HamburgerIcon
          w={"50px"}
          h={"50px"}
          onClick={onDrawerOpen}
          color={"white"}
          backgroundColor={"blue"}
        />
      </Flex>
      <Drawer
        placement={"left"}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            {pokeTypes?.length > 0 &&
              pokeTypes.map((poke, index) => {
                return (
                  <Flex
                    onClick={() => handleTypeClick(poke?.name)}
                    key={index}
                    bgColor={currType === poke?.name ? "blue" : "white"}
                  >
                    {poke?.name}
                  </Flex>
                );
              })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
