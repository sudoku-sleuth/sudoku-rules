---
format: open-rules
title: Splindex Peas
setter: sujoyku
source: https://sudokupad.app/j24u59xlmy
case: https://sudoku-sleuth.com/cases/splindex-peas
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r9c1=7
exported: 7f701f765b19a2a13622b84828f07142
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,2.5],[0.5,2.5],[0.5,5.5],[2.5,3.5],[3.5,3.5],[4.5,2.5],[6.5,2.5],[5.5,3.5]],"color":"#83e680ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[1.5,7.5],[2.5,8.5],[2.5,6.5],[4.5,6.5],[4.5,5.5],[6.5,5.5]],"color":"#83e680ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,2.5],[7.5,3.5],[7.5,5.5],[6.5,6.5],[8.5,6.5],[7.5,7.5]],"color":"#83e680ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[0.5,2.5],[0.5,4.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[4.5,2.5],[3.5,3.5],[2.5,3.5],[1.5,4.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,2.5],[7.5,3.5],[7.5,5.5],[6.5,6.5],[8.5,6.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,5.5],[4.5,6.5],[2.5,6.5],[2.5,8.5],[1.5,7.5],[1.5,8.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Split Pea Index Lines: All lines and attached circles are split pea lines, and between the circles the lines function as index lines.

- Split Pea Lines: Digits on a line between two circles sum to a two-digit number written using the digits in the circles. For example, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.

- Index Lines: Each turquoise line has an invisible diamond at one end (to be determined by the solver). The digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears.
