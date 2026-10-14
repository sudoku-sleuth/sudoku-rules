---
format: open-rules
title: Spaetzle (Gnocchi, Dumpling)
setter: Will Power
source: https://sudokupad.app/ngue0w3cg9
case: https://sudoku-sleuth.com/cases/spaetzle-gnocchi-dumpling
library: https://rules.sudoku-sleuth.com/
status: read
exported: 470dcee8f53efd22d033dbf61f6418eb
---

```rules
sudoku 9x9
thermo r6c9-r5c8-r4c7-r3c6-r2c5-r1c4
kropki-1: kropki r8c7-r9c7 black
kropki-2: kropki r8c7-r8c8 black
kropki-3: kropki r2c2-r2c3 black
kropki-4: kropki r2c3-r3c3 black
arrow-1: arrow r4c3-r3c4-r2c5 bulb ["r5c2"]
arrow-2: arrow r5c4-r4c5-r3c6 bulb ["r6c3"]
arrow-3: arrow r6c5-r5c6-r4c7 bulb ["r7c4"]
arrow-4: arrow r7c6-r6c7-r5c8 bulb ["r8c5"]
arrow-5: arrow r2c2-r1c3-r1c4 bulb ["r3c1"]
arrow-6: arrow r9c7-r8c8-r7c9-r6c9 bulb ["r9c6"]
arrow-7: arrow r2c8-r1c9 bulb ["r3c7"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

THERMOMETER- Numbers on the thermometer increase from the bulb end.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
