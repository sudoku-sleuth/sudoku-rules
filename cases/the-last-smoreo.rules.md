---
format: open-rules
title: The last smoreo
setter: Chip Sounder
source: https://sudokupad.app/m0yea67toz
case: https://sudoku-sleuth.com/cases/the-last-smoreo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r8c2 colour "white"
kropki-2: kropki r2c8-r3c8 colour "white"
kropki-3: kropki r2c3-r3c3 colour "white"
kropki-4: kropki r7c7-r8c7 colour "white"
kropki-5: kropki r5c4-r6c4 colour "white"
kropki-6: kropki r9c5-r9c6 colour "black"
kropki-7: kropki r9c4-r9c5 colour "black"
kropki-8: kropki r5c1-r6c1 colour "black"
kropki-9: kropki r4c1-r5c1 colour "black"
kropki-10: kropki r1c4-r1c5 colour "black"
kropki-11: kropki r1c5-r1c6 colour "black"
kropki-12: kropki r4c9-r5c9 colour "black"
kropki-13: kropki r5c9-r6c9 colour "black"
kropki-14: kropki r2c7-r3c7 colour "black"
kropki-15: kropki r7c3-r8c3 colour "black"
kropki-16: kropki r2c2-r3c2 colour "black"
kropki-17: kropki r7c8-r8c8 colour "black"
kropki-18: kropki r6c4-r7c4 colour "black"
kropki-19: kropki r4c4-r5c4 colour "black"
kropki-20: kropki r4c5-r4c6 colour "black"
pair-1: pair r4c2-r4c3 relation {"op":"sum","value":10}
pair-2: pair r2c9-r3c9 relation {"op":"sum","value":10}
pair-3: pair r5c5-r5c6 relation {"op":"sum","value":10}
pair-4: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-5: pair r8c9-r9c9 relation {"op":"sum","value":10}
pair-6: pair r3c6-r3c7 relation {"op":"sum","value":10}
pair-7: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-8: pair r2c6-r2c7 relation {"op":"sum","value":10}
little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 37
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Oreos have a 1:2 ratio (black dot).
Marshmallows are consecutive (white dot)
Cells separated by an X sum to 10.
Clues outside the grid sum the digits in the indicated diagonal, digits may repeat.
