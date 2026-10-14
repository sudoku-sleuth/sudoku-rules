---
format: open-rules
title: The Dead Marshes
setter: Blobz
source: https://sudokupad.app/blobz/the-dead-marshes
case: https://sudoku-sleuth.com/cases/the-dead-marshes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c6=4 r7c2=6 r7c9=5 r9c6=9
exported: 6213e03d336a21adf9dee9d71f9cbcb8
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4 total 11 connected true
cage-2: cage r9c2-r9c3 total 5 connected true
cage-3: cage r5c6-r5c7 total 12 connected true
cage-4: cage r1c9-r2c9 total 11 connected true
cage-5: cage r5c3-r6c3 total 11 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.88,"height":0.88,"rounded":true,"stroke":"#51f32a","thickness":5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.88,"height":0.88,"rounded":true,"stroke":"#51f32a","thickness":5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
```

'Yes, they are all round us,' he whispered. 'The tricksy lights. Candles of corpses, yes, yes. Don't you heed them! Don't look! Don't follow them!'

Frodo, Sam, and Gollum have arrived at the northern edge of the Dead Marshes and must find a path through, starting at r1c1 and ending at r9c9. Adjacent digits along the path must differ by at least 5. Draw the path such that:

- it is orthogonally connected
- it visits every box exactly once
- it does not touch itself orthogonally or diagonally
- it does not enter a cell with a tricksy light (flame)
- it does not enter a corpse location (cage)

Normal sudoku rules apply.

Digits in a cage must sum to the value shown.

A digit on a flame indicates how many flames contain that digit.
