const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const habitTracker = [];

const rl = readline.createInterface({ input, output });

async function main() {
    console.log("Press 1 - Add new habit");
    console.log("Press 2 - Show habits list");
    console.log("Press 3 - Exit tracker")
    while (true) {
        const answer = await rl.question("\nMake your choice: ");
        if (answer === '1') {
            const newHabit = await rl.question("\nAdd new habit: ");
            habitTracker.push(newHabit);
        } else if (answer === '2') {
            console.log("\nHere are your habits:")
            for (const habit of habitTracker) {
                console.log(habit);
            }
        } else if (answer === '3') {
            console.log("\nExit habit tracker!");
            break;
        } else {
            console.log("\nWrong choice, insert 1, 2 or 3!");
        }
    }
    rl.close();
}

main();