---
format: open-rules
title: Commonality
setter: Marty Sears
source: https://tinyurl.com/52csevm4
case: https://sudoku-sleuth.com/cases/commonality
library: https://rules.sudoku-sleuth.com/
status: read
exported: bcf6fb3ebb7e19655ba3913f6bd30e41
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 black
kropki-2: kropki r4c7-r4c8 black
kropki-3: kropki r4c5-r4c6 black
kropki-4: kropki r5c4-r6c4 black
kropki-5: kropki r7c3-r8c3 black
kropki-6: kropki r8c2-r9c2 black
kropki-7: kropki r8c8-r9c8 black
kropki-8: kropki r3c1-r3c2 black
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-2: arrow r2c3-r3c3-r4c3 bulb ["r1c3"]
arrow-3: arrow r2c5-r3c5-r4c5 bulb ["r1c5"]
arrow-4: arrow r2c7-r3c7-r4c7 bulb ["r1c7"]
arrow-5: arrow r4c9-r5c9 bulb ["r3c9"]
arrow-6: arrow r8c1-r9c1-r9c2 bulb ["r7c1"]
arrow-7: arrow r8c5-r7c5-r7c4 bulb ["r9c5"]
arrow-8: arrow r8c7-r9c7-r9c8 bulb ["r7c7"]
```

Normal Sudoku rules apply.

The digits along an arrow must sum to the digit in the circle.

A black dot sits between two digits with a 2:1 ratio. Not all possible dots are shown.

Exported from sudokulab.net
