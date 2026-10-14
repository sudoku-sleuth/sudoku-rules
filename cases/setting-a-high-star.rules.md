---
format: open-rules
title: Setting A High Star
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/setting-a-high-star
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
    - - r1c4
      - r2c4
      - r3c3
      - r3c4
      - r4c1
      - r4c2
      - r4c3
      - r4c4
    - - r1c6
      - r1c7
      - r1c8
      - r2c6
      - r2c7
      - r2c8
      - r3c7
      - r3c8
    - - r1c5
      - r2c5
      - r3c5
      - r3c6
      - r4c5
      - r4c6
      - r4c7
      - r4c8
    - - r6c1
      - r6c2
      - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r6c3
      - r6c4
      - r7c4
      - r8c4
    - - r6c7
      - r6c8
      - r7c6
      - r7c7
      - r7c8
      - r8c6
      - r8c7
      - r8c8
    - - r5c5
      - r5c6
      - r5c7
      - r5c8
      - r6c5
      - r6c6
      - r7c5
      - r8c5
exported: afaaa252f3c0ac453b2f53ef94008bb5
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2
unique-18: unique r1c4-r2c4-r3c3-r3c4-r4c1-r4c2-r4c3-r4c4
unique-19: unique r1c6-r1c7-r1c8-r2c6-r2c7-r2c8-r3c7-r3c8
unique-20: unique r1c5-r2c5-r3c5-r3c6-r4c5-r4c6-r4c7-r4c8
unique-21: unique r6c1-r6c2-r7c1-r7c2-r7c3-r8c1-r8c2-r8c3
unique-22: unique r5c1-r5c2-r5c3-r5c4-r6c3-r6c4-r7c4-r8c4
unique-23: unique r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8
unique-24: unique r5c5-r5c6-r5c7-r5c8-r6c5-r6c6-r7c5-r8c5
cage-1: cage r1c1-r1c2-r2c1-r2c2 repeats false total 14 connected true
cage-2: cage r1c7-r1c8-r2c7-r2c8 repeats false total 14 connected true
cage-3: cage r7c7-r7c8-r8c7-r8c8 repeats false total 14 connected true
cage-4: cage r7c1-r7c2-r8c1-r8c2 repeats false total 14 connected true
cage-5: cage r4c4-r4c5-r5c4-r5c5 repeats false total 10 connected true
thermo-1: thermo r4c6-r3c5-r3c4-r4c3-r5c3-r6c4-r6c5
thermo-2: thermo r5c7-r6c6-r6c7-r5c6
kropki-1: kropki r4c1-r5c1 black
kropki-2: kropki r8c4-r8c5 black
parity-cells-1: parity-cells r3c7-r8c3 parity "odd"
parity-cells-2: parity-cells r1c8-r2c7-r8c1 parity "even"
```

Normal 8x8 Sudoku rules apply, place the digits 1-8 once each in every row, column and region given. 
Normal thermo rules apply, digits on a thermometer must increase starting at the bulb end.
Normal killer cage rules apply, digits in a cage must sum to the total given and have no repeats.
Digits seperated by a black dot are in a ratio 1:2
Cells marked with a grey circle must be odd.
Cells marked with a grey square must be even.
And last but not least, there is exactly one '3 in the corner' in this grid.
