---
format: open-rules
title: Zeros and Negatives Don’t Mix
setter: The Bard
source: https://sudokupad.app/ua7hk26elo
case: https://sudoku-sleuth.com/cases/zeros-and-negatives-don-t-mix
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
  - Some of the source rules still need to be included in our reading.
board:
  rows: 9
  cols: 9
  symbols:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  givens: r7c1=7 r9c7=1
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
pair-1: pair r5c9-r6c9 sum 10
pair-2: pair r1c1-r1c2 sum 10
pair-3: pair r7c5-r7c6 sum 10
pair-4: pair r2c6-r2c7 sum 10
pair-5: pair r6c8-r6c9 sum 5
pair-6: pair r2c9-r3c9 sum 5
negative relations [{"op":"sum","value":5}] except [["r6c8","r6c9"],["r5c9","r6c9"],["r2c9","r3c9"],["r1c1","r1c2"],["r7c5","r7c6"],["r2c6","r2c7"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[7,8,17,26]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[0,1,2,11]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[44,52,53,62]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[33,34,42,43]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[6,15,24]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[5,14,22,23]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[31,32,41]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[49,50,58,59]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[66,67,68]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[77,78,79,80]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[72,73,74,75,76]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[55,56,57,64]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[28,37,38,47]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[9,18,27]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.1,8.5],[2.5,8.5],[1.5,8.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.5,5.1],[6.5,4.5],[6.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.782842712474619,6.782842712474619],[2.5,7.5],[1.5,7.5],[0.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.9,2.5],[1.5,2.5],[1.5,1.5],[1.5,0.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.782842712474619,3.217157287525381],[5.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.217157287525381,3.217157287525381],[3.5,2.5],[2.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.782842712474619,5.782842712474619],[5.5,6.5],[6.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[7.5,8.1],[7.5,7.5],[7.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.782842712474619,4.782842712474619],[1.5,5.5],[2.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
```

Extended Sudoku rules apply, place the digits 0-9 in each row, column, and box, however one digit will not fit in each. Which digit doesn’t fit can vary and/or repeat and must be determined by the solver.
**All even digits are negative values for all clues.**
Killer Cages: Digits in cages cannot repeat and all cages add up to ZERO. 
Arrows: digits along arrows add up to the value in the circle.
V: Digits separated by a V add up to +5, all Vs have been given. 
X: Digits separated by an X add up to -10, NOT all Xs have been given.
