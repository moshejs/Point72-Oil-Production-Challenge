'use strict';
const isNegativeOrNaN = require('./isNegativeOrNaN');
/**
 * Represents a class to determine:
 * 1. Company's maximum production level (days)
 * 2. Company's peak daily oil production (barrels)
 */
 class MaxOilProduction {
    /**
     * 
     * @param {number} decline - The decline of oil output in barrels/day.
     * @param {number} period - The amount of days it takes to drill new well.
     * @param {number} drills - The amount of oil drills the company has available.
     * @param {number} initialOutput - The initial output of a well in barrels of oil.
     */
    constructor(decline, period, drills, initialOutput) {
        if(isNegativeOrNaN(decline) || isNegativeOrNaN(period) ||isNegativeOrNaN(drills) || isNegativeOrNaN(initialOutput)) {
            throw new Error(`Values must be postive numbers`);
        }

        this.decline = decline;
        this.period = period;
        this.drills = drills;
        this.initialOutput = initialOutput;
    }
    /**
     * Calculates amount of days until company reaches the maximum production level.
     * @return {number} The amount of days to reach maximum production level.
     */
    maxProductionLevelInDays() {
        // rounds up to the next multiple of period
        const daysUntilFirstWellDepletes = Math.ceil(this.initialOutput / this.decline / this.period) * this.period; 
        return daysUntilFirstWellDepletes < this.period ? this.period : daysUntilFirstWellDepletes;
    }
    /**
     * Calculates the peak oil production levels in barrels of oil.
     * @param {function} dayofMaxProduction - The amount of days to reach maximum production levels.
     * @return {number} Peak daily oil production in barrels
     */
    peakDailyOilProduction(dayofMaxProduction) { 
        let total = 0;
        for (let day = this.period; day <= dayofMaxProduction; day = day + this.period) {
            const periodTotalProduction = this.initialOutput - (this.decline * (day - this.period));
            total += periodTotalProduction;
        }
        return total * this.drills;
    }
}
module.exports = MaxOilProduction;
