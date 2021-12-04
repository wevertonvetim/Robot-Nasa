import { Grid, Box, Button} from "@chakra-ui/react";
import React from "react";

function PlanetMars(props) {
  return (
    <>
    <Grid
      h="500"
      w="500px"
      padding="1ren"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      { props.ground.map((valor,index)=>{
        return (<Box bg="tomato" key={index}>{valor}</Box>)
      })
      }
    </Grid>
    <Button>restart</Button>
    </>
  );
}
export default PlanetMars;
