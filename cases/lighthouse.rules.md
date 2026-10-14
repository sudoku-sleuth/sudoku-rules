---
format: open-rules
title: Lighthouse
setter: Jobo
source: https://sudokupad.app/xjyly9aitl
case: https://sudoku-sleuth.com/cases/lighthouse
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c2=5
exported: 9ccf9c17959a2c298bb122ed976c3a6b
---

```rules
sudoku 9x9
pair-1: pair r8c2-r8c3 sum 5
pair-2: pair r8c7-r8c8 sum 5
negative relations [{"op":"ratio","value":2}] except [["r8c2","r8c3"],["r8c7","r8c8"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[5.5,1.5],[5.5,3.5],[2.5,3.5],[1.5,4.5],[2.5,5.5],[5.5,5.5],[5.5,7.5],[8.5,7.5]],"color":"#aaaf","thickness":3,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4,0],[1,9]],"color":"#67f067ff","thickness":4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1,0],[4,9]],"color":"#67f067ff","thickness":4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1}}
```

Normal sudoku rules apply.

The sum of the digits along a line connecting two circles is equal to the sum of the digits in the circles.

Adjacent digits along a green line must differ by at least 5.

Digits separated by a V must sum to 5. Not all V are given.

Any two orthogonally adjacent cells cannot contain digits in a 1:2 ratio.
