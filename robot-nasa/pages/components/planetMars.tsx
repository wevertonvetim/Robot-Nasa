import { Grid, Box, Image } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Home.module.css";

function PlanetMars(props) {
  function setRobot(id) {
    if (`${props.newPosition[0]}${props.newPosition[1]}` == id) {
      if (props.newPosition[2] == "N") {
        return <Image src="/image/north.png" key={id} id={id} />;
      }
      if (props.newPosition[2] == "S") {
        return <Image src="/image/south.png" key={id} id={id} />;
      }
      if (props.newPosition[2] == "E") {
        return <Image src="/image/east.png" key={id} id={id} />;
      }
      if (props.newPosition[2] == "W") {
        return <Image src="/image/west.png" key={id} id={id} />;
      }
    } else {
      return (
        <Box bg="tomato" key={id} id={id}>
          {id}
        </Box>
      );
    }
  }

  return (
    <div>
      <Grid
        h="500px"
        w="500px"
        padding="1ren"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        {props.matriz[0].map(function (row) {
          return props.matriz[1].map((column) => {
            let identificador = `${row}${column}`;
            return setRobot(identificador);
          });
        })}
      </Grid>
    </div>
  );
}
export default PlanetMars;
