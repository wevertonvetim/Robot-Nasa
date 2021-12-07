import { Button, Input } from "@chakra-ui/react";
import { checkMovement, validCommand } from "./chackPosition.tsx";
import { useState } from "react";
import Grid from "./grid";

function Rota(props) {
  const [position, setPosition] = useState([0, 0, "N"]);
  const [newPosition, setNewPosition] = useState(position);
  function moveRobot() {
    let rota = document.querySelector("#rota");
    let comando = rota.value;
    comando = comando.toUpperCase();
    if (validCommand(comando)) {
      setNewPosition(checkMovement(comando, newPosition));
      console.log(position + "estouAqui");
      if (newPosition != false) {
        setPosition(newPosition);
      } else console.log("ERROR");
    } else console.log("ERROR");
  }

  return (
    <>
      <Input placeholder="Digite a rota" id="rota" />
      <Button onClick={moveRobot}>Move</Button>
      <Grid newPosition={newPosition} />
    </>
  );
}

export default Rota;
