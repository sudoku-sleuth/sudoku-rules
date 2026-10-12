---
format: open-rules
title: Guess Who?
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/meseqhl5mh
case: https://sudoku-sleuth.com/cases/guess-who
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c3-r2c4 total 8 connected true
cage-2: cage r1c6-r2c6-r2c7 total 9 connected true
cage-3: cage r6c3-r7c2-r7c3 total 8 connected true
cage-4: cage r6c7-r7c7-r7c8 total 7 connected true
cage-5: cage r5c8-r5c9-r6c9 total 9 connected true
cage-6: cage r5c1-r5c2-r6c1 total 18 connected true
cage-7: cage r4c4-r5c4 total 10 connected true
cage-8: cage r9c7-r9c8 total 10 connected true
cage-9: cage r2c5-r3c5 total 14 connected true
cage-10: cage r8c1-r9c1 total 11 connected true
cage-11: cage r8c9-r9c9 total 10 connected true
cage-12: cage r9c2-r9c3 total 9 connected true
cage-13: cage r7c5-r8c5 total 9 connected true
cage-14: cage r1c1-r2c1 total 11 connected true
cage-15: cage r1c9-r2c9 total 12 connected true
kropki-1: kropki r8c2-r9c2 colour "black"
kropki-2: kropki r8c5-r9c5 colour "black"
kropki-3: kropki r8c8-r9c8 colour "black"
modular-1: modular r4c4-r3c3-r2c3-r1c4-r1c5-r1c6-r2c7-r3c7-r4c6-r5c5-r6c5-r7c5
modular-2: modular r6c1-r5c2-r6c3-r7c2-r8c2
modular-3: modular r6c7-r5c8-r6c9-r7c8-r8c8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Killer cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio dots: Digits in cells separated by a black dot are in a 2:1 ratio.
