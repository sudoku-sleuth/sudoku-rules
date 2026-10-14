---
format: open-rules
title: AKK Attack
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2cv739x5zh
case: https://sudoku-sleuth.com/cases/akk-attack
library: https://rules.sudoku-sleuth.com/
status: read
exported: c67d3739bf8b80f57b0c34dda584fe7c
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 7 connected true
cage-2: cage r4c4-r4c5-r5c4 total 8 connected true
cage-3: cage r7c7-r7c8-r8c7 total 23 connected true
cage-4: cage r5c6-r6c5-r6c6 total 24 connected true
cage-5: cage r7c2-r7c3-r8c3 total 15 connected true
cage-6: cage r2c7-r3c7-r3c8 total 15 connected true
cage-7: cage r5c7-r6c7-r6c8 total 22 connected true
cage-8: cage r7c5-r7c6-r8c6 total 11 connected true
cage-9: cage r4c2-r4c3-r5c3 total 20 connected true
cage-10: cage r2c4-r3c4-r3c5 total 24 connected true
cage-11: cage r5c1-r6c1-r6c2 total 6 connected true
cage-12: cage r4c8-r4c9-r5c9 total 15 connected true
cage-13: cage r1c8-r1c9-r2c9 total 16 connected true
cage-14: cage r1c1-r1c2-r2c1 total 20 connected true
anti-knight
```

**Sudoku, Anti-knight, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
