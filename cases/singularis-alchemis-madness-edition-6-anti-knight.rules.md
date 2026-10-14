---
fog:
  initiallyLit:
    - r3c1
    - r4c1
    - r5c1
    - r5c2
    - r6c2
    - r7c2
format: open-rules
title: Singularis alchemis.. madness edition 6- anti-knight
setter: Chip Sounder
source: https://sudokupad.app/hs9trv1xb2
case: https://sudoku-sleuth.com/cases/singularis-alchemis-madness-edition-6-anti-knight
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
exported: 1dc6ef12832a6f4168d4d0b48f34a137
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
cage r4c3-r5c3-r6c3 total 18 connected true
anti-knight
thermo r9c3-r8c3-r7c3
kropki-1: kropki r7c1-r7c2 black
kropki-2: kropki r4c3-r5c3 white
arrow r3c6-r2c5 bulb ["r4c6"]
whispers-1: whispers r5c2-r6c2-r7c2 gap 4
whispers-2: whispers r9c4-r8c4-r7c4-r6c4-r5c4 gap 5
parity r8c8-r8c7-r8c6-r8c5-r7c5
region-sum r3c1-r4c1-r5c1 segments [["r3c1"],["r4c1","r5c1"]]
renban r7c1-r8c2
pair-1: pair r5c1-r5c2 sum 10
pair-2: pair r3c1-r3c2 sum 5
quadruple r6c3-r6c4-r7c3-r7c4 digits [1]
parity-cells r5c5 parity "odd"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,6.5],[5.5,4.5]],"color":"#b7b7b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[4.5,5.5]],"color":"#eeee39ff","thickness":8.32,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
```

Any clue type can only appear once.
-Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
-The grid is covered in fog. Placing a correct digit will clear the fog from the surrounding cells of that digit. No bifurcation is necessary.
-Cells separated by a knight's move (in chess) cannot contain the same digit.
-Cells separated by an X sum to 10. 
-Cells separated by a V sum to 5.
-.Box borders divide blue lines into segments with the same sum.
-Cells separated by a black dot are a 1:2 ratio.
-Adjacent digits along an orange line must differ by at least 4.
-Digits in a dotted cage cannot repeat and sum to the total given in the top left corner of the cage.
-Cells separated by a white dot are consecutive.
-Digits on a purple renban must be a set of consecutive digits in any order without repeating a digit.
-Digits on a thermometer must rise from the bulb end.
-Digits on a green German whispers line must differ by at least 5.
-Digits inside a circle clue must be in the 2x2 of cells touching the quad circle.
-Digits in a highlighted grey circle are odd.
-Digits on an arrowed line sum to the digits in the connected circle.
-Digits on a thin grey line must be between the digits in the connected circles.
Digits on the yellow line must read the same forwards as backwards.
-Adjacent digits along a red line must alternate parity (odd/even)
