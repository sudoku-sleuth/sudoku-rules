---
format: open-rules
title: Medusa
setter: Will Power
source: https://sudokupad.app/fzqn7eqqs2
case: https://sudoku-sleuth.com/cases/medusa
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r3c2-r3c3 ratio 3
kropki-1: kropki r8c2-r8c3 colour "black"
kropki-2: kropki r8c3-r8c4 colour "black"
kropki-3: kropki r8c4-r8c5 colour "black"
kropki-4: kropki r8c6-r8c7 colour "black"
kropki-5: kropki r4c8-r4c9 colour "black"
kropki-6: kropki r2c1-r2c2 colour "black"
pair-2: pair r1c8-r2c8 ratio 3
pair-3: pair r2c8-r2c9 ratio 3
arrow-1: arrow r6c4-r7c3-r8c3 bulb ["r5c5","r6c5"]
arrow-2: arrow r7c4-r8c4 bulb ["r5c5","r6c5"]
arrow-3: arrow r7c5-r8c5 bulb ["r5c5","r6c5"]
arrow-4: arrow r7c6-r8c6 bulb ["r5c5","r6c5"]
arrow-5: arrow r6c6-r7c7-r8c7 bulb ["r5c5","r6c5"]
arrow-6: arrow r3c6-r2c6-r1c5 bulb ["r4c6","r4c7"]
arrow-7: arrow r3c7-r2c7-r1c8-r1c7 bulb ["r4c6","r4c7"]
arrow-8: arrow r3c8-r4c9-r3c9-r2c8-r1c9-r2c9 bulb ["r4c6","r4c7"]
arrow-9: arrow r5c7-r6c8-r5c9 bulb ["r4c6","r4c7"]
arrow-10: arrow r3c2-r2c1-r3c1 bulb ["r4c3","r4c4"]
arrow-11: arrow r4c2-r4c1-r5c2-r6c1 bulb ["r4c3","r4c4"]
arrow-12: arrow r3c4-r3c5-r2c5-r2c4-r1c4 bulb ["r4c3","r4c4"]
arrow-13: arrow r3c3-r2c3-r1c2 bulb ["r4c3","r4c4"]
arrow-14: arrow r5c3-r6c2-r7c2-r8c2 bulb ["r4c3","r4c4"]
```

Don't let Medusa get you. READ THE RULES CAREFULLY.

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from left to right or top to bottom.

KROPKI PAIRS- Numbers with a black dot (with a 2 inside) between them are in a ratio of 2:1. Numbers with a black dot (with a 3 inside) between them are in a ratio of 3:1. Not all possible dots are given.
