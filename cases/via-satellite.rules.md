---
format: open-rules
title: Via Satellite
setter: sujoyku
source: https://sudokupad.app/n6niv64tm2
case: https://sudoku-sleuth.com/cases/via-satellite
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2b632314be10771d31461c9d1ec57130
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3-r3c4-r4c3 total 15 connected true
cage-2: cage r8c1-r9c1-r9c2 total 22 connected true
cage-3: cage r8c9-r9c8-r9c9 total 22 connected true
cage-4: cage r4c1-r5c1-r5c2 total 9 connected true
cage-5: cage r2c5-r2c6-r3c6 total 23 connected true
cage-6: cage r1c8-r1c9-r2c9 total 6 connected true
cage-7: cage r4c7-r4c8 total 17 connected true
cage-8: cage r7c4-r8c4 total 13 connected true
index-line-1: index-line r3c5-r2c4-r1c3-r2c2-r3c1-r4c2-r5c3
index-line-2: index-line r5c7-r6c8-r7c9-r8c8-r9c7-r8c6-r7c5
index-line-3: index-line r7c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r3c9
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Index Lines: Each turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.

- Killer Cages: Digits in a cage do not repeat and sum to the clue in the top left.
