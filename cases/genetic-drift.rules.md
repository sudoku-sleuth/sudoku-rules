---
format: open-rules
title: Genetic Drift
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/genetic-drift
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c5=2 r2c6=8 r5c5=5 r5c9=7 r6c6=9
exported: 83f84167ffccfcd547cea2352833ff7b
---

```rules
sudoku 9x9
kropki-1: kropki r3c7-r3c8 white
kropki-2: kropki r4c7-r4c8 white
kropki-3: kropki r3c4-r4c4 white
kropki-4: kropki r3c2-r4c2 white
kropki-5: kropki r5c2-r6c2 white
kropki-6: kropki r6c3-r6c4 white
kropki-7: kropki r7c4-r7c5 white
kropki-8: kropki r6c7-r6c8 white
kropki-9: kropki r6c4-r7c4 white
kropki-10: kropki r5c4-r6c4 white
kropki-11: kropki r5c2-r5c3 white
kropki-12: kropki r4c4-r4c5 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,1],"label":"A","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[9,10],"label":"G","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[18,19],"label":"C","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[2,11],"label":"T","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[23,24,33],"label":"T","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[51,59,60],"label":"C","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[48,49,58],"label":"T","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[28,37],"label":"T","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[70,79],"label":"T","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[43,52],"label":"G","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[12,13],"label":"A","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[21,22,31],"label":"G","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[30,38,39],"label":"C","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[54,63],"label":"T","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[65,66],"label":"G","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[77,78],"label":"G","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[25,26,34],"label":"A","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[7,16],"label":"C","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[46,47,56,57],"label":"A","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[32,41,42],"label":"A","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply but cloning has gone horribly wrong. Four different gene cages (indicated by A, C, G, or T in the upper left corner) have replicated across the grid with mutations. Each copy of the original gene contains only digits from the original but order, orientation, and cage size may vary. Every copy of each gene (and its mutations) is indicated in the grid. For example, if gene A is 1-2, then every place that 1 is orthogonally adjacent to 2 in the grid will be marked with a gene cage labeled A.

Bonds, indicated by white Kropki dots, have formed where two different genes have adjacent consecutive digits. All consecutive pair bonds between genes are indicated but there may be unmarked consecutive pairs within or outside gene cages.
