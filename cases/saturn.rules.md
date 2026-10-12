---
format: open-rules
title: Saturn
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/saturn
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A clue marker still needs to be read before we can confirm the rule for unmarked pairs.
---

```rules
sudoku 9x9
kropki r2c5-r3c5 colour "black"
whispers r6c7-r7c8-r8c9-r9c9-r9c8-r8c7-r7c6-r6c5-r5c4-r4c3-r3c2-r2c1-r1c1-r1c2-r2c3-r3c4 gap 5
renban-1: renban r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r4c5-r5c6-r4c6
renban-2: renban r4c3-r5c3-r6c3-r7c4-r7c5-r7c6-r6c4
renban-3: renban r4c4-r5c5-r6c6
pair r2c8-r2c9 relation {"op":"sum","value":5}
negative relations [{"op":"sum","value":5}] except [["r8c4","r8c5"],["r6c5","r6c6"],["r5c1","r5c2"],["r1c2","r1c3"],["r2c6","r2c7"],["r2c5","r3c5"],["r2c8","r2c9"]]
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers can repeat on the green line. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. White dots are between ALL POSSIBLE orthogonal pairs of 8 and 9. Numbers with a black dot between them are in a ratio of 2:1. Not all possible black dots are given. Numbers with a V between them sum to 5. ALL POSSIBLE V ARE GIVEN. If you are stuck, please read the rules again.
