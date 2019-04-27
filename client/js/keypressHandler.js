//Original code
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

//Make a random move -GY
const generateRandomMove = function () {
  return 'up';
}

console.log('Client is running in the browser!');
