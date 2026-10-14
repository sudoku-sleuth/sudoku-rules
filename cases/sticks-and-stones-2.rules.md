---
format: open-rules
title: Sticks and Stones 2
setter: The Bard
source: https://sudokupad.app/nzftq0v6oe
case: https://sudoku-sleuth.com/cases/sticks-and-stones-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: bbb267b9ecdf06f982943c07c2137afd
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3-r4c4-r5c5-r6c6 bulb ["r1c1"]
arrow-2: arrow r2c8-r3c7-r4c6 bulb ["r1c9"]
arrow-3: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
arrow-4: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-5: arrow r3c5-r3c6 bulb ["r3c4"]
arrow-6: arrow r7c5-r7c4 bulb ["r7c6"]
parity-cells-1: parity-cells r2c2-r2c8-r1c2-r2c1-r1c8-r2c9-r6c2 parity "odd"
parity-cells-2: parity-cells r7c7-r4c3-r4c9-r1c4-r7c4-r3c9-r7c5-r8c7 parity "even"
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Odd, Even: Digits in a grey square are even, and digits in a grey circle are odd.  
Arrows: digits along the arrow add up to the value in the circle.
