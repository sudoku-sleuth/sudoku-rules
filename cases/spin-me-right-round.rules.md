---
format: open-rules
title: Spin Me Right Round
setter: Will Power
source: https://f-puzzles.com/?id=yha2kvyp
case: https://sudoku-sleuth.com/cases/spin-me-right-round
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=3 r1c6=2 r4c5=7 r5c7=1 r6c2=5 r6c6=4 r9c2=9
---

```rules
sudoku 9x9
anti-king
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Normal Sudoku rules apply.  No 2 cells of the same value are a chess king's move apart.  The completed patterns for 1's, 2's, 3's and 4's are the same as one another, after rotating the grid 90 degrees around the center cell for each number.  The same is true for the patterns of 6's, 7's, 8's and 9's.  Example: If R1C1 is a 1, then R1C9, R9C1 and R9C9 are, once each, a 2, 3,and 4, in some order.  The pattern for 5's looks exactly the same after rotating the grid 90 degrees in any direction.
