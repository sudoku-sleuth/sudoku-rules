---
format: open-rules
title: When You Find It
setter: The Bard
source: https://sudokupad.app/y7ywpp5fwp
case: https://sudoku-sleuth.com/cases/when-you-find-it
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3d1e7732e8c2e9bdb277e007c5643115
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 black
kropki-2: kropki r6c8-r6c9 black
kropki-3: kropki r8c5-r8c6 black
kropki-4: kropki r2c1-r2c2 black
kropki-5: kropki r3c5-r4c5 black
kropki-6: kropki r4c5-r4c6 black
kropki-7: kropki r9c3-r9c4 black
kropki-8: kropki r1c9-r2c9 black
kropki-9: kropki r8c7-r8c8 black
kropki-10: kropki r6c3-r6c4 white
kropki-11: kropki r4c6-r4c7 white
whispers-1: whispers r4c2-r3c1-r2c2-r1c3-r2c4 gap 5
whispers-2: whispers r3c5-r2c6-r1c7-r2c8-r3c9-r4c8-r5c7 gap 5
whispers-3: whispers r6c8-r7c9-r8c8-r9c7-r8c6 gap 5
whispers-4: whispers r5c3-r6c2-r7c1-r8c2-r9c3-r8c4-r7c5 gap 5
region-sum-1: region-sum r5c3-r6c4-r7c5 segments [["r5c3"],["r6c4"],["r7c5"]]
region-sum-2: region-sum r6c8-r7c7-r8c6 segments [["r6c8"],["r7c7"],["r8c6"]]
region-sum-3: region-sum r5c7-r4c6-r3c5 segments [["r5c7"],["r4c6"],["r3c5"]]
region-sum-4: region-sum r2c4-r3c3-r4c2 segments [["r2c4"],["r3c3"],["r4c2"]]
negative relations [{"op":"ratio","value":2}] except [["r1c4","r2c4"],["r6c8","r6c9"],["r8c5","r8c6"],["r2c1","r2c2"],["r3c5","r4c5"],["r4c5","r4c6"],["r9c3","r9c4"],["r1c9","r2c9"],["r8c7","r8c8"],["r6c3","r6c4"],["r4c6","r4c7"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Region Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. Different lines may have different values.
Kropki: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive. All BLACK dots are given.
