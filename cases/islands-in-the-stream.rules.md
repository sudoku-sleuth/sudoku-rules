---
format: open-rules
title: Islands in the Stream
setter: sujoyku
source: https://sudokupad.app/nrzd74iggd
case: https://sudoku-sleuth.com/cases/islands-in-the-stream
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"21","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"27","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"24","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"33","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.82,"height":0.82,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Nurikabe: Shade all cells either blue (water) or green (land) such that all water cells are orthogonally connected and form no 2x2 areas. Each area of orthogonally connected green cells is called an island.

- Island Size Squares: A cell with a square must be land and its digit counts the number of cells in its island. Each island must contain at least one square.

- Water Sweeper Circles: A cell with a circle must be water and its digit counts the number of water cells in the 3x3 area around the clue, including itself.

- Up to Land sums: A clue outside a row or column indicates the sum of all digits in water cells up to the first land cell. (The digit in that land cell is not included in the sum.)
