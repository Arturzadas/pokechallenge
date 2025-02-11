import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image,
  Flex,
  Box,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { PokeContext } from "../../helpers/context";
import { modalStyles } from "../Styles";
import { getIcon, getStatIcon } from "../../helpers/iconize";

export const PokeCard = () => {
  const context = useContext(PokeContext);

  const {
    bodyCont,
    modalCont,
    statCont,
    singleStatCont,
    topCont,
    heading,
    bottomCont,
    abilCont,
    typesCont,
    typeSingleCont,
  } = modalStyles;

  const {
    // currPoke,
    isModalOpen,
    onModalClose,
    currPoke,
    displayPoke,
    setDisplayPoke,
    setCurrType,
  } = context;

  const formatPokeInfo = () => {
    const finalInfo = {
      stats: [],
      abilities: [],
      types: [],
      name: currPoke?.name,
      image: currPoke?.sprites?.front_default,
    };
    const { stats, abilities, types } = currPoke;
    if (stats?.length > 0) {
      stats?.map(stat => {
        finalInfo.stats.push({
          level: stat?.base_stat,
          name: stat?.stat?.name,
        });
      });
    }

    if (abilities?.length > 0) {
      abilities?.map(ab => {
        finalInfo.abilities?.push(ab?.ability?.name);
      });
    }

    if (types?.length > 0) {
      types?.map(type => {
        finalInfo?.types?.push(type?.type?.name);
      });
    }

    setDisplayPoke(finalInfo);
  };

  const handleTypeClick = type => {
    onModalClose();
    setCurrType(type);
  };

  useEffect(() => {
    formatPokeInfo();
  }, [currPoke]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={onModalClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay
          backdropFilter={"blur(5px)"}
          transition={"all 1s ease"}
        />
        <ModalContent {...modalCont}>
          <ModalHeader
            color={"white"}
            fontSize={"30px"}
          >
            {currPoke?.name}
          </ModalHeader>
          <ModalCloseButton color={"white"} />
          <ModalBody>
            <Flex {...bodyCont}>
              <Flex {...topCont}>
                <Image
                  h={"150px"}
                  w={"150px"}
                  src={displayPoke?.image}
                />
                <Flex {...statCont}>
                  <Heading {...heading}>Stats</Heading>
                  {displayPoke?.stats?.length > 0 &&
                    displayPoke?.stats?.map((stat, index) => {
                      return (
                        <Flex
                          {...singleStatCont}
                          key={index}
                        >
                          <Box>
                            {getStatIcon(stat?.name)} {stat?.name}
                          </Box>
                          <Box>{stat?.level}</Box>
                        </Flex>
                      );
                    })}
                </Flex>
              </Flex>
              <Divider my={5} />
              <Flex {...bottomCont}>
                <Flex {...abilCont}>
                  <Heading {...heading}>Abilities</Heading>
                  {displayPoke?.abilities?.length > 0 &&
                    displayPoke?.abilities?.map((ab, index) => {
                      return <Flex key={index}>{ab}</Flex>;
                    })}
                </Flex>
                <Flex {...typesCont}>
                  <Heading {...heading}>Types</Heading>
                  {displayPoke?.types?.length > 0 &&
                    displayPoke?.types?.map(type => {
                      return (
                        <Flex
                          {...typeSingleCont}
                          onClick={() => handleTypeClick(type)}
                        >
                          {getIcon(type)} {type}
                        </Flex>
                      );
                    })}
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onModalClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
