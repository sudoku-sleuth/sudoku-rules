---
format: open-rules
title: Parity-Modularity
setter: EPH
source: https://sudokupad.app/n1pfl0d4cw
case: https://sudoku-sleuth.com/cases/parity-modularity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1 total 13 connected true
cage-2: cage r8c9-r9c9 total 15 connected true
cage-3: cage r5c7-r5c8-r5c9 total 14 connected true
cage-4: cage r5c1-r5c2-r5c3 total 15 connected true
cage-5: cage r5c5-r6c5 total 10 connected true
arrow-1: arrow r7c5-r7c6 bulb ["r7c4"]
arrow-2: arrow r9c5-r9c4 bulb ["r9c6"]
parity-1: parity r7c4-r6c3-r5c4-r4c3-r3c4-r4c5-r3c6-r4c7-r5c6-r6c7-r7c6
parity-2: parity r1c3-r1c4-r1c5-r1c6-r1c7
parity-3: parity r3c9-r4c9-r5c9-r6c9-r7c9
parity-4: parity r3c1-r4c1-r5c1-r6c1-r7c1
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Killer cages: digits must not repeat within a cage, and must sum to the value in the corner of the cage.

Arrow: digits along an arrow must sum to the value in the attached circle.

Modularity/Parity lines: the teal lines act as modularity lines: each group of three adjacent cells along a line must contain a digit from (1,4,7), a digit from (2,5,8), and a digit from (3.6.9).  In addition, digits along a teal line must alternate between even and odd digits.
