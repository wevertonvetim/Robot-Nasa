import { Button } from "@chakra-ui/button";
import { move } from "./moveRobot.tsx";

function Rota() {
  const validCommand = (comando) => {
    let isValid = false;
    let regex = /[ABCDEFGHIJKNOPQSTUVWX123456789,.!@#$%&*<>]/;
    if (regex.test(comando) == false) {
      isValid = true;
    }
    return isValid;
  };

  const returnPosition = () => {
    let position = [0, 0, "N"];
    let rota = document.querySelector("#rota");
    let comando = rota.value;
    comando = comando.toUpperCase();
    if (validCommand(comando)) {
      position = move(comando, position);
      console.log(position);
    } else console.log("ERROR");
  };

  return (
    <>
      <Button onClick={returnPosition}>Move</Button>
    </>
  );
}

export default Rota;
