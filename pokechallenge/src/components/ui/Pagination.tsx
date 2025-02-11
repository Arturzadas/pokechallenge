import { useContext } from "react";
import { PokeContext } from "../../helpers/context";
import { Flex } from "@chakra-ui/react";
import { pageStyles } from "../Styles";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const Pagination = () => {
  const context = useContext(PokeContext);

  const { setCurrPage, currPage, totalPages } = context;

  const { container, arrow } = pageStyles;

  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <Flex {...container}>
      <Flex
        {...arrow}
        cursor={currPage === 1 ? "not-allowed" : "pointer"}
        onClick={() => handlePreviousPage()}
        background={currPage === 1 ? "blackAlpha.400" : "blackAlpha.800"}
      >
        <ChevronLeftIcon color={"white"} />
      </Flex>
      <Flex
        {...arrow}
        _hover={{}}
      >
        {currPage}
      </Flex>
      <Flex
        {...arrow}
        cursor={currPage === totalPages ? "not-allowed" : "pointer"}
        onClick={() => handleNextPage()}
        background={
          currPage === totalPages ? "blackAlpha.400" : "blackAlpha.800"
        }
      >
        <ChevronRightIcon color={"white"} />
      </Flex>
      <Flex
        {...arrow}
        _hover={{}}
      >
        {totalPages}
      </Flex>
    </Flex>
  );
};
