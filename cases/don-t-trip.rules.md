---
format: open-rules
title: Don't Trip
setter: The Bard
source: https://sudokupad.app/6maefgjrbt
case: https://sudoku-sleuth.com/cases/don-t-trip
library: https://rules.sudoku-sleuth.com/
status: read
exported: fe5e3ae8f2e708bc17915d54393f2431
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r1c3 black
kropki-2: kropki r1c7-r1c8 black
kropki-3: kropki r8c2-r8c3 black
kropki-4: kropki r8c7-r8c8 black
kropki-5: kropki r4c6-r5c6 black
kropki-6: kropki r5c4-r6c4 black
kropki-7: kropki r7c5-r8c5 black
kropki-8: kropki r5c1-r6c1 black
kropki-9: kropki r3c7-r3c8 black
kropki-10: kropki r5c9-r6c9 black
arrow-1: arrow r1c8-r1c7 bulb ["r2c9"]
arrow-2: arrow r1c2-r1c3 bulb ["r2c1"]
arrow-3: arrow r8c2-r8c3 bulb ["r9c1"]
arrow-4: arrow r8c8-r8c7 bulb ["r9c9"]
arrow-5: arrow r5c6-r4c6 bulb ["r6c7"]
arrow-6: arrow r5c4-r6c4 bulb ["r4c3"]
arrow-7: arrow r8c5-r7c5 bulb ["r9c5"]
arrow-8: arrow r5c1-r6c1 bulb ["r4c2"]
arrow-9: arrow r3c7-r3c8 bulb ["r2c6"]
arrow-10: arrow r5c9-r6c9 bulb ["r4c9"]
arrow-11: arrow r7c2-r7c3 bulb ["r7c1"]
arrow-12: arrow r5c8-r4c7 bulb ["r6c8"]
arrow-13: arrow r2c5-r2c4-r1c3 bulb ["r3c6"]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Arrow: Digits on an arrow must sum to the digit placed in that arrow's circle. Digits may repeat on an arrow if allowed by other rules.
Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
