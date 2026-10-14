---
format: open-rules
title: Renban Zipper
setter: iEtsh
source: https://sudokupad.app/qm58t9iymm
case: https://sudoku-sleuth.com/cases/renban-zipper
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some source features still need to be checked against our reading.
  - The source describes Renban lines that are not yet included in our reading.
exported: 34b4dcd4183dcd9bb481870e066526e5
---

```rules
sudoku 9x9
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff48f9ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff48f9ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff48f9ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff48f9ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[2.5,5.5],[1.5,4.5],[0.5,4.5],[1.5,3.5],[2.5,3.5],[3.5,2.5],[4.5,3.5]],"color":"#ff48f9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5],[7.5,5.5],[6.5,6.5],[5.5,5.5],[5.5,3.5]],"color":"#ff48f9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,7.5],[3.5,8.5]],"color":"#ff48f9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,7.5],[7.5,7.5]],"color":"#ff48f9ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Anti-Knight: Cells a chess knight's move apart cannot contain the same digit.

Renban Zipper: A line containing a set of consecutive, non-repeating digits in any order, where pairs of cells equidistant from the center must sum to the digit in the central cell.
