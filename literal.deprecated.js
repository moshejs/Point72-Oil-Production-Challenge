/**
 * DON'T TREAT THIS PART OF THE CODE AS A SUBMISSION.
 * It was simply a literal take on the task as well as an optimization experiment for myself to see 
 * how much faster I can make it with less variable declarations, and other JS functions (62.73% improvement).
 * 
 * Anyway, enjoy this code golf (https://en.wikipedia.org/wiki/Code_golf). 9 LOC, ~0.118ms.
 */
class LiteralMaxOilProduction {
    constructor(r, p, d, out0) { this.r = r, this.p = p, this.d = d, this.out0 = out0; }
    t() { return Math.max(Math.ceil(this.out0 / this.r / this.p) * this.p, this.p) }
    out(t) { 
        let total = 0;
        for (let day = 0; day < t; day = day + this.p) total += this.out0 - (this.r * day);
        return total * this.d;
    }
}

/* Testing Set */
const literalTests = [
    new LiteralMaxOilProduction(11, 7, 1, 300),
    new LiteralMaxOilProduction(11, 7, 1, 600),
    new LiteralMaxOilProduction(11, 7, 1, 250),
    new LiteralMaxOilProduction(11, 7, 1, 150),
    new LiteralMaxOilProduction(11, 7, 1, 100),
    new LiteralMaxOilProduction(11, 7, 1, 80),
];

literalTests.forEach(test => console.log(`out: ${test.out((test.t()))}, days ${test.t()}`))

/* Testing runtime */
console.time();
const literalTest = new LiteralMaxOilProduction(11, 7, 1, 300);
console.timeEnd();
