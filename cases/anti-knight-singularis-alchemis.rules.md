---
format: open-rules
title: Anti-knight Singularis Alchemis
setter: Chip Sounder
source: https://sudokupad.app/vnxrlvh04f
case: https://sudoku-sleuth.com/cases/anti-knight-singularis-alchemis
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3b85b1e4d22b13a8ab03fbd609fa21ad
---

```rules
sudoku 9x9
cage r1c4-r2c4 total 5 connected true
anti-knight
arrow r2c5-r1c5 bulb ["r3c5"]
renban r6c4-r5c4-r4c4
pair-1: pair r6c3-r6c4 sum 10
pair-2: pair r7c4-r8c4 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[5.5,1.5],[3.5,1.5],[1.5,3.5],[2.5,4.5],[1.5,5.5],[3.5,7.5],[5.5,7.5],[7.5,5.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[3.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.
Cells separated by a knight's move (in chess) cannot contain the same digit.
Digits on a thermometer must not decrease from the bulb end.
Connected digits on a green line must differ by at least 5.
Digits in a dotted cage sum to the total given in the top left corner of the cage.
Digits on a purple line must form a set of consecutive digits in any order.
Digits on an arrow sum to the digit in the connected circle.
Digits separated by an X sum to 10.
Digits separated by a V sum to 5.
