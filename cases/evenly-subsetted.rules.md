---
format: open-rules
title: Evenly subsetted.
setter: Chip Sounder
source: https://sudokupad.app/of9ogtfbr5
case: https://sudoku-sleuth.com/cases/evenly-subsetted
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
cage r3c1-r3c2 repeats false total 7 connected true
kropki-1: kropki r4c2-r4c3 colour "black"
kropki-2: kropki r3c4-r3c5 colour "black"
quadruple-1: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,2,3,4]
quadruple-2: quadruple r5c5-r5c6-r6c5-r6c6 digits [3,4,5,6]
quadruple-3: quadruple r1c1-r1c2-r2c1-r2c2 digits [3,4,5,6]
quadruple-4: quadruple r1c5-r1c6-r2c5-r2c6 digits [1,2,3,4]
parity-cells r6c1-r1c1-r1c6-r6c6 parity "even"
unique-19: unique r1c1-r1c4-r3c1-r3c4-r5c1-r5c4
unique-20: unique r1c2-r1c5-r3c2-r3c5-r5c2-r5c5
unique-21: unique r1c3-r1c6-r3c3-r3c6-r5c3-r5c6
unique-22: unique r2c1-r2c4-r4c1-r4c4-r6c1-r6c4
unique-23: unique r2c2-r2c5-r4c2-r4c5-r6c2-r6c5
unique-24: unique r2c3-r2c6-r4c3-r4c6-r6c3-r6c6
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,4.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5],[5.5,2.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,4.5],[2.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal 6x6 sudoku rules apply: each column, row, and 2x3 box must contaiin all the digits from 1 to 6.
Cells that appear in the same position within a box cannot contain the same digits. 
Digits on a grey line read the same forwards as backwards.
Digits within a circle must appear at least once in the four cells touching the circle.
Digits in a cage sum to the total given  in the top left corner of the cage. Digits cannot repeat within a cage.
Digits on a grey square are even.
Digits seperated by a black dot are a 1:2 ratio. Not all dots are given.
