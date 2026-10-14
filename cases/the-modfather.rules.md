---
format: open-rules
title: The Modfather
setter: Dr Logic
source: https://sudokupad.app/otv5snnm97
case: https://sudoku-sleuth.com/cases/the-modfather
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
givens: r3c5=8
exported: 0277adc152df4d7224f11bfffb158a4c
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 0 connected true
cage-2: cage r1c3-r1c4 total 1 connected true
cage-3: cage r3c1-r4c1 total 1 connected true
cage-4: cage r8c9-r9c8-r9c9 total 0 connected true
cage-5: cage r6c9-r7c9 total 1 connected true
cage-6: cage r9c6-r9c7 total 1 connected true
cage-7: cage r9c4-r9c5 total 2 connected true
cage-8: cage r4c9-r5c9 total 2 connected true
cage-9: cage r1c5-r1c6 total 2 connected true
cage-10: cage r5c1-r6c1 total 2 connected true
cage-11: cage r7c1-r8c1 total 3 connected true
cage-12: cage r9c2-r9c3 total 3 connected true
cage-13: cage r2c9-r3c9 total 3 connected true
cage-14: cage r1c7-r1c8 total 3 connected true
cage-15: cage r4c4-r4c5 total 2 connected true
cage-16: cage r6c5-r6c6 total 2 connected true
cage-17: cage r4c6-r5c6 total 0 connected true
cage-18: cage r5c4-r6c4 total 0 connected true
cage-19: cage r2c5-r3c5 total 0 connected true
cage-20: cage r7c5-r8c5 total 2 connected true
kropki-1: kropki r2c7-r2c8 white
kropki-2: kropki r2c8-r3c8 white
kropki-3: kropki r2c4-r2c5 white
kropki-4: kropki r4c7-r4c8 white
kropki-5: kropki r4c4-r5c4 white
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r7c5-r7c6 white
kropki-8: kropki r2c6-r2c7 black
diagonal direction "main"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.266,9.266],[3.068,9.068]],"color":"#000000","thickness":3.2,"headLength":0.18,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.734,9.266],[5.932,9.068]],"color":"#000000","thickness":3.2,"headLength":0.18,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[8],"label":"0"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[72],"label":"0"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.5],"width":1,"height":1,"rounded":true,"thickness":0,"text":"2","textColor":"#000000","fontSize":36}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":1,"height":1,"rounded":true,"thickness":0,"text":"3","textColor":"#000000","fontSize":36}}
```

Normal 9x9 sudoku rules apply, place the digits 1-9 in each row, column and box once each.

Modular cages - There are killer cages around the grid. Each clue to such cages are given mod k, where k must be deduced by the solver. k is the same for every cage. k is a sudoku digit. Clues are given in the most reduced form.

Digits cannot repeat along the marked diagonal.

Cells separated by a white dot are consecutive, cells separated by a black dot are in a 1:2 ratio.

Not all such dots are given

Clues outside the grid give the sum of the digits placed along the direction of the arrow. These clues are also given mod k, where k is the same digit as for the rest of the puzzle.
