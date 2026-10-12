---
fog:
  initiallyLit:
    - 39
    - 40
    - 41
format: open-rules
title: Nala's Friend
setter: Sandra & Nala
source: ""
case: https://sudoku-sleuth.com/cases/nala-s-friend
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r4c6-r5c6-r6c6-r7c5-r7c4-r6c3-r5c4
thermo-2: thermo r5c8-r6c8-r7c8-r8c9-r8c8
thermo-3: thermo r6c5-r7c6-r8c6-r7c7
thermo-4: thermo r3c8-r4c9-r5c9-r6c9-r7c9
thermo-5: thermo r5c1-r5c2-r4c3-r3c3-r4c4
thermo-6: thermo r1c3-r2c4-r2c5-r3c6
thermo-7: thermo r7c1-r7c2-r8c3-r8c2
kropki-1: kropki r4c6-r5c6 colour "white"
kropki-2: kropki r4c3-r5c3 colour "white"
kropki-3: kropki r8c1-r8c2 colour "white"
kropki-4: kropki r3c6-r3c7 colour "white"
kropki-5: kropki r5c6-r6c6 colour "black"
kropki-6: kropki r9c4-r9c5 colour "black"
kropki-7: kropki r2c2-r3c2 colour "black"
kropki-8: kropki r1c8-r1c9 colour "black"
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.7,8.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":" 🦔","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
```

After it gets dark Nala loves to go outside and look for new friends in our backyard. Will she find one today?

Normal Sudoku rules apply. 

Numbers on a thermometer strictly increase as they move away from the bulb towards the tip. There is only one tip for each thermometer and each thermometer has its own color. Elements of the same color are connected. 

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
