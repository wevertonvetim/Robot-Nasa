import {
  Button,
  Input,
  Stack,
  Grid as GridChakra,
  Spacer,
} from "@chakra-ui/react";
import { checkMovement, validCommand } from "./checkPosition";
import { useState, useEffect } from "react";
import Grid from "./grid";
import ListPosition from "./listPosition";

function Rota(props) {
  const [position, setPosition] = useState([0, 0, "N"]);
  const [listPosition, setListPosition] = useState([]);
  function moveRobot() {
    let rota = document.querySelector("#rota");
    let comando = rota.value;
    comando = comando.toUpperCase();
    if (validCommand(comando)) {
      const newPosition = [...checkMovement(comando, position)];
      if (newPosition[2] !== "F") {
        setPosition(newPosition);
      } else alert("Coordenada Invalida!!");
    } else alert("Comando Invalido!!");
    rota.value = "";
  }
  useEffect(() => {
    const list = [...listPosition, position];
    if (list.length > 8) {
      list.splice(0, 1);
    }
    setListPosition(list);
  }, position);

  function restartRobot() {
    setPosition([0, 0, "N"]);
    setListPosition([]);
  }

  return (
    <>
      <Stack direction={{ base: "column", sm: "row" }} p="1rem">
        <Input
          placeholder="Digite a rota"
          id="rota"
          m="1rem"
          size="md"
          variant="filled"
        />
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="24px"
          key="list"
          p="1rem 1rem"
        >
          <Button onClick={moveRobot} size="md" variant="outline" color="black">
            Move
          </Button>
          <Button
            onClick={restartRobot}
            size="md"
            variant="outline"
            color="black"
            m="1rem"
          >
            Restart
          </Button>
        </Stack>
      </Stack>
      <Spacer />
      <Stack direction="row" spacing={8}>
        <Grid position={position} />
        <ListPosition listPosition={listPosition} />
      </Stack>
    </>
  );
}

export default Rota;
