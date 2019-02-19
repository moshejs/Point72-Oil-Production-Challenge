'use strict';
const { askQuestions } = require('./ask');
const MaxOilProduction = require('./MaxOilProduction');
/**
 * This function demonstrates a use case for the oil production algoritm.
 */
function main() {
    askQuestions([ // asked in logical order
        'How many mining drills does the company own (d)? ',
        'What is the period of days each drill finishes an oil well (p)? ',
        'What is the initial output of a well per day in barrels of oil (out0)? ',
        'What is the daily rate of decline of oil output in barrels of oil per day (r)? '
     ]).then(([drills, period, initialOutput, decline]) => {            
            if (isNaN(decline) || isNaN(period) || isNaN(drills) || isNaN(initialOutput)) { // error handling
                console.log(`Values must be numbers, let's try that again!`)
                main();
            } else {
                const maxOilProduction = new MaxOilProduction(decline, period, drills, initialOutput);
                const tMax = maxOilProduction.maxProductionLevelInDays();
                const outTMax = maxOilProduction.peakDailyOilProduction(tMax);
                
                console.log(`It will take ${tMax} day(s) until max production levels are reached, and will yield ${outTMax} barrel(s) of oil!`);
                
                askQuestions(['Would you like to run this again? (1 = Yes, any key to quit)'])
                    .then(([answer]) => {
                        if (answer === 1) main();
                        else process.exit();
                    })
            }
         });
}

main();
