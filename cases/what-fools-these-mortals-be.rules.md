---
format: open-rules
title: What Fools These Mortals Be
setter: The Bard
source: https://sudokupad.app/fbil5t6n2u
case: https://sudoku-sleuth.com/cases/what-fools-these-mortals-be
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - We have only read part of the published answer so far.
  - The setter's corrections are waiting for our rules check.
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
arrow-1: arrow r7c1 bulb ["r8c2"]
arrow-2: arrow r8c3-r8c4 bulb ["r8c2"]
arrow-3: arrow r9c7 bulb ["r8c7"]
arrow-4: arrow r3c6-r4c6-r5c6-r6c6-r7c6-r8c6 bulb ["r2c6"]
arrow-5: arrow r5c3-r6c3 bulb ["r4c2"]
arrow-6: arrow r9c4-r9c5 bulb ["r9c3"]
quadruple-1: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,2,8,9]
quadruple-2: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,2,8,9]
quadruple-3: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,5,6,7]
quadruple-4: quadruple r1c1-r1c2-r2c1-r2c2 digits [9]
quadruple-5: quadruple r7c8-r7c9-r8c8-r8c9 digits [7]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"cage","cells":[20,21,29,30,38,39,47,48,56,57],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"cage","cells":[23,24,32,33,41,42,50,51,59,60],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"cage","cells":[64,65,66],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"cage","cells":[34,43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"cage","cells":[49,58],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"cage","cells":[12,13,14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"cage","cells":[2,3],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"cage","cells":[28],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"cage","cells":[54,63,72],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"cage","cells":[74,75,76],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"cage","cells":[37,46,55],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"cage","cells":[1,10,19],"color":"#000000","labelColor":"#000000"}}
```

What Fools These Mortals Be
"Normal" Schrödinger rules apply.
(i.e. place the digits 0 through 9 once each in every row, column and box; two of the digits will have to share a Schrödinger Cell; each row, column and box contains exactly one Schrödinger Cell, digits that share a cell add their values together for all clues).
Quadruple: Digits in a circle appear at least once in the 4 surrounding cells.
Cages: Digits in an individual cage cannot repeat, and digits in cages with the same color add up to the same total.
Arrows: Digits along an arrows path add up to the value in the circle.
