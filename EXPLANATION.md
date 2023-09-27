# Optimized Algorithm for Max Oil Production

## Motivation

A naive or brute-force solution could solve this problem but lacks efficiency and doesn't exploit any underlying patterns in oil production given the constraints \([p, r, d, \text{out}_0]\). This document presents an algorithmic solution that is not only more efficient but also provides insights into the cyclical nature of oil production.

---

## Algorithmic Approach

### TL;DR

The maximum production is reached at the period just after the first well has been depleted, with an exception when the first well depletes before a second well is fully drilled.

### Calculating \( t(\text{max}) \)

#### Objective

To find the number of days \( t(\text{max}) \) until the company reaches its maximum production level. 

#### Formula

\[
t(\text{max}) = \lceil \frac{{\text{out}_0}}{r} \rceil \times p
\]

Here, \( \lceil \frac{{\text{out}_0}}{r} \rceil \) calculates the ceiling quotient which represents the day the first well is depleted, termed as "Day of Depletion" (DoD). Multiplying it by \( p \) rounds it up to the nearest period.

#### Edge Case

When \( \text{DoD} < p \), the first well depletes before the second well is drilled. In such cases:

\[
t(\text{max}) = p, \quad \text{out}(t(\text{max})) = \text{out}_0
\]

```javascript
maxProductionLevelInDays() {
   const daysUntilFirstWellDepletes = Math.ceil(this.initialOutput / this.decline / this.period) * this.period;
   return Math.max(daysUntilFirstWellDepletes, this.period);
}
```

### Calculating \( \text{out}(t(\text{max})) \)

#### Objective

To find the peak daily oil production \( \text{out}(t(\text{max})) \) in barrels, given \( t(\text{max}) \).

#### Formula

\[
\text{out}(t(\text{max})) = \sum_{i=1}^{n} (\text{out}_0 - r \times (ip - p)) \times d
\]

Here, \( n \) is the total number of wells, \( i \) is the current well, and \( d \) is the number of drills.

```javascript
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
```

---

## Brute Force Approaches (Not Implemented)

### Method 1: Daily Calculation

1. Set a high upper limit (e.g., 100,000 days).
2. Calculate daily production until the limit.
3. Store daily production in an array or object.
4. Iterate through the data to find the maximum production.

### Method 2: Periodic Calculation

Similar to Method 1, but increments by period \( p \) instead of 1 day. This still involves an arbitrary upper limit and excessive calculations.

---

## Performance Metrics

The algorithmic approach runs in \( O(n) \) time complexity, where \( n \) is the number of periods until \( t(\text{max}) \). This is a significant improvement over the brute-force approach with a time complexity of \( O(N) \), where \( N \) is an arbitrarily high number.

---

## Test Cases

Refer to the test suite for validation against edge cases, boundary conditions, and stress tests.
