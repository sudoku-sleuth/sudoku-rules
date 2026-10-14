---
format: open-rules
title: Baskin Robbins 31 Flavors
setter: Will Power
source: https://sudokupad.app/bozkejf1rq
case: https://sudoku-sleuth.com/cases/baskin-robbins-31-flavors
library: https://rules.sudoku-sleuth.com/
status: read
exported: f7819fc8a91d45c2d804b6653529deec
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 white
kropki-2: kropki r4c5-r5c5 white
kropki-3: kropki r5c5-r5c6 white
kropki-4: kropki r4c3-r4c4 white
kropki-5: kropki r3c3-r4c3 white
kropki-6: kropki r3c2-r3c3 white
kropki-7: kropki r7c3-r7c4 white
kropki-8: kropki r5c2-r5c3 black
kropki-9: kropki r6c7-r7c7 black
kropki-10: kropki r7c2-r7c3 black
kropki-11: kropki r4c7-r5c7 black
kropki-12: kropki r4c8-r5c8 black
kropki-13: kropki r3c8-r4c8 black
kropki-14: kropki r2c8-r3c8 black
kropki-15: kropki r7c6-r8c6 black
arrow-1: arrow r4c3-r4c2-r4c1-r5c1-r6c1-r6c2-r6c3 bulb ["r5c2","r5c3"]
arrow-2: arrow r7c1-r8c1-r8c2-r8c3-r8c4-r8c5-r7c5-r7c6-r8c6-r8c7-r8c8-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 bulb ["r7c2","r7c3","r7c4"]
arrow-3: arrow r6c5-r6c6-r5c6-r4c6-r4c5-r5c5 bulb ["r5c4","r6c4"]
arrow-4: arrow r3c1-r2c1-r1c1 bulb ["r3c2","r3c3"]
arrow-5: arrow r6c8-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 bulb ["r6c7","r7c7"]
arrow-6: arrow r2c4-r2c3-r2c2 bulb ["r3c4","r4c4"]
arrow-7: arrow r4c8-r3c8-r3c7-r3c6-r3c5-r2c5-r2c6-r2c7-r2c8-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2 bulb ["r4c7","r5c7"]
```

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from left to right or from top to bottom. 

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
