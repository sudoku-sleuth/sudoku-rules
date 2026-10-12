---
format: open-rules
title: Black Friday
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uh5wqxcb41
case: https://sudoku-sleuth.com/cases/black-friday
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r2c2 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r3c3-r3c4 colour "white"
kropki-4: kropki r9c2-r9c3 colour "white"
kropki-5: kropki r4c2-r5c2 colour "white"
kropki-6: kropki r5c7-r5c8 colour "white"
kropki-7: kropki r7c5-r8c5 colour "white"
kropki-8: kropki r9c4-r9c5 colour "white"
kropki-9: kropki r3c7-r4c7 colour "white"
kropki-10: kropki r4c4-r4c5 colour "white"
kropki-11: kropki r7c7-r8c7 colour "white"
kropki-12: kropki r2c5-r3c5 colour "white"
kropki-13: kropki r6c3-r6c4 colour "white"
kropki-14: kropki r6c4-r6c5 colour "white"
kropki-15: kropki r6c5-r7c5 colour "white"
kropki-16: kropki r7c5-r7c6 colour "white"
kropki-17: kropki r3c5-r4c5 colour "white"
kropki-18: kropki r3c5-r3c6 colour "white"
kropki-19: kropki r3c7-r3c8 colour "white"
kropki-20: kropki r2c7-r2c8 colour "white"
kropki-21: kropki r1c1-r1c2 colour "black"
kropki-22: kropki r2c1-r3c1 colour "black"
kropki-23: kropki r3c2-r3c3 colour "black"
kropki-24: kropki r5c1-r6c1 colour "black"
kropki-25: kropki r7c1-r7c2 colour "black"
kropki-26: kropki r7c3-r8c3 colour "black"
kropki-27: kropki r5c8-r5c9 colour "black"
kropki-28: kropki r5c6-r5c7 colour "black"
kropki-29: kropki r8c7-r9c7 colour "black"
kropki-30: kropki r1c7-r2c7 colour "black"
kropki-31: kropki r4c8-r4c9 colour "black"
kropki-32: kropki r8c4-r8c5 colour "black"
kropki-33: kropki r4c6-r5c6 colour "black"
kropki-34: kropki r9c8-r9c9 colour "black"
kropki-35: kropki r6c4-r7c4 colour "black"
kropki-36: kropki r7c4-r7c5 colour "black"
kropki-37: kropki r2c6-r2c7 colour "black"
kropki-38: kropki r2c6-r3c6 colour "black"
kropki-39: kropki r1c8-r1c9 colour "black"
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r2c1","r2c2"],["r1c2","r1c3"],["r3c3","r3c4"],["r9c2","r9c3"],["r4c2","r5c2"],["r5c7","r5c8"],["r7c5","r8c5"],["r9c4","r9c5"],["r3c7","r4c7"],["r4c4","r4c5"],["r7c7","r8c7"],["r2c5","r3c5"],["r6c3","r6c4"],["r6c4","r6c5"],["r6c5","r7c5"],["r7c5","r7c6"],["r3c5","r4c5"],["r3c5","r3c6"],["r3c7","r3c8"],["r2c7","r2c8"],["r1c1","r1c2"],["r2c1","r3c1"],["r3c2","r3c3"],["r5c1","r6c1"],["r7c1","r7c2"],["r7c3","r8c3"],["r5c8","r5c9"],["r5c6","r5c7"],["r8c7","r9c7"],["r1c7","r2c7"],["r4c8","r4c9"],["r8c4","r8c5"],["r4c6","r5c6"],["r9c8","r9c9"],["r6c4","r7c4"],["r7c4","r7c5"],["r2c6","r2c7"],["r2c6","r3c6"],["r1c8","r1c9"]]
```

**Sudoku, Kropki Dots (negative constraint)**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki Dots: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. ALL POSSIBLE DOTS ARE GIVEN.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
