---
format: open-rules
title: Barn Dance
setter: Meggen033
source: https://sudokupad.app/55lwka3aqh
case: https://sudoku-sleuth.com/cases/barn-dance
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: b2a62d6015965154a30013c535fbe09d
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 14 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 14 connected true
cage-3: cage r1c7-r2c7 total 9 connected true
cage-4: cage r8c3-r9c3 total 9 connected true
kropki-1: kropki r8c7-r9c7 white
kropki-2: kropki r1c3-r2c3 white
kropki-3: kropki r1c5-r2c5 white
kropki-4: kropki r5c8-r5c9 white
kropki-5: kropki r6c5-r6c6 white
kropki-6: kropki r4c2-r5c2 white
kropki-7: kropki r6c1-r7c1 white
kropki-8: kropki r6c9-r7c9 white
kropki-9: kropki r7c1-r7c2 black
kropki-10: kropki r3c8-r3c9 black
kropki-11: kropki r5c1-r5c2 black
kropki-12: kropki r8c5-r9c5 black
kropki-13: kropki r4c4-r4c5 black
arrow-1: arrow r5c3-r4c3-r3c3-r3c4 bulb ["r6c3"]
arrow-2: arrow r5c7-r6c7-r7c7-r7c6 bulb ["r4c7"]
arrow-3: arrow r7c4-r7c5-r7c6 bulb ["r7c3"]
arrow-4: arrow r3c6-r3c5-r3c4 bulb ["r3c7"]
arrow-5: arrow r4c6-r4c5 bulb ["r5c5"]
arrow-6: arrow r6c4-r6c5 bulb ["r5c5"]
arrow-7: arrow r8c1-r9c1 bulb ["r8c2"]
arrow-8: arrow r1c8-r1c9 bulb ["r2c8"]
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
