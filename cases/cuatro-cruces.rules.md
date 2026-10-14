---
format: open-rules
title: Cuatro Cruces
setter: EPH
source: https://tinyurl.com/3szsze3e
case: https://sudoku-sleuth.com/cases/cuatro-cruces
library: https://rules.sudoku-sleuth.com/
status: read
exported: 39321a6e74bf1d1bf764a94018869cc5
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7-r3c6-r3c7-r3c8-r3c9-r4c7-r5c7 connected true
cage-2: cage r6c7-r7c5-r7c6-r7c7-r7c8-r7c9-r8c7-r9c7 connected true
cage-3: cage r5c3-r6c3-r7c1-r7c2-r7c3-r7c4-r8c3-r9c3 connected true
cage-4: cage r1c3-r2c3-r3c1-r3c2-r3c3-r3c4-r3c5-r4c3 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r7c2-r7c1 bulb ["r5c3","r6c3"]
arrow-2: arrow r8c7-r9c7 bulb ["r7c5","r7c6"]
arrow-3: arrow r3c8-r4c7 bulb ["r3c9"]
arrow-4: arrow r2c3-r1c3 bulb ["r3c4"]
whispers r1c7-r2c7-r3c6-r3c5-r3c4-r2c3-r1c3 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box contains all the digits from 1 to 9.

Each marked diagonal contains no repeated digits.

Digits on arrows sum to the number in the attached circle or pill.  Two digit sums are read in the direction of the arrow.

The green line is a German Whispers line: adjacent digits along the line must differ by at least 5.

Digits cannot repeat within a cage.  The digits in each cage sum to more than 40.  The sums are not necessarily distinct.
