---
format: open-rules
title: Pairing Order and Chaos
setter: sujoyku
source: https://sudokupad.app/ohownfshjm
case: https://sudoku-sleuth.com/cases/pairing-order-and-chaos
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - A source line layer still needs to be included in our reading.
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
constructed-regions size 7 borders [] joins []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#FFFFFF","stroke":"#dd8201ff","thickness":1.92,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#FFFFFF","stroke":"#dd8201ff","thickness":1.92,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#FFFFFF","stroke":"#dd8201ff","thickness":1.92,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#FFFFFF","stroke":"#dd8201ff","thickness":1.92,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.165,6.5],[4.035,6.5]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.835,6.5],[4.965,6.5]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.165,5.5],[2.035,5.5]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.835,5.5],[2.965,5.5]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.165,1.5],[2.035,1.5]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.835,1.5],[2.965,1.5]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.5,4.835],[3.5,4.965]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.5,4.165],[3.5,4.035]],"color":"#dd8201ff","thickness":1.28,"headLength":0.08,"rounded":true}}
```

- Chaos Construction: Divide the grid into seven orthogonally connected seven-cell regions, and place the digits 1-7 once in each row, column, and region.

- Parity Sums: A clue outside the grid gives the sum of all continuously adjacent digits that are alternating in parity up to (and not including) the first digit that repeats parity. For example, the row 1235467 would have a sum clue of 6=1+2+3 from the left (3 and 5 are both odd) and a sum clue of 13=6+7 from the right (4 and 6 are both even).
Moreover, for each clue the digits contributing to its sum must belong to the same region and the first parity-repeating digit must belong to a different region.

- Region Counters: A digit in a square counts how many different regions intersect the indicated row or column (i.e. how many region have at least one cell contained in that row or column).
