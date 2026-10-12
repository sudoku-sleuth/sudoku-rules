---
format: open-rules
title: One German Knight
setter: Meggen033
source: https://sudokupad.app/bs91vihksc
case: https://sudoku-sleuth.com/cases/one-german-knight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c5-r9c5 total 9 connected true
cage-2: cage r3c1-r3c2 total 10 connected true
cage-3: cage r4c3-r5c3 total 10 connected true
cage-4: cage r6c5-r7c5 total 10 connected true
cage-5: cage r5c5-r5c6 total 10 connected true
cage-6: cage r3c6-r3c7 total 11 connected true
cage-7: cage r1c5-r2c5 total 9 connected true
cage-8: cage r5c8-r5c9 total 7 connected true
cage-9: cage r3c8-r3c9 total 8 connected true
anti-knight
whispers-1: whispers r2c3-r3c3-r4c3 gap 5
whispers-2: whispers r3c4-r3c5-r3c6 gap 5
whispers-3: whispers r2c7-r3c7-r4c7 gap 5
whispers-4: whispers r4c5-r5c5-r6c5 gap 5
whispers-5: whispers r5c6-r5c7-r5c8 gap 5
whispers-6: whispers r5c4-r5c3-r5c2 gap 5
whispers-7: whispers r7c4-r7c5-r7c6 gap 5
whispers-8: whispers r7c3-r8c3-r8c4 gap 5
whispers-9: whispers r7c7-r8c7-r8c6 gap 5
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits in a cage do not repeat and sum to the clue in the top left.
