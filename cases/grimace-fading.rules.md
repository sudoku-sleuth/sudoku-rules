---
format: open-rules
title: Grimace, Fading
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/se9n4478hz
case: https://sudoku-sleuth.com/cases/grimace-fading
library: https://rules.sudoku-sleuth.com/
status: read
exported: bfb7e4a5823a26b90b6a262d3ed28364
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 23 connected true
cage-2: cage r3c6-r3c7-r4c7 total 12 connected true
cage-3: cage r6c3-r7c3-r7c4 total 12 connected true
cage-4: cage r6c7-r7c6-r7c7 total 22 connected true
cage-5: cage r8c3-r9c3-r9c4 total 10 connected true
cage-6: cage r8c7-r9c6-r9c7 total 13 connected true
cage-7: cage r1c4-r2c3-r2c4 total 10 connected true
cage-8: cage r1c6-r2c6-r2c7 total 17 connected true
cage-9: cage r5c2-r6c1-r6c2 total 6 connected true
cage-10: cage r5c8-r6c8-r6c9 total 18 connected true
cage-11: cage r2c8-r3c8-r3c9 total 12 connected true
cage-12: cage r2c2-r3c1-r3c2 total 11 connected true
cage-13: cage r8c2-r9c1-r9c2 total 20 connected true
cage-14: cage r8c8-r9c8-r9c9 total 12 connected true
cage-15: cage r4c4-r5c4-r5c5 total 24 connected true
cage-16: cage r4c5-r4c6-r5c6 total 7 connected true
entropic-1: entropic r4c3-r3c4-r4c5-r3c6-r4c7
entropic-2: entropic r6c3-r7c4-r6c5-r7c6-r6c7
entropic-3: entropic r7c2-r8c3-r9c4-r9c5-r9c6-r8c7-r7c8
entropic-4: entropic r3c3-r2c4-r3c5-r2c6-r3c7
entropic-5: entropic r3c2-r2c3-r1c4
entropic-6: entropic r3c8-r2c7-r1c6
```

**Standard Sudoku, Entropic Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three sequential cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
