---
format: open-rules
title: Where are my mates?
setter: sujoyku
source: https://sudokupad.app/rj60aymgmm
case: https://sudoku-sleuth.com/cases/where-are-my-mates
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 93d670a280540e62f5f8197be4003fea
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
sandwich-1: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 16
sandwich-2: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 15
sandwich-3: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 14
sandwich-4: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 7
sandwich-5: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 9
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.7,2.3],[1.9,2.5],[1.7,2.7]],"color":"#1f9de6ff","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.3,8.3],[4.1,8.5],[4.3,8.7]],"color":"#1f9de6ff","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.7,8.3],[5.9,8.5],[5.7,8.7]],"color":"#1f9de6ff","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.7,1.7],[8.5,1.9],[8.3,1.7]],"color":"#1f9de6ff","thickness":6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Dutch Flat Mates: Each 5 in the grid either has a 1 directly above or a 9 directly below it. (It may have both, but it does not need both.)

- Outside Sum + Sandwich: Each clue outside the grid indicates the sum of all the digits in its row or column up to the first 1 or 9. (The bounding 1 or 9 is not part of that sum.)
Moreover, each outside clue is a Sandwich clue, i.e. it indicates the sum of all digits between 1 and 9 in the respective row or column.

- Arrows: A digit in a cell containing a small blue arrow indicates the distance to the next 1 or 9 in that direction.
