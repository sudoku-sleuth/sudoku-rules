---
fog:
  initiallyLit:
    - 0
    - 3
    - 7
    - 8
    - 11
    - 15
    - 21
    - 35
    - 53
    - 56
    - 60
    - 68
    - 72
    - 73
    - 75
    - 79
format: open-rules
title: Modular Line in the Fog
setter: Sir Moose
source: https://sudokupad.app/mi6z2s5snt
case: https://sudoku-sleuth.com/cases/modular-line-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c6-r9c6 colour "white"
kropki-2: kropki r7c6-r8c6 colour "white"
kropki-3: kropki r7c4-r7c5 colour "white"
kropki-4: kropki r9c7-r9c8 colour "white"
kropki-5: kropki r6c5-r7c5 colour "white"
kropki-6: kropki r6c3-r7c3 colour "black"
kropki-7: kropki r9c3-r9c4 colour "black"
kropki-8: kropki r2c3-r3c3 colour "black"
kropki-9: kropki r8c2-r9c2 colour "black"
kropki-10: kropki r1c1-r2c1 colour "black"
arrow r2c5-r1c5 bulb ["r3c5"]
modular r9c1-r9c2-r9c3-r8c3-r8c4-r8c5-r9c5-r9c6-r9c7-r8c7-r8c8-r7c8-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1-r5c1-r4c1-r3c1-r3c2-r3c3-r4c3-r4c4-r4c5-r4c6-r3c6-r2c6-r1c6-r1c7-r1c8-r1c9
```

Normal Sudoku Rules Apply

Cells separated by a white dot contain consecutive digits.  Cells separated by a black dot are in a 1:2 ratio.

Cells along an arrow sum to the digit in that arrow's circle.

In the fog there is a single modular-3 line.  This line is a non-branching line of orthogonally connected cells, which may not orthogonally or diagonally touch itself.  It visits all 3x3 regions of the sudoku.  On the line, any set of 3 adjacent cells must contain a digit from (147), a digit from (258) and a digit from (369).
