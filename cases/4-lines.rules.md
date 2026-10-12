---
format: open-rules
title: 4 Lines
setter: Dr Logic
source: https://sudokupad.app/yeg6tz7tw3
case: https://sudoku-sleuth.com/cases/4-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c1=4
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
zipper-1: zipper r6c3-r7c4
zipper-2: zipper r5c3-r4c3-r4c4-r5c5-r6c6
zipper-3: zipper r5c7-r6c7-r6c8-r6c9-r7c9-r8c9-r7c8
zipper-4: zipper r2c6-r1c6-r1c7-r1c8-r2c7
region-sum-1: region-sum r6c3-r7c4 segments [["r6c3"],["r7c4"]]
region-sum-2: region-sum r5c3-r4c3-r4c4-r5c5-r6c6 segments [["r5c3","r4c3"],["r4c4","r5c5","r6c6"]]
region-sum-3: region-sum r5c7-r6c7-r6c8-r6c9-r7c9-r8c9-r7c8 segments [["r5c7","r6c7","r6c8","r6c9"],["r7c9","r8c9","r7c8"]]
region-sum-4: region-sum r2c6-r1c6-r1c7-r1c8-r2c7 segments [["r2c6","r1c6"],["r1c7","r1c8","r2c7"]]
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🔴","textColor":"#000000","fontSize":20}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🔴","textColor":"#000000","fontSize":20}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🔴","textColor":"#000000","fontSize":20}}
```

Normal Sudoku Rules Apply.
Each line is both a region sum line and a zipper line.
-Region Sum Line: Box borders divide each red line into segments with the same sum.
-Zipper Line: Digits equidistant from the centre of the line (marked with a red circle) sum to digit in the centre of the line. 
Digits cannot repeat on each marked diagonal.
