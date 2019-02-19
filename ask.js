/**
 * This module was taken from
 * https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js
 * to use cleaner I/O code in index.
 */
const readline = require('readline');

const AskQuestion = (rl, question) => {
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const Ask = function(questions) {
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let results = [];
        for(let i=0;i < questions.length;i++) {
            const result = await AskQuestion(rl, questions[i]);
            results.push(Number(result));
        }
        rl.close();
        resolve(results);
    })
}

module.exports = {
    askQuestions: Ask 
}