---
fog:
  initiallyLit:
    - 22
    - 23
    - 28
    - 29
format: open-rules
title: Singularis alchemis- madness edition 2
setter: Chip Sounder
source: https://sudokupad.app/5uz21sbadi
case: https://sudoku-sleuth.com/cases/singularis-alchemis-madness-edition-2
library: https://rules.sudoku-sleuth.com/
status: read
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
cage r4c3-r5c3 repeats false total 7 connected true
thermo r4c3-r4c4
kropki-1: kropki r4c5-r5c5 colour "black"
kropki-2: kropki r5c5-r5c6 colour "white"
arrow r3c4-r3c3 bulb ["r2c4"]
whispers-1: whispers r4c5-r5c6 loop false gap 3
parity r6c4-r6c3-r5c3 loop false
whispers-2: whispers r1c1-r2c1 loop false gap 2
renban r4c5-r3c5-r4c6
region-sum r3c6-r2c6-r1c6 segments [["r3c6"],["r2c6","r1c6"]]
pair r5c4-r5c5 relation {"op":"sum","value":5}
quadruple r4c5-r4c6-r5c5-r5c6 digits [1,2,3]
parity-cells-1: parity-cells r1c2 parity "odd"
parity-cells-2: parity-cells r6c5 parity "even"
```

Any clue type can only appear once.
-Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row, column and 2x3 box.
-The grid is covered in fog. Placing a correct digit will clear the fog from the surrounding cells of that digit. No bifurcation is necessary.
-Digits inside a circle clue must be in the 2x2 of cells touching the quad circle.
-Cells separated by a black dot are a 1:2 ratio. 
-Cells separated by a white dot are consecutive.
-Digits on a green German whispers line must differ by at least 3.
-Cells separated by a V sum to 5.
-Digits on a purple renban must be a set of consecutive digits in any order without repeating a digit.
-Digits in a highlighted grey square are even.
-Adjacent cells along a red line must alternate between odd and even. 
-Digits in a dotted cage cannot repeat and sum to the total given in the top left corner of the cage. 
-Digits on a thermometer must rise from the bulb end
-Digits on an arrowed line sum to the digits in the connected circle.
-Box borders divide blue lines into segments with the same sum. 
-Digits in a highlighted grey circle are odd.
-Adjacent digits on an orange line must differ by at least 2.
