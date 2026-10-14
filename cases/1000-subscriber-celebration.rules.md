---
format: open-rules
title: 1000 Subscriber Celebration
setter: Dr Logic
source: https://sudokupad.app/1bq19aueta
case: https://sudoku-sleuth.com/cases/1000-subscriber-celebration
library: https://rules.sudoku-sleuth.com/
status: read
exported: 711f82ffd69870f439520037eb0c7626
---

```rules
sudoku 9x9
thermo r5c7-r4c8-r5c9-r6c9-r7c9-r8c9-r9c8-r8c7-r7c7
kropki-1: kropki r2c7-r2c8 white
kropki-2: kropki r2c4-r3c4 black
kropki-3: kropki r7c6-r8c6 black
kropki-4: kropki r1c8-r2c8 black
whispers r5c3-r4c4-r5c5-r6c5-r7c5-r8c5-r9c4-r8c3-r7c3-r6c3 gap 5
zipper r2c1-r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
region-sum r2c5-r1c6-r2c7-r3c7-r4c7-r5c7-r6c6-r5c5-r4c5-r3c5 segments [["r2c5","r1c6"],["r2c7","r3c7"],["r4c7","r5c7"],["r6c6","r5c5","r4c5"],["r3c5"]]
nabner-1: nabner r5c1-r6c1-r7c1
nabner-2: nabner r9c1-r9c2-r9c3
```

Normal Sudoku Rules Apply.
Digits along a german whispers line must differ by at least 5.
On lavender lines, digits an equal distance from the center must sum to the digit in the middle of the line. 
The sum of the digits on a Region Sum line is the same for each box it occupies
No digits on a Nabner line can be consecutive. (129 is not allowed but 135 is)
Digits along a thermometer must increase starting at the bulb end.
Digits separated by a black dot must be in a 1:2 ratio.
Digits separeted by a white dot must be consecutive.
Not all dots are given.
