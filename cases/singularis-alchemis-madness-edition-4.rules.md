---
fog:
  initiallyLit:
    - 75
    - 76
    - 77
format: open-rules
title: Singularis Alchemis.. madness edition 4
setter: Chip Sounder
source: https://sudokupad.app/m7nxjdfjwj
case: https://sudoku-sleuth.com/cases/singularis-alchemis-madness-edition-4
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
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
cage r9c4-r9c5-r9c6 total 14 connected true
thermo r9c2-r8c2-r7c2-r7c3-r7c4
kropki-1: kropki r9c4-r9c5 colour "black"
kropki-2: kropki r9c5-r9c6 colour "white"
arrow r7c8-r8c8-r9c8 bulb ["r6c7"]
whispers r8c3-r8c4-r8c5-r8c6-r8c7 gap 5
renban r7c6-r7c7-r8c8
region-sum r6c2-r6c3-r6c4-r6c5-r6c6-r6c7 segments [["r6c2","r6c3"],["r6c4","r6c5","r6c6"],["r6c7"]]
pair-1: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-2: pair r8c3-r9c3 relation {"op":"sum","value":5}
quadruple r8c4-r8c5-r9c4-r9c5 digits [7]
little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 27
sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 17
parity-cells-1: parity-cells r2c3 parity "odd"
parity-cells-2: parity-cells r1c2 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,0.5],[7.5,0.5]],"color":"#fc04049e","thickness":17.28,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.38,2.11],[4.5,2.06],[4.62,2.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.62,2.89],[4.5,2.94],[4.38,2.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.11,2.62],[4.06,2.5],[4.11,2.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.89,2.38],[4.94,2.5],[4.89,2.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.38,7.06],[4.5,7.11],[4.62,7.06]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.62,7.94],[4.5,7.89],[4.38,7.94]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.06,7.62],[4.11,7.5],[4.06,7.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.94,7.38],[4.89,7.5],[4.94,7.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[2.5,7.5],[2.5,6.5],[3.5,5.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,2.5],[5.5,0.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
```

Any clue type can only appear once.
-Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
-The grid is covered in fog. Placing a correct digit will clear the fog from the surrounding cells of that digit. No bifurcation is necessary.
-Digits in a dotted cage cannot repeat and sum to the total given in the top left corner of the cage.
-Cells separated by a black dot are a 1:2 ratio. -Cells separated by a white dot are consecutive.
-Cells separated by an X sum to 10. -Cells separated by a V sum to 5. No negative constraints.
-Digits on a green German whispers line must differ by at least 5.
-Digits inside a circle clue must be in the 2x2 of cells touching the quad circle.
-Digits on a thermometer must rise from the bulb end.
-Digits on a purple renban must be a set of consecutive digits in any order without repeating a digit.
-.Box borders divide blue lines into segments with the same sum.
-Digits on an arrowed line sum to the digits in the connected circle.
-Adjacent digits on a red line must alternate between low (147), medium (258) and high (369). Any 3 in a row on a line must contain 1 of each modularity.
-Clues outside the grid without arrows sum the digits between the 1 and 9 in the respective row/column..
-Digits orthogonally connected to a maximum clue (inequality signs pointing outwards) must be less than the digit inside the fortress. 
-Digits orthogonally connected to a minimum clue (inequality signs pointing inwards) must be greater than the digit inside the fortress. 
-The sum of the digits on the line must equal the sum of the digits in its connected circles. Digits may repeat if allowed by other rules.
-Adjacent digits on an orange line must alternate between low (123), medium (456) and high (789). Any 3 in a row on a line must contain 1 of each entropy.
-Clues outside the grid with an arrow give the sum of the digits in the indicated direction, digits may repeat if other rules allow.
-Digits in a highlighted grey circle are odd.
-Digits in a highlighted grey square are even.
