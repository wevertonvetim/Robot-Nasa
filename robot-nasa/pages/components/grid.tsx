import { Container, Box } from "@chakra-ui/react";
import Forms from "./forms";
import PlanetMars from "./planetMars";
import {useState} from "react";

function Grid(props) {
  const [matriz, setMatriz] = useState([[4,3,2,1,0],[0,1,2,3,4]])
  return (
    <Container d="flex" maxW="xl" centerContent bg="blue">
      <Forms />
      <PlanetMars  matriz = {matriz} newPosition={props.newPosition}/>
    </Container>
  );
}
export default Grid;
