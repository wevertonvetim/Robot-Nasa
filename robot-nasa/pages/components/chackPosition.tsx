export function validCommand(comando) {
  let isValid = false;
  let regex = /[ABCDEFGHIJKNOPQSTUVWX123456789,.!@#$%&*<>]/;
  if (regex.test(comando) == false) {
    isValid = true;
  }
  return isValid;
}
export function checkMovement(command, position) {
  const oldPosition = position;
  console.log(oldPosition);
  let currentDirection = position[2];
  let arrayCommand = command.split("");

  arrayCommand.map((movimento) => {
    if (movimento != "M") {
      currentDirection = changeDirection(currentDirection, movimento);
      position[2] = currentDirection;
    } else {
      position = moveRobot([...position]);
    }
  });
  return position;
}

const changeDirection = (currentDirection, movimento) => {
  let newDirection = "sem numero";
  if (currentDirection == "N") {
    if (movimento == "R") {
      newDirection = "E";
    }
    if (movimento == "L") {
      newDirection = "W";
    }
  } else if (currentDirection == "E") {
    if (movimento == "R") {
      newDirection = "S";
    }
    if (movimento == "L") {
      newDirection = "N";
    }
  } else if (currentDirection == "S") {
    if (movimento == "R") {
      newDirection = "W";
    }
    if (movimento == "L") {
      newDirection = "E";
    }
  } else if (currentDirection == "W") {
    if (movimento == "R") {
      newDirection = "N";
    }
    if (movimento == "L") {
      newDirection = "S";
    }
  }
  return newDirection;
};

const moveRobot = (position) => {
  if (position[2] == "N") {
    position[0] = position[0] + 1;
  }
  if (position[2] == "S") {
    position[0] = position[0] - 1;
  }
  if (position[2] == "E") {
    position[1] = position[1] + 1;
  }
  if (position[2] == "W") {
    position[1] = position[1] - 1;
  }
  if (checkPosition(position)) {
    return position;
  } else {
    return [0, 0, "F"];
  }
};

const checkPosition = (position) => {
  let isValid = true;
  if (position[0] > 4 || position[0] < 0) {
    isValid = false;
  } else if (position[1] > 4 || position[1] < 0) {
    isValid = false;
  } else if (position[2] === "F") {
    isValid = false;
  }
  return isValid;
};
