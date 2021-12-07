import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Rota from "./components/rota";
import { Button, Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Container bg="blue">
        <Rota />
        <Button>restart</Button>
      </Container>
    </>
  );
};
export default Home;
