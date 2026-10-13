---
format: open-rules
title: Target
setter: EPH
source: https://sudokupad.app/1e4cra26es
case: https://sudoku-sleuth.com/cases/target
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2-r9c3 total 7 connected true
cage-2: cage r7c9-r8c9-r9c9 total 6 connected true
pair-1: pair r3c3-r4c3 sum 10
pair-2: pair r7c3-r7c4 sum 10
pair-3: pair r6c7-r7c7 sum 10
pair-4: pair r3c6-r3c7 sum 10
pair-5: pair r3c3-r3c4 sum 5
pair-6: pair r6c3-r7c3 sum 5
pair-7: pair r7c6-r7c7 sum 5
pair-8: pair r3c7-r4c7 sum 5
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
anti-knight
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Anti-knight: digits separated by a chess knight's move must be different.

Diagonals: digits must not repeat along a marked diagonal.

XV: digits separated by an X must sum to 10; digits separated by a V must sum to 5.

Cages: digits in a cage must sum to the value in the top left corner of the cage.
