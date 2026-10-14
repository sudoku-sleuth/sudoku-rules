---
format: open-rules
title: Warty Bliggens
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6rwvmxi0n6
case: https://sudoku-sleuth.com/cases/warty-bliggens
library: https://rules.sudoku-sleuth.com/
status: read
exported: c0666f2b03fddfb4d3fb57bc900d01c6
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4 total 6 connected true
cage-2: cage r3c6-r3c7-r3c8 total 24 connected true
cage-3: cage r4c2-r4c3-r4c4 total 21 connected true
cage-4: cage r4c6-r4c7-r4c8 total 9 connected true
cage-5: cage r6c2-r6c3-r6c4 total 15 connected true
cage-6: cage r6c6-r6c7-r6c8 total 15 connected true
cage-7: cage r1c7-r2c7 total 5 connected true
cage-8: cage r1c3-r2c3 total 15 connected true
cage-9: cage r7c3-r8c3 total 11 connected true
cage-10: cage r7c7-r8c7 total 14 connected true
kropki-1: kropki r6c3-r7c3 black
kropki-2: kropki r4c7-r5c7 black
kropki-3: kropki r5c5-r6c5 black
kropki-4: kropki r9c7-r9c8 black
modular-1: modular r3c1-r3c2-r2c3-r3c4-r3c5-r3c6-r2c7-r3c8-r3c9
modular-2: modular r4c1-r4c2-r5c3-r4c4-r4c5-r4c6-r5c7-r4c8-r4c9
modular-3: modular r6c1-r6c2-r7c3-r6c4-r6c5-r6c6-r7c7-r6c8-r6c9
modular-4: modular r8c1-r9c2-r8c3-r8c4-r9c5-r8c6-r8c7-r9c8-r8c9
modular-5: modular r1c4-r2c5-r1c6
```

**Sudoku, Modular Lines, Cages, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
