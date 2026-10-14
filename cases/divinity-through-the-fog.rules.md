---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r2c1
    - r2c2
    - r2c3
    - r3c1
    - r3c2
    - r3c3
format: open-rules
title: Divinity Through the Fog
setter: Meggen033
source: https://sudokupad.app/8d3hli9g3k
case: https://sudoku-sleuth.com/cases/divinity-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: df0015034611e0ce659bc852255a3511
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage r4c4-r5c4 total 8 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-2: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 11
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 6
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[0.5,1.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,1.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,1.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,0.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,2.5],[1.5,3.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,4.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,2.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,0.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,1.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,2.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,5.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,3.5],[5.5,3.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,4.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,2.5],[7.5,2.5],[7.5,3.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,3.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,4.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5],[8.5,5.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[0.5,5.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,5.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[4.5,8.5],[4.5,7.5],[4.5,6.5],[3.5,6.5],[2.5,6.5]],"color":"#FFB545","thickness":12.8,"rounded":true}}
```

•	Normal Sudoku rules apply. 
•	THERE IS ONE, AND ONLY ONE, Orange Omnipotent Line, where each pair of adjacent digits along the line must either: Sum to 5, Sum to 10, be consecutive or be in a 1:2 ratio. (At least one of these constraints must be met. It is allowed that two are fulfilled simultaneously.)
•	Example: The digit 3 may be adjacent to either a 2 (Sums to 5 and Consecutive), a 4 (Consecutive), a 6 (1:2 ratio) or a 7 (Sums to 10).
•	Digits along marked diagonals sum to the number indicated outside the grid.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Digits in a cage do not repeat and sum to the clue in the top left.
