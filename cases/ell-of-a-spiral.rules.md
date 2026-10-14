---
format: open-rules
title: "'Ell of a Spiral"
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/03snkojqy1
case: https://sudoku-sleuth.com/cases/ell-of-a-spiral
library: https://rules.sudoku-sleuth.com/
status: read
exported: a8f4c2aa568340efa414d6082d97caa6
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r5c6 total 7 connected true
cage-2: cage r4c3-r5c3-r5c4 total 11 connected true
cage-3: cage r6c3-r7c3-r7c4 total 10 connected true
cage-4: cage r7c6-r8c5-r8c6 total 13 connected true
cage-5: cage r3c1-r3c2-r4c1 total 11 connected true
cage-6: cage r8c1-r9c1-r9c2 total 9 connected true
cage-7: cage r1c1-r1c2-r2c1 total 15 connected true
cage-8: cage r1c8-r1c9-r2c9 total 16 connected true
cage-9: cage r5c8-r6c7-r6c8 total 12 connected true
entropic-1: entropic r5c4-r4c3-r3c4-r2c5-r3c6-r4c7-r5c8-r6c7-r7c6-r8c5-r7c4-r6c3-r5c2-r4c1-r3c2-r2c3-r1c4
entropic-2: entropic r4c5-r5c6-r6c5-r5c4-r4c3-r3c4-r2c5-r3c6-r4c7-r5c8-r6c7-r7c6-r8c5-r7c4-r6c3-r5c2-r4c1-r3c2-r2c3-r1c4
```

- Normal sudoku rules apply.
- Entropic lines: Every set of three adjacent cells along the entropic line contains one low digit (123), one medium digit (456), and one high digit (789).
- Cages: Within cages, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
