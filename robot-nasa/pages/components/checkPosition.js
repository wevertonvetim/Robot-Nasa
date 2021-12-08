export function validCommand(command) {
  let isValid = false;
  let regex = /[ABCDEFGHIJKNOPQSTUVWX123456789,.!@#$%&*<>]/;
  if (regex.test(command) == false) {
    isValid = true;
  }
  return isValid;
}
export function checkMovement(command, position) {
  const oldPosition = position;
  let currentDirection = position[2];
  let arrayCommand = command.split("");

  arrayCommand.map((movement) => {
    if (movement != "M") {
      currentDirection = changeDirection(currentDirection, movement);
      position[2] = currentDirection;
    } else {
      position = moveRobot([...position]);
    }
  });
  return position;
}

const changeDirection = (currentDirection, movement) => {
  let newDirection = "sem numero";
  if (currentDirection == "N") {
    if (movement == "R") {
      newDirection = "E";
    }
    if (movement == "L") {
      newDirection = "W";
    }
  } else if (currentDirection == "E") {
    if (movement == "R") {
      newDirection = "S";
    }
    if (movement == "L") {
      newDirection = "N";
    }
  } else if (currentDirection == "S") {
    if (movement == "R") {
      newDirection = "W";
    }
    if (movement == "L") {
      newDirection = "E";
    }
  } else if (currentDirection == "W") {
    if (movement == "R") {
      newDirection = "N";
    }
    if (movement == "L") {
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
