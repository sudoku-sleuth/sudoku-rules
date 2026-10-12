---
format: open-rules
title: Up to N
setter: sujoyku
source: https://sudokupad.app/9fj04yo1hw
case: https://sudoku-sleuth.com/cases/up-to-n
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"30","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,8.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,6.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"34","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"26","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 box has to contain the digits from 1 to 9 once each.

- Up to N-sums: A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.) For example, if Row 1 reads 234156789, it would have an Up to N-sum clue of 2+3+4=9 because 2, 3 and 4 are the digits appearing before the row number N=1.
