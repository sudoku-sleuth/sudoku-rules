---
format: open-rules
title: How Low Can You Go?
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/how-low-can-you-go
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 colour "white"
kropki-2: kropki r7c7-r8c7 colour "white"
kropki-3: kropki r5c5-r6c5 colour "white"
palindrome-1: palindrome r3c8-r2c7-r1c6-r1c5-r1c4-r2c3-r3c2-r4c2-r5c2-r5c3-r4c3-r3c4-r2c5-r3c6-r4c6-r5c5-r6c4-r7c4-r7c5-r6c6-r5c7-r4c8
palindrome-2: palindrome r4c8-r3c8
renban-1: renban r6c7-r5c8-r6c9-r7c8
renban-2: renban r7c1-r6c2-r7c3-r8c2
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
```

Normal Sudoku rules apply. PALINDROME- Numbers on the gray line are a Palindrome, with the pink cell at the center. Start at the center of the palindrome and always choose the lowest possible numbers as you move both ways from the center. The sum of the numbers on the palindrome is 68. RENBAN+ LINES- Numbers on orange LINES are each a set of non-repeating, consecutive numbers, arranged IN ORDER. Numbers in orange shaded CELLS sum to 29. Numbers with a white dot between them are consecutive. Not all possible dots are given.
