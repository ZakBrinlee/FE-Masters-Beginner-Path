/*
    1. Create an object that looks like this:

    {"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}

    2. Extract out the weapon and location using destructuring
*/

const clue = {
    name: "Rusty",
    room: "kitchem",
    weapon: "candlestick"
};

const { weapon, room } = clue;

// This also works by using variable declariation
const { name, room, weapon } = {
    name: "Rusty",
    room: "kitchem",
    weapon: "candlestick"
};