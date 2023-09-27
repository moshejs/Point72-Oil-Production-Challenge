'use strict';
const isNegativeOrNaN = require('./isNegativeOrNaN');

// Class MaxOilProduction: Manages oil production calculations
class MaxOilProduction {
  /**
   * Initialize instance with parameters.
   * @param {Object} params - Initialization parameters.
   * @throws {Error} Throws an error if any parameter is negative or NaN.
   */
  constructor({ decline, period, drills, initialOutput }) {
    if ([decline, period, drills, initialOutput].some(isNegativeOrNaN)) {
      throw new Error('Initialization values must be positive numbers.');
    }
    Object.assign(this, { decline, period, drills, initialOutput });
  }

  /**
   * Calculate days to reach maximum production.
   * @return {number} Days to peak production.
   */
  maxProductionLevelInDays() {
    const daysUntilFirstWellDepletes = Math.ceil(this.initialOutput / this.decline / this.period) * this.period;
    return Math.max(daysUntilFirstWellDepletes, this.period);
  }

  /**
   * Compute peak daily oil production in barrels.
   * @param {number} dayofMaxProduction - Days to reach peak production.
   * @return {number} Peak daily production in barrels.
   */
  peakDailyOilProduction(dayofMaxProduction) {
    let total = 0;
    let day = this.period;
    const decline = this.decline;
    const period = this.period;
    const initialOutput = this.initialOutput;

    while (day <= dayofMaxProduction) {
      total += initialOutput - (decline * (day - period));
      day += period;
    }

    return total * this.drills;
  }
}

module.exports = MaxOilProduction;
