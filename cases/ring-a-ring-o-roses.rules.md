---
format: open-rules
title: Ring-a-Ring o' Roses
setter: Dr Logic
source: https://sudokupad.app/biem73363m
case: https://sudoku-sleuth.com/cases/ring-a-ring-o-roses
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 21 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 total 21 connected true
cage-3: cage r8c1-r8c2-r9c1-r9c2 total 16 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 11 connected true
modular r7c3-r6c4-r5c5-r4c6-r3c7
region-sum-1: region-sum r3c6-r3c5-r3c4-r3c3-r4c3-r5c3-r6c3 segments [["r3c6","r3c5","r3c4"],["r3c3"],["r4c3","r5c3","r6c3"]]
region-sum-2: region-sum r7c4-r7c5-r7c6-r7c7-r6c7-r5c7-r4c7 segments [["r7c4","r7c5","r7c6"],["r7c7"],["r6c7","r5c7","r4c7"]]
sandwich-1: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 4
sandwich-2: sandwich r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 25
sandwich-3: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 0
sandwich-4: sandwich r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 0
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"🌹","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply.
Digits in a marked cage must sum to the small clue given in the top left.
Box borders divide blue region sum lines into sections that sum to the same total. This total is not necessarily the same for different lines.
The red line is a modular line (changed from teal to not be confused with the RSLs). Each set of 3 digits along this line must have one of each set MOD 3. (147, 258 and 369)
Digits joined by a rose must be consecutive. Not all roses are given.
Clues outside the grid give the sum of the digits between 1 and 9 in that row/column.
