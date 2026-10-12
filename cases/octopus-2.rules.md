---
format: open-rules
title: Octopus
setter: Jobo
source: https://sudokupad.app/aza86ftkmj
case: https://sudoku-sleuth.com/cases/octopus-2
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
whispers r6c8-r6c7-r6c6-r7c6-r8c6 gap 4
parity r2c6-r3c6-r4c6-r4c7-r4c8
renban-1: renban r1c3-r2c3-r2c4-r3c4-r4c4-r4c3-r4c2-r3c2-r3c1
renban-2: renban r1c7-r2c7-r2c6-r3c6-r4c6-r4c7-r4c8-r3c8-r3c9
renban-3: renban r7c9-r7c8-r6c8-r6c7-r6c6-r7c6-r8c6-r8c7-r9c7
renban-4: renban r7c1-r7c2-r6c2-r6c3-r6c4-r7c4-r8c4-r8c3-r9c3
renban-5: renban r2c4-r3c4-r4c4-r4c3-r4c2
parity-cells r5c5 parity "odd"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,3.5],[5.5,3.5],[5.5,2.5],[5.5,1.5]],"color":"#ece047ff","thickness":9.6,"rounded":true,"path":"M211.2 467.2L211.2 384Q211.2 364.8 192 364.8L108.8 364.8","bounds":[5.7,1.7,7.3,3.3]}}
```

Normal sudoku rules apply.

Digits an equal distance from the center of a lavender line must sum to the digit on the center of that line.

The purple line contains a non-repeating set of consecutive digits in any order.

Adjacent digits along the red line must alternate in parity (odd/even).

Adjacent digits along the orange line must differ by at least 4.

A set of three sequential cells along the yellow line must contain a low [123], middle [456], and high [789] digit.

The cell with the grey circle must contain an odd digit.
