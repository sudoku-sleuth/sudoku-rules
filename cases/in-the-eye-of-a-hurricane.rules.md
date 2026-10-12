---
format: open-rules
title: In the Eye of a Hurricane
setter: Alexander Hamilton (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/9l43fdufje
case: https://sudoku-sleuth.com/cases/in-the-eye-of-a-hurricane
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r1c9=1 r5c5=3 r9c1=1 r9c9=2
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r1c4-r1c5 colour "white"
kropki-3: kropki r3c4-r4c4 colour "white"
kropki-4: kropki r6c1-r7c1 colour "white"
kropki-5: kropki r3c9-r4c9 colour "white"
kropki-6: kropki r6c6-r7c6 colour "white"
kropki-7: kropki r5c7-r5c8 colour "white"
kropki-8: kropki r7c7-r7c8 colour "white"
kropki-9: kropki r9c6-r9c7 colour "white"
kropki-10: kropki r2c8-r2c9 colour "black"
kropki-11: kropki r5c2-r5c3 colour "black"
kropki-12: kropki r8c1-r8c2 colour "black"
arrow-1: arrow r3c4-r3c5-r3c6 bulb ["r3c3"]
arrow-2: arrow r4c7-r5c7-r6c7 bulb ["r3c7"]
arrow-3: arrow r7c6-r7c5-r7c4 bulb ["r7c7"]
arrow-4: arrow r6c3-r5c3-r4c3 bulb ["r7c3"]
arrow-5: arrow r7c2-r6c2-r5c2 bulb ["r8c2"]
arrow-6: arrow r2c3-r2c4-r2c5 bulb ["r2c2"]
arrow-7: arrow r3c8-r4c8-r5c8 bulb ["r2c8"]
arrow-8: arrow r8c7-r8c6-r8c5 bulb ["r8c8"]
```

- Normal Sudoku rules apply.
- Digits placed on an arrow must sum to the digit placed in that arrow's circle.
- Cells separated by a black dot have a 1:2 ratio. Cells separated by a white dot must be consecutive. Not all dots are necessarily given.
