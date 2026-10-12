---
format: open-rules
title: Quietly climbing with ratios
setter: Chip Sounder
source: https://sudokupad.app/te6w5mnygq
case: https://sudoku-sleuth.com/cases/quietly-climbing-with-ratios
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 colour "black"
kropki-2: kropki r9c3-r9c4 colour "black"
kropki-3: kropki r9c4-r9c5 colour "black"
kropki-4: kropki r8c6-r8c7 colour "black"
kropki-5: kropki r8c7-r8c8 colour "black"
kropki-6: kropki r6c6-r7c6 colour "black"
kropki-7: kropki r6c1-r6c2 colour "black"
kropki-8: kropki r5c3-r5c4 colour "black"
kropki-9: kropki r2c4-r3c4 colour "black"
whispers-1: whispers r9c2-r8c2-r8c3-r8c4-r8c5-r9c5-r8c6-r7c7-r7c8-r8c8-r9c8-r9c7-r9c6 gap 4
whispers-2: whispers r8c2-r7c3-r6c3-r7c4-r6c5-r5c6 gap 4
whispers-3: whispers r8c5-r7c5-r7c6-r7c7-r6c7 gap 4
whispers-4: whispers r7c2-r6c2-r6c3-r5c3-r4c2-r5c1 gap 4
whispers-5: whispers r6c4-r5c4-r5c5-r4c6 gap 4
whispers-6: whispers r4c3-r3c2-r2c3 gap 4
whispers-7: whispers r2c4-r2c5-r2c6-r1c5 gap 4
whispers-8: whispers r4c7-r3c7-r3c8-r2c8 gap 4
```

This is set 2 of the unique challenge. In this set, each puzzle is only allowed 2 variants and no variant can repeat. Good luck 🤞 
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Any 2 digits connected along a Dutch whisper line must have a difference of at least 4.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Not all dots are given.
