---
format: open-rules
title: Ratios are our Friends
setter: The Bard
source: https://sudokupad.app/r9pgpuzwzw
case: https://sudoku-sleuth.com/cases/ratios-are-our-friends
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
exported: 66285ab2bd63319891347f133b192bd9
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r4c8 black
kropki-2: kropki r6c7-r7c7 black
kropki-3: kropki r5c1-r5c2 black
kropki-4: kropki r2c2-r2c3 black
kropki-5: kropki r2c4-r3c4 black
kropki-6: kropki r1c7-r2c7 black
kropki-7: kropki r5c3-r6c3 black
kropki-8: kropki r4c6-r5c6 black
kropki-9: kropki r7c5-r8c5 black
kropki-10: kropki r8c2-r9c2 black
kropki-11: kropki r9c6-r9c7 black
kropki-12: kropki r6c7-r6c8 black
kropki-13: kropki r3c8-r3c9 black
kropki-14: kropki r1c5-r1c6 black
kropki-15: kropki r4c4-r4c5 black
kropki-16: kropki r7c3-r7c4 black
negative relations [{"op":"ratio","value":2},{"op":"difference","value":1}] except [["r3c8","r4c8"],["r6c7","r7c7"],["r5c1","r5c2"],["r2c2","r2c3"],["r2c4","r3c4"],["r1c7","r2c7"],["r5c3","r6c3"],["r4c6","r5c6"],["r7c5","r8c5"],["r8c2","r9c2"],["r9c6","r9c7"],["r6c7","r6c8"],["r3c8","r3c9"],["r1c5","r1c6"],["r4c4","r4c5"],["r7c3","r7c4"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Non-Consecutive: Digits in orthogonally adjacent cells may not be consecutive.
Ratio: Digits separated by a black dot must be in a 2:1 ratio. All black dots are given.
