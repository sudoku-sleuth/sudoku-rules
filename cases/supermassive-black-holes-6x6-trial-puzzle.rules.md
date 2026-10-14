---
format: open-rules
title: Supermassive Black Holes (6x6 trial puzzle)
setter: Dr Logic
source: https://sudokupad.app/kodo67b537
case: https://sudoku-sleuth.com/cases/supermassive-black-holes-6x6-trial-puzzle
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
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
exported: 0d39562b97bb4770cb0613e2903fa6ed
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
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r5c6-r6c6 white
kropki-3: kropki r3c5-r4c5 white
kropki-4: kropki r1c1-r1c2 white
kropki-5: kropki r1c4-r1c5 white
kropki-6: kropki r1c3-r2c3 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
```

You need to place 2  black holes in the grid. We would rather not invoke a binary black hole merger, as a result we must keep the black holes out of each others orbit. The black holes cannot share any edge of any cells, but may touch diagonally. 

Black holes are mysterious creatures and a lot is unknown. However, in this puzzle, we know that they have a singularity each, and are surrounded by an accretion disk. The singularity is a single cell, and may not have a smaller value than any of the cells in its accretion disk (the surrounding 8 cells). Altogether, each black hole is made up of 9 cells total.

Each accretion disk obeys a different rule, one such disk is a region sum line, where box borders that divide the disk must sum to the same total. The other disk is a parity line, adjacent digits differ in parity (odd/even).

Accompanying these objects are smaller bodies. Cells separated by a red dwarf (red dot) are in a 1:2 ratio. Cells separated by a white dwarf (white dot) are consecutive.

Finally, there seems to be a small planet in r1c1. Please make sure this digit is odd.

Not all red or white dwarfs are given.
