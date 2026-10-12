---
format: open-rules
title: Enchantment Under the Sea
setter: Blobz
source: https://sudokupad.app/blobz/enchantment-under-the-sea
case: https://sudoku-sleuth.com/cases/enchantment-under-the-sea
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r4c6 colour "white"
kropki-2: kropki r3c5-r3c6 colour "white"
kropki-3: kropki r2c6-r3c6 colour "white"
kropki-4: kropki r2c5-r2c6 colour "white"
kropki-5: kropki r4c4-r5c4 colour "white"
kropki-6: kropki r4c4-r4c5 colour "white"
kropki-7: kropki r3c4-r4c4 colour "white"
kropki-8: kropki r3c4-r3c5 colour "white"
whispers-1: whispers r7c1-r8c2-r8c3-r8c4-r8c5-r9c6-r9c7-r9c8-r9c9 gap 4
whispers-2: whispers r9c6-r8c6-r7c5-r6c6-r5c6 gap 5
whispers-3: whispers r7c5-r6c4 gap 5
whispers-4: whispers r9c7-r8c7-r7c8-r6c8-r5c8 gap 5
whispers-5: whispers r7c8-r6c9 gap 5
whispers-6: whispers r8c3-r7c3-r6c2-r5c3 gap 5
renban r9c4-r9c3-r9c2-r8c1
region-sum r2c9-r1c8-r2c7-r1c6-r2c5-r1c4-r2c3-r1c2-r2c1 segments [["r2c9","r1c8","r2c7"],["r1c6","r2c5","r1c4"],["r2c3","r1c2","r2c1"]]
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [6,7]
quadruple-2: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,3,4]
quadruple-3: quadruple r8c6-r8c7-r9c6-r9c7 digits [2,3]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[4.5,6.5],[3.5,5.5],[2.5,6.5],[4.5,8.5]],"color":"#aaaf","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[5.5,2.5],[4.5,3.5],[3.5,2.5],[5.5,0.5]],"color":"#aaaf","thickness":6.4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[60,61,62],"label":"First","color":"#d38904ff","labelColor":"#d38904ff"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[69,70,71],"label":"Kiss","color":"#d38904ff","labelColor":"#d38904ff"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.63,"height":0.63,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.63,"height":0.63,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.63,"height":0.63,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.63,"height":0.63,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
```

Normal sudoku rules apply.

Box borders divide the blue line into segments with the same sum.

White dots separate consecutive digits; not all such dots are shown.

Each digit along a grey line must have a value that lies numerically between the two digits at the ends of that line.

Along green lines, adjacent digits differ by at least 5.

Along the orange line, adjacent digits differ by at least 4.

The pink line contains a non-repeating consecutive sequence, in any order.

Digits in white circles must appear (at least once) in cells that touch the circle.
