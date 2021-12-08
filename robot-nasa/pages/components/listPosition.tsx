import { Button, Stack } from "@chakra-ui/react";

function ListPosition(props) {
  return (
    <>
    <Stack direction={["column"]} spacing="24px" p="2rem 1rem 0 0">
      {props.listPosition.map(function(position) {
        console.log(position+"estouaquiagora")
        return <Button key={position}>{position}</Button>;
      })}
    </Stack>
    </>
  );
}

export default ListPosition;
