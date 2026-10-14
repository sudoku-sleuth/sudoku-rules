---
format: open-rules
title: A Space Odyssey
setter: The Bard
source: https://sudokupad.app/egmk3joydq
case: https://sudoku-sleuth.com/cases/a-space-odyssey
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
    - - r1c2
      - r1c3
      - r2c2
      - r2c3
      - r3c2
      - r3c3
      - r4c3
      - r5c3
      - r6c3
    - - r1c5
      - r1c6
      - r2c5
      - r2c6
      - r3c5
      - r3c6
      - r4c5
      - r4c6
      - r5c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c9
      - r3c9
      - r4c9
      - r5c9
      - r6c9
      - r7c9
    - - r1c1
      - r2c1
      - r3c1
      - r4c1
      - r4c2
      - r5c1
      - r5c2
      - r6c1
      - r6c2
    - - r1c4
      - r2c4
      - r3c4
      - r4c4
      - r5c4
      - r6c4
      - r7c3
      - r7c4
      - r8c4
    - - r2c7
      - r2c8
      - r3c7
      - r3c8
      - r4c7
      - r4c8
      - r5c7
      - r5c8
      - r6c7
    - - r7c1
      - r7c2
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
      - r9c4
    - - r5c5
      - r6c5
      - r6c6
      - r7c5
      - r7c6
      - r8c5
      - r8c6
      - r9c5
      - r9c6
    - - r6c8
      - r7c7
      - r7c8
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 5d6acad4c781b497dd00e34628df7b2f
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
unique-19: unique r1c2-r1c3-r2c2-r2c3-r3c2-r3c3-r4c3-r5c3-r6c3
unique-20: unique r1c5-r1c6-r2c5-r2c6-r3c5-r3c6-r4c5-r4c6-r5c6
unique-21: unique r1c7-r1c8-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9
unique-22: unique r1c1-r2c1-r3c1-r4c1-r4c2-r5c1-r5c2-r6c1-r6c2
unique-23: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c3-r7c4-r8c4
unique-24: unique r2c7-r2c8-r3c7-r3c8-r4c7-r4c8-r5c7-r5c8-r6c7
unique-25: unique r7c1-r7c2-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3-r9c4
unique-26: unique r5c5-r6c5-r6c6-r7c5-r7c6-r8c5-r8c6-r9c5-r9c6
unique-27: unique r6c8-r7c7-r7c8-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r3c5-r3c6 repeats false total 12 connected true
cage-2: cage r4c5-r4c6-r5c6 repeats false total 16 connected true
cage-3: cage r1c5-r2c5 repeats false total 6 connected true
cage-4: cage r1c6-r2c6 repeats false total 8 connected true
thermo r1c4-r2c4
kropki-1: kropki r3c6-r4c6 white
kropki-2: kropki r1c9-r2c9 white
kropki-3: kropki r1c7-r1c8 black
arrow-1: arrow r9c5-r8c5-r7c5-r6c5 bulb ["r9c6"]
arrow-2: arrow r6c6-r7c6 bulb ["r5c5"]
whispers r1c2-r1c3-r2c2-r2c3-r3c2-r3c3 loop false gap 5
pair r9c2-r9c3 sum 10
negative relations [{"op":"difference","value":1}] except [["r3c6","r4c6"],["r1c9","r2c9"],["r1c7","r1c8"],["r9c2","r9c3"]]
quadruple r5c1-r5c2-r6c1-r6c2 digits [4,6,7,9]
parity-cells r9c8 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#000000","thickness":0}}
```

One of the digits 0-9 are to be placed in the empty cells in each row, column, and region but cannot repeat. 
Non-consecutive: Adjacent digits may not be consecutive except when forced by other rules. 
Monoliths: These are a void and suck up digits, but also act as a bridge, digits directly across from each other through the void cannot be consecutive.
X: Digits separated by an X add to 10.
Odd: Digits in a grey circle are odd. 
Kropki: Digits between white dot are consecutive, and digits between a black dot are in a ratio of 2:1.
Quadruples: digits in the small white circle must appear in one of the four surrounding cells.
Thermometers: Digits along the grey line increase from bulb end.
German Whisper: Adjacent digits on a green line must be at least 5 apart.
Killer cages: Digits in cages add up to the total in the corner. 
Arrows: digits along the arrow add up to the value in the circle.
