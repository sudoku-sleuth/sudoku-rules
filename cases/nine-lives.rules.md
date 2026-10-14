---
format: open-rules
title: Nine Lives
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pmbw4eusl5
case: https://sudoku-sleuth.com/cases/nine-lives
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=9
exported: 51696ec09520f36ec54bbfb5be6528a6
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 9 connected true
cage-2: cage r2c4-r2c5-r2c6 total 9 connected true
cage-3: cage r3c7-r3c8-r3c9 total 9 connected true
cage-4: cage r4c1-r5c1-r6c1 total 9 connected true
cage-5: cage r4c4-r5c4-r6c4 total 9 connected true
cage-6: cage r4c7-r5c7-r6c7 total 9 connected true
cage-7: cage r7c2-r7c3-r7c4 total 9 connected true
cage-8: cage r8c3-r8c4-r8c5 total 9 connected true
cage-9: cage r9c5-r9c6-r9c7 total 9 connected true
kropki-1: kropki r3c1-r4c1 black
kropki-2: kropki r2c3-r2c4 black
kropki-3: kropki r3c6-r3c7 black
kropki-4: kropki r6c7-r7c7 black
kropki-5: kropki r9c7-r9c8 black
kropki-6: kropki r8c5-r8c6 black
kropki-7: kropki r7c1-r7c2 black
kropki-8: kropki r3c9-r4c9 black
kropki-9: kropki r5c6-r5c7 black
kropki-10: kropki r6c1-r6c2 black
kropki-11: kropki r5c1-r5c2 black
kropki-12: kropki r7c3-r8c3 black
kropki-13: kropki r4c4-r5c4 black
kropki-14: kropki r9c5-r9c6 black
kropki-15: kropki r5c7-r6c7 black
kropki-16: kropki r3c3-r4c3 black
```

**Normal Sudoku, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.

For more of our puzzles, visit https://missingdeck.net
