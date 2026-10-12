---
format: open-rules
title: Quitte ou double
setter: sujoyku
source: https://sudokupad.app/178894sbci
case: https://sudoku-sleuth.com/cases/quitte-ou-double
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[14,15],"label":"0"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[10,19],"label":"0"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[7,16,25],"label":"25"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[0,9],"label":"12"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[17,26],"label":"10"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[46,55,64,73],"label":"-23"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[45,54],"label":"-14"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[11,12,13],"label":"1"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[20,21,22],"label":"1"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[77,78,79,80],"label":"-1"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[66,75],"label":"0"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[47,56],"label":"-12"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[33,42],"label":"0"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[27,28,29,36],"label":"0"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[23,31,32],"label":"6"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[58,59,67],"label":"0"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[61,69,70,71],"label":"18"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[38,39],"label":"6"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[44,53,62],"label":"15"}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Yin Yang: Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.

- Doubler: Place one doubler cell in each row, column and 3x3 region. The value of a doubler cell is double its digit. No two doubler cells may contain identical digits, i.e. each digit from 1 to 9 is in exactly one doubler cell.

- Killer cages: Digits in a cage do not repeat. The clue in the top left indicates the sum of all unshaded values minus the sum of all shaded values. In other word, shaded cells are considered as containing negative numbers. (Note that the doubler affects both positive and negative values, i.e. if a shaded doubler cells contains the digit X its value is -2X.)
