import {
  Box,
  Container,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Rota from "./rota";

function Forms() {
  
  return (
    <Container>
      <Input placeholder="Digite a rota" id="rota" />
      <Rota />
    </Container>
  );
}
export default Forms;
