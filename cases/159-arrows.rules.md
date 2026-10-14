---
format: open-rules
title: 159 Arrows
setter: Blobz
source: https://sudokupad.app/jb2ohuz6l0
case: https://sudoku-sleuth.com/cases/159-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: fb5de7d14642df9c2461821620281118
---

```rules
sudoku 9x9
arrow-1: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-2: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-3: arrow r8c8-r8c9-r9c9 bulb ["r7c7"]
arrow-4: arrow r4c2-r4c3 bulb ["r4c1"]
arrow-5: arrow r3c5-r2c5 bulb ["r4c5"]
arrow-6: arrow r7c5-r8c5 bulb ["r6c5"]
arrow-7: arrow r4c8-r4c7 bulb ["r5c8"]
arrow-8: arrow r2c3 bulb ["r1c4"]
arrow-9: arrow r2c1-r1c1 bulb ["r2c2"]
arrow-10: arrow r8c3-r7c2 bulb ["r8c4"]
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

Normal sudoku rules apply.

159: Digits in column 1 indicate the column in which the digit 1 appears in that row (e.g. if r4c1 is a 6, r4c6 is a 1). The same applies to columns 5 and 9, with the digits 5 and 9 respectively.

Arrows: Digits on arrows sum to the digit in the attached circle.
