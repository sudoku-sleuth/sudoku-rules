---
format: open-rules
title: Fibonacci Sequence
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/fibonacci-sequence
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5a9a341bfa444bb3f558e0a625a2b7c7
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r3c8 black
kropki-2: kropki r5c5-r5c6 black
pair-1: pair r8c7-r8c8 sum 10
pair-2: pair r9c7-r9c8 sum 10
pair-3: pair r4c1-r5c1 sum 10
pair-4: pair r1c4-r2c4 sum 10
pair-5: pair r8c5-r8c6 sum 10
pair-6: pair r4c3-r5c3 sum 10
pair-7: pair r4c3-r4c4 sum 10
pair-8: pair r2c3-r3c3 sum 5
pair-9: pair r4c6-r5c6 sum 5
pair-10: pair r3c7-r4c7 sum 5
pair-11: pair r1c8-r2c8 sum 5
pair-12: pair r2c6-r3c6 sum 5
pair-13: pair r6c1-r7c1 sum 5
pair-14: pair r8c8-r9c8 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[22,31,40],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[41,42],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[23,24,25],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[34,43,52],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[50,51,59,60,61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[29,30,38,39,47,48,49,56,57,58],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[27,28,35,36,37,44,45,46,53,54,55,62,63,64,65,66,67,68,69,70,71,73,74,75,76,77,78,79,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[2,3,4,5,6,7,8,11,12,13,14,15,16,17,20,21,26],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[32,33],"color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Numbers in dashed regions sum to the number in the top left corner of the region. Region totals begin in the gray cell, with the lowest Fibonacci Number possible in a two-cell Sudoku region, and increase in the Fibonacci sequence in a clockwise spiral pattern created by the regions. Numbers outside regions are not a part of the sequence count. Regions below 46 total do not have numbers repeated in the region. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all possible X, V and dots are given. The Fibonacci Sequence can be found on the internet, if needed.
