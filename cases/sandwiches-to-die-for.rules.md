---
format: open-rules
title: Sandwiches To Die For
setter: EPH
source: https://sudokupad.app/g90ucuf8up
case: https://sudoku-sleuth.com/cases/sandwiches-to-die-for
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r3c2 total 6 connected true
cage-2: cage r2c9-r3c8-r3c9 total 18 connected true
cage-3: cage r7c8-r7c9-r8c9 total 13 connected true
cage-4: cage r7c1-r7c2-r8c1 total 13 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"56","textColor":"#935200ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#935200ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,9.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"36","textColor":"#935200ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,3.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"0","textColor":"#935200ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[-0.237,-0.237],[-0.096,-0.096]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[-0.267,7.5],[-0.067,7.5]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[-0.237,7.237],[-0.096,7.096]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[-0.237,9.237],[-0.096,9.096]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[9.237,3.237],[9.096,3.096]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[9.267,3.5],[9.067,3.5]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[9.237,3.763],[9.096,3.904]],"color":"#935200ff","thickness":1.28,"headLength":0.1,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9

Sandwich variant: clues outside the grid are sandwichclues.  In a row or column pointed to by a clue, the clue is the sum of the digits between the 1 and the 9.  In a diagonal pointed to by a clue, the clue is the sum of all digits between the first 1 and first 9 in the diagonal (as seen from the clue).  Note that it is possible for a 1 or 9 to be part of the sum, as long as it is not the first 1 or first 9 seen from the clue.
