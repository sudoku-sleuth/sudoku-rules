---
format: open-rules
title: Anti-Knight Arrow
setter: Sir Moose
source: https://sudokupad.app/2xxgsi4aua
case: https://sudoku-sleuth.com/cases/anti-knight-arrow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
arrow-1: arrow r6c7-r5c7-r4c7 bulb ["r5c6"]
arrow-2: arrow r3c6-r3c5-r3c4 bulb ["r4c5"]
arrow-3: arrow r7c4-r7c5-r7c6 bulb ["r6c5"]
arrow-4: arrow r4c3-r5c3-r6c3 bulb ["r5c4"]
arrow-5: arrow r1c8-r1c9-r2c8 bulb ["r1c7"]
arrow-6: arrow r2c2-r3c3 bulb ["r1c2"]
arrow-7: arrow r9c9-r8c8-r8c7 bulb ["r9c8"]
arrow-8: arrow r9c1-r8c2 bulb ["r8c1"]
pair-1: pair r4c1-r5c1 sum 10
pair-2: pair r5c9-r6c9 sum 10
pair-3: pair r1c5-r1c6 sum 10
pair-4: pair r9c4-r9c5 sum 10
pair-5: pair r7c4-r8c4 sum 10
pair-6: pair r4c2-r4c3 sum 10
pair-7: pair r2c6-r3c6 sum 10
pair-8: pair r6c7-r6c8 sum 10
pair-9: pair r6c2-r6c3 sum 10
pair-10: pair r2c4-r3c4 sum 10
pair-11: pair r4c7-r4c8 sum 10
pair-12: pair r7c6-r8c6 sum 10
pair-13: pair r3c7-r4c7 sum 10
pair-14: pair r7c6-r7c7 sum 10
pair-15: pair r6c3-r7c3 sum 10
pair-16: pair r3c3-r3c4 sum 10
```

Normal sudoku rules apply.  Cells separated by a knight's move (in chess) cannot contain the same digit. Digits along an arrow sum to the digit in the bulb. Digits separated by an X sum to ten, not all X's are given.
