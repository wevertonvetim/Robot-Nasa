import { Button, Stack } from "@chakra-ui/react";

function ListPosition(props) {
  return (
    <>
    <Stack direction={["column"]} spacing="24px" p="2rem 1rem 0 0">
      {props.listPosition.map(function(position) {
        return <Button key={position}>{`X:${position[1]} Y:${position[0]} ${position[2]}`}</Button>;
      })}
    </Stack>
    </>
  );
}

export default ListPosition;
