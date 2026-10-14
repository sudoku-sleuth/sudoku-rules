---
format: open-rules
title: Blow Dryer
setter: Will Power
source: https://sudokupad.app/7ys3pa359r
case: https://sudoku-sleuth.com/cases/blow-dryer
library: https://rules.sudoku-sleuth.com/
status: read
exported: 71863a5c2d2e0df5c0f20d094094032f
---

```rules
sudoku 9x9
cage r4c4-r5c4 total 11 connected true
kropki-1: kropki r4c8-r5c8 black
kropki-2: kropki r3c6-r3c7 black
kropki-3: kropki r2c6-r3c6 black
kropki-4: kropki r1c4-r2c4 black
kropki-5: kropki r2c4-r2c5 black
kropki-6: kropki r1c5-r2c5 black
kropki-7: kropki r3c1-r3c2 black
kropki-8: kropki r9c3-r9c4 black
kropki-9: kropki r6c6-r7c6 black
kropki-10: kropki r7c6-r8c6 black
kropki-11: kropki r8c6-r9c6 black
arrow-1: arrow r2c4-r2c5 bulb ["r2c3"]
arrow-2: arrow r3c3-r3c4 bulb ["r3c2"]
arrow-3: arrow r4c2-r4c3 bulb ["r4c1"]
arrow-4: arrow r6c2-r5c2 bulb ["r7c2"]
arrow-5: arrow r7c3-r6c3 bulb ["r8c3"]
arrow-6: arrow r8c4-r7c4 bulb ["r9c4"]
arrow-7: arrow r8c6-r8c5 bulb ["r8c7"]
arrow-8: arrow r7c7-r7c6 bulb ["r7c8"]
arrow-9: arrow r6c8-r6c7 bulb ["r6c9"]
arrow-10: arrow r4c8-r5c8 bulb ["r3c8"]
arrow-11: arrow r3c7-r4c7 bulb ["r2c7"]
arrow-12: arrow r2c6-r3c6 bulb ["r1c6"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
