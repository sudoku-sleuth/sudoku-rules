---
format: open-rules
title: Tunnel Vision
setter: Jobo
source: https://sudokupad.app/5n04464o79
case: https://sudoku-sleuth.com/cases/tunnel-vision
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c9=5
---

```rules
sudoku 9x9
parity r7c3-r6c3-r5c3-r4c3-r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7
whispers r6c4-r5c4-r4c4-r4c5-r4c6-r5c6-r6c6 gap 4
region-sum r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 segments [["r9c1","r8c1","r7c1"],["r6c1","r5c1","r4c1"],["r3c1","r2c1","r1c1","r1c2","r1c3"],["r1c4","r1c5","r1c6"],["r1c7","r1c8","r1c9","r2c9","r3c9"],["r4c9","r5c9","r6c9"],["r7c9","r8c9","r9c9"]]
pair-1: pair r5c5-r6c5 relation {"op":"sum","value":10}
pair-2: pair r2c5-r3c5 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[1.5,1.5],[1.5,7.5],[7.5,7.5]],"color":"#3ba","thickness":6,"rounded":true}}
```

Normal sudoku rules apply.

Digits along the blue line sum to the same value in each 3x3 box the line passes through.

A set of three sequential cells along the teal line must contain one digit from [147], one from [258], and one from [369].

Adjacent digits along the red line must alternate in parity (odd/even).

Adjacent digits along the orange line must differ by at least 4.

Digits separated by an X must sum to 10. Not all X are given.
