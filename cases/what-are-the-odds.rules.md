---
format: open-rules
title: What are the odds?
setter: sujoyku
source: https://tinyurl.com/34f887a5
case: https://sudoku-sleuth.com/cases/what-are-the-odds
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 6
little-killer-2: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 6
little-killer-3: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 6
little-killer-4: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 4
little-killer-5: little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 4
little-killer-6: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 4
little-killer-7: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[2,3,11],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[0,1,10,19,20],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[5,13,14,21,22],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[23,32],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[31,40,41,50],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[39,48,49],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[57,66,75,76],"label":"1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[60,61,70,79,80],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[62,71],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[33,42,51,52,53],"label":"2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[24,25,34,43,44],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[6,15,16,17,26],"label":"20","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. A little killer clue indicates the value of the sum of all even or all odd digits on that diagonal. If the even digits are counted, no odd digit contributes to the sum and vice versa. (Whether the even or odd digits are summed up has to be determined by the solver.) A little killer clue without given number has the value 0. Digits in a cage do not repeat. A killer clue indicates the sum of all even digits or of all odd digits which are contained in the cage.
