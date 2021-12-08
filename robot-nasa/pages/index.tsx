import type { NextPage } from "next";
import Rota from "./components/rota";
import { Button, Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Container bg="goldenrod" maxW='container.xl' d="flex" direction="">
        <Rota />
      </Container>
    </>
  );
};
export default Home;
