---
format: open-rules
title: Correctly Labeled Killers
setter: Will Power
source: https://sudokupad.app/3nxi6454pp
case: https://sudoku-sleuth.com/cases/correctly-labeled-killers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r2c3 connected true
cage-2: cage r1c6-r2c4-r2c5-r2c6-r3c4-r3c6 connected true
cage-3: cage r1c8-r1c9-r2c7-r2c8-r2c9-r3c8-r3c9 connected true
cage-4: cage r3c5-r4c4-r4c5-r4c6-r5c4-r5c5-r5c6 connected true
cage-5: cage r4c7-r4c8-r4c9-r5c7-r5c8-r5c9 connected true
cage-6: cage r6c7-r6c8-r6c9-r7c7-r7c8-r7c9 connected true
cage-7: cage r8c6-r8c7-r8c8-r8c9-r9c6-r9c7-r9c8-r9c9 connected true
cage-8: cage r8c4-r8c5-r9c3-r9c4-r9c5 connected true
cage-9: cage r8c1-r8c2-r8c3-r9c1-r9c2 connected true
cage-10: cage r5c1-r5c2-r5c3-r6c1-r6c2-r6c3-r7c1-r7c2-r7c3 connected true
cage-11: cage r3c1-r3c2-r3c3-r4c1-r4c2-r4c3 connected true
cage-12: cage r6c4-r6c5-r6c6-r7c4-r7c5-r7c6 connected true
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r9c6-r9c7 colour "white"
kropki-3: kropki r2c5-r2c6 colour "white"
kropki-4: kropki r8c2-r8c3 colour "white"
kropki-5: kropki r4c5-r5c5 colour "white"
kropki-6: kropki r4c1-r4c2 colour "white"
kropki-7: kropki r7c7-r7c8 colour "black"
kropki-8: kropki r8c1-r8c2 colour "black"
pair r3c5-r4c5 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,0.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,4.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,8.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,5.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,2.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,7.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Thanks to CaptZebraCakes for the idea to sum cages with pills.

Normal sudoku rules apply.

KILLER CAGES(+)- All digits in cages sum to the 2-digit pill within the cage. Pills are read from left to right or top to bottom. Digits do not repeat in cages. No two cages have the same sum.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

XV PAIR- Numbers with a V between them sum to 5. Not all possible V are given.
