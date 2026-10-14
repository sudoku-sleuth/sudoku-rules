---
format: open-rules
title: alchemy set 2. Puzzle 3
setter: Chip Sounder
source: https://sudokupad.app/hhmwt5dan4
case: https://sudoku-sleuth.com/cases/alchemy-set-2-puzzle-3
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
exported: 6ebaaa96c0ad55ed3370c54c7b2b2612
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
anti-knight
pair r4c2-r5c2 sum 10
numbered-room r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 digit 6
parity-cells-1: parity-cells r4c6 parity "odd"
parity-cells-2: parity-cells r3c4 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,4.5],[1.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,1.5],[1.5,0.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.38,2.11],[4.5,2.06],[4.62,2.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.62,2.89],[4.5,2.94],[4.38,2.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.11,2.62],[4.06,2.5],[4.11,2.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.89,2.38],[4.94,2.5],[4.89,2.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
```

Any clue type throughout the set may appear only once.
Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row column and 2x3 box.
Cells separated by a knight's move (in chess) cannot contain the same digit.
Clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.
Digits on a grey line must sum to the digits in the connected circles.
Cells separated by an X sum to 10.
Adjacent digits along a light orange line must alternate between low (12), medium (34) and high (56). Any group of three in a row must contain one of each entropy.
The highlighted grey square is even.
The highlighted circle is odd.
The cell with the fortress (inequality signs pointing outwards) must be larger than the orthogonally connected cells.
