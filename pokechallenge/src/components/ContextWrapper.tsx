import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { PokeContext } from "../helpers/context";

export const PokeProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [poke, setPoke] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [currType, setCurrType] = useState("normal");
  const [currPage, setCurrPage] = useState(1);
  const [currPoke, setCurrPoke] = useState({});

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
        currPage,
        setCurrPage,
        isModalOpen,
        onModalOpen,
        onModalClose,
        currPoke,
        setCurrPoke,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
