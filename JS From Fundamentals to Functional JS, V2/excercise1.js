/* 
  Game of Clue
  Create game object using dot and bracket notation
  1. Characters
  2. Weapons
  3. Rooms
*/

var game = {};
var characters = ['Darrow', 'Ryn', 'Sasha', 'Rupert', 'Pax'];
var weapons = ['Crossbow', 'Bolas', 'Pike', 'Shovel', 'Bubbles'];
// Spaceship setting
var rooms = ['Cockpit', 'Game Room', 'Engine Bay', 'Barracks'];

game.characters = characters;
game.weapons = weapons;
game.rooms = rooms;

console.log(game);
