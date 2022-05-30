import React from "react";
import { Container } from "@chakra-ui/react";
import Products from "./components/Products";
const App = () => {
  return (
  <div>
     <Container maxW="container.x1" textAlign="center">
     <Products/>
    </Container>
    </div>
   
  );
};

export default App;