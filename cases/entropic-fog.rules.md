---
fog:
  initiallyLit:
    - r4c1
    - r4c2
    - r4c8
    - r4c9
format: open-rules
title: Entropic Fog
setter: Sir Moose
source: https://sudokupad.app/h1krf2xndf
case: https://sudoku-sleuth.com/cases/entropic-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9c2c4c041497ca05bb2a7f83f859e962
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r4c2 white
kropki-2: kropki r4c8-r4c9 white
kropki-3: kropki r9c1-r9c2 white
kropki-4: kropki r1c5-r1c6 black
kropki-5: kropki r5c2-r6c2 black
kropki-6: kropki r5c4-r6c4 black
kropki-7: kropki r5c9-r6c9 black
arrow-1: arrow r4c7-r3c7 bulb ["r4c6"]
arrow-2: arrow r3c3-r2c4 bulb ["r4c4"]
arrow-3: arrow r6c7-r7c6 bulb ["r5c7"]
arrow-4: arrow r8c6-r7c5 bulb ["r9c6"]
arrow-5: arrow r7c4-r6c5 bulb ["r7c3"]
entropic-1: entropic r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 stated true
entropic-2: entropic r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 stated true
entropic-3: entropic r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 stated true
entropic-4: entropic r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 stated true
entropic-5: entropic r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 stated true
entropic-6: entropic r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 stated true
entropic-7: entropic r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 stated true
entropic-8: entropic r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 stated true
entropic-9: entropic r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 stated true
```

Normal sudoku rules apply.

Entropy Rows: Every 3 consecutive cells along each row must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).

Digits along an arrow sum the the number in that arrows circle.

Cells separated by a white dot contain consecutive digits.  Cells separated by a black dot contain digits that are in a 1:2 ratio.

Most of the grid is covered in fog.  Placing correct digits will clear surrounding fog.  No guessing is required.
