---
fog:
  initiallyLit:
    - 54
    - 55
    - 56
    - 63
    - 64
    - 65
    - 72
    - 73
    - 74
format: open-rules
title: Parity in the fog
setter: Chip Sounder
source: https://sudokupad.app/pxs1s4m6am
case: https://sudoku-sleuth.com/cases/parity-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight stated true
parity r8c3-r7c3-r7c2-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4-r8c4-r7c5-r6c5-r6c6-r6c7-r7c7-r8c7-r7c8-r7c9-r6c9-r5c8-r4c8-r5c7-r4c6-r3c5-r2c5-r3c4-r3c3-r2c3-r1c3
pair-1: pair r7c2-r8c2 sum 10
pair-2: pair r7c5-r8c5 sum 10
pair-3: pair r8c6-r9c6 sum 10
pair-4: pair r5c5-r6c5 sum 10
pair-5: pair r2c6-r2c7 sum 10
pair-6: pair r9c2-r9c3 sum 5
little-killer-1: little-killer r6c1-r7c2-r8c3-r9c4 sum 15
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 13
little-killer-3: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 23
little-killer-4: little-killer r6c9-r7c8-r8c7-r9c6 sum 16
little-killer-5: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 21
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5],[8.5,1.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5],[8.5,4.5],[8.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,7.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
The grid is covered in fog, placing a correct digit will clear the surrounding cells to that digit. No bifurcation is needed.
Cells separated by a knights move (in chess) cannot contain the same digit.
Digits on a red line alternate between odd and even. There is only ONE parity line in the puzzle.
Digits on an orange line alternate between low (123), medium (456) and high (789). A set of three connected along the line must contain one of each.
Clues outside the grid sum the digits in the indicated diagonal (digits may repeat).
Cells separated by an X sum to 10.
Cells separated by a V sum to 5. Not all Xs and Vs are necessarily given.
