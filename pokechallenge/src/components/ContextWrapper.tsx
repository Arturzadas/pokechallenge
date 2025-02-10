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
  const [poke, setPoke] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [currType, setCurrType] = useState("normal");

  return (
    <PokeContext.Provider
      value={{
        user,
        setUser,
        isDrawerOpen,
        onDrawerOpen,
        onDrawerClose,
        poke,
        setPoke,
        pokeTypes,
        setPokeTypes,
        currType,
        setCurrType,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
