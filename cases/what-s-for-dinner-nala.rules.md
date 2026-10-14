---
fog:
  initiallyLit:
    - r4c1
    - r4c4
    - r5c1
    - r5c4
format: open-rules
title: What’s for Dinner, Nala?
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/whats-for-dinner-nala
case: https://sudoku-sleuth.com/cases/what-s-for-dinner-nala
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f1360864e7bbc977eec88f6a227fb2b9
---

```rules
sudoku 9x9
thermo-1: thermo r7c1-r8c2-r9c2
thermo-2: thermo r2c1-r2c2-r1c3-r2c4-r2c5
thermo-3: thermo r3c8-r4c8-r5c9-r6c8-r7c8
thermo-4: thermo r8c5-r7c6-r7c5-r8c4-r9c4
thermo-5: thermo r5c3-r5c4-r4c4-r3c3-r4c2-r4c1-r5c1
thermo-6: thermo r1c7-r1c6-r2c7-r3c7-r2c8
thermo-7: thermo r5c5-r4c6-r3c6
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r1c3-r2c3 white
kropki-3: kropki r7c4-r8c4 white
kropki-4: kropki r4c3-r4c4 black
kropki-5: kropki r6c3-r7c3 black
kropki-6: kropki r5c7-r6c7 black
kropki-7: kropki r1c8-r1c9 black
```

```drawing
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0,"height":1.066,"rounded":true,"thickness":0,"angle":135,"text":"🍕","textColor":"#0000005d","fontSize":40.6,"textStroke":"#ffffff","textStrokeWidth":1}}
```

The only thing that Nala might prefer over playing with her favourite toys might be eating. Find out what’s for dinner today and judge for yourself if Nala should get her share or not! :)

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Numbers on a thermometer strictly increase as they move away from the bulb towards the tip. There is only one tip for each thermometer and each thermometer has its own color. Elements of the same color are connected. 

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
