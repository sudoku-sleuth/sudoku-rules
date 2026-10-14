---
format: open-rules
title: Olympic Rings
setter: Jobo
source: https://sudokupad.app/n10rw5ydfa
case: https://sudoku-sleuth.com/cases/olympic-rings
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4ad8df499c32c6603605744d9056999c
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,4]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,4]
quadruple-3: quadruple r7c3-r7c4-r8c3-r8c4 digits [2,4]
quadruple-4: quadruple r7c6-r7c7-r8c6-r8c7 digits [2,4]
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":2.9,"height":2.9,"rounded":true,"stroke":"#2ecbffff","thickness":6,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":2.9,"height":2.9,"rounded":true,"stroke":"#f88f","thickness":6,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":2.9,"height":2.9,"rounded":true,"stroke":"#808080ff","thickness":6,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3],"width":2.9,"height":2.9,"rounded":true,"stroke":"#efdc14ff","thickness":6,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6],"width":2.9,"height":2.9,"rounded":true,"stroke":"#67f067ff","thickness":6,"angle":0}}
```

Normal sudoku rules apply.

Digits cannot repeat on either diagonal.
Digits in a quadruple clue must appear at least once in the four surrounding cells.

Box borders divide the blue ring into segments with the same sum.
Digits along the black ring must increase from the bulb to the tip. The bulb and the tip are adjacent on the ring and their position, as well as the direction of the thermo, must be deduced.
Digits along the red ring all have the same parity (odd or even).
The yellow ring contains a non-repeating set of consecutive digits in any order.
Adjacent digits along the green ring must differ by at least 5.
