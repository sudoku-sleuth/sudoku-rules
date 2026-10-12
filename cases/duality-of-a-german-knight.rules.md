---
format: open-rules
title: Duality of a German Knight
setter: Meggen033
source: https://sudokupad.app/x7i7x8a4o3
case: https://sudoku-sleuth.com/cases/duality-of-a-german-knight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6 total 23 connected true
cage-2: cage r2c5-r2c6 total 6 connected true
cage-3: cage r7c4-r7c5-r7c6 total 7 connected true
cage-4: cage r8c4-r8c5 total 14 connected true
cage-5: cage r7c2-r8c2 total 15 connected true
cage-6: cage r2c8-r3c8 total 5 connected true
cage-7: cage r5c1-r5c2 total 15 connected true
cage-8: cage r5c8-r5c9 total 5 connected true
cage-9: cage r4c7-r5c7 total 14 connected true
whispers-1: whispers r6c4-r5c5-r4c6 gap 5
whispers-2: whispers r7c9-r8c9-r9c9 gap 5
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•       Adjacent digits along a green German Whisper line must have a difference of at least 5.
