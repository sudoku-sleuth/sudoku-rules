---
format: open-rules
title: Roman Baths
setter: Blobz
source: https://sudokupad.app/blobz/roman-baths
case: https://sudoku-sleuth.com/cases/roman-baths-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r1c5-r2c5 colour "white"
pair-1: pair r6c1-r6c2 relation {"op":"sum","value":10}
pair-2: pair r8c2-r9c2 relation {"op":"sum","value":10}
pair-3: pair r4c2-r5c2 relation {"op":"sum","value":10}
pair-4: pair r9c3-r9c4 relation {"op":"sum","value":10}
pair-5: pair r5c5-r6c5 relation {"op":"sum","value":10}
pair-6: pair r7c5-r8c5 relation {"op":"sum","value":10}
pair-7: pair r8c6-r9c6 relation {"op":"sum","value":10}
pair-8: pair r1c7-r2c7 relation {"op":"sum","value":10}
pair-9: pair r6c7-r7c7 relation {"op":"sum","value":10}
pair-10: pair r7c9-r8c9 relation {"op":"sum","value":10}
pair-11: pair r2c5-r2c6 relation {"op":"sum","value":10}
pair-12: pair r2c8-r2c9 relation {"op":"sum","value":10}
pair-13: pair r3c3-r3c4 relation {"op":"sum","value":10}
pair-14: pair r4c5-r4c6 relation {"op":"sum","value":10}
pair-15: pair r8c7-r8c8 relation {"op":"sum","value":10}
pair-16: pair r6c2-r7c2 relation {"op":"sum","value":10}
pair-17: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-18: pair r2c8-r3c8 relation {"op":"sum","value":5}
pair-19: pair r7c2-r7c3 relation {"op":"sum","value":5}
pair-20: pair r8c8-r8c9 relation {"op":"sum","value":5}
pair-21: pair r7c6-r7c7 relation {"op":"sum","value":5}
pair-22: pair r2c6-r2c7 relation {"op":"sum","value":5}
pair-23: pair r4c5-r5c5 relation {"op":"sum","value":5}
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r1c5","r2c5"],["r6c1","r6c2"],["r8c2","r9c2"],["r4c2","r5c2"],["r9c3","r9c4"],["r5c5","r6c5"],["r7c5","r8c5"],["r8c6","r9c6"],["r1c7","r2c7"],["r6c7","r7c7"],["r7c9","r8c9"],["r2c5","r2c6"],["r2c8","r2c9"],["r3c3","r3c4"],["r4c5","r4c6"],["r8c7","r8c8"],["r2c8","r3c8"],["r7c2","r7c3"],["r8c8","r8c9"],["r6c2","r7c2"],["r2c4","r3c4"],["r7c6","r7c7"],["r2c6","r2c7"],["r4c5","r5c5"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[63,72],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[73,74],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[55,64],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[65,66],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[47,56],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[57,58],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[39,48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[49,50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[31,40],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[41,42],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[23,32],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[33,34],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[15,24],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[25,26],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[7,16],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[67,76],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[59,68],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[37,38],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[51,60],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[29,30],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[35,44],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[13,14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[77,78],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[61,62],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[11,20],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[19,28],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[27,36],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[71,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[9,18],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[2,3],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[12,21,22],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[4,5,6],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[0,1,10],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[45,46,54],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[43,52,53],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[69,70,79],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[8,17],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. 

Digits in cages do not repeat.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits separated by an X sum to 10. Digits separated by a V sum to 5. ALL possible X's and V's are shown.

Digits separated by a white dot are consecutive. Not all possible dots are shown.
