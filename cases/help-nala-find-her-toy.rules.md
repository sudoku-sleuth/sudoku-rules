---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 9
    - 10
    - 11
format: open-rules
title: Help Nala find her Toy!
setter: Sandra & Nala
source: ""
case: https://sudoku-sleuth.com/cases/help-nala-find-her-toy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r7c1-r6c1-r5c1 bulb ["r8c1"]
arrow-2: arrow r1c4-r2c4-r3c3-r3c2-r2c2 bulb ["r1c3"]
arrow-3: arrow r2c3-r1c2 bulb ["r3c4"]
arrow-4: arrow r2c6-r3c7 bulb ["r1c6"]
arrow-5: arrow r1c7-r1c8-r2c7 bulb ["r1c6"]
arrow-6: arrow r2c8-r1c9 bulb ["r2c9"]
arrow-7: arrow r5c9-r6c8-r5c7 bulb ["r4c9"]
arrow-8: arrow r4c3-r4c4-r4c5-r3c5 bulb ["r4c2"]
arrow-9: arrow r7c9-r8c9 bulb ["r8c8"]
arrow-10: arrow r7c7-r8c7 bulb ["r8c8"]
arrow-11: arrow r4c8-r3c7 bulb ["r3c9"]
arrow-12: arrow r8c3-r7c3 bulb ["r7c4"]
arrow-13: arrow r8c5-r9c4 bulb ["r7c4"]
arrow-14: arrow r5c6-r6c6 bulb ["r6c7"]
arrow-15: arrow r5c5-r6c4 bulb ["r6c5"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.58,"height":0.58,"rounded":true,"fill":"#69a59d","stroke":"#bb6d7b","thickness":5,"opacity":0.5,"angle":0}}
```

Nala lost her Toy in the fog (again). Can you help her find it? 

Normal Sudoku rules apply. 
Arrow: Digits along an arrow must sum to digit in the circle. Elements of the same color are connected. 
Fog of war: The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Nala will be thrilled about your help!
