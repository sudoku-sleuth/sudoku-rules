---
format: open-rules
title: Prime Arrows
setter: Will Power
source: https://sudokupad.app/qi2ai0y6mm
case: https://sudoku-sleuth.com/cases/prime-arrows
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c5=2 r8c2=1
exported: d87abb82b4385034e01f796cad1ea7a2
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 black
kropki-2: kropki r3c8-r3c9 black
kropki-3: kropki r9c8-r9c9 black
kropki-4: kropki r6c3-r7c3 black
kropki-5: kropki r8c3-r9c3 black
arrow-1: arrow r3c1-r4c1 bulb ["r2c1"]
arrow-2: arrow r6c3-r5c3-r4c3-r4c2-r5c2-r6c2-r6c1-r5c1 bulb ["r7c3","r8c3"]
arrow-3: arrow r9c3-r9c2-r9c1-r8c1-r7c1-r7c2 bulb ["r9c4","r9c5"]
arrow-4: arrow r9c9-r9c8-r8c8-r7c8-r7c7-r8c7-r9c7-r9c6-r8c6-r7c6-r7c5-r7c4-r8c4-r8c5 bulb ["r7c9","r8c9"]
arrow-5: arrow r6c9-r5c9-r5c8 bulb ["r6c7","r6c8"]
arrow-6: arrow r1c3-r2c3-r3c3-r3c2-r2c2-r1c2-r1c1 bulb ["r1c4","r1c5"]
arrow-7: arrow r2c5-r2c4-r3c4-r3c5-r3c6 bulb ["r1c6","r2c6"]
arrow-8: arrow r1c9-r2c9-r2c8-r2c7-r3c7-r3c8-r3c9-r4c9-r4c8-r4c7-r5c7 bulb ["r1c7","r1c8"]
arrow-9: arrow r5c6-r6c6 bulb ["r4c6"]
arrow-10: arrow r4c4-r4c5-r5c5 bulb ["r5c4","r6c4"]
```

Normal Sudoku rules apply.

ARROWS(+)- Numbers on arrows sum to the number in the arrow's circle or pill. Pills are read from left to right or top to bottom. ALSO, all circles and pills are DIFFERENT prime numbers.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
