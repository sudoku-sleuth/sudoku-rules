---
format: open-rules
title: A Hard Day's Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jtdz01e8z1
case: https://sudoku-sleuth.com/cases/a-hard-day-s-knight
library: https://rules.sudoku-sleuth.com/
status: read
givens: ....6...............4.5.1...........1.8.9.6.3...........3.7.2...............8....
exported: 7cb36a9df22bf37d8af8b4481f9c4b4d
---

```rules
sudoku 9x9
anti-knight
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

Normal sudoku rules apply: every row column and 3x3 box must contain a complete set of the digits 1 through 9.
Normal anti-knight rules apply: cells separated by a chess knight's move cannot contain the same digit.
Normal disjoint groups rules apply: no cells in the same relative position in their boxes can share digits
