---
format: open-rules
title: Black Holes and Revelations
setter: Dr Logic
source: https://sudokupad.app/7ngdsu0o9d
case: https://sudoku-sleuth.com/cases/black-holes-and-revelations
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: dd259133ab8b16b1c8d3facf71948537
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r3c4 black
kropki-2: kropki r1c4-r1c5 black
kropki-3: kropki r5c7-r6c7 black
kropki-4: kropki r7c5-r7c6 black
kropki-5: kropki r7c1-r7c2 white
kropki-6: kropki r7c2-r7c3 white
kropki-7: kropki r7c3-r8c3 white
kropki-8: kropki r8c3-r9c3 white
kropki-9: kropki r2c1-r2c2 white
kropki-10: kropki r1c2-r2c2 white
kropki-11: kropki r7c9-r8c9 white
kropki-12: kropki r2c5-r3c5 white
kropki-13: kropki r4c4-r4c5 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
```

You need to place 4 black holes in the grid. We would rather not invoke a binary black hole merger, as a result we must keep the black holes out of each others orbit. The black holes cannot share any edge of any cells, but may touch diagonally. 

Similarly, we cannot place more than one singularity in any row, column or marked 3x3 box.

Black holes are mysterious creatures and a lot is unknown. However, in this puzzle, we know that they have a singularity each, and are surrounded by an accretion disk.

The singularity is a single cell, at least the size of the largest digit cells situated in the accretion disk (the surrounding 8 cells). Altogether, each black hole is made up of 9 cells total.

Each accretion disk obeys a different rule: one such disk is a region sum line, where box borders that divide the disk must sum to the same total (this disk must cross at least one box border to be valid). One is a parity line, adjacent digits differ in parity (odd/even). One is a German whispers line, adjacent digits differ by at least 5. The final disk is a renban, where digits do not repeat and together constitute a consecutive set of digits, in any order.

Accompanying these objects are smaller bodies. Cells separated by a red dwarf (red dot) are in a 1:2 ratio. Cells separated by a white dwarf (white dot) are consecutive.

There are moons in the grid (grey circles). Due to the time dilation that occurs if you are near a black hole, if a moon is on an accretion disk, its value must be higher than (or including) 5, and if they are not on an accretion disk they must have a value less than 5 (1-4). The moons do not cross the event horizons, and therefore cannot be placed in any singularity cell.

Not all red or white dwarfs are given.
