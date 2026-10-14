---
format: open-rules
title: Prime Real Estate
setter: Will Power
source: https://f-puzzles.com/?id=yavn92vc
case: https://sudoku-sleuth.com/cases/prime-real-estate
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ac00c6f1e56c37ca3b9c574f20af307c
---

```rules
sudoku 9x9
cage-1: cage r8c7-r8c8 total 15 connected true
cage-2: cage r4c3-r5c3 total 15 connected true
cage-3: cage r5c5-r6c5 total 15 connected true
cage-4: cage r8c3-r9c3 total 15 connected true
cage-5: cage r4c2-r5c2 total 15 connected true
cage-6: cage r2c1-r3c1 total 15 connected true
cage-7: cage r2c6-r3c6 total 15 connected true
cage-8: cage r6c4-r7c4 total 15 connected true
cage-9: cage r1c7-r1c8 total 15 connected true
cage-10: cage r9c7-r9c8 total 6 connected true
cage-11: cage r7c5-r8c5 total 6 connected true
cage-12: cage r7c2-r7c3 total 6 connected true
cage-13: cage r1c4-r2c4 total 6 connected true
cage-14: cage r2c5-r3c5 total 6 connected true
cage-15: cage r4c7-r4c8 total 6 connected true
cage-16: cage r5c6-r6c6 total 6 connected true
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. There are 20 prime numbers from 13 to 97. There are 19 DIFFERENT 2-digit prime numbers in the grid, inside the pills, reading from left to right. The one prime, from 13 to 97, that does not have a pill is VERTICAL in the grid, and read from top to bottom. Find the vertical prime that was left out of the set of 20.
