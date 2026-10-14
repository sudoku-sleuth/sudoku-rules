---
format: open-rules
title: Who Keeps Inviting Zero!?
setter: The Bard
source: https://sudokupad.app/2h224rgs13
case: https://sudoku-sleuth.com/cases/who-keeps-inviting-zero
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
exported: ef8e8ecb6c43cb86c7c23d923a640404
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
cage-1: cage r9c4-r9c5-r9c6 repeats false total 15 connected true
cage-2: cage r7c5-r7c6 repeats false total 15 connected true
kropki-1: kropki r1c5-r1c6 white
kropki-2: kropki r2c6-r3c6 white
kropki-3: kropki r9c5-r9c6 white
kropki-4: kropki r4c7-r5c7 white
kropki-5: kropki r2c2-r3c2 white
kropki-6: kropki r2c4-r2c5 white
kropki-7: kropki r2c5-r3c5 white
kropki-8: kropki r4c2-r5c2 white
kropki-9: kropki r5c2-r5c3 white
kropki-10: kropki r8c2-r8c3 white
kropki-11: kropki r2c8-r3c8 white
kropki-12: kropki r1c3-r1c4 white
kropki-13: kropki r3c6-r4c6 black
kropki-14: kropki r8c4-r8c5 black
region-sum r1c5-r1c6-r2c6-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r8c6-r8c5-r8c4-r7c4-r7c3-r6c3-r5c3-r5c2-r4c2-r3c2-r2c2-r2c3-r2c4 segments [["r1c5","r1c6","r2c6","r3c6"],["r3c7"],["r4c7","r5c7","r6c7"],["r7c7","r8c7"],["r8c6","r8c5","r8c4","r7c4"],["r7c3"],["r6c3","r5c3","r5c2","r4c2"],["r3c2","r2c2","r2c3"],["r2c4"]]
parity-cells r6c4-r9c7-r6c2-r1c1-r9c1 parity "odd"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[3,4,5,6,7,8,17,26,35,44],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[12,13,14,15,16,25,34,43,52,61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[53,62,64,65,66,67,68,69,70,71],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[0,9,18,19,27,36,45,54,63,72],"color":"#000000","labelColor":"#000000"}}
```

Place all the digits 0-9 in each row, column, and box, but one digit in each will not fit. The missing digit can vary or repeat. 
Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
Odd: Digits in a grey circle are odd.  
Region Sum Lines: Digits in each box along the blue line add up to the same value. 
Killer Cages: Digits in cages add up to the value in the corner if given and do not repeat.
