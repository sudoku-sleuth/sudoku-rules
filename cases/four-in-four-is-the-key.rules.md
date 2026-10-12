---
format: open-rules
title: Four in Four is the Key
setter: Will Power
source: https://sudokupad.app/ec1webpyas
case: https://sudoku-sleuth.com/cases/four-in-four-is-the-key
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6-r5c6 connected true
cage-2: cage r6c5-r6c6 connected true
cage-3: cage r5c4-r6c4 connected true
cage-4: cage r1c2-r2c2 connected true
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r9c5-r9c6 colour "black"
kropki-4: kropki r5c1-r6c1 colour "black"
kropki-5: kropki r1c4-r1c5 colour "black"
kropki-6: kropki r4c9-r5c9 colour "black"
kropki-7: kropki r5c9-r6c9 colour "black"
kropki-8: kropki r1c3-r1c4 colour "black"
kropki-9: kropki r1c2-r1c3 colour "black"
kropki-10: kropki r2c5-r3c5 colour "black"
arrow-1: arrow r2c7-r3c8-r4c9-r5c9 bulb ["r2c6"]
arrow-2: arrow r7c8-r8c7-r9c6-r9c5 bulb ["r6c8"]
arrow-3: arrow r8c3-r7c2-r6c1-r5c1 bulb ["r8c4"]
arrow-4: arrow r3c2-r2c3-r1c4-r1c5 bulb ["r4c2"]
arrow-5: arrow r6c7-r7c6 bulb ["r5c7"]
arrow-6: arrow r7c4-r6c3 bulb ["r7c5"]
arrow-7: arrow r4c3-r3c4 bulb ["r5c3"]
arrow-8: arrow r3c6-r4c7 bulb ["r3c5"]
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to the same number as all other cages. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
