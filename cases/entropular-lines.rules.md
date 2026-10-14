---
format: open-rules
title: Entropular Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zmnmixlff8
case: https://sudoku-sleuth.com/cases/entropular-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1c539596ebba9ce455eea0f59f680b3e
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3 total 5 connected true
cage-2: cage r2c6-r3c6 total 13 connected true
cage-3: cage r6c6-r6c7-r7c6 total 12 connected true
cage-4: cage r9c5-r9c6 total 12 connected true
cage-5: cage r5c9-r6c9 total 11 connected true
cage-6: cage r7c8-r7c9-r8c8 total 9 connected true
modular-1: modular r5c1-r4c2-r3c3-r2c4
entropic-1: entropic r5c1-r4c2-r3c3-r2c4
modular-2: modular r1c5-r2c6-r3c7
entropic-2: entropic r1c5-r2c6-r3c7
modular-3: modular r7c1-r8c2-r9c3-r9c4
entropic-3: entropic r7c1-r8c2-r9c3-r9c4
modular-4: modular r9c6-r9c7-r8c8-r7c9-r6c9
entropic-4: entropic r9c6-r9c7-r8c8-r7c9-r6c9
modular-5: modular r5c7-r6c7-r7c6-r7c5
entropic-5: entropic r5c7-r6c7-r7c6-r7c5
modular-6: modular r7c4-r6c3-r5c3-r4c3-r3c4-r3c5-r3c6-r4c7
entropic-6: entropic r7c4-r6c3-r5c3-r4c3-r3c4-r3c5-r3c6-r4c7
```

**Sudoku, Cages, Double Constraint Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Double Constraint Lines: Each line in the puzzle is BOTH modular AND entropic.
- Modular Lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).

For more of our puzzles, please visit https://missingdeck.net
