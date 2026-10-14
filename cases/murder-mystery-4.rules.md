---
format: open-rules
title: Murder Mystery 4
setter: The Bard
source: https://sudokupad.app/c6nn3rvatp
case: https://sudoku-sleuth.com/cases/murder-mystery-4
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
exported: 26454195125f533f050642d18817cc69
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
cage-1: cage r7c1-r7c2-r7c3 repeats false total 24 connected true
cage-2: cage r8c1-r8c2-r8c3 repeats false total 11 connected true
cage-3: cage r9c1-r9c2-r9c3 repeats false total 7 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r3c1-r2c1-r1c1
thermo-2: thermo r3c2-r2c2-r1c2
thermo-3: thermo r3c3-r2c3-r1c3
kropki-1: kropki r4c6-r5c6 white
kropki-2: kropki r4c4-r5c4 white
kropki-3: kropki r2c7-r3c7 white
kropki-4: kropki r3c7-r3c8 white
kropki-5: kropki r4c5-r4c6 black
kropki-6: kropki r6c5-r6c6 black
kropki-7: kropki r6c4-r6c5 black
kropki-8: kropki r5c4-r6c4 black
whispers-1: whispers r1c7-r2c8 loop false gap 5
whispers-2: whispers r1c8-r2c8 loop false gap 5
whispers-3: whispers r1c9-r2c8 loop false gap 5
whispers-4: whispers r2c9-r2c8 loop false gap 5
whispers-5: whispers r3c9-r2c8 loop false gap 5
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,8.5],[7.5,8.5],[6.5,8.5]],"color":"#FF8800","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,6.5],[6.5,6.5],[6.5,7.5],[7.5,7.5]],"color":"#FF8800","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","5","6"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","3"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["4"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","3"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["4","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","5","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Sherdoku Holmes, “the game’s afoot!”  Another numeral killer is on the loose in the town square and we need your help to solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1 The Spa (Thermos) – Digits in the sauna must rise from the bulb end.
Box 3 Licensing Dept (German Whisper) - Adjacent digits in the green line wait for their turn and must be at least 5 apart. (Also see Kropki rule below)
Box 5 Playground (Kropki) – Digits on the white seesaw dots are consecutive. Digits on the black monkey bar dots have a ratio of 1:2.
Box 7 Parking lot (Killer cage) - Digits must park in their cage adding up to the total in the corner.
Box 9 Supermarket (High-low lines) - Digits along the orange express or regular checkout lines are either only high digits (5-9) or low digits (0-4) in some order.
Box 2,4,6,8 Street sitting (Quads) - Digits have reservations at the white circle tables and must sit in one of the cells at the table. 
In the end you will find a single cell unresolved in which the killer is taking his last victim. You must place the correct digit in the cell to be arrested: the police are ready because the killer is PRIMED to have his LUCK run out.
