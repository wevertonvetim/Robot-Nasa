import { NextPage } from "next";
import Rota from "./components/rota";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Container bg="goldenrod" maxW='container.xl' d="flex" direction="">
        <Rota />
      </Container>
    </>
  );
};
export default Home;
