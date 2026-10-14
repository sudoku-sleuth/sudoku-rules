---
format: open-rules
title: Knight rider
setter: Chip Sounder
source: https://sudokupad.app/28jc3eet15
case: https://sudoku-sleuth.com/cases/knight-rider
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
exported: 115ee150a2e325f6037afd6b5a9278a0
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
kropki-1: kropki r4c5-r5c5 white
kropki-2: kropki r6c4-r6c5 white
kropki-3: kropki r6c3-r6c4 white
kropki-4: kropki r5c5-r6c5 black
kropki-5: kropki r5c4-r6c4 black
quadruple r1c2-r1c3-r2c2-r2c3 digits [1,2,3,4]
little-killer r1c3-r2c4-r3c5-r4c6 sum 20
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5],[4.5,2.5],[3.5,3.5],[2.5,4.5],[1.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal sudoku rules apply.
Cells seperated by a Knight's move (in chess) cannot contain the same digits. 
Digits within a circle in a 2x2 must appear within that 2x2
Digits on a grey line read the same forwards as backwards.
Digit on the arrow outside the grid is a sum of the digits in that direction. Digits may repeat.
Digits seperated by a white dot are consecutive. 
Digits seperated by a black dot are a 1:2 ratio.
Not all dots are given.
