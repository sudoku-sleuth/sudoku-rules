---
format: open-rules
title: Extreme measures
setter: sujoyku
source: https://tinyurl.com/55er485m
case: https://sudoku-sleuth.com/cases/extreme-measures
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source feature has no drawing in our reading yet.
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 50
little-killer-2: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 50
little-killer-3: little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 50
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[45,54,55,63],"label":"22","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[65,73,74],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[6,7,15],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[17,25,26,35],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[23,32,33,41],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[43,52,61,70],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[10,19,28,37],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[2,3,12],"label":"6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[68,77,78],"label":"3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[39,47,48,57],"label":"2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[21,29,30,31],"label":"21","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[49,50,51,59],"label":"18","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[-0.2,8.2],[-0.04199999999999998,8.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[-0.2,9.2],[-0.04199999999999998,9.042]],"color":"#000000","thickness":2,"headLength":0.156}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.8,9.2],[0.958,9.042]],"color":"#000000","thickness":2,"headLength":0.156}}
```

Normal sudoku rules apply. A little killer clue indicates the value of the sum of all even or all odd digits on that diagonal. If the even digits are counted, no odd digit contributes to the sum and vice versa. (Whether the even or odd digits are summed up has to be determined by the solver.) A little killer clue without given number has the value 0. Digits in a cage do not repeat. A killer clue indicates the sum of all even digits or of all odd digits which are contained in the cage.
