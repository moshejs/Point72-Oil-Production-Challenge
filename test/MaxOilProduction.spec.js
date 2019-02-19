'use strict';
const MaxOilProduction = require('../MaxOilProduction');
const assert = require('assert');

describe('Example 1: Simple case', () => {
    const example =  new MaxOilProduction(11, 7, 1, 300);
    it('should calculate t(max)', () => {
        const tMax = example.maxProductionLevelInDays();
        assert.equal(tMax, 28);
    });
    it('should calculate out(t(max))', () => {
        const tMax = 28; // stub
        const outTMax = example.peakDailyOilProduction(tMax);
        assert.equal(outTMax, 738);
    });
});

describe('Example 2: Simple case', () => {
    const example =  new MaxOilProduction(299, 1, 1, 300);
    it('should calculate t(max)', () => {
        const tMax = example.maxProductionLevelInDays();
        assert.equal(tMax, 2);
    });
    it('should calculate out(t(max))', () => {
        const tMax = 2; // stub
        const outTMax = example.peakDailyOilProduction(tMax);
        assert.equal(outTMax, 301);
    });
});

describe('Example 3: Simple case with floats', () => {
    const example =  new MaxOilProduction(15.325, 5, 3, 333.20);
    it('should calculate t(max)', () => {
        const tMax = example.maxProductionLevelInDays();
        assert.equal(tMax, 25);
    });
    it('should calculate out(t(max))', () => {
        const tMax = 25; // stub
        const outTMax = example.peakDailyOilProduction(tMax);
        assert.equal(outTMax, 2699.25);
    });
});

describe('Example 4: Edge case', () => {
    const example =  new MaxOilProduction(300, 1, 1, 300);
    it('should calculate t(max)', () => {
        const tMax = example.maxProductionLevelInDays();
        assert.equal(tMax, 1);
    });
    it('should calculate out(t(max))', () => {
        const tMax = 1; // stub
        const outTMax = example.peakDailyOilProduction(tMax);
        assert.equal(outTMax, 300);
    });
});

describe('Example 5: Bad Parameters case', () => {
    it('should not be able to create instance', () => {
        assert.throws(() => {new MaxOilProduction(0, -1, -3, -18)}, Error);
    });

});