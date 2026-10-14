---
format: open-rules
title: Strand-tropy
setter: sujoyku
source: https://sudokupad.app/fpslws3s80
case: https://sudoku-sleuth.com/cases/strand-tropy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0b87b7d9d86103d52d2e83e099535b14
---

```rules
sudoku 9x9
quadruple-1: quadruple r5c2-r5c3-r6c2-r6c3 digits [3,4,6,7]
quadruple-2: quadruple r4c7-r4c8-r5c7-r5c8 digits [2,4,7,9]
quadruple-3: quadruple r7c4-r7c5-r8c4-r8c5 digits [2,4,6,8]
quadruple-4: quadruple r2c5-r2c6-r3c5-r3c6 digits [5,6,7,8]
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"35","textColor":"#000000","fontSize":30}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"33","textColor":"#000000","fontSize":30}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"33","textColor":"#000000","fontSize":30}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"31","textColor":"#000000","fontSize":30}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#000000","fontSize":30}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"15","textColor":"#000000","fontSize":30}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":30}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":30}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"10","textColor":"#000000","fontSize":30}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"30","textColor":"#000000","fontSize":30}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":30}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each.
 
- Quadruple: Digits in a circle must appear in the four surrounding cells.

- Strandwich clues: Draw two strands into the grid that connect Row 1 and Row 9. A strand is a continuous one-cell wide path that moves from cell to cell diagonally or vertically, but never moves horizontally. 

Both strands must be Entropy lines. i.e. every set of three consecutive digits on the line must contain a low (1, 2, 3), a medium (4, 5, 6) and a high digit (7, 8, 9).

The two strands must intersect each row in exactly one cell. Clues outside the grid are so-called Strandwich clues, i.e. Sandwich clues with respect to the strand cells. A outside clue on the left indicates the sum of all digits between the two strand cells in the respective row. Any column with an outside clue on top of it must contain precisely two strand cells and the clue indicates the sum of all digits between these two cells.
