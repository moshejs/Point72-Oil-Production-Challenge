# Motivation

At first, one might try a naive (or brute force) solution to solve this problem. While it does get the task completed, it does not show a fair understanding of the problem and can prevent one from discovering a cyclical pattern of oil production given the constraints [p,r,d, out0]. While my solution is algorithmic, I discuss the method of brute force in detail at the end.

    constructor(decline, period, drills, initialOutput) {
        if(decline <= 0 || period <= 0 || drills <= 0  || initialOutput <= 0) 
            throw new Error(`Values must be >= 0`);

        this.decline = decline;
        this.period = period;
        this.drills = drills;
        this.initialOutput = initialOutput;
    }

# Algorithmic approach

## TL;DR
### We reach max production at the period after the first well has been depleted, except when first well depletes before a second well is fully drilled.

## `t(max)`

In order to determine the amount of days until a company reaches its maximum production level, we must find a relationship between the initial output of a well (`out0`), the daily decline in supply of a well (`r`), and the period until another well is available (`p`).

This relationship is modeled by determining the ceiling quotient between `out0` and `r`, which gives us "the day our first well is depleted" (`dod`). 

By dividing `dod` by `p`, we find how many periods (therefore wells) exist in our cycle (`c`). The product of `c` and `p`, yields `t(max)`, as in some cases our first well depletes before the next period (`p`) while additional wells in the cycle still have oil supply available.

The maximum amount of available wells (`c`) is determined the day before the first well is depleted. Since our first well would be at its lowest supply levels, we must wait until the next well becomes available in order to determine our peak day and maximum output. 
To conclude, the day where a new well is available after the first well is depleted is our earliest `t(max).`
 
 *Note: An edge case is found where `dod < p`, where the amount of time it takes for the first well to deplete is greater than our period to drill a second well. It is solved through a comparator, and as a result `out(t(max)) = out0, and t(max) = p` since there is no oil supply left in our first well once the next (2nd) well is available.*

     maxProductionLevelInDays() {
        const daysUntilFirstWellDepletes = Math.ceil(this.initialOutput / this.decline / this.period) * this.period;
        
        return daysUntilFirstWellDepletes < this.period ? this.period : daysUntilFirstWellDepletes;
    }

## `out(t(max))`

Now that we have the day of max production, `t(max)`, we use that as a "calculated" upper bound to find the peak daily production supply in barrels of oil, `out(t(max))`. 

To do this, we must find the summation of the supply available for each well, which is defined by the period of time when it is available (`1p, 2p, ..., max-p`). 

To calculate the supply of an individual well, we subtract the product of the rate of decline and the number of days passed since the well was made available from the initial output given. 

*Note: Since multiplication is associative, we can factor in the number of drills provided once the total for a single drill has been found.*

    peakDailyOilProduction(dayofMaxProduction) { 
        let total = 0;
        for (let day = this.period; day <= dayofMaxProduction; day = day + this.period) {
            const periodTotalProduction = this.initialOutput - (this.decline * (day - this.period));
            if(periodTotalProduction > 0) total += periodTotalProduction;
        }
        return total * this.drills;
    }

# Brute Force

### Method 1: Calculate Production Output by Day (Brute Force)  [not implemented]

1. Generate an arbitrarily high upper limit (`e.x. 100,000`)
2. Calculate daily production for every day until the limit is reached
3. Store daily production in `array/object` where 
        `key = day, value = production output`
4. iterate through the array and store the maximum production output (`if currentMax > max`) in a variable.
5. return the max variable after iteration is complete


### Method 2: Calculate Production Output by Period (Brute Force) [not implemented]

Similar to method 1, the iterator is incremented by the period (`p`) instead of 1. While the amount of iterations is significantly decreased, it is still a brute force method as you have an arbitrary upper limit and you are calculating a redundant amount of periods beyond the day where the first max is reached.
