---
format: open-rules
title: Murder Mystery 10
setter: The Bard
source: https://sudokupad.app/8psdy7d56e
case: https://sudoku-sleuth.com/cases/murder-mystery-10
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
exported: 634487035b6080a7a5fbe1b28707f151
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
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r7c7-r7c8 white
kropki-2: kropki r7c8-r7c9 white
kropki-3: kropki r9c7-r9c8 white
kropki-4: kropki r7c9-r8c9 black
kropki-5: kropki r8c8-r9c8 black
kropki-6: kropki r7c7-r8c7 black
arrow-1: arrow r5c5-r6c4 bulb ["r4c6"]
arrow-2: arrow r4c4-r5c4 bulb ["r4c5"]
whispers r9c1-r9c2-r9c3-r8c3-r8c2-r8c1-r7c1-r7c2-r7c3 loop false gap 5
renban r4c1-r5c2-r5c3
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r1c3-r2c3 sum 10
pair-3: pair r2c1-r2c2 sum 5
parity-cells-1: parity-cells r4c8-r8c6-r3c4 parity "odd"
parity-cells-2: parity-cells r5c7-r3c5-r9c4 parity "even"
allowed-digits-1: allowed-digits r2c7-r2c8-r3c7-r3c8 digits [0,3,5,6,7,8]
allowed-digits-2: allowed-digits r2c8-r2c9-r3c8-r3c9 digits [0,1,2,4,5,9]
allowed-digits-3: allowed-digits r1c8-r1c9-r2c8-r2c9 digits [0,2,3,4,6,8]
allowed-digits-4: allowed-digits r1c7-r1c8-r2c7-r2c8 digits [0,1,3,5,7,9]
```

```drawing
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Sherdoku Holmes’ legacy continues. 
All the digits tried to have a nice evening out but this time there was a pair of murderers prowling the streets. We need your help to with the clues solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1: Gas Station – XV: Digits with an X add to 10, Digits with a V add to 5.
Box 3: Night Club – Anti-Quadruples: Digits in the RED circle cannot appear in one of the four surrounding cells.
Box 5: Skating Ring - Arrow: Digits on an arrow must sum to the digit placed in that arrow's circle.
Box 7: Parking Garage - German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Box 9: Hardware store - Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
Box 2,4,6,8: Roadways - Odd/Even: Digits in bordered circles must be odd. Digits in bordered squares must be even. Renban: Digits placed on the purple line must be a non-repeating set of consecutive digits, in any order. 
You must identify the killers as they take their last victims. You will place/identify the killer after all else has been eliminated in the final cells the police have determined that the killers are identical twins with the same killer instinct.
