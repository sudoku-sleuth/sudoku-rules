---
format: open-rules
title: Singularis Alchemis
setter: Chip Sounder
source: https://sudokupad.app/s4fwfl7tpw
case: https://sudoku-sleuth.com/cases/singularis-alchemis
library: https://rules.sudoku-sleuth.com/
status: read
exported: 94611513cc1e51b8d098d71edfafc08b
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r3c5-r3c6 black
arrow r2c5-r3c5 bulb ["r1c4"]
whispers r7c6-r6c7-r5c7-r4c6-r4c5-r4c4-r5c3-r6c3-r7c4 gap 5
renban r4c1-r3c1-r2c1-r1c2
slow-thermo r8c4-r7c3-r6c2-r5c2-r4c2-r3c3-r2c4-r3c5-r2c6-r3c7-r4c8-r5c8-r6c8-r7c7-r8c6
pair r8c8-r9c8 sum 5
quadruple r5c4-r5c5-r6c4-r6c5 digits [3,4,6,7]
little-killer r6c1-r7c2-r8c3-r9c4 sum 19
```

Normal sudoku rules apply.
Digits on a slow thermometer must never decrease from the bulb end.
Digits on a green German whispers line must differ by at least 5.
Digits inside a circle quadruple clue must be in the cells touching the quad circle.
Digits on an arrowed line sum to the digits in the connected circle.
Digits on a purple renban must be a set of consecutive digits in any order. 
Clues outside the grid give the sum of the digits in the given direction, digits may repeat if other rules allow. 
Cells separated by a V sum to 5.
Cells separated by a black dot are a 1:2 ratio.
Cells separated by a white dot are consecutive.
No negative constraints.
