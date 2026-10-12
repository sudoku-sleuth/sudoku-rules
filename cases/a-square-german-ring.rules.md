---
format: open-rules
title: A Square German Ring
setter: Meggen033
source: https://sudokupad.app/vnzcpnqmcw
case: https://sudoku-sleuth.com/cases/a-square-german-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1-r9c2 total 7 connected true
cage-2: cage r1c8-r1c9-r2c9 total 6 connected true
cage-3: cage r8c8-r8c9-r9c8 total 16 connected true
cage-4: cage r1c2-r2c1-r2c2 total 17 connected true
cage-5: cage r9c4-r9c5-r9c6 total 10 connected true
cage-6: cage r1c4-r1c5-r1c6 total 19 connected true
cage-7: cage r4c9-r5c9-r6c9 total 15 connected true
cage-8: cage r4c1-r5c1-r6c1 total 17 connected true
cage-9: cage r5c5-r5c6 total 9 connected true
cage-10: cage r4c4-r4c5 total 8 connected true
cage-11: cage r6c4-r6c5 total 10 connected true
whispers r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3 gap 5 loop true
```

•	Normal Sudoku rules apply. 
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits in a cage do not repeat and sum to the clue in the top left.
