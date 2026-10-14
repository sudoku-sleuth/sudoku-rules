---
fog:
  initiallyLit:
    - r6c2
    - r6c3
    - r7c2
    - r7c3
format: open-rules
title: Toy Between Lines
setter: Sandra & Nala
source: ""
case: https://sudoku-sleuth.com/cases/toy-between-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e5d0aa0884a0043b31d5b475c2e6b724
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r6c3 white
kropki-2: kropki r7c4-r7c5 white
kropki-3: kropki r8c1-r8c2 white
kropki-4: kropki r8c1-r9c1 white
kropki-5: kropki r3c4-r3c5 white
kropki-6: kropki r1c2-r2c2 white
kropki-7: kropki r2c6-r2c7 white
kropki-8: kropki r7c2-r7c3 black
kropki-9: kropki r7c1-r7c2 black
kropki-10: kropki r8c4-r9c4 black
kropki-11: kropki r5c8-r6c8 black
between-1: between r2c7 ends ["r1c6","r2c8"]
between-2: between r4c4-r3c3-r3c2-r4c2 ends ["r5c3","r5c1"]
between-3: between r5c2-r6c3-r6c4 ends ["r4c3","r7c5"]
between-4: between r6c5-r7c4-r7c3-r8c2 ends ["r5c5","r9c2"]
between-5: between r6c2-r7c1-r7c2-r8c3 ends ["r6c1","r8c4"]
between-6: between r3c4-r2c4-r1c3 ends ["r2c5","r2c2"]
between-7: between r2c6-r3c6-r4c7 ends ["r1c7","r4c6"]
between-8: between r4c8-r5c7 ends ["r4c9","r6c7"]
between-9: between r9c6-r8c7 ends ["r9c7","r7c7"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.25,8.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.25],"width":0.22,"height":0.16,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.75],"width":0.24,"height":0.16,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.75,8.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.75,8.667],"width":0.22,"height":0.22,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.583,8.5],"width":0.36,"height":0.44,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.2,"height":0.28,"rounded":true,"fill":"#dbc6b4","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.75,8.35],"width":0.14,"height":0.08,"rounded":true,"fill":"#dbc6b4","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.75,8.65],"width":0.14,"height":0.08,"rounded":true,"fill":"#dbc6b4","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.3,8.45],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#737373","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#737373","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#737373","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#737373","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#737373","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#737373","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,8.667],"width":0.22,"height":0.22,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,8.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#5b3020","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,8.3],"width":0.08,"height":0.1,"rounded":true,"fill":"#dbc6b4","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,8.65],"width":0.08,"height":0.1,"rounded":true,"fill":"#dbc6b4","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.2,8.4],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.2,8.55],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
```

Nala is a playful dog. She had such great fun with her lost toy being found in the fog last time that she decided to hide it again. Can you find it?

Normal Sudoku rules apply.
Digits along a between line must be between the digits on the circled ends of the line. Each line has its own color. Elements of the same color are connected. 
Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Grey dots are ambiguous and can turn out to be either functioning as white or black dot for the digits they separate. 

Not all possible dots are necessarily given - there is no negative constraint.

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

She hopes you enjoy the hunt!
