---
format: open-rules
title: General MOD
setter: Dr Logic
source: https://sudokupad.app/0ep20h4xvq
case: https://sudoku-sleuth.com/cases/general-mod
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: bcb2e7d04c8eca3b2f160fb2722dc9bb
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 2 connected true
cage-2: cage r2c1-r3c1 total 2 connected true
cage-3: cage r2c6-r3c6 total 1 connected true
cage-4: cage r4c5-r5c4-r5c5 total 0 connected true
kropki-1: kropki r5c6-r6c6 black
kropki-2: kropki r6c5-r6c6 black
kropki-3: kropki r7c3-r7c4 black
kropki-4: kropki r5c8-r6c8 black
kropki-5: kropki r4c8-r5c8 black
modular-1: modular r7c5-r8c5-r9c5
modular-2: modular r4c6-r3c5-r3c4-r3c3-r4c3-r5c3-r6c4-r7c4-r8c4
modular-3: modular r6c7-r6c8-r6c9
modular-4: modular r4c2-r4c1-r5c1
modular-5: modular r7c6-r8c6-r9c6
modular-6: modular r9c1-r9c2-r9c3
renban-1: renban r3c2-r3c3-r2c3
renban-2: renban r2c7-r1c7-r1c8
renban-3: renban r8c1-r7c1-r7c2
renban-4: renban r7c7-r8c8-r9c9
renban-5: renban r5c4-r4c5
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#cdb1ec","thickness":5,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"1","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.8,-0.2],[3.958,-0.04199999999999998]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"0","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.8,-0.2],[6.958,-0.04199999999999998]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0.8,"height":0.8,"rounded":false,"text":"0","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[-0.2,7.2],[-0.04199999999999998,7.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0.8,"height":0.8,"rounded":false,"text":"0","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[-0.2,4.2],[-0.04199999999999998,4.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0.8,"height":0.8,"rounded":false,"text":"1","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[-0.2,5.2],[-0.04199999999999998,5.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0.8,"height":0.8,"rounded":false,"text":"2","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[-0.2,6.2],[-0.04199999999999998,6.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0.8,"height":0.8,"rounded":false,"text":"1","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[-0.2,8.2],[-0.04199999999999998,8.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#F700FF","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku Rules Apply.
Any set of three sequential cells along a teal modular line contains one digit from (1,4,7), (2,5,8), and (3,6,9).
Cells along a pink renban line must for a consecutive set, in any order.
Cells equidistant from the centre of the purple ZIpper line sum to the circled digit in the centre.
Cells in a killer cage must sum to the clue in the corner MOD 3.
Diagonals marked with arrows must sum to the clue given MOD 3.
Digits joined by a black or white dot must be in a 1:2 ratio or consecutive respectively.
No digits may repeat on any of the given lines (Little killers do not obey this rule)
No other negative constraints.
