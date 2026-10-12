---
format: open-rules
title: Oily Water
setter: Blobz
source: https://sudokupad.app/4ii1ix2n90
case: https://sudoku-sleuth.com/cases/oily-water
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r9c2-r9c3 connected true
cage-2: cage r6c6-r6c7-r7c7-r7c8 connected true
cage-3: cage r5c3-r5c4-r5c5 total 17 connected true
cage-4: cage r4c1-r5c1-r6c1 total 19 connected true
cage-5: cage r3c6-r3c7-r4c5-r4c6 connected true
cage-6: cage r3c2-r4c2 total 9 connected true
cage-7: cage r2c8-r2c9-r3c9-r4c9 total 20 connected true
cage-8: cage r5c7-r5c8-r5c9-r6c9-r7c9 total 29 connected true
cage-9: cage r6c2-r7c2-r7c3 total 12 connected true
cage-10: cage r7c5-r7c6-r8c5 total 15 connected true
cage-11: cage r1c1-r1c2-r2c1-r2c2 total 16 connected true
cage-12: cage r8c8-r8c9-r9c9 total 15 connected true
cage-13: cage r1c4-r2c4-r2c5-r3c4-r4c4 total 26 connected true
cage-14: cage r1c6-r1c7 total 8 connected true
cage-15: cage r9c5-r9c6 total 12 connected true
layered-cage-1: layered-cage r8c3-r8c4-r9c2-r9c3 upper [2,4,6,8]
layered-cage-2: layered-cage r6c6-r6c7-r7c7-r7c8 upper [2,4,6,8]
layered-cage-3: layered-cage r5c3-r5c4-r5c5 upper [2,4,6,8]
layered-cage-4: layered-cage r4c1-r5c1-r6c1 upper [2,4,6,8]
layered-cage-5: layered-cage r3c6-r3c7-r4c5-r4c6 upper [2,4,6,8]
layered-cage-6: layered-cage r3c2-r4c2 upper [2,4,6,8]
layered-cage-7: layered-cage r2c8-r2c9-r3c9-r4c9 upper [2,4,6,8]
layered-cage-8: layered-cage r5c7-r5c8-r5c9-r6c9-r7c9 upper [2,4,6,8]
layered-cage-9: layered-cage r6c2-r7c2-r7c3 upper [2,4,6,8]
layered-cage-10: layered-cage r7c5-r7c6-r8c5 upper [2,4,6,8]
layered-cage-11: layered-cage r1c1-r1c2-r2c1-r2c2 upper [2,4,6,8]
layered-cage-12: layered-cage r8c8-r8c9-r9c9 upper [2,4,6,8]
layered-cage-13: layered-cage r1c4-r2c4-r2c5-r3c4-r4c4 upper [2,4,6,8]
layered-cage-14: layered-cage r1c6-r1c7 upper [2,4,6,8]
layered-cage-15: layered-cage r9c5-r9c6 upper [2,4,6,8]
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"O","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"I","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"L","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"Y","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"W","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"A","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"T","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"E","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"R","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"W","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"E","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"T","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"R","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"A","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"T","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"I","textColor":"#DDDDDD","fontSize":28}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"O","textColor":"#DDDDDD","fontSize":28}}
```

Normal sudoku rules apply.

Digits in cages do not repeat and must sum to the small clue, if given.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

The nine letters (OILY WATER) map one-to-one with the nine digits (1 - 9). The solver must deduce which is which.
