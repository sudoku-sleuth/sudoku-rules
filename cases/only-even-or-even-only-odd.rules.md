---
format: open-rules
title: Only even … or even only odd?
setter: sujoyku
source: https://tinyurl.com/nhz4h5fe
case: https://sudoku-sleuth.com/cases/only-even-or-even-only-odd
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source feature has no drawing in our reading yet.
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 2
little-killer-2: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 2
little-killer-3: little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 2
little-killer-4: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 8
little-killer-5: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 4
little-killer-6: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 32
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[55,56,64],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[58,59,67],"label":"1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[70,71,79],"label":"15","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[28,29,38],"label":"3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[36,45,46],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[13,21,22],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[32,40,41],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[16,24,25],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[34,35,43],"label":"18","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[-0.2,9.2],[-0.04199999999999998,9.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.8,9.2],[0.958,9.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[-0.2,8.2],[-0.04199999999999998,8.042]],"color":"#000000","thickness":2,"headLength":0.156}}
```

Normal sudoku rules apply. A little killer clue indicates the value of the sum of all even or all odd digits on that diagonal. If the even digits are counted, no odd digit contributes to the sum and vice versa. (Whether the even or odd digits are summed up has to be determined by the solver.) A little killer clue without given number has the value 0. Digits in a cage do not repeat. A killer clue indicates the sum of all even digits or of all odd digits which are contained in that cage.
