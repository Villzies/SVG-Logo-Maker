const questions = [

    {
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square'],
    },

    {
        name: 'shapeColor',
        message: 'What color would you like your logo to be?',
        type: 'list',
        choices: ['red', 'orange', 'blue']
    },

    {
            name: 'text',
            message: 'What text is on your logo? (5 Character Maximum)',
            type: 'input',
            validate: (answer) => {
                if (answer.length > 5) {
                    return console.log("\n You dun goofed!Text must be 5 characters or less! Please try again");
                }
                return true;
        }
    }
]

module.exports = questions;