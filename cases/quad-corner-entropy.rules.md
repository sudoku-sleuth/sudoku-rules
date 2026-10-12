---
format: open-rules
title: Quad Corner - Entropy
setter: Sir Moose
source: https://sudokupad.app/85zm5qe0yd
case: https://sudoku-sleuth.com/cases/quad-corner-entropy
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c3-r7c4-r7c5-r7c6-r7c7 total 29 connected true
cage-2: cage r3c3-r3c4-r3c5-r3c6-r3c7 total 26 connected true
cage-3: cage r5c3-r5c4 total 8 connected true
cage-4: cage r5c6-r5c7 total 11 connected true
cage-5: cage r4c1-r5c1 total 13 connected true
cage-6: cage r9c5-r9c6 total 9 connected true
cage-7: cage r5c9-r6c8-r6c9 total 15 connected true
cage-8: cage r1c4-r1c5-r1c6 total 14 connected true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,4,5]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,6,8,9]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [8,9,3,4]
quadruple-4: quadruple r8c8-r8c9-r9c8-r9c9 digits [7,9,4,2]
entropic-1: entropic r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
entropic-2: entropic r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
entropic-3: entropic r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
entropic-4: entropic r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
entropic-5: entropic r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
entropic-6: entropic r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
entropic-7: entropic r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
entropic-8: entropic r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
entropic-9: entropic r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
```

Normal sudoku rules apply.

Entropy Rows: Every 3 consecutive cells along each row must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).

Quadruples: Digits in the white circle must appear in at least one of the four surrounding cells.

Killer Cages: Digits in cages cannot repeat and sum to the number given.
