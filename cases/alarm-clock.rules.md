---
format: open-rules
title: Alarm Clock
setter: Jobo
source: https://sudokupad.app/wa9fbfdl75
case: https://sudoku-sleuth.com/cases/alarm-clock
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c9=9
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r3c2-r3c3 colour "white"
kropki-4: kropki r7c2-r7c3 colour "white"
kropki-5: kropki r7c7-r7c8 colour "white"
kropki-6: kropki r3c7-r3c8 colour "white"
parity-1: parity r3c1-r4c1-r5c1-r6c1-r7c1
parity-2: parity r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
parity-3: parity r7c9-r6c9-r5c9-r4c9-r3c9
parity-4: parity r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
pair-1: pair r6c3-r6c4 relation {"op":"sum","value":10}
pair-2: pair r6c6-r6c7 relation {"op":"sum","value":10}
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,2.5],[4.5,2.5],[4.5,1.5],[5.5,1.5],[5.5,2.5]],"color":"#CCCCCC","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[5.5,3.5]],"color":"#CCCCCC","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[5.5,5.5]],"color":"#CCCCCC","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5],[4.5,6.5],[4.5,7.5],[5.5,7.5],[5.5,6.5]],"color":"#CCCCCC","thickness":16,"rounded":true}}
```

Normal sudoku rules apply.

Adjacent digits along the red line must alternate in parity (odd/even).

Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced.

Digits separated by a white dot must be consecutive.
Digits separated by an X must sum to 10.
Not all dots and X are given.

Cells in the same position within two 3x3 boxes cannot contain the same digit (disjoint sets).
