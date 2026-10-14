---
format: open-rules
title: Counting Calories
setter: Marty Sears
source: https://sudokupad.app/rjpo7ec0jh
case: https://sudoku-sleuth.com/cases/counting-calories
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: e5aa29e5838007231047d72ec388eb0d
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.63,"height":0.63,"rounded":false,"stroke":"#8a5b08ff","thickness":5,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.745,0.745],[6.922,0.922]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.708,0.5],[6.958,0.5]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.708,3.5],[7.958,3.5]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,3.292],[7.5,3.042]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.255,3.255],[7.078,3.078]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.255,3.745],[7.078,3.922]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,7.708],[6.5,7.958]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.745,7.255],[6.922,7.078]],"color":"#6f6f6fff","thickness":3,"headLength":0.125,"rounded":true}}
```

Normal sudoku rules apply.

Divide the grid into yellow regions and brown regions. If a region contains more than one cell, the cells must be orthogonally connected, and two regions of the same colour may not share an orthogonal edge.

Brown regions (chocolate bars) must be rectangular (squares are ok too).

Yellows regions (bananas) must NOT be square / rectangular.

Digits may repeat within regions.

A digit in a banana cell indicates exactly how many banana cells contain that digit.

A digit in a brown diamond belongs to a chocolate bar and indicates the size of that chocolate bar. Every chocolate bar has a different size.

A digit on an arrow cell indicates the total sum of the closest (neighbouring) cells in each of the indicated directions.
