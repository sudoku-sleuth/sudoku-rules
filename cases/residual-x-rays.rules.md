---
format: open-rules
title: Residual X-Rays
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/residual-x-rays
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0c66f3c45f5be21b5f4de4e1614bada9
---

```rules
sudoku 9x9
modular-1: modular r2c2-r2c1-r1c1-r1c2
modular-2: modular r2c5-r2c6
modular-3: modular r2c8-r1c8-r1c9-r2c9
modular-4: modular r5c5-r4c5-r4c6-r4c7
modular-5: modular r6c5-r6c4-r7c4-r7c5
modular-6: modular r6c2-r5c2-r4c2
modular-7: modular r8c1-r9c1-r9c2-r8c2
modular-8: modular r9c3-r9c4-r9c5
modular-9: modular r9c8-r9c9-r8c9-r8c8
modular-10: modular r3c6-r3c7-r3c8
x-sum-1: x-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 21
x-sum-2: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 28
x-sum-3: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 28
x-sum-4: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 27
x-sum-5: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 36
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"◯","textColor":"#000000","fontSize":42}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"◯","textColor":"#000000","fontSize":42}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"◯","textColor":"#000000","fontSize":42}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"◯","textColor":"#000000","fontSize":42}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"◯","textColor":"#000000","fontSize":42}}
```

Normal sudoku rules apply. 

Modular lines: Modular lines: every set of three sequential digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits on two-cell lines cannot be from the same residue set. Digits may repeat on a line if allowed by other rules.

X-Sums: Digits outside the grid give the total of the first X digits in the row or column (starting next to the number outside the grid) where X is the first digit along that row or column.

Every X-sum forms a hidden modular line of length X.
