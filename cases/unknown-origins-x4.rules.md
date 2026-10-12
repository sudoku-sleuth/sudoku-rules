---
format: open-rules
title: Unknown Origins x4
setter: Will Power
source: https://sudokupad.app/vhhr6eje3r
case: https://sudoku-sleuth.com/cases/unknown-origins-x4
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c6-r5c6 colour "black"
kropki-2: kropki r3c6-r3c7 colour "black"
kropki-3: kropki r3c4-r3c5 colour "black"
kropki-4: kropki r3c2-r3c3 colour "black"
kropki-5: kropki r8c7-r9c7 colour "black"
kropki-6: kropki r1c4-r1c5 colour "black"
kropki-7: kropki r7c5-r8c5 colour "black"
kropki-8: kropki r8c2-r9c2 colour "black"
kropki-9: kropki r4c2-r5c2 colour "black"
kropki-10: kropki r6c1-r6c2 colour "black"
kropki-11: kropki r6c9-r7c9 colour "black"
arrow-1: arrow r3c5-r3c4-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r2c2-r2c3-r1c3-r1c4-r2c4-r2c5-r1c5-r1c6-r2c6-r3c6-r3c7 bulb ["r4c4","r4c5"]
arrow-2: arrow r4c7-r4c8-r4c9-r5c9-r5c8-r5c7-r6c7-r6c8-r6c9-r7c9-r8c9-r9c9-r9c8-r8c8-r7c8-r7c7-r8c7 bulb ["r4c6","r5c6"]
arrow-3: arrow r7c6-r8c6-r9c6-r9c5-r9c4-r8c4-r8c5-r7c5-r7c4-r7c3-r7c2-r8c2-r8c3-r9c3-r9c2-r9c1 bulb ["r6c5","r6c6"]
arrow-4: arrow r6c3-r6c2-r5c2-r5c3-r4c3-r4c2-r4c1-r5c1-r6c1-r7c1-r8c1 bulb ["r5c4","r6c4"]
pair-1: pair r4c4-r4c5 relation {"op":"sum","value":10}
pair-2: pair r6c5-r6c6 relation {"op":"sum","value":10}
pair-3: pair r2c8-r2c9 relation {"op":"sum","value":10}
pair-4: pair r1c8-r1c9 relation {"op":"sum","value":10}
pair-5: pair r1c7-r2c7 relation {"op":"sum","value":10}
pair-6: pair r9c8-r9c9 relation {"op":"sum","value":10}
pair-7: pair r3c7-r3c8 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from left to right or top to bottom.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1.

XV PAIRS- Numbers with an X between them sum to 10.
Not all possible dots and Xs are given.
