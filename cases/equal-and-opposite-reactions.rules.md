---
format: open-rules
title: Equal And Opposite Reactions
setter: Will Power
source: https://sudokupad.app/uuzqskf10q
case: https://sudoku-sleuth.com/cases/equal-and-opposite-reactions
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r4c5-r4c6 colour "white"
kropki-3: kropki r4c3-r4c4 colour "white"
kropki-4: kropki r8c9-r9c9 colour "white"
kropki-5: kropki r7c9-r8c9 colour "white"
kropki-6: kropki r3c8-r4c8 colour "white"
kropki-7: kropki r2c8-r3c8 colour "white"
kropki-8: kropki r2c8-r2c9 colour "white"
arrow-1: arrow r3c3-r4c4-r5c5 bulb ["r2c2"]
arrow-2: arrow r4c2-r5c3-r6c4 bulb ["r3c1"]
arrow-3: arrow r7c7-r6c6-r5c5 bulb ["r8c8"]
arrow-4: arrow r8c6-r7c5-r6c4 bulb ["r9c7"]
arrow-5: arrow r3c5-r4c6 bulb ["r2c4"]
arrow-6: arrow r5c7-r4c6 bulb ["r6c8"]
arrow-7: arrow r4c8-r3c7 bulb ["r5c9"]
arrow-8: arrow r2c6-r3c7 bulb ["r1c5"]
renban-1: renban r5c5-r6c6-r7c7
renban-2: renban r2c1-r3c2-r4c3-r5c4-r6c5
renban-3: renban r7c6-r8c7-r9c8
renban-4: renban r3c5-r4c6
renban-5: renban r6c3-r7c4
```

Normal Sudoku rules apply.

ARROWS(+)- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. Numbers IN CIRCLES, whose arrows meet, are the same number.

RENBAN LINES(+)- Numbers on orange lines are each a set of non-repeating consecutive numbers, IN ORDER.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
