---
format: open-rules
title: Target Practice
setter: Meggen033
source: https://sudokupad.app/bbjz5z7cpr
case: https://sudoku-sleuth.com/cases/target-practice-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 5 connected true
cage-2: cage r2c4-r3c4 total 8 connected true
kropki-1: kropki r7c5-r7c6 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
kropki-3: kropki r8c8-r8c9 colour "white"
kropki-4: kropki r4c7-r4c8 colour "black"
kropki-5: kropki r7c4-r8c4 colour "black"
kropki-6: kropki r6c1-r7c1 colour "black"
kropki-7: kropki r1c6-r1c7 colour "black"
arrow-1: arrow r4c6-r4c5 bulb ["r3c7"]
arrow-2: arrow r6c4-r5c4 bulb ["r7c3"]
arrow-3: arrow r7c8-r7c9 bulb ["r6c7"]
arrow-4: arrow r8c7-r9c7 bulb ["r7c6"]
arrow-5: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-6: arrow r2c1-r3c1 bulb ["r1c1"]
pair-1: pair r7c3-r7c4 relation {"op":"sum","value":10}
pair-2: pair r3c7-r4c7 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
```

•   Normal Sudoku rules apply.  
•   Disjoint: The shaded cells in the middle of each box mark a set of the digits 1-9.
•   The digits along each arrow must sum to the digit in the circled cell.
•   A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
•   Digits in a cage do not repeat and sum to the clue in the top left.
•   Adjacent cells connected with an X must sum to 10.
