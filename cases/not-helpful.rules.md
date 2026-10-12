---
format: open-rules
title: Not Helpful
setter: The Bard
source: https://sudokupad.app/nwvl140kwe
case: https://sudoku-sleuth.com/cases/not-helpful
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c5-r8c6-r9c5-r9c6 total 20 connected true
cage-2: cage r5c7-r5c8-r6c7-r6c8 total 20 connected true
cage-3: cage r2c4-r2c5-r3c4-r3c5 total 20 connected true
cage-4: cage r5c2-r5c3-r6c2-r6c3 total 20 connected true
cage-5: cage r1c6-r1c7-r2c6-r2c7 total 17 connected true
cage-6: cage r8c2-r8c3-r8c4-r9c2-r9c3-r9c4 total 25 connected true
cage-7: cage r3c2-r3c3-r4c2-r4c3 total 22 connected true
cage-8: cage r3c7-r3c8-r3c9-r4c7-r4c8-r4c9 total 29 connected true
cage-9: cage r7c8-r7c9 total 11 connected true
thermo-1: thermo r7c7-r7c6-r7c5-r7c4-r7c3
thermo-2: thermo r8c3-r7c2
thermo-3: thermo r7c7-r8c8
thermo-4: thermo r7c7-r7c6-r7c5-r7c4-r7c3
thermo-5: thermo r2c2-r3c2-r4c2
thermo-6: thermo r5c3-r5c4-r5c5
thermo-7: thermo r4c6-r3c6
thermo-8: thermo r4c6-r4c7
thermo-9: thermo r4c6-r5c6
thermo-10: thermo r4c6-r4c5
kropki-1: kropki r5c7-r6c7 colour "white"
kropki-2: kropki r6c2-r6c3 colour "white"
kropki-3: kropki r9c1-r9c2 colour "white"
kropki-4: kropki r1c8-r1c9 colour "white"
kropki-5: kropki r3c1-r3c2 colour "white"
kropki-6: kropki r5c8-r5c9 colour "white"
kropki-7: kropki r7c6-r7c7 colour "white"
kropki-8: kropki r2c8-r2c9 colour "black"
kropki-9: kropki r6c4-r6c5 colour "black"
whispers-1: whispers r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 gap 5
whispers-2: whispers r5c9-r6c9 gap 5
whispers-3: whispers r9c5-r9c6 gap 5
whispers-4: whispers r1c4-r1c5 gap 5
whispers-5: whispers r5c1-r6c1 gap 5
whispers-6: whispers r8c8-r8c9 gap 5
whispers-7: whispers r2c2-r2c3 gap 5
renban-1: renban r3c3-r3c4-r3c5-r3c6-r3c7
renban-2: renban r6c3-r6c2-r5c2
renban-3: renban r9c2-r9c1-r8c1
renban-4: renban r9c8-r9c9-r8c9-r7c9
region-sum r6c4-r6c5-r6c6-r5c7-r5c8-r4c8 segments [["r6c4","r6c5","r6c6"],["r5c7","r5c8","r4c8"]]
pair-1: pair r1c4-r1c5 relation {"op":"sum","value":10}
pair-2: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-3: pair r9c5-r9c6 relation {"op":"sum","value":10}
pair-4: pair r5c1-r6c1 relation {"op":"sum","value":10}
pair-5: pair r8c5-r8c6 relation {"op":"sum","value":10}
pair-6: pair r1c2-r2c2 relation {"op":"sum","value":5}
pair-7: pair r8c9-r9c9 relation {"op":"sum","value":5}
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,4]
quadruple-2: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,3]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [7]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [7]
quadruple-5: quadruple r2c4-r2c5-r3c4-r3c5 digits [6,8]
quadruple-6: quadruple r1c6-r1c7-r2c6-r2c7 digits [5]
quadruple-7: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,9]
quadruple-8: quadruple r6c8-r6c9-r7c8-r7c9 digits [5]
little-killer-1: little-killer r1c4-r2c3-r3c2-r4c1 sum 16
little-killer-2: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 25
little-killer-3: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 20
parity-cells-1: parity-cells r5c9-r9c5-r5c1-r1c5-r6c1-r1c4-r6c9-r9c6-r1c6-r2c6-r7c5 parity "odd"
parity-cells-2: parity-cells r2c9-r5c8-r2c5-r2c4-r3c4-r3c5-r6c5-r8c6-r8c5 parity "even"
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#0003","thickness":0}}
```

All Clues are true. Not all clues are helpful.
Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Killer: Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within a cage.
Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
Little Killer: Clues outside the grid with an arrow are the sum of the digits in the cells along the indicated diagonal. Digits may repeat along these diagonals if allowed by other rules.
Odd/Even: Digits in bordered light gray circles must be odd. Digits in bordered light gray squares must be even.
Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
Region Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. Different lines may have different values.
Renban: Digits placed on purple lines must be a non-repeating set of consecutive digits, in any order.
Thermo: Digits on grey thermos must increase from the bulb to the tip.
XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
