---
format: open-rules
title: Evenly Shared Smoreos
setter: Chip Sounder
source: https://sudokupad.app/2uqfc63ch9
case: https://sudoku-sleuth.com/cases/evenly-shared-smoreos
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r8c1 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r2c9-r3c9 colour "white"
kropki-4: kropki r9c7-r9c8 colour "white"
kropki-5: kropki r7c6-r7c7 colour "white"
kropki-6: kropki r6c3-r7c3 colour "white"
kropki-7: kropki r3c3-r3c4 colour "white"
kropki-8: kropki r3c7-r4c7 colour "white"
kropki-9: kropki r6c8-r6c9 colour "white"
kropki-10: kropki r3c1-r3c2 colour "white"
kropki-11: kropki r5c6-r5c7 colour "white"
kropki-12: kropki r4c4-r4c5 colour "white"
kropki-13: kropki r8c1-r9c1 colour "black"
kropki-14: kropki r6c1-r7c1 colour "black"
kropki-15: kropki r1c1-r1c2 colour "black"
kropki-16: kropki r1c3-r1c4 colour "black"
kropki-17: kropki r1c9-r2c9 colour "black"
kropki-18: kropki r3c9-r4c9 colour "black"
kropki-19: kropki r9c8-r9c9 colour "black"
kropki-20: kropki r9c6-r9c7 colour "black"
kropki-21: kropki r7c4-r7c5 colour "black"
kropki-22: kropki r5c7-r6c7 colour "black"
kropki-23: kropki r3c5-r3c6 colour "black"
kropki-24: kropki r4c3-r5c3 colour "black"
kropki-25: kropki r8c4-r9c4 colour "black"
kropki-26: kropki r1c6-r2c6 colour "black"
kropki-27: kropki r5c5-r5c6 colour "black"
kropki-28: kropki r4c8-r4c9 colour "black"
pair r5c4-r6c4 sum 10
parity-cells r9c4-r3c1-r1c6-r6c9-r4c5-r6c5-r7c3-r3c7 parity "even"
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Oreos have a 1:2 ratio. (Black dot)
Marshmallows are consecutive. (White dot)
 Cells with a highlighted grey square has an even digit.
Cells separated by an X sum to 10.
