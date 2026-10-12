---
format: open-rules
title: Volley Fire
setter: The Bard
source: https://sudokupad.app/hq2eivtgnh
case: https://sudoku-sleuth.com/cases/volley-fire
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 9
  cols: 9
  symbols:
    - 0
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
kropki-1: kropki r8c5-r8c6 colour "white"
kropki-2: kropki r9c1-r9c2 colour "white"
kropki-3: kropki r4c7-r4c8 colour "black"
kropki-4: kropki r3c8-r4c8 colour "black"
kropki-5: kropki r1c5-r1c6 colour "black"
kropki-6: kropki r5c4-r6c4 colour "black"
kropki-7: kropki r7c6-r7c7 colour "black"
kropki-8: kropki r1c1-r2c1 colour "black"
kropki-9: kropki r5c2-r5c3 colour "black"
kropki-10: kropki r7c8-r8c8 colour "black"
kropki-11: kropki r9c5-r9c6 colour "black"
kropki-12: kropki r3c7-r3c8 colour "black"
kropki-13: kropki r3c7-r4c7 colour "black"
kropki-14: kropki r6c3-r6c4 colour "black"
kropki-15: kropki r7c8-r7c9 colour "black"
kropki-16: kropki r1c8-r2c8 colour "black"
kropki-17: kropki r7c9-r8c9 colour "black"
arrow-1: arrow r3c6-r2c7 bulb ["r4c5"]
arrow-2: arrow r3c7-r2c8-r1c9 bulb ["r4c6"]
arrow-3: arrow r4c7-r3c8 bulb ["r5c6"]
arrow-4: arrow r3c4-r2c5-r1c6 bulb ["r4c3"]
arrow-5: arrow r6c7-r5c8-r4c9 bulb ["r7c6"]
arrow-6: arrow r7c3-r6c4-r5c5 bulb ["r8c2"]
arrow-7: arrow r6c2-r5c3 bulb ["r7c1"]
arrow-8: arrow r8c4-r7c5 bulb ["r9c3"]
arrow-9: arrow r6c3-r5c4 bulb ["r7c2"]
arrow-10: arrow r3c3 bulb ["r4c2"]
pair-1: pair r5c5-r6c5 relation {"op":"sum","value":10}
pair-2: pair r6c9-r7c9 relation {"op":"sum","value":10}
pair-3: pair r3c5-r3c6 relation {"op":"sum","value":5}
pair-4: pair r4c2-r5c2 relation {"op":"sum","value":5}
negative relations [{"op":"ratio","value":2}] except [["r8c5","r8c6"],["r9c1","r9c2"],["r4c7","r4c8"],["r3c8","r4c8"],["r1c5","r1c6"],["r5c4","r6c4"],["r7c6","r7c7"],["r1c1","r2c1"],["r5c2","r5c3"],["r7c8","r8c8"],["r9c5","r9c6"],["r3c7","r3c8"],["r3c7","r4c7"],["r6c3","r6c4"],["r7c8","r7c9"],["r1c8","r2c8"],["r7c9","r8c9"],["r3c5","r3c6"],["r4c2","r5c2"],["r5c5","r6c5"],["r6c9","r7c9"]]
```

Extended Sudoku rules apply place the digits 0-9 in each box, row, and column without repeats, however one digit will not fit and is to be left out. Which digit is left out can vary between rows, columns, and boxes and must be determined by the solver.
Arrow: Digits on an arrow must sum to the digit placed in that arrow's circle. Digits may repeat on an arrow if allowed by other rules.
Ratio: Digits separated by a black dot must be in a 2:1 ratio. All black dots are given.
Consecutive Pairs: Digits separated by a white dot must be consecutive. NOT all white dots have been give.
XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5. Not all Xs and Vs are given.
