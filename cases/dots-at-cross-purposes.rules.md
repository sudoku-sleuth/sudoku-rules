---
format: open-rules
title: Dots at Cross Purposes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mk92scnfbt
case: https://sudoku-sleuth.com/cases/dots-at-cross-purposes
library: https://rules.sudoku-sleuth.com/
status: read
exported: 66869626e7f99dfcb24b96c85531a694
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r4c8 black
kropki-2: kropki r5c2-r5c3 black
kropki-3: kropki r3c4-r3c5 black
kropki-4: kropki r1c6-r1c7 black
kropki-5: kropki r3c1-r3c2 black
kropki-6: kropki r8c8-r8c9 black
kropki-7: kropki r9c3-r9c4 black
kropki-8: kropki r2c1-r2c2 black
kropki-9: kropki r6c7-r7c7 black
kropki-10: kropki r6c3-r7c4 black
kropki-11: kropki r6c4-r7c3 black
kropki-12: kropki r8c1-r9c2 black
kropki-13: kropki r8c2-r9c1 black
arrow-1: arrow r7c4-r6c5-r7c6 bulb ["r6c3"]
arrow-2: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
arrow-3: arrow r4c7-r4c8 bulb ["r5c6"]
arrow-4: arrow r5c3-r5c2 bulb ["r4c4"]
arrow-5: arrow r3c5-r3c4 bulb ["r2c6"]
arrow-6: arrow r1c6-r1c7 bulb ["r2c5"]
arrow-7: arrow r3c2-r3c1 bulb ["r2c3"]
arrow-8: arrow r8c8-r8c9 bulb ["r9c7"]
arrow-9: arrow r9c3-r9c4-r8c5 bulb ["r9c2"]
arrow-10: arrow r1c3-r2c2-r2c1 bulb ["r1c4"]
arrow-11: arrow r6c8-r6c7 bulb ["r6c9"]
arrow-12: arrow r4c9-r3c9 bulb ["r5c9"]
```

Normal Sudoku rules apply.

Cells separated by a black dot have a 1:2 ratio. Black dots at the corner of four cells indicate that both diagonal pairs are in a 1:2 ratio. Not all dots are necessarily given.

Digits placed on an arrow must sum to the digit placed in that arrow's circle.
