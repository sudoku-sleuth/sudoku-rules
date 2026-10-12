---
format: open-rules
title: Hourglasses
setter: Jobo
source: https://sudokupad.app/317ky2tx3c
case: https://sudoku-sleuth.com/cases/hourglasses
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r5c3 colour "white"
kropki-2: kropki r8c7-r8c8 colour "white"
between-1: between r2c1-r3c2-r4c2-r5c1 ends ["r1c1","r6c1"]
between-2: between r2c4-r3c3-r4c3-r5c4 ends ["r1c4","r6c4"]
between-3: between r5c6-r6c7-r7c7-r8c6 ends ["r4c6","r9c6"]
between-4: between r5c9-r6c8-r7c8-r8c9 ends ["r4c9","r9c9"]
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,3.5]],"color":"#ffa600ff","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,3.5]],"color":"#ffa600ff","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,8.5]],"color":"#ffa600ff","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,8.5]],"color":"#ffa600ff","thickness":6,"rounded":true}}
```

Normal sudoku rules apply.

Digits on gray between lines must be between the digits in the attached circles.
Digits in the circles of the between lines must be equal to their row, column, or box number.

Adjacent digits along an orange line must differ by at least 4.

Digits separated by a grain of sand (white dot) must be consecutive. Not all dots are given.
