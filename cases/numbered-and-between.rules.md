---
format: open-rules
title: Numbered and between
setter: Chip Sounder
source: https://sudokupad.app/teanmmj4ss
case: https://sudoku-sleuth.com/cases/numbered-and-between
library: https://rules.sudoku-sleuth.com/
status: read
exported: d84ad774cda3fa38680e118724dbfaa5
---

```rules
sudoku 9x9
between-1: between r9c2-r9c3-r9c4 ends ["r9c1","r9c5"]
between-2: between r4c1-r3c1-r2c1 ends ["r5c1","r1c1"]
between-3: between r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 ends ["r1c1","r1c9"]
between-4: between r6c5-r6c4-r6c3-r6c2 ends ["r6c6","r6c1"]
between-5: between r3c8 ends ["r3c9","r4c7"]
between-6: between r7c7 ends ["r6c8","r8c8"]
between-7: between r5c8-r5c7 ends ["r5c9","r5c6"]
between-8: between r4c5 ends ["r5c5","r3c6"]
numbered-room-1: numbered-room r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 digit 9
numbered-room-2: numbered-room r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 digit 5
numbered-room-3: numbered-room r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 digit 1
numbered-room-4: numbered-room r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 digit 3
numbered-room-5: numbered-room r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 digit 3
numbered-room-6: numbered-room r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 digit 4
numbered-room-7: numbered-room r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 digit 3
numbered-room-8: numbered-room r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 digit 3
numbered-room-9: numbered-room r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 digit 1
numbered-room-10: numbered-room r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 digit 1
numbered-room-11: numbered-room r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 digit 4
numbered-room-12: numbered-room r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 digit 2
numbered-room-13: numbered-room r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 digit 4
numbered-room-14: numbered-room r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 digit 4
numbered-room-15: numbered-room r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 digit 5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.
Digits along a between line must be between the digits on the circled ends of the line.
