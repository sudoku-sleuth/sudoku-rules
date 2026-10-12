---
format: open-rules
title: Slides and Ladders
setter: Tingo
source: https://tinyurl.com/slidesandladderssudoku
case: https://sudoku-sleuth.com/cases/slides-and-ladders
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source feature has no drawing in our reading yet.
  - Some source features still need to be checked against our reading.
givens: r1c9=9 r9c1=1
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r4c1-r5c1 colour "white"
kropki-3: kropki r5c8-r6c8 colour "white"
kropki-4: kropki r3c1-r4c1 colour "black"
pair-1: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-2: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-3: pair r6c7-r7c7 relation {"op":"sum","value":10}
pair-4: pair r1c5-r2c5 relation {"op":"sum","value":10}
pair-5: pair r3c5-r4c5 relation {"op":"sum","value":10}
pair-6: pair r6c5-r7c5 relation {"op":"sum","value":10}
pair-7: pair r8c5-r9c5 relation {"op":"sum","value":10}
pair-8: pair r1c3-r2c3 relation {"op":"sum","value":10}
pair-9: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-10: pair r7c2-r8c2 relation {"op":"sum","value":10}
pair-11: pair r2c9-r3c9 relation {"op":"sum","value":5}
pair-12: pair r7c9-r8c9 relation {"op":"sum","value":5}
pair-13: pair r7c7-r8c7 relation {"op":"sum","value":5}
pair-14: pair r2c5-r3c5 relation {"op":"sum","value":5}
pair-15: pair r7c5-r8c5 relation {"op":"sum","value":5}
pair-16: pair r5c4-r6c4 relation {"op":"sum","value":5}
pair-17: pair r6c2-r7c2 relation {"op":"sum","value":5}
parity-cells r4c1 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,1.5],[3.5,2.5],[4.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[6.5,6.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[7.5,7.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[2.5,7.5],[3.5,6.5],[4.5,5.5],[5.5,4.5],[6.5,3.5],[7.5,2.5],[8.5,1.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal Sudoku Rules Apply
Slide rules:
Gray lines are palidromes and must read the same forwards and backwards
Ladder rules:
Cells connected by black dots have a value ratio of 2:1. Cells connected by white dots are consecutive. Not all black or white dots are given.
Cells connected by X sum to 10. Cells connected by V sum to 5. Not all Xs or Vs are given.

The gray square is an even digit
