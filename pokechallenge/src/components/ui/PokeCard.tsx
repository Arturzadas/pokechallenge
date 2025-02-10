import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { PokeContext } from "../../helpers/context";

export const PokeCard = () => {
  const context = useContext(PokeContext);

  const {
    // currPoke,
    isModalOpen,
    onModalClose,
    currPoke,
  } = context;

  // console.log(currPoke);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={onModalClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currPoke?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onModalClose}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
