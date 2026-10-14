---
format: open-rules
title: Crayons
setter: Jobo
source: https://sudokupad.app/hrp201zi0g
case: https://sudoku-sleuth.com/cases/crayons
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 611db66ec8cec6ef61c6451a7a950b8b
---

```rules
sudoku 9x9
anti-king
whispers-1: whispers r5c1-r6c2-r5c3-r6c4 gap 5
whispers-2: whispers r8c1-r9c2-r8c3-r9c4 gap 5
whispers-3: whispers r3c6-r4c7 gap 5
whispers-4: whispers r1c8-r2c9 gap 5
whispers-5: whispers r6c6-r7c7 gap 5
whispers-6: whispers r4c8-r5c9 gap 5
renban-1: renban r5c4-r6c5
renban-2: renban r2c7-r3c8
renban-3: renban r5c7-r6c8
renban-4: renban r8c4-r9c5
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[4.5,3.5],[5.5,3.5],[5.5,4.5],[1.5,8.5]],"color":"#cdb1ecff","thickness":5,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[7.5,3.5],[8.5,3.5],[8.5,4.5],[4.5,8.5]],"color":"#cdb1ecff","thickness":5,"rounded":true}}
```

Normal sudoku rules apply.

Digits an equal distance from the center of a lavender line must sum to the digit on the center of that line.

Adjacent digits along a green line must differ by at least 5.

Purple lines contain a non-repeating set of consecutive digits in any order.

Cells separated by a king's move cannot contain the same digit.
