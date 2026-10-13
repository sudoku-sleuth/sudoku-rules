---
format: open-rules
title: Yeti Tracks
setter: The Bard
source: https://sudokupad.app/myu4zi3vc0
case: https://sudoku-sleuth.com/cases/yeti-tracks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r4c2-r5c2 colour "white"
kropki-2: kropki r6c7-r6c8 colour "white"
kropki-3: kropki r2c4-r3c4 colour "white"
pair-1: pair r4c1-r4c2 sum 10
pair-2: pair r4c3-r4c4 sum 10
pair-3: pair r4c5-r4c6 sum 10
pair-4: pair r4c7-r4c8 sum 10
pair-5: pair r5c8-r5c9 sum 10
pair-6: pair r5c6-r5c7 sum 10
pair-7: pair r5c4-r5c5 sum 10
pair-8: pair r5c2-r5c3 sum 10
pair-9: pair r7c1-r7c2 sum 10
pair-10: pair r7c4-r7c5 sum 10
pair-11: pair r1c1-r1c2 sum 10
pair-12: pair r1c3-r1c4 sum 10
pair-13: pair r1c5-r1c6 sum 10
pair-14: pair r1c8-r1c9 sum 10
pair-15: pair r2c8-r2c9 sum 10
pair-16: pair r2c5-r2c6 sum 10
pair-17: pair r2c1-r2c2 sum 10
pair-18: pair r8c8-r8c9 sum 10
pair-19: pair r8c5-r8c6 sum 10
pair-20: pair r9c1-r9c2 sum 10
pair-21: pair r9c4-r9c5 sum 10
pair-22: pair r9c8-r9c9 sum 10
pair-23: pair r4c8-r5c8 sum 5
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
Consecutive Pairs: Digits separated by a white dot must be consecutive.
XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
