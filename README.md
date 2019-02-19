# Oil Production Exercise for Point72

Imagine that you are hired by an oil company in need of assistance predicting their supply output. You are tasked with formulating and implementing an algorithm given the following production parameters:

The company own a number, `d`, of mining drills. Each drill finishes an oil well each period, `p`, at which point the well immediately starts supplying oil. - Each well has an initial output, `out(0)`, per day of barrels of oil. There are no wells to start. They start accumulating wells as drills complete them. - Each day the oil well output declines linearly by a fixed rate, `r`, until the production reaches zero and the well is depleted.

Given the inputs `[d, p, out(0), r]` your task is to predict two outputs: 
- `t(max)`: how long until the company reaches its maximum production level 
- `out(t(max))`: what is the company's peak daily oil production, in barrels.

**Approach, Motivation, and Discussion can be found [here](EXPLANATION.md).**

## Clone Repo 
#### Follow these steps to clone the repository
``` bash
git clone https://github.com/moshejs/Point72-Oil-Production-Challenge.git
```

## Run CLI calculator
#### This will allow you to use your own inputs.
``` bash
cd Point72/
npm install
npm start
```

Your output should look like this...
``` bash
$ npm start

> max-oil-production@0.0.0 start /Point72-Oil-Production-Challenge
> node index.js

How many mining drills does the company own (d)? 1
What is the period of days each drill finishes an oil well (p)? 7
What is the initial output of a well per day in barrels of oil (out0)? 300
What is the daily rate of decline of oil output in barrels of oil per day (r)? 11
It will take 28 day(s) untill max production levels are reached, and will yield 738 barrel(s) of oil!
Would you like to run this again? (1 = Yes, any key to quit) 
```

## Run Tests
#### This will run all unit tests for the exercise
``` bash
cd Point72/
npm install
npm test
```
Your results should look like this...
``` bash
$ npm test

> max-oil-production@0.0.0 test /Point72-Oil-Production-Challenge
> mocha --recursive

  Example 1: Simple case
    ✓ should calculate t(max)
    ✓ should calculate out(t(max))

  Example 2: Simple case
    ✓ should calculate t(max)
    ✓ should calculate out(t(max))

  Example 3: Simple case with floats
    ✓ should calculate t(max)
    ✓ should calculate out(t(max))

  Example 4: Edge case
    ✓ should calculate t(max)
    ✓ should calculate out(t(max))

  Example 5: Bad Parameters case
    ✓ should not be able to create instance


  9 passing (8ms)
```
