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

  const { isDrawerOpen, onDrawerClose, onDrawerOpen } = context;

  const { container } = navStyles;

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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
