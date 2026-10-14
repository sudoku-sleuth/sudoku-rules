---
format: open-rules
title: Toothless
setter: Meggen033
source: https://sudokupad.app/80s692hjk1
case: https://sudoku-sleuth.com/cases/toothless
library: https://rules.sudoku-sleuth.com/
status: read
exported: fec20b5f5935d3fa4dd17acc4685ca1f
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1-r9c2 total 7 connected true
cage-2: cage r8c2-r8c3-r9c3 total 15 connected true
cage-3: cage r4c4-r4c5-r5c4-r6c4 total 27 connected true
cage-4: cage r1c9-r2c9 total 15 connected true
cage-5: cage r4c6-r5c6 total 7 connected true
cage-6: cage r7c6-r7c7 total 7 connected true
cage-7: cage r2c7-r2c8 total 7 connected true
cage-8: cage r6c6-r6c7 total 7 connected true
cage-9: cage r3c2-r4c2 total 6 connected true
cage-10: cage r8c9-r9c8-r9c9 total 14 connected true
cage-11: cage r8c7-r8c8-r9c7 total 24 connected true
cage-12: cage r2c1-r2c2 total 15 connected true
cage-13: cage r6c8-r6c9 total 7 connected true
palindrome r9c5-r9c4-r8c4-r7c3-r7c2-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r2c2-r1c3-r2c3-r1c4-r1c5-r2c4-r3c4-r4c3-r5c2-r6c2-r6c3-r7c4-r8c5-r7c6-r8c6-r8c7-r7c7-r7c8-r6c8
```

•	Normal Sudoku rules apply. 
•	Digits along a grey palindrome line read the same forwards or backwards.
•	Digits in a cage do not repeat and sum to the clue in the top left.
