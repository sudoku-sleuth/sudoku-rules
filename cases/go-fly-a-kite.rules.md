---
format: open-rules
title: Go Fly A Kite
setter: EPH
source: https://sudokupad.app/rls7fpor2b
case: https://sudoku-sleuth.com/cases/go-fly-a-kite
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
renban-1: renban r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9
renban-2: renban r6c7-r7c7-r8c7
renban-3: renban r8c8-r9c8
renban-4: renban r2c1-r2c2
renban-5: renban r3c2-r3c3-r3c4
renban-6: renban r5c5-r6c4-r7c3-r8c2-r9c1
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,9.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[-0.237,-0.237],[-0.096,-0.096]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[-0.237,4.763],[-0.096,4.904]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[-0.267,4.5],[-0.067,4.5]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[-0.237,4.237],[-0.096,4.096]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.763,9.237],[4.904,9.096]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,9.267],[4.5,9.067]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.237,9.237],[4.096,9.096]],"color":"#9e5200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Renban: purple lines contain a set of non-repeating consecutive digits in any order.

Sandwich variant: clues outside the grid show the total of all digits in the appropriate rows, columns, or diagonals between the first 1 and the first 9, as seen from the clue.
