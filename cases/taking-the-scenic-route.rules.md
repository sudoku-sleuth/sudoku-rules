---
format: open-rules
title: Taking the scenic route
setter: sujoyku
source: https://sudokupad.app/k1fenw3uhf
case: https://sudoku-sleuth.com/cases/taking-the-scenic-route
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: a255825065e69e726412bbcb5f7383e8
---

```rules
sudoku 9x9
quadruple-1: quadruple r7c7-r7c8-r8c7-r8c8 digits [2,3,4,5]
quadruple-2: quadruple r2c8-r2c9-r3c8-r3c9 digits [2,3,4,8]
quadruple-3: quadruple r4c8-r4c9-r5c8-r5c9 digits [3,6,7,9]
quadruple-4: quadruple r2c4-r2c5-r3c4-r3c5 digits [1,4,5,6]
quadruple-5: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,2,3,9]
quadruple-6: quadruple r5c2-r5c3-r6c2-r6c3 digits [1,7,8,9]
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":30}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":30}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":30}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","textColor":"#000000","fontSize":30}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"10","textColor":"#000000","fontSize":30}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":30}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"15","textColor":"#000000","fontSize":30}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Quadruple: Digits in a circle must appear in one of the four surrounding cells. 

- Omnipotent Loop: Draw a one-cell wide loop into the puzzle. The loop may only move orthogonally from cell to cell, does not branch or cross itself and must not touch itself neither orthogonally nor diagonally. The loop forms a so-called Omnipotent Line, i.e. each pair of adjacent digits on the loop must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on the loop must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two constraints are fulfilled simultaneously.) For example, a 3 may be adjacent on the loop to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X). 

- Non-loop sums: Clues outside the grid indicate the sum of all non-loop digits in the respective row or column up to the first loop cell. (The digit in the loop cell is not included in the sum.) In other words: A clue indicates the sum of all seen non-loop cells where a loop cell blocks vision.
