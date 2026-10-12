---
format: open-rules
title: "Diagonal Indexing #2"
setter: EPH
source: https://tinyurl.com/bdfp8399
case: https://sudoku-sleuth.com/cases/diagonal-indexing-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r2c5-r2c6 bulb ["r2c3"]
arrow-2: arrow r3c8-r4c8-r5c8 bulb ["r2c8"]
arrow-3: arrow r6c7-r6c6-r6c5 bulb ["r6c8"]
arrow-4: arrow r5c3-r4c3-r3c3 bulb ["r6c3"]
arrow-5: arrow r8c5-r9c4 bulb ["r7c6"]
arrow-6: arrow r5c5-r6c4 bulb ["r4c6"]
index-1: index r1c4-r2c3-r3c2-r4c1-r5c9-r6c8-r7c7-r8c6-r9c5 axis "column"
index-2: index r1c4-r2c3-r3c2-r4c1-r5c9-r6c8-r7c7-r8c6-r9c5 axis "row"
```

Stanadrd sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits on arrows must sum to the value in the attached circle.

The red cells are indexing cells: the digit in a red cell gives the position in the column of the row number, and the position in the row of the column number.
