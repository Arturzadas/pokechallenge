import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { PokeContext } from "../helpers/context";

export const PokeProvider = ({ children }) => {
  const [user, setUser] = useState<string | undefined>(undefined);
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <PokeContext.Provider
      value={{ user, setUser, isDrawerOpen, onDrawerOpen, onDrawerClose }}
    >
      {children}
    </PokeContext.Provider>
  );
};
