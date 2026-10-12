---
format: open-rules
title: Fraction party
setter: sujoyku
source: https://tinyurl.com/2xyjzhvy
case: https://sudoku-sleuth.com/cases/fraction-party
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6-r1c7-r1c8-r1c9 total 15 connected true
cage-2: cage r3c5-r3c6-r4c6-r4c7 total 10 connected true
cage-3: cage r3c9-r4c9-r5c9-r6c9-r7c9 total 15 connected true
cage-4: cage r7c1-r7c2-r7c3-r7c4-r7c5 total 14 connected true
cage-5: cage r5c6-r5c7-r6c6-r7c6 total 10 connected true
cage-6: cage r4c2-r4c3-r4c4-r5c2-r5c4 total 4 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[2,3,11],"label":"1/2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[18,19,27],"label":"1/2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[71,79,80],"label":"7/2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[69,77,78],"label":"5/2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[66,73,74,75,76],"label":"15/2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[51,60,61],"label":"5/2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[38,47,48],"label":"7/2","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. All given cages are divisor killer cages. Digits in a divisor killer cage do not repeat. Each cage contains one divisor digit (which has to be determined by the solver). The clue in the top left indicates the value of the sum of all other digits in that cage divided by the divisor digit. For example, a 3-cell divisor killer cage containing the digits 1, 2 and 3 may have a valid clue of either 5=(2+3)/1, 2=(1+3)/2 or 1=(1+2)/3.
