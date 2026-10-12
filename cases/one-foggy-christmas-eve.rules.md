---
format: open-rules
title: One Foggy Christmas Eve
setter: Will Power
source: https://sudokupad.app/xxhwlxvjgy
case: https://sudoku-sleuth.com/cases/one-foggy-christmas-eve
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c6-r4c6 total 13 connected true
cage-2: cage r3c4-r4c4 total 10 connected true
cage-3: cage r7c1-r8c1 total 9 connected true
cage-4: cage r7c9-r8c9 total 4 connected true
cage-5: cage r4c1-r5c1 total 12 connected true
cage-6: cage r8c3-r9c3 total 11 connected true
thermo-1: thermo r5c6-r4c6-r3c6
thermo-2: thermo r5c6-r4c6-r3c7-r2c8-r1c9
thermo-3: thermo r5c6-r4c6-r3c7-r2c8-r1c8
thermo-4: thermo r5c4-r4c4-r3c4
thermo-5: thermo r5c4-r4c4-r3c3-r2c2-r1c1
thermo-6: thermo r5c4-r4c4-r3c3-r2c2-r1c2
thermo-7: thermo r5c4-r4c4-r3c3-r3c2-r2c1
thermo-8: thermo r5c6-r4c6-r3c7-r2c6-r2c5
kropki r2c3-r3c3 colour "white"
whispers-1: whispers r4c2-r4c3-r5c4-r5c3 gap 5
whispers-2: whispers r5c3-r4c2 gap 5
whispers-3: whispers r5c6-r4c7-r4c8 gap 5
whispers-4: whispers r4c8-r5c7-r5c6 gap 5
whispers-5: whispers r5c4-r5c5-r5c6-r6c6-r7c6-r8c5-r7c4-r6c4 gap 5
whispers-6: whispers r5c4-r6c4 gap 5
```

```drawing
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.25,"height":0.5,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0.25,"height":0.5,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.8,"height":0.5,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku rules apply. THERMOMETERS (antlers)- Numbers on thermometers increase from the bulb end. GERMAN WHISPERS (head and ears)- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. BLACK OVALS (eyes and nose)- Numbers with a black oval between them sum to 10. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIR- Numbers with a white dot between them are consecutive. Not all possible dots are given.
