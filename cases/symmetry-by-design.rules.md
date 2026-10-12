---
format: open-rules
title: Symmetry, By Design
setter: Will Power
source: https://sudokupad.app/uneh9jd7m4
case: https://sudoku-sleuth.com/cases/symmetry-by-design
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r5c3-r5c4 total 11 connected true
cage-2: cage r2c2-r2c3 total 15 connected true
kropki-1: kropki r5c2-r6c2 colour "black"
kropki-2: kropki r6c2-r7c2 colour "black"
kropki-3: kropki r4c4-r5c4 colour "black"
kropki-4: kropki r2c4-r2c5 colour "black"
arrow-1: arrow r2c8-r1c9 bulb ["r3c7"]
arrow-2: arrow r8c2-r7c3 bulb ["r9c1"]
rotational-sums sums [10]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,5.5],[2.5,4.5],[3.5,3.5],[4.5,2.5],[5.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5],[3.5,4.5],[4.5,3.5],[5.5,2.5],[6.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. ROTATIONAL SYMMETRY- Corresponding cells 180 degrees apart on the grid sum to 10. EXAMPLE: The numbers in Row 3 Column 3 and in Row 7 column 7 must sum to 10. GERMAN WHISPERS(+)- Numbers on green lines are EXACTLY 5 apart from their neighbors on the line. ARROWS- Numbers on arrows sum to the number in the arrow's circle. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
