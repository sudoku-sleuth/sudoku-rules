---
format: open-rules
title: Excalibur, Super-Indexed
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/excalibur-super-indexed
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c4-r2c5-r3c6-r4c7-r5c8-r6c9
thermo-2: thermo r4c1-r5c2-r6c3-r7c4-r8c5-r9c6
thermo-3: thermo r1c1-r2c2-r3c3-r4c4-r5c5-r6c6
thermo-4: thermo r3c1-r2c2-r1c3
pair-1: pair r1c3-r2c3 relation {"op":"sum","value":10}
pair-2: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-3: pair r2c5-r2c6 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Numbers on thermometers increase from the bulb end. Numbers with an X between them sum to 10. Not all possible X are given. ALL numbers on the grid are super-indexed with two other numbers on the grid. Indexing is found by changing the row to the number, the column to the row and the and the number to the column. Example, if a 4 is in r7c8, then a 7 is in r8c4 AND an 8 is in r4c7.
HINT: In any completely super-indexed puzzle, within each 3x3 box, the (1,2 and 3) occupy different rows and columns. The same is true for (4, 5, and 6) and also for (7, 8 and 9).
