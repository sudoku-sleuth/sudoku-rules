---
format: open-rules
title: PEA-ano Forte
setter: sujoyku
source: https://sudokupad.app/humwdifiem
case: https://sudoku-sleuth.com/cases/pea-ano-forte
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 3b80fe785e1dbaf109341b0982db8969
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[3.5,8.5],[3.5,6.5],[0.5,6.5],[0.5,1.5],[4.5,5.5],[4.5,8.5],[5.5,7.5],[5.5,6.5],[7.5,4.5],[4.5,1.5],[0.5,1.5]],"color":"#FFFFFF","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[3.5,8.5],[3.5,6.5],[0.5,6.5],[0.5,1.5],[4.5,5.5],[4.5,8.5],[5.5,7.5],[5.5,6.5],[7.5,4.5],[4.5,1.5],[0.5,1.5]],"color":"#83e680ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Split Peas: Digits on a line between two circles sum to a two-digit number written using the digits in the circles. For example, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.

- Up to N-sums: A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
