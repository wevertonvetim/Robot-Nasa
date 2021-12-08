import { Container } from "@chakra-ui/react";
import PlanetMars from "./planetMars";
import { useState } from "react";

function Grid(props) {
  const [matriz, setMatriz] = useState([
    [4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4],
  ]);
  return (
    <Container d="flex" maxW="xl" centerContent bg="goldenrod" p="2rem ">
      <PlanetMars matriz={matriz} position={props.position} />
    </Container>
  );
}
export default Grid;
