---
format: open-rules
title: Neatly Squished
setter: Marty Sears
source: https://sudokupad.app/otbk0lhczm
case: https://sudoku-sleuth.com/cases/neatly-squished
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
    - 8
    - 9
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
kropki-1: kropki r1c1-r2c1 colour "white"
kropki-2: kropki r1c6-r2c6 colour "white"
kropki-3: kropki r1c7-r2c7 colour "white"
kropki-4: kropki r3c3-r4c3 colour "black"
kropki-5: kropki r3c5-r4c5 colour "black"
kropki-6: kropki r6c1-r7c1 colour "white"
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0,2.5],[7,2.5]],"color":"#444444","thickness":1.7,"dash":"3.8,9","rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0,4.5],[7,4.5]],"color":"#444444","thickness":1.7,"dash":"3.8,9","rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,0],[2.5,7]],"color":"#444444","thickness":1.7,"dash":"3.8,9","rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,0],[4.5,7]],"color":"#444444","thickness":1.7,"dash":"3.8,9","rounded":true}}
```

SQUISHDOKU: Place digits from 1-9 in every cell, so that no digit repeats in a row, column, or 3x3 region. The dashed lines indicate the boundaries of regions, and cells on the dashed lines are simultaneously part of the regions on both sides of the line. 

EVEN PRODUCT DOMINOS: In this grid, any two adjacent cells multiply to give an even product.

KROPKI DOTS: Digits joined by a white dot are consecutive. Digits joined by a black dot are in a 1:2 ratio (one is double the other.) Not all dots are necessarily given.
