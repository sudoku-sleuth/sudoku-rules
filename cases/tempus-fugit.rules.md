---
format: open-rules
title: Tempus Fugit
setter: Blobz
source: https://sudokupad.app/blobz/tempus-fugit
case: https://sudoku-sleuth.com/cases/tempus-fugit
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c5=1 r2c5=2 r5c1=9 r5c9=3 r9c5=6
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 8 connected true
cage-2: cage r4c1-r5c1-r6c1 total 19 connected true
cage-3: cage r1c4-r1c5-r1c6 total 16 connected true
cage-4: cage r9c4-r9c5-r9c6 total 22 connected true
cage-5: cage r8c1-r9c1-r9c2 total 7 connected true
cage-6: cage r1c8-r1c9-r2c9 total 16 connected true
cage-7: cage r8c9-r9c8-r9c9 total 11 connected true
cage-8: cage r1c1-r1c2-r2c1 total 16 connected true
anti-knight
arrow-1: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-2: arrow r4c6-r4c7-r3c8 bulb ["r5c5"]
parity-cells r8c3-r7c2-r8c7-r7c8-r3c2-r2c3-r2c7-r5c1-r1c5-r5c9-r5c5 parity "odd"
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":8.72,"height":8.72,"rounded":true,"fill":"#9bd4f136","stroke":"#6e5ff532","thickness":7.68,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[31],"label":"TF","color":"#07ff","labelColor":"#07ff"}}
```

Normal sudoku rules apply.

Digits along an arrow may repeat, but must sum to the value in the attached circle.

Grey circles (including r5c5) denote odd digits.

Digits in cages sum to the given total.

Cells a chess knight's move apart cannot contain the same digit.

The large circle is purely cosmetic.
