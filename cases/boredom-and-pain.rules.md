---
format: open-rules
title: Boredom and pain
setter: Chip Sounder
source: https://sudokupad.app/f861ou65u7
case: https://sudoku-sleuth.com/cases/boredom-and-pain
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5843d330ff58e4a4462b27c70008c2fe
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1-r9c2 total 24 connected true
cage-2: cage r1c8-r1c9-r2c9 total 24 connected true
cage-3: cage r1c1-r1c2-r2c1 total 6 connected true
cage-4: cage r8c9-r9c8-r9c9 total 6 connected true
cage-5: cage r3c3-r3c4-r3c5-r3c6-r3c7-r4c3-r5c3-r6c3-r7c3 connected true
cage-6: cage r6c7-r7c5-r7c6-r7c7 total 11 connected true
cage-7: cage r7c4-r8c4 total 13 connected true
cage-8: cage r5c4-r5c5-r5c6 total 21 connected true
cage-9: cage r3c2-r4c2-r5c2 total 14 connected true
cage-10: cage r4c5-r4c6-r4c7-r5c7 connected true
cage-11: cage r1c5-r1c6-r2c5 total 13 connected true
whispers-1: whispers r7c9-r8c8 gap 5
whispers-2: whispers r7c1-r6c1-r5c1-r4c1 gap 5
whispers-3: whispers r3c9-r4c9 gap 5
whispers-4: whispers r5c4-r4c4-r3c4-r2c4 gap 5
whispers-5: whispers r1c5-r2c6 gap 5
whispers-6: whispers r2c9-r3c8 gap 5
```

-Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
-Digits in a dotted cage cannot repeat and sum to the total given in the top left corner of the cage. (if given)
-Digits on a green German whispers line must differ by at least 5.
