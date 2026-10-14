---
format: open-rules
title: Aim With Twice The Precision
setter: Will Power
source: https://sudokupad.app/o97d08evq3
case: https://sudoku-sleuth.com/cases/aim-with-twice-the-precision
library: https://rules.sudoku-sleuth.com/
status: read
exported: 188499d221b1dd9aa88e78aa75a15f4a
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r3c8 white
kropki-2: kropki r7c5-r8c5 white
kropki-3: kropki r8c6-r9c6 white
kropki-4: kropki r8c2-r9c2 white
kropki-5: kropki r4c5-r5c5 white
kropki-6: kropki r6c8-r6c9 white
kropki-7: kropki r2c1-r2c2 white
kropki-8: kropki r3c4-r3c5 white
kropki-9: kropki r7c5-r7c6 black
kropki-10: kropki r7c7-r7c8 black
kropki-11: kropki r9c1-r9c2 black
kropki-12: kropki r9c2-r9c3 black
kropki-13: kropki r1c7-r1c8 black
kropki-14: kropki r4c7-r4c8 black
kropki-15: kropki r4c4-r4c5 black
kropki-16: kropki r2c5-r2c6 black
kropki-17: kropki r2c3-r3c3 black
kropki-18: kropki r6c1-r6c2 black
arrow-1: arrow r7c9-r8c9-r8c8-r8c7-r9c7-r9c8-r9c9 bulb ["r7c7","r7c8"]
arrow-2: arrow r7c4-r7c3-r8c3-r8c4-r8c5-r8c6-r9c6-r9c5-r9c4-r9c3 bulb ["r7c5","r7c6"]
arrow-3: arrow r8c2-r8c1-r7c1-r7c2 bulb ["r9c1","r9c2"]
arrow-4: arrow r1c9-r2c9-r2c8-r2c7-r3c7-r3c8-r3c9-r4c9-r5c9-r6c9 bulb ["r1c7","r1c8"]
arrow-5: arrow r5c8-r5c7-r6c7-r6c8 bulb ["r4c7","r4c8"]
arrow-6: arrow r5c5-r5c4-r6c4-r6c5-r6c6-r5c6-r4c6 bulb ["r4c4","r4c5"]
arrow-7: arrow r3c6-r3c5-r3c4-r2c4-r1c4-r1c5-r1c6 bulb ["r2c5","r2c6"]
arrow-8: arrow r1c3-r1c2-r1c1-r2c1 bulb ["r2c3","r3c3"]
arrow-9: arrow r6c3-r5c3-r4c3-r4c2-r5c2-r5c1-r4c1-r3c1-r3c2-r2c2 bulb ["r6c1","r6c2"]
```

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from left to right or top to bottom. Numbers may repeat on arrows, if other rules allow.

KROPKI PAIRS(+)- Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Every PAIR of numbers with a white dot are unique. Not all possible dots are shown.
