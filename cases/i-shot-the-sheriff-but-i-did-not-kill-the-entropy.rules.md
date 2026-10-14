---
format: open-rules
title: I shot the Sheriff (but I did not kill the Entropy)
setter: sujoyku
source: https://sudokupad.app/c1lf1oo6ia
case: https://sudoku-sleuth.com/cases/i-shot-the-sheriff-but-i-did-not-kill-the-entropy
library: https://rules.sudoku-sleuth.com/
status: read
exported: 943cdb4a8d23e4d13ca63ac7c1a76fcd
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1-r8c2-r9c2 total 25 connected true
cage-2: cage r1c8-r2c8-r2c9-r3c9 total 15 connected true
cage-3: cage r2c3-r3c3-r4c3 total 8 connected true
cage-4: cage r3c4-r3c5 total 14 connected true
cage-5: cage r8c4-r8c5 total 12 connected true
cage-6: cage r2c5-r2c6 total 13 connected true
cage-7: cage r3c2-r4c2-r5c2 total 12 connected true
cage-8: cage r7c5-r7c6 total 5 connected true
entropic r6c1-r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c7-r3c7-r3c8-r4c7-r5c6-r5c5-r5c4-r6c3-r7c2-r7c3-r8c3-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r5c9-r4c9
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage sum to the clue in the top left.

- Entropy line: The orange line is an entropy line, i.e. every set of three consecutive digits on the line must contain a low (1, 2, 3), a medium (4, 5, 6) and a high digit (7, 8, 9).
