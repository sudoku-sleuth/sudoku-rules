---
format: open-rules
title: Celebrating 100
setter: sujoyku
source: https://tinyurl.com/2atpzsn8
case: https://sudoku-sleuth.com/cases/celebrating-100
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
negative relations [{"op":"sum","value":5},{"op":"sum","value":10}] except []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[30,31,32,40,48,49,50],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[29,37,38,39],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[41,42,43,51],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[36,45,46,47],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[44,52,53,61],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[60,69,70,78,79],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[6,7,8,17],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[57,66,67,68],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[55,56,64,65],"label":"100","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[1,2,3,4,11,13],"label":"100","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. Orthogonally adjacent digits never sum to either 5 or 10. All cages are Split Sum Multiplier cages. In such a cage digits do not repeat and the digits can be split into two sets such that their separate sums multiply to the given clue. For example, a four cell Split Sum Multiplier cage with a 40-clue could contain 1, 3, 4 and 5 (as (1+3+4)*5=8*5=40 or (3+5)*(1+4)=8*5=40) but also 1, 2, 3 and 8 (as (1+3)*(2+8)=4*10=40).
