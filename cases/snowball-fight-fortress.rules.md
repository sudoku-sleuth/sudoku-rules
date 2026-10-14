---
format: open-rules
title: Snowball Fight Fortress
setter: Will Power
source: https://sudokupad.app/1pwhjz5uqi
case: https://sudoku-sleuth.com/cases/snowball-fight-fortress
library: https://rules.sudoku-sleuth.com/
status: read
exported: aa76491c09470c2cf3591e1014b9d4f4
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r5c3 white
kropki-2: kropki r4c1-r5c1 white
kropki-3: kropki r7c2-r8c2 white
kropki-4: kropki r6c7-r7c7 white
kropki-5: kropki r9c2-r9c3 white
kropki-6: kropki r5c3-r6c3 black
arrow-1: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-2: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-3: arrow r7c2-r6c2 bulb ["r8c2"]
arrow-4: arrow r8c3-r8c4 bulb ["r8c2"]
arrow-5: arrow r6c3-r5c3 bulb ["r7c3"]
arrow-6: arrow r7c4-r7c5 bulb ["r7c3"]
arrow-7: arrow r9c8-r9c7 bulb ["r9c9"]
arrow-8: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-9: arrow r7c8-r6c8 bulb ["r8c8"]
arrow-10: arrow r8c7-r8c6 bulb ["r8c8"]
arrow-11: arrow r6c7-r5c7 bulb ["r7c7"]
arrow-12: arrow r7c6-r7c5 bulb ["r7c7"]
arrow-13: arrow r5c4-r4c4 bulb ["r5c5"]
arrow-14: arrow r5c6-r4c6 bulb ["r5c5"]
arrow-15: arrow r3c4-r2c4 bulb ["r3c5"]
arrow-16: arrow r3c6-r2c6 bulb ["r3c5"]
arrow-17: arrow r1c2-r1c1 bulb ["r1c3"]
arrow-18: arrow r5c9-r6c9 bulb ["r4c9"]
arrow-19: arrow r4c8-r4c7 bulb ["r4c9"]
arrow-20: arrow r4c1-r3c1 bulb ["r5c1"]
arrow-21: arrow r5c2-r5c3 bulb ["r5c1"]
arrow-22: arrow r6c5-r6c4 bulb ["r6c6"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers do not repeat on arrows.

KROPKI PAIRS- Numbers with a white dot between them are consecutive, Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
