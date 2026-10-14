---
format: open-rules
title: Foothills
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/33k5qbz6g0
case: https://sudoku-sleuth.com/cases/foothills
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=3
exported: da48502abd56c2978ba9a23225093351
---

```rules
sudoku 9x9
cage-1: cage r8c7-r9c7 total 6 connected true
cage-2: cage r8c3-r8c4 total 6 connected true
cage-3: cage r6c6-r7c6 total 15 connected true
cage-4: cage r5c3-r5c4 total 15 connected true
cage-5: cage r2c7-r3c7 total 14 connected true
cage-6: cage r2c4-r2c5 total 14 connected true
cage-7: cage r3c1-r4c1-r5c1 total 6 connected true
cage-8: cage r6c3-r7c2-r7c3 total 10 connected true
cage-9: cage r1c3-r2c2-r2c3 total 11 connected true
cage-10: cage r6c8-r6c9-r7c9 total 16 connected true
cage-11: cage r2c8-r2c9-r3c9 total 9 connected true
cage-12: cage r4c9-r5c9 total 12 connected true
cage-13: cage r4c6-r4c7-r5c7 total 11 connected true
modular-1: modular r3c1-r2c2-r1c3-r2c4-r3c5-r4c6
modular-2: modular r2c5-r1c6-r2c7
modular-3: modular r3c7-r2c8-r3c9
modular-4: modular r5c1-r4c2-r5c3
modular-5: modular r7c2-r6c3-r5c4-r6c5-r7c6-r8c7
modular-6: modular r6c6-r5c7-r6c8-r7c9
modular-7: modular r9c2-r8c3-r9c4
modular-8: modular r8c4-r7c5-r8c6-r9c7
```

**Standard Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Find more puzzles like this at https://missingdeck.net
