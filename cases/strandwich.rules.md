---
format: open-rules
title: Strandwich
setter: sujoyku
source: https://sudokupad.app/x15j1hljf2
case: https://sudoku-sleuth.com/cases/strandwich
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: 7535b442f18938d92b5936a72aff413e
---

```rules
sudoku 9x9
quadruple-1: quadruple r4c3-r4c4-r5c3-r5c4 digits [2,4,6,8]
quadruple-2: quadruple r5c6-r5c7-r6c6-r6c7 digits [2,5,6,8]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"15","textColor":"#000000","fontSize":30}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":30}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"8","textColor":"#000000","fontSize":30}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"40","textColor":"#000000","fontSize":30}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"32","textColor":"#000000","fontSize":30}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":30}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"30","textColor":"#000000","fontSize":30}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"8","textColor":"#000000","fontSize":30}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":30}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":30}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":30}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each. 

- Quadruple: Digits in a circle must appear in the four surrounding cells.

- Strandwich clues: Draw two strands into the grid that connect Row 1 and Row 9. A strand is a continuous one-cell wide path that moves from cell to cell diagonally or vertically, but never moves horizontally.

Both strands must be Renban lines. i.e. they must contain the digits from 1 to 9 once each.

Each of the two strands must intersect each row in exactly one cell. Clues outside the grid are so-called Strandwich clues, i.e. Sandwich clues with respect to the strand cells. An outside clue on the left indicates the sum of all digits between the two strand cells in the respective row. Any column with an outside clue on top of it must contain precisely two strand cells and the clue indicates the sum of all digits between these two cells in the respective column.
