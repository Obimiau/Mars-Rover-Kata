
var board = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ];

var marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

travel('rfffrf');


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    }

}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "E";
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
    rover.y = rover.y - 1;
    break;
    case "E":
    rover.x = rover.x + 1;
    break;
    case "S":
    rover.y = rover.y + 1;
    break;
    case "W":
    rover.x = rover.x - 1;
    break;
  }
  console.log (rover.x, rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
    rover.y = rover.y + 1;
    break;
    case "E":
    rover.x = rover.x - 1;
    break;
    case "S":
    rover.y = rover.y - 1;
    break;
    case "W":
    rover.x = rover.x + 1;
    break;
  }
  console.log (rover.x, rover.y);
}



function travel(instructions) {
  var index = 0;
  while(index < instructions.length) {
    switch (instructions[index]) {
      case "f":
      moveForward(marsRover);
      break;
      case "r":
      turnRight(marsRover);
      break;
      case "l":
      turnLeft(marsRover);
      break;
    }
    marsRover.travelLog[index] = marsRover.x + "," + marsRover.y;
    index = index + 1;
  }
  console.log (marsRover.travelLog)
}
