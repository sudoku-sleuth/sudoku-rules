---
format: open-rules
title: It's Raining Sudoku Puzzles!
setter: Sandra & Nala
source: ""
case: https://sudoku-sleuth.com/cases/it-s-raining-sudoku-puzzles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
kropki-1: kropki r1c5-r1c6 colour "white"
kropki-2: kropki r5c2-r5c3 colour "black"
kropki-3: kropki r5c4-r5c5 colour "black"
region-sum-1: region-sum r1c3-r2c4-r3c5 segments [["r1c3"],["r2c4"],["r3c5"]]
region-sum-2: region-sum r1c4-r2c3 segments [["r1c4"],["r2c3"]]
region-sum-3: region-sum r2c5-r3c4 segments [["r2c5"],["r3c4"]]
region-sum-4: region-sum r4c3-r5c2 segments [["r4c3"],["r5c2"]]
region-sum-5: region-sum r4c2-r5c3-r6c4 segments [["r4c2"],["r5c3"],["r6c4"]]
region-sum-6: region-sum r5c4-r6c3 segments [["r5c4"],["r6c3"]]
region-sum-7: region-sum r2c2-r3c3 segments [["r2c2"],["r3c3"]]
region-sum-8: region-sum r4c4-r5c5 segments [["r4c4"],["r5c5"]]
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":1.02,"height":0.22,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":90}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":1.02,"height":0.22,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
```

Normal 6×6 Sudoku and „Sudooku“ apply. 

Blue lines are region sum lines. For each line, digits on the line have an equal sum N within each box it passes through. There are 4 lines that cross another line in this puzzle. These are to be treated as independent lines. (So there are 8 lines in total here)

Cells separated by a black Kropki dot are in a 1:2 ratio. Sets of digits separated by a black Kroopki Doot (a long, ellipse-looking shape) must have their respective sums be in a 1:2 ratio. 

Cells separated by a white Kropki dot are consecutive. Sets of digits separated by a white Kroopki Doot must have their respective sums be consecutive.

Not all Kropki or Kroopki Do(o)ts are necessarily given. There is no negative constraint.
