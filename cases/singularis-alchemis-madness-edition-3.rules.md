---
format: open-rules
title: Singularis alchemis- madness edition 3
setter: Chip Sounder
source: https://sudokupad.app/3crzd2vvir
case: https://sudoku-sleuth.com/cases/singularis-alchemis-madness-edition-3
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
exported: 067430d1a87a4b395347f0ee27be7d6d
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
cage r4c4-r5c4 repeats false total 7 connected true
thermo r1c5-r1c4-r2c4
kropki-1: kropki r5c5-r6c5 black
kropki-2: kropki r4c5-r5c5 white
arrow r6c3-r5c3 bulb ["r6c4"]
whispers r3c6-r2c6-r1c6 loop false gap 3
parity r1c3-r1c2-r1c1 loop false
renban r6c6-r5c6-r4c6
region-sum r4c3-r3c3-r2c3-r1c3 segments [["r4c3","r3c3"],["r2c3","r1c3"]]
```

Any clue type can only appear once.
-Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row, column and 2x3 box.
-Cells separated by a black dot are a 1:2 ratio. 
-Cells separated by a white dot are consecutive.
-Digits on a purple renban must be a set of consecutive digits in any order without repeating a digit.
-Digits on a green German whispers line must differ by at least 3.
-Digits on a thermometer must rise from the bulb end.
-Digits in a dotted cage cannot repeat and sum to the total given in the top left corner of the cage.
-Digits on an arrowed line sum to the digits in the connected circle.
-.Box borders divide blue lines into segments with the same sum.
-Adjacent cells along a red line must alternate between odd and even.
