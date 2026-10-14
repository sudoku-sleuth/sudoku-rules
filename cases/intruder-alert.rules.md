---
format: open-rules
title: Intruder alert
setter: sujoyku
source: https://tinyurl.com/e6nszpu9
case: https://sudoku-sleuth.com/cases/intruder-alert
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 2607b30d63462d983f5b7e3cfa90e203
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 10 connected true
cage-2: cage r5c1-r6c1 total 7 connected true
cage-3: cage r8c1-r9c1 total 5 connected true
cage-4: cage r9c8-r9c9 total 10 connected true
cage-5: cage r8c4-r9c4-r9c5 total 12 connected true
cage-6: cage r1c5-r1c6-r2c6 total 12 connected true
cage-7: cage r3c5-r3c6-r4c5 total 7 connected true
cage-8: cage r6c4-r6c5-r7c5 total 8 connected true
cage-9: cage r4c9-r5c9 total 15 connected true
cage-10: cage r6c7-r6c8 total 12 connected true
cage-11: cage r1c9-r2c9 total 12 connected true
cage-12: cage r4c2-r4c3 total 10 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#CFCFCF","thickness":0}}
```

Normal sudoku rules apply. The grey shaded areas ALMOST are clones. Digits appear in the same relative position in each of the four regions EXCEPT for one intruder cell. The cell in this relative position must contain distinct digits in each of the four grey regions. Digits in a cage do not repeat and sum to the clue in the top left.
