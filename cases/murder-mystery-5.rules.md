---
format: open-rules
title: Murder Mystery 5
setter: The Bard
source: https://sudokupad.app/rz5rr2ipq7
case: https://sudoku-sleuth.com/cases/murder-mystery-5
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
exported: 5f1b7f5893ff349540ceacdedb5c3b16
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
cage-1: cage r2c7-r2c8 repeats false total 5 connected true
cage-2: cage r1c8-r1c9 repeats false total 15 connected true
cage-3: cage r3c7-r3c8-r3c9 repeats false total 10 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r7c2-r8c2-r9c2-r9c3-r8c3-r7c3
thermo-2: thermo r9c1-r8c1-r7c1
kropki-1: kropki r7c7-r7c8 white
kropki-2: kropki r8c7-r9c7 white
kropki-3: kropki r8c8-r8c9 white
kropki-4: kropki r7c9-r8c9 black
kropki-5: kropki r7c8-r7c9 black
arrow-1: arrow r1c2-r1c1-r2c1-r3c1 bulb ["r1c3"]
arrow-2: arrow r3c3-r3c2 bulb ["r2c2","r2c3"]
whispers-1: whispers r4c6-r5c5-r6c4 loop false gap 5
whispers-2: whispers r5c6-r6c6-r6c5 loop false gap 5
whispers-3: whispers r4c4-r4c5-r5c4 loop false gap 5
quadruple-1: quadruple r5c7-r5c8-r6c7-r6c8 digits [8]
quadruple-2: quadruple r4c7-r4c8-r5c7-r5c8 digits [4]
quadruple-3: quadruple r5c2-r5c3-r6c2-r6c3 digits [6]
quadruple-4: quadruple r8c5-r8c6-r9c5-r9c6 digits [8]
quadruple-5: quadruple r8c4-r8c5-r9c4-r9c5 digits [7]
quadruple-6: quadruple r1c4-r1c5-r2c4-r2c5 digits [4]
quadruple-7: quadruple r4c2-r4c3-r5c2-r5c3 digits [1]
quadruple-8: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,9]
quadruple-9: quadruple r2c5-r2c6-r3c5-r3c6 digits [5]
quadruple-10: quadruple r4c1-r4c2-r5c1-r5c2 digits [7]
quadruple-11: quadruple r4c8-r4c9-r5c8-r5c9 digits [7]
quadruple-12: quadruple r5c8-r5c9-r6c8-r6c9 digits [9]
```

```drawing
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Murder Mystery 5 (0-9 Challenge) 
Sherdoku Holmes! We have another head scratcher.  Our latest numeral killer is on the loose in the restaurant and we need your help to solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1 Restrooms (Arrow) - Digits on an arrow must sum to the number placed in that arrow's circle, or pill. The pill number must be read left right.
Box 3 Kitchen (Killer cage) - Digits in a cage add up to the total in the corner.
Box 5 Dance Floor (German Whisper) - Adjacent digits on a green line must have a difference of at least 5.
Box 7 Waiting Area (Thermos) – Digits along the grey line must increase from the bulb end.
Box 9 Bar (Kropki) – Digits on the white dots are consecutive. Digits on the black dots have a ratio of 1:2.
Box 2,4,6,8 Street sitting (Quads) - Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
In the end you will find a single cell unresolved in which the killer is taking his last victim. You must place the correct digit in the cell to that digit to be arrested: the police are ready because the killer is ready to get EVEN for PRIMarly being the only digit like him.
