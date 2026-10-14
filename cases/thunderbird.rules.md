---
format: open-rules
title: Thunderbird
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o6vukoggpn
case: https://sudoku-sleuth.com/cases/thunderbird
library: https://rules.sudoku-sleuth.com/
status: read
exported: a24506c01ea35d77725b2d03c9c150c8
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6 total 12 connected true
cage-2: cage r6c4-r6c5-r6c6 total 15 connected true
cage-3: cage r4c2-r5c2-r6c2 total 12 connected true
cage-4: cage r4c8-r5c8-r6c8 total 15 connected true
cage-5: cage r3c2-r3c3 total 11 connected true
cage-6: cage r3c7-r3c8 total 10 connected true
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r8c5-r9c5 white
kropki-3: kropki r2c3-r3c3 white
kropki-4: kropki r2c7-r3c7 white
kropki-5: kropki r3c5-r4c5 black
kropki-6: kropki r6c2-r7c2 black
modular-1: modular r4c2-r3c1-r3c2-r4c3-r4c4-r3c5-r4c6-r4c7-r3c8-r3c9-r4c8
modular-2: modular r6c2-r7c1-r7c2-r6c3-r6c4-r7c5-r6c6-r6c7-r7c8-r7c9-r6c8
modular-3: modular r3c3-r3c4-r2c5-r3c6-r3c7
modular-4: modular r7c3-r7c4-r8c5-r7c6-r7c7
modular-5: modular r5c2-r5c3-r5c4
modular-6: modular r5c6-r5c7-r5c8
modular-7: modular r9c2-r8c3-r9c4
modular-8: modular r9c6-r8c7-r9c8
```

**Sudoku, Modular Lines, Cages, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
