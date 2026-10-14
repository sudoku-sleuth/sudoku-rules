---
format: open-rules
title: Dutch Slant Mates
setter: sujoyku
source: https://sudokupad.app/e73r5f9ww2
case: https://sudoku-sleuth.com/cases/dutch-slant-mates
library: https://rules.sudoku-sleuth.com/
status: read
exported: 39ad37bc8803c5812e776c8795048cbb
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 9 connected true
cage-2: cage r2c5-r3c5-r3c6 total 12 connected true
cage-3: cage r5c2-r5c3-r6c3 total 18 connected true
cage-4: cage r4c6-r4c7-r4c8-r4c9 total 15 connected true
cage-5: cage r6c4-r7c4-r8c4-r9c4 total 20 connected true
cage-6: cage r7c6-r8c6 total 12 connected true
cage-7: cage r6c7-r6c8 total 10 connected true
cage-8: cage r7c9-r8c9 total 10 connected true
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r4c2-r4c1-r5c1-r6c1-r6c2
renban-3: renban r2c4-r1c4-r1c5-r1c6-r2c6
renban-4: renban r1c7-r2c8-r3c9
renban-5: renban r9c3-r8c2-r7c1
renban-6: renban r7c5-r6c5-r5c6-r5c7
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Dutch Slant Mates: Each 5 in the grid either has a 1 DIAGONALLY above or a 9 DIAGONALLY below it. (It may have both, but it does not need both.)
Example: If R2C2 has a 5, there must be a 1 in R1C1 or R1C3 or a 9 in R3C1 or R3C3.

- Killer cages: Digits in a cage must sum to the clue in the top left.

- Renban: Each purple line must contain a set of consecutive non-repeating digits in any order.
