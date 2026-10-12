---
format: open-rules
title: Working 8 to 10
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wfcmu7r6vg
case: https://sudoku-sleuth.com/cases/working-8-to-10
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5 total 8 connected true
cage-2: cage r3c7-r4c7-r5c7 total 8 connected true
cage-3: cage r7c5-r7c6-r7c7 total 8 connected true
cage-4: cage r5c3-r6c3-r7c3 total 8 connected true
cage-5: cage r2c6-r3c6-r4c6 total 10 connected true
cage-6: cage r6c6-r6c7-r6c8 total 10 connected true
cage-7: cage r6c4-r7c4-r8c4 total 10 connected true
cage-8: cage r4c3-r4c4 total 10 connected true
cage-9: cage r1c1-r1c2-r2c1 total 8 connected true
cage-10: cage r1c8-r1c9-r2c9 total 8 connected true
cage-11: cage r8c9-r9c8-r9c9 total 8 connected true
cage-12: cage r8c1-r9c1-r9c2 total 8 connected true
cage-13: cage r2c3-r2c4 total 10 connected true
cage-14: cage r2c8-r3c8 total 10 connected true
cage-15: cage r7c2-r8c2 total 10 connected true
cage-16: cage r5c1-r5c2 total 10 connected true
cage-17: cage r1c4-r1c5 total 10 connected true
cage-18: cage r9c6-r9c7 total 10 connected true
kropki-1: kropki r2c4-r2c5 colour "white"
kropki-2: kropki r8c6-r8c7 colour "white"
kropki-3: kropki r5c2-r6c2 colour "white"
kropki-4: kropki r5c8-r6c8 colour "white"
kropki-5: kropki r9c7-r9c8 colour "white"
kropki-6: kropki r2c2-r2c3 colour "black"
kropki-7: kropki r2c8-r2c9 colour "black"
kropki-8: kropki r8c7-r9c7 colour "black"
kropki-9: kropki r8c2-r9c2 colour "black"
```

**Standard Sudoku, Cages, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more puzzles like these, please visit our website https://missingdeck.net
