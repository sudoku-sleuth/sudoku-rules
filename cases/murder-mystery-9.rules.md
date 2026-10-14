---
format: open-rules
title: Murder Mystery 9
setter: The Bard
source: https://sudokupad.app/g86obprwpd
case: https://sudoku-sleuth.com/cases/murder-mystery-9
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
exported: c2a902c7f728ecf7c122dd24d0224612
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
cage-1: cage r7c7-r8c7 repeats false total 8 connected true
cage-2: cage r7c8-r8c8-r9c8 repeats false total 23 connected true
cage-3: cage r7c9-r8c9-r9c9 repeats false total 11 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo r4c5-r5c6-r5c5-r4c4-r5c4-r6c5
kropki-1: kropki r1c7-r1c8 white
kropki-2: kropki r1c8-r1c9 white
kropki-3: kropki r2c8-r2c9 white
kropki-4: kropki r2c7-r2c8 white
kropki-5: kropki r3c7-r3c8 white
kropki-6: kropki r3c8-r3c9 white
whispers-1: whispers r9c1-r8c1-r7c1-r7c2-r7c3-r8c3-r9c3-r9c2 loop false gap 5
whispers-2: whispers r8c1-r9c1-r9c2-r9c3-r8c3-r7c3-r7c2-r7c1 loop false gap 5
quadruple-1: quadruple r1c4-r1c5-r2c4-r2c5 digits [2]
quadruple-2: quadruple r1c5-r1c6-r2c5-r2c6 digits [4]
quadruple-3: quadruple r2c5-r2c6-r3c5-r3c6 digits [2]
quadruple-4: quadruple r4c7-r4c8-r5c7-r5c8 digits [8]
quadruple-5: quadruple r4c8-r4c9-r5c8-r5c9 digits [2]
quadruple-6: quadruple r7c5-r7c6-r8c5-r8c6 digits [6,8]
quadruple-7: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,6,7]
quadruple-8: quadruple r8c4-r8c5-r9c4-r9c5 digits [8]
quadruple-9: quadruple r5c2-r5c3-r6c2-r6c3 digits [3]
quadruple-10: quadruple r4c2-r4c3-r5c2-r5c3 digits [4,8]
quadruple-11: quadruple r4c1-r4c2-r5c1-r5c2 digits [6]
quadruple-12: quadruple r5c1-r5c2-r6c1-r6c2 digits [8]
parity-cells-1: parity-cells r1c3-r1c1-r3c1-r3c3 parity "odd"
parity-cells-2: parity-cells r1c2-r2c1-r2c2-r2c3-r3c2 parity "even"
```

```drawing
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

The famous Sherdoku Holmes can never rest. All the digits went to the town square but there was a murderer prowling the streets. We need your help to with the clues solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1: Club 32 – Odd & Even: Digits in a greyed circle are odd, and digits in a greyed square are even. For this mystery 0 is considered even.
Box 3: Grocery Store - Consecutive Pairs: Digits separated by a white dot must be consecutive.
Box 5: Dog Park - Thermometers: Digits along the grey line increase from bulb end.
Box 7: Hardware Store - German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Box 9: Parking Lot - Killer cages: All digits in their cage sum to the value in the corner.
Box 2,4,6,8: Roadways – Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
You must identify the killer as they take their last victim. You will place/identify the killer after all else has been eliminated in the final cell and you need the following clue: A note by the killer was found and reads: “Each second is like a mirror that reminds me of the primal forces within me, with these victims I shall finally be even.”
