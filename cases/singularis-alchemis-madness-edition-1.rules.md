---
fog:
  initiallyLit:
    - 22
    - 23
    - 28
    - 29
format: open-rules
title: Singularis alchemis- madness edition 1
setter: Chip Sounder
source: https://sudokupad.app/3j07kx0amx
case: https://sudoku-sleuth.com/cases/singularis-alchemis-madness-edition-1
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 stated true
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 stated true
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2 stated true
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 stated true
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 stated true
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 stated true
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6 stated true
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3 stated true
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6 stated true
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3 stated true
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6 stated true
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3 stated true
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6 stated true
anti-king stated true
thermo r2c3-r1c3
kropki-1: kropki r5c5-r5c6 colour "black"
kropki-2: kropki r4c5-r5c5 colour "white"
whispers r4c5-r5c6 loop false gap 3
parity r6c4-r6c5-r6c6 loop false
renban r3c5-r4c4
region-sum r3c4-r2c5-r2c4 segments [["r3c4"],["r2c5","r2c4"]]
pair r2c4-r3c4 sum 5
quadruple r4c5-r4c6-r5c5-r5c6 digits [1,2,3,4]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,3.5],[5.5,3.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,2.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
```

Any clue type can only appear once.
-Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row, column and 3x3 box.
-The grid is covered in fog. Placing a correct digit will clear the fog from the surrounding cells of that digit. No bifurcation is necessary.
-Cells separated by a king's move (in chess) cannot contain the same digit.
-Digits inside a circle clue must be in the 2x2 of cells touching the quad circle.
-Cells separated by a black dot are a 1:2 ratio. 
-Cells separated by a white dot are consecutive.
-Digits on a green German whispers line must differ by at least 3.
-Adjacent digits on an orange line must alternate between low (12), medium (45) and high (56). Any 3 in a row on a line must contain 1 of each entropy.
Adjacent cells along a red line must alternate between odd and even.
-Digits on a purple renban must be a set of consecutive digits in any order without repeating a digit.
-.Box borders divide blue lines into segments with the same sum.
-Cells separated by a V sum to 5.
-Digits on a thermometer must rise from the bulb end.
-The sum of the digits on the line must equal the sum of the digits in its connected circles.
