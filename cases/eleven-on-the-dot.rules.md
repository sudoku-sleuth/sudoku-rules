---
format: open-rules
title: Eleven on the Dot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ksbdqsgvvg
case: https://sudoku-sleuth.com/cases/eleven-on-the-dot
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 11 connected true
cage-2: cage r1c6-r1c7 total 11 connected true
cage-3: cage r3c9-r4c9 total 11 connected true
cage-4: cage r6c9-r7c9 total 11 connected true
cage-5: cage r9c6-r9c7 total 11 connected true
cage-6: cage r9c3-r9c4 total 11 connected true
cage-7: cage r6c1-r7c1 total 11 connected true
cage-8: cage r3c1-r4c1 total 11 connected true
cage-9: cage r4c4-r4c5 total 11 connected true
cage-10: cage r4c6-r5c6 total 11 connected true
cage-11: cage r6c5-r6c6 total 11 connected true
cage-12: cage r5c4-r6c4 total 11 connected true
cage-13: cage r6c7-r7c6-r7c7 total 11 connected true
cage-14: cage r3c4-r3c5-r3c6 total 11 connected true
cage-15: cage r4c3-r5c3-r6c3 total 11 connected true
cage-16: cage r2c3-r2c4 total 11 connected true
kropki-1: kropki r4c1-r5c1 colour "white"
kropki-2: kropki r9c4-r9c5 colour "white"
kropki-3: kropki r4c9-r5c9 colour "white"
kropki-4: kropki r1c4-r1c5 colour "white"
kropki-5: kropki r2c6-r3c6 colour "white"
kropki-6: kropki r7c7-r8c7 colour "white"
kropki-7: kropki r8c7-r9c7 colour "white"
kropki-8: kropki r5c4-r6c4 colour "white"
kropki-9: kropki r6c3-r7c3 colour "white"
kropki-10: kropki r2c1-r3c1 colour "black"
kropki-11: kropki r1c2-r1c3 colour "black"
kropki-12: kropki r7c1-r8c1 colour "black"
kropki-13: kropki r9c2-r9c3 colour "black"
kropki-14: kropki r9c7-r9c8 colour "black"
kropki-15: kropki r7c9-r8c9 colour "black"
kropki-16: kropki r2c9-r3c9 colour "black"
kropki-17: kropki r1c7-r1c8 colour "black"
kropki-18: kropki r4c5-r4c6 colour "black"
kropki-19: kropki r6c4-r6c5 colour "black"
kropki-20: kropki r3c6-r4c6 colour "black"
kropki-21: kropki r6c4-r7c4 colour "black"
kropki-22: kropki r2c4-r3c4 colour "black"
```

**Standard Sudoku, Cages, Kropki (no negative)**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki Pairs: Digits separated by a black dot are in a 1: ratio. Digits separated by a white dot are consecutive.

For more puzzles like these, please visit our website https://missingdeck.net
