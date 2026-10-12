---
fog:
  initiallyLit:
    - 80
    - 81
    - 90
    - 91
format: open-rules
title: Strange difference in the fog
setter: Chip Sounder
source: https://sudokupad.app/g8qj064uxb
case: https://sudoku-sleuth.com/cases/strange-difference-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 10
  cols: 10
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
      - r1c4
      - r1c5
      - r2c1
      - r2c2
      - r2c3
      - r2c4
      - r2c5
    - - r1c6
      - r1c7
      - r1c8
      - r1c9
      - r1c10
      - r2c6
      - r2c7
      - r2c8
      - r2c9
      - r2c10
    - - r3c1
      - r3c2
      - r3c3
      - r3c4
      - r3c5
      - r4c1
      - r4c2
      - r4c3
      - r4c4
      - r4c5
    - - r3c6
      - r3c7
      - r3c8
      - r3c9
      - r3c10
      - r4c6
      - r4c7
      - r4c8
      - r4c9
      - r4c10
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r5c5
      - r6c1
      - r6c2
      - r6c3
      - r6c4
      - r6c5
    - - r5c6
      - r5c7
      - r5c8
      - r5c9
      - r5c10
      - r6c6
      - r6c7
      - r6c8
      - r6c9
      - r6c10
    - - r7c1
      - r7c2
      - r7c3
      - r7c4
      - r7c5
      - r8c1
      - r8c2
      - r8c3
      - r8c4
      - r8c5
    - - r7c6
      - r7c7
      - r7c8
      - r7c9
      - r7c10
      - r8c6
      - r8c7
      - r8c8
      - r8c9
      - r8c10
    - - r9c1
      - r9c2
      - r9c3
      - r9c4
      - r9c5
      - r10c1
      - r10c2
      - r10c3
      - r10c4
      - r10c5
    - - r9c6
      - r9c7
      - r9c8
      - r9c9
      - r9c10
      - r10c6
      - r10c7
      - r10c8
      - r10c9
      - r10c10
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10 stated true
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10 stated true
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10 stated true
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10 stated true
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10 stated true
unique-11: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1 stated true
unique-12: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2 stated true
unique-13: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3 stated true
unique-14: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4 stated true
unique-15: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5 stated true
unique-16: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6 stated true
unique-17: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7 stated true
unique-18: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8 stated true
unique-19: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9 stated true
unique-20: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10 stated true
unique-21: unique r1c1-r1c2-r1c3-r1c4-r1c5-r2c1-r2c2-r2c3-r2c4-r2c5 stated true
unique-22: unique r1c6-r1c7-r1c8-r1c9-r1c10-r2c6-r2c7-r2c8-r2c9-r2c10 stated true
unique-23: unique r3c1-r3c2-r3c3-r3c4-r3c5-r4c1-r4c2-r4c3-r4c4-r4c5 stated true
unique-24: unique r3c6-r3c7-r3c8-r3c9-r3c10-r4c6-r4c7-r4c8-r4c9-r4c10 stated true
unique-25: unique r5c1-r5c2-r5c3-r5c4-r5c5-r6c1-r6c2-r6c3-r6c4-r6c5 stated true
unique-26: unique r5c6-r5c7-r5c8-r5c9-r5c10-r6c6-r6c7-r6c8-r6c9-r6c10 stated true
unique-27: unique r7c1-r7c2-r7c3-r7c4-r7c5-r8c1-r8c2-r8c3-r8c4-r8c5 stated true
unique-28: unique r7c6-r7c7-r7c8-r7c9-r7c10-r8c6-r8c7-r8c8-r8c9-r8c10 stated true
unique-29: unique r9c1-r9c2-r9c3-r9c4-r9c5-r10c1-r10c2-r10c3-r10c4-r10c5 stated true
unique-30: unique r9c6-r9c7-r9c8-r9c9-r9c10-r10c6-r10c7-r10c8-r10c9-r10c10 stated true
thermo-1: thermo r5c2-r6c3-r6c4-r7c5
thermo-2: thermo r3c4-r4c5-r5c6
thermo-3: thermo r6c8-r6c7-r7c8-r8c9
kropki-1: kropki r8c2-r9c2 colour "black"
kropki-2: kropki r4c1-r5c1 colour "black"
kropki-3: kropki r7c6-r8c6 colour "black"
kropki-4: kropki r5c6-r6c6 colour "black"
kropki-5: kropki r2c9-r2c10 colour "black"
kropki-6: kropki r6c8-r6c9 colour "black"
whispers r10c3-r10c2-r9c2-r9c1-r8c1-r7c1-r6c2-r7c3-r8c4-r9c3-r9c4 loop false gap 6
pair-1: pair r6c1-r7c1 relation {"op":"sum","value":10}
pair-2: pair r5c1-r5c2 relation {"op":"sum","value":10}
pair-3: pair r7c6-r7c7 relation {"op":"sum","value":10}
pair-4: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-5: pair r9c1-r10c1 relation {"op":"sum","value":5}
pair-6: pair r7c2-r7c3 relation {"op":"sum","value":5}
pair-7: pair r8c3-r9c3 relation {"op":"sum","value":5}
little-killer-1: little-killer r8c1-r9c2-r10c3 sum 22
little-killer-2: little-killer r7c1-r8c2-r9c3-r10c4 sum 10
little-killer-3: little-killer r5c1-r6c2-r7c3-r8c4-r9c5-r10c6 sum 29
little-killer-4: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6-r10c7 sum 21
little-killer-5: little-killer r1c4-r2c3-r3c2-r4c1 sum 20
little-killer-6: little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 21
little-killer-7: little-killer r4c10-r5c9-r6c8-r7c7-r8c6-r9c5-r10c4 sum 24
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[5.5,4.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,6.5],[8.5,5.5],[8.5,6.5],[5.5,9.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,9.5],[9.5,9.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 0-9 once each in every row, column and 2x5 box.
The grid is covered in fog, placing a correct digit will clear the surrounding cells of that digit. No bifurcation required.
Clues outside the grid sum the digits in the indicated diagonal, digits may repeat.
Adjacent digits on a green line must differ by at least 6.
Cells separated by a V sum to 5.
Cells separated by an X sum to 10.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Digits on a thermometer must rise from the bulb end.
Digits along a red line must alternate parity.
Odd/even.
