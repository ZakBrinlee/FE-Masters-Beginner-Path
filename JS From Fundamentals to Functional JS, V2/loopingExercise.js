/*
    1. Loop through suspects array and print out suspect object

    2. Loop through suspects array and mark the one you think is guilty

    3. Destructure the suspects array into two variables with the strings 'red' and 'orange'
*/

const game = {
    suspects: [
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
};

// Excercise 1 solution
game.suspects.forEach(suspect => {
    console.log(`Suspect: ${suspect.name} - player color: ${suspect.color}`);
});

// Excercise 2 solution
const setBlame = () => {
    const {suspects} = game;
    suspects.forEach(suspect => {
        const {name} = suspect;
        if (name === 'Rusty') {
            suspect.guilty = true;
            return;
        }
    
        suspect.guilty = false;
    });

    const guiltySuspect = suspects.filter(suspect => suspect.guilty === true)[0].name;

    console.log(`${guiltySuspect} is the guilty one`);
};

const printSuspectDetails = () => {
    game.suspects.forEach(suspect => {
        console.log(`Suspect: ${suspect.name} - player color: ${suspect.color} - guilty: ${suspect.guilty}`);
    });
};

const destructSuspectColor = () => {
    const {suspects} = game;
    // Example 1
    const [color, color2] = [suspects[0].color, suspects[1].color];

    // Example 2
    // Need to know that suspects is array and each objext has color
    const [{color: rustyColor}, {color: scarletColor}] = suspects;

    console.log(`Example 1 color: ${color} - color2: ${color2}`);
    console.log(`Example 2 color: ${rustyColor} - color2: ${scarletColor}`);
}

setBlame();
printSuspectDetails();
destructSuspectColor();
