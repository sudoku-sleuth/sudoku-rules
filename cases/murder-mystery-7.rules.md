---
format: open-rules
title: Murder Mystery 7
setter: The Bard
source: https://sudokupad.app/swwy7yfr0e
case: https://sudoku-sleuth.com/cases/murder-mystery-7
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
exported: 1916d7a655f5dd4e8b7ea4a722e548d8
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
cage-1: cage r4c4-r5c4 repeats false total 15 connected true
cage-2: cage r5c6-r6c6 repeats false total 15 connected true
cage-3: cage r5c5-r6c4-r6c5 repeats false total 3 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r7c7-r8c8-r9c9
thermo-2: thermo r7c8-r8c9-r7c9
thermo-3: thermo r8c7-r9c8-r9c7
kropki-1: kropki r4c3-r5c3 white
kropki-2: kropki r5c1-r6c1 white
kropki-3: kropki r2c6-r3c6 white
kropki-4: kropki r4c7-r5c7 white
kropki-5: kropki r4c8-r5c8 white
kropki-6: kropki r8c5-r8c6 white
kropki-7: kropki r5c2-r6c2 white
kropki-8: kropki r9c5-r9c6 black
kropki-9: kropki r8c5-r9c5 black
kropki-10: kropki r7c4-r7c5 black
kropki-11: kropki r4c9-r5c9 black
kropki-12: kropki r6c1-r6c2 black
arrow r1c3-r2c3-r3c3-r3c2-r3c1-r2c1-r2c2 bulb ["r1c1","r1c2"]
whispers-1: whispers r7c1-r8c2-r9c3 loop false gap 5
whispers-2: whispers r7c3-r8c2-r9c1 loop false gap 5
whispers-3: whispers r8c3-r7c3 loop false gap 5
whispers-4: whispers r8c1-r9c1 loop false gap 5
pair-1: pair r2c9-r3c9 sum 10
pair-2: pair r3c7-r3c8 sum 10
pair-3: pair r2c7-r2c8 sum 5
pair-4: pair r1c8-r1c9 sum 5
pair-5: pair r3c8-r3c9 sum 5
allowed-digits-1: allowed-digits r4c7-r4c8-r5c7-r5c8 digits [0,1,2,4,5,6,7,8,9]
allowed-digits-2: allowed-digits r1c5-r1c6-r2c5-r2c6 digits [0,3,5,7,8,9]
allowed-digits-3: allowed-digits r2c5-r2c6-r3c5-r3c6 digits [0,2,5,6,7,9]
allowed-digits-4: allowed-digits r2c4-r2c5-r3c4-r3c5 digits [0,2,3,4,5,6,7,8,9]
allowed-digits-5: allowed-digits r1c4-r1c5-r2c4-r2c5 digits [0,2,3,4,5,6,7,9]
allowed-digits-6: allowed-digits r4c2-r4c3-r5c2-r5c3 digits [0,1,2,4,6,9]
allowed-digits-7: allowed-digits r8c4-r8c5-r9c4-r9c5 digits [0,1,2,3,4,5,6,8,9]
```

```drawing
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Sherdoku Holmes it happened again. All the digits went to a party but there was a murderer among them. We need your help to with the clues solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1: The Buffet Room - Digits on an arrow must sum to the number placed in that arrow's pill. The pill number must be read left to right.
Box 3: The Sitting Room - XV: Digits with an X add to 10, Digits with a V add to 5.
Box 5: The Kitchen - Killer cages: All digits in their cage sum to the value in the corner.
Box 7: Dance Room - German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Box 9: The Bar - Thermometers: Digits along the grey line increase from bulb end.
Box 2,4,6,8: Hallways – Kropki: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive. In these boxes ONLY, all dots are given. Anti-Quadruples: Digits in the Red circle cannot appear in one of the four surrounding cells.

Find the killer as they hide their last victim. You will place/identify the killer once all else has been eliminated. In order to identify him know this: 
You will need all your senses added together to realize who the killer is.
