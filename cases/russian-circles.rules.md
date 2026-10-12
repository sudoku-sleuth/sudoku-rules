---
format: open-rules
title: Russian Circles
setter: Timotab
source: https://sudokupad.app/5ab4qjed44
case: https://sudoku-sleuth.com/cases/russian-circles
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
counting-circles r1c3-r1c5-r1c6-r1c7-r1c9-r2c2-r3c1-r3c3-r3c6-r3c7-r4c3-r4c5-r5c2-r5c5-r6c3-r6c8-r7c1-r7c8-r8c4-r8c6-r8c8-r9c3-r9c7
```

```drawing
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,2.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,2.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"13","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,5.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,5.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,6.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,1.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#f00f","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
```

• Normal sudoku rules apply
• Counting Circles: Any digit in a circle indicates how many circles contain that digit.
• Russian Doll Sums. Clues outside the box indicate that in that row or column, there exist two digits which sum to the clue, such that the digits between them also sum to the clue. If there are multiple clues in a row or column, the sequences of clued digits appear in the same order as the clues. If clues are red, the sequences of clued digits in that row or column overlap with the clued digits of an adjacent red clue in that same row or column. If the clues are black, the sequence of clued digits does not overlap with another sequence of clued digits in that row or column.
