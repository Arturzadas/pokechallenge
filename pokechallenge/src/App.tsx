import { ChakraProvider } from "@chakra-ui/react";
import { Dash } from "./components/Dash";
import { PokeProvider } from "./components/ContextWrapper";

function App() {
  return (
    <ChakraProvider>
      <PokeProvider>
        <Dash />
      </PokeProvider>
    </ChakraProvider>
  );
}

export default App;
