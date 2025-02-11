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
import { getIcon } from "../../helpers/iconize";

export const NavDrawer = () => {
  const context = useContext(PokeContext);

  const {
    isDrawerOpen,
    onDrawerClose,
    onDrawerOpen,
    pokeTypes,
    currType,
    setCurrType,
    setCurrPage,
  } = context;

  const { container, drawerCont, drawerBody, single } = navStyles;

  const handleTypeClick = type => {
    onDrawerClose();
    setCurrPage(1);
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
        />
      </Flex>
      <Drawer
        placement={"left"}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent {...drawerCont}>
          <DrawerHeader borderBottomWidth="1px">Types</DrawerHeader>
          <DrawerBody {...drawerBody}>
            {pokeTypes?.length > 0 &&
              pokeTypes.map((poke, index) => {
                return (
                  <Flex
                    onClick={() => handleTypeClick(poke?.name)}
                    key={index}
                    {...single}
                    bgColor={currType === poke?.name ? "white" : "none"}
                    color={currType === poke?.name ? "black" : "white"}
                  >
                    {getIcon(poke?.name)} {poke?.name}
                  </Flex>
                );
              })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
