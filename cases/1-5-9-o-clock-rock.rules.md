---
format: open-rules
title: 1-5-9 O'Clock Rock
setter: Meggen033
source: https://sudokupad.app/5borf5b0wj
case: https://sudoku-sleuth.com/cases/1-5-9-o-clock-rock
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 11 connected true
cage-2: cage r2c5-r3c5 total 9 connected true
cage-3: cage r2c9-r3c9 total 9 connected true
cage-4: cage r5c1-r6c1 total 11 connected true
cage-5: cage r5c5-r6c5 total 10 connected true
cage-6: cage r5c9-r6c9 total 9 connected true
cage-7: cage r8c1-r9c1 total 11 connected true
cage-8: cage r8c5-r9c5 total 11 connected true
cage-9: cage r8c9-r9c9 total 9 connected true
kropki r7c7-r7c8 colour "black"
pair-1: pair r1c5-r1c6 sum 10
pair-2: pair r7c4-r7c5 sum 10
pair-3: pair r8c2-r8c3 sum 5
pair-4: pair r2c2-r2c3 sum 5
pair-5: pair r6c6-r6c7 sum 5
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

Normal Sudoku rules apply.

1-5-9:  Each digit in column 1 indexes the 1 in its row (i.e if R3C1=4 then R3C4=1).  The same rule applies to column 5 digits indexing 5 in its row, and column 9 digits indexing 9 in its row.

Digits separated by an X sum to 10.
Digits separated by a V sum to 5.

Digits separated by a black dot must be in a ratio of 2:1 with on another.
