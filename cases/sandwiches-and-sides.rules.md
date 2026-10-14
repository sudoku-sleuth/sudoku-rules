---
format: open-rules
title: Sandwiches and Sides
setter: EPH
source: https://sudokupad.app/slicedsudoku/sandwichesandsides
case: https://sudoku-sleuth.com/cases/sandwiches-and-sides
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a958d4bc6ee6bc3e24d2ff274b1b27d7
---

```rules
sudoku 9x9
diagonal direction "anti"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,1.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,4.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,6.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"24","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.333,3.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.333,5.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.333,7.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"21","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Sandwich: The numbers outside the grid give the sum of the digits between the 1 and the 9 in that row or column.
• Outside: The digits in the numbers outside the grid must appear in one of the first three cells of the row or column as seen from that direction.
• Diagonal: Digits may not repeat along the marked diagonal.
