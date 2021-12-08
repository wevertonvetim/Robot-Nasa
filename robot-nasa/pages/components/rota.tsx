import { Button, Center, Input, Box } from "@chakra-ui/react";
import { checkMovement, validCommand } from "./chackPosition.tsx";
import { useState } from "react";
import Grid from "./grid";

function Rota(props) {
  const [position, setPosition] = useState([0, 0, "N"]);
  function moveRobot() {
    let rota = document.querySelector("#rota");
    let comando = rota.value;
    comando = comando.toUpperCase();
    if (validCommand(comando)) {
      const newPosition = [...checkMovement(comando, position)];
      console.log(newPosition + "newPosition");
      if (newPosition[2] !== "F") {
        setPosition(newPosition);
      } else alert("I do not know this place...");
    } else alert("I do not speak Englishe!!");
    rota.value = "";
  }

  function restartRobot() {
    setPosition([0, 0, "N"]);
  }

  return (
    <>

          <Input placeholder="Digite a rota" id="rota" m="1rem 0 0 0" size='md' variant='filled'/>
          <Button onClick={moveRobot} size='md' variant='outline' color='black'>Move</Button>
          <Button onClick={restartRobot} size='md' variant='outline' color='black' m="1rem">Restart</Button>
          <Grid position={position} />
         

    </>
  );
}

export default Rota;
