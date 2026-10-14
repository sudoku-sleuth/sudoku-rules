---
format: open-rules
title: What's in my sandwich?
setter: EPH
source: https://sudokupad.app/mrm2el1oym
case: https://sudoku-sleuth.com/cases/what-s-in-my-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f92c774340cf3333f1a50723fdd3e110
---

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r5c7-r5c8 sum 10
pair-3: pair r6c4-r6c5 sum 10
pair-4: pair r6c5-r7c5 sum 10
pair-5: pair r3c8-r3c9 sum 10
pair-6: pair r1c8-r1c9 sum 5
pair-7: pair r5c2-r5c3 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,-0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,9.4],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.6],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,4.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#9e5200ff","fontSize":34,"textStroke":"#9e5200ff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[-0.267,7.5],[-0.067,7.5]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[-0.237,7.237],[-0.096,7.096]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[-0.237,9.237],[-0.096,9.096]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[-0.237,-0.237],[-0.096,-0.096]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.237,-0.237],[7.096,-0.096]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[9.237,4.763],[9.096,4.904]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[9.267,4.5],[9.067,4.5]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[9.237,4.237],[9.096,4.096]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,-0.267],[7.5,-0.067]],"color":"#935200ff","thickness":2,"headLength":0.1,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

XV Pairs: cells separated by an X contain digits which sum to 10.  Cells separated by a V contain digits which sum to 5.

Sandwich variant: clues outside the grid are sandwich clues with a twist.  In the appropriate row or column, digits between the 1 and the 9 must sum to the value of the clue.  In addition, for each diagonal from the clue (of length at least 2), the digits between the first instance of each of 1 and 9 (as seen from the clue) must sum to the value of the clue.
