---
format: open-rules
title: Sandwich X-tras
setter: EPH
source: https://sudokupad.app/egb2a1mo4n
case: https://sudoku-sleuth.com/cases/sandwich-x-tras
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r8c4 colour "white"
kropki-2: kropki r2c6-r2c7 colour "white"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"19","textColor":"#000000","fontSize":20}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#000000","fontSize":20}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"15","textColor":"#000000","fontSize":20}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"15","textColor":"#000000","fontSize":20}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","textColor":"#000000","fontSize":20}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Clues outside the grid are dual: 
They are sandwich clues, giving the total of the digits between the 1 and the 9 in the row or column.
They are also X-sums clues, giving the total of the first X digits in the row or column.  X is the digit in the first cell seen from the clue.

A white dot separates digits with a difference of one.  Not all dots are given.
