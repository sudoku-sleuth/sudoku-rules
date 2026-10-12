---
format: open-rules
title: Can't Spell Index Without X
setter: sujoyku
source: https://sudokupad.app/95ugghzbkt
case: https://sudoku-sleuth.com/cases/can-t-spell-index-without-x
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
x-sum-1: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 20
x-sum-2: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 33
x-sum-3: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 39
x-sum-4: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 10
x-sum-5: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 15
x-sum-6: x-sum r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 30
index-line-1: index-line r1c7-r2c7-r3c7-r4c7-r3c8-r3c9-r2c9
index-line-2: index-line r4c6-r5c5-r6c4-r6c3-r5c3-r4c3-r3c2-r3c1
index-line-3: index-line r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r8c7-r7c6
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"odd","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.45,-0.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"even","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Index Lines: Each turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.

- X-sums: Clues outside of the grid are X-sum clues, i.e. the numbers indicate the sum of the first X digits in the respective row or column where X is the first digit seen from the clue. An odd/even clue only indicates the parity of the respective X-sum.
