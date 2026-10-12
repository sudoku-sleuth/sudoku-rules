---
format: open-rules
title: Teleport
setter: sujoyku
source: https://tinyurl.com/2s4mezda
case: https://sudoku-sleuth.com/cases/teleport
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
arrow r2c4-r2c5-r1c5 bulb ["r3c4"]
nabner r7c6-r8c6-r8c5-r9c5
little-killer-1: little-killer r2c1-r1c2 sum 12
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-3: little-killer r1c8-r2c9 sum 13
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[5.5,5.5],[4.5,5.5],[3.5,6.5],[2.5,6.5],[1.5,7.5]],"color":"#FF00BB","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,3.5],[5.5,2.5],[6.5,2.5],[7.5,1.5]],"color":"#FF00BB","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF00D0","stroke":"#FF00D0","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Rotational 10-sums: Any pair of cells that are images of each other when rotating the grid by 180 degrees around the central cell must contain digits that sum to 10. On a marked diagonal digits sum to the little killer clue outside the grid. On the zipper line (purple with the circle in the middle) digits at an equal distance to the centre must sum to the digit in the central cell. The renban line (purple without a circle) must contain a set of consecutive non-repeating digits in any order. Digits on an arrow sum to the digit in the circle from which the arrow emerges. The yellow/golden Nabner line may not contain consecutive digits (anywhere on the line).
