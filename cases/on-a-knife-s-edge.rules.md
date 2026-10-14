---
format: open-rules
title: On a knife's edge
setter: sujoyku
source: https://sudokupad.app/ns0zdryfz0
case: https://sudoku-sleuth.com/cases/on-a-knife-s-edge
library: https://rules.sudoku-sleuth.com/
status: read
exported: 05732cb319fb1f6410c218f54065f454
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1-r6c1 total 15 connected true
cage-2: cage r9c4-r9c5-r9c6 total 12 connected true
cage-3: cage r1c4-r1c5-r1c6 total 13 connected true
cage-4: cage r4c9-r5c9-r6c9 total 16 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r2c4-r3c5-r3c6 bulb ["r3c3"]
arrow-2: arrow r6c2-r5c3-r4c3 bulb ["r7c3"]
arrow-3: arrow r4c8-r5c7-r6c7 bulb ["r3c7"]
arrow-4: arrow r8c6-r7c5-r7c4 bulb ["r7c7"]
little-killer-1: little-killer r2c1-r1c2 sum 9
little-killer-2: little-killer r9c2-r8c1 sum 11
little-killer-3: little-killer r8c9-r9c8 sum 10
little-killer-4: little-killer r1c8-r2c9 sum 17
parity-cells r5c5 parity "odd"
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. On both main diagonals digits do not repeat. Digits on an arrow sum to the digit in the circle from which the arrow emerges. Digits in a cage sum to the clue in the top left. Digits on a marked diagonal sum to the little killer clue outside the grid. A digit in a grey circle must be odd.
