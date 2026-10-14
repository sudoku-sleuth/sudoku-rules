---
format: open-rules
title: Sorry!
setter: Will Power
source: https://sudokupad.app/i5yaaj81h3
case: https://sudoku-sleuth.com/cases/sorry
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 9c3005e1d58ff6b7370a122e4231adff
---

```rules
sudoku 9x9
cage-1: cage r6c2-r6c3-r7c2-r7c3 total 18 repeats true connected true
cage-2: cage r7c7-r8c6-r8c7 total 17 repeats true connected true
cage-3: cage r3c7-r4c7 total 8 repeats true connected true
cage-4: cage r3c8-r4c8 total 14 repeats true connected true
cage-5: cage r2c3-r2c4-r3c4 total 13 repeats true connected true
thermo-1: thermo r4c2-r3c2-r2c2
thermo-2: thermo r2c8-r2c7-r2c6
thermo-3: thermo r8c8-r7c8-r6c8
thermo-4: thermo r8c2-r8c3-r8c4
kropki-1: kropki r7c9-r8c9 white
kropki-2: kropki r2c9-r3c9 white
kropki-3: kropki r3c9-r4c9 white
kropki-4: kropki r1c6-r1c7 white
kropki-5: kropki r9c7-r9c8 white
kropki-6: kropki r9c2-r9c3 white
kropki-7: kropki r3c1-r4c1 white
arrow-1: arrow r9c7-r9c6 bulb ["r9c8"]
arrow-2: arrow r7c1-r6c1 bulb ["r8c1"]
arrow-3: arrow r1c3-r1c4 bulb ["r1c2"]
arrow-4: arrow r3c9-r4c9 bulb ["r2c9"]
arrow-5: arrow r1c7-r1c8 bulb ["r1c6"]
arrow-6: arrow r7c9-r8c9 bulb ["r6c9"]
arrow-7: arrow r9c3-r9c2 bulb ["r9c4"]
arrow-8: arrow r3c1-r2c1 bulb ["r4c1"]
whispers-1: whispers r6c2-r6c3-r7c3-r7c2 gap 4
whispers-2: whispers r6c2-r7c2 gap 4
whispers-3: whispers r2c3-r2c4-r3c4 gap 5
whispers-4: whispers r8c6-r8c7-r7c7 gap 5
whispers-5: whispers r3c7-r4c7 gap 4
whispers-6: whispers r3c8-r4c8 gap 4
parity-cells r4c5-r5c4-r6c5-r5c6 parity "even"
thermo-5: thermo r9c6-r9c7-r9c8
thermo-6: thermo r6c1-r7c1-r8c1
thermo-7: thermo r1c4-r1c3-r1c2
thermo-8: thermo r4c9-r3c9-r2c9
thermo-9: thermo r1c8-r1c7-r1c6
thermo-10: thermo r8c9-r7c9-r6c9
thermo-11: thermo r9c2-r9c3-r9c4
thermo-12: thermo r2c1-r3c1-r4c1
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
```

Normal Sudoku rule apply. 

ARROWS(+)-Numbers on arrows sum to the number in the arrow's circle. Also, numbers on arrows decrease toward the arrow tip.

THERMOMETERS- Numbers on thermometers increase from the bulb end.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.

GERMAN WHISPERS- Numbers on green and blue lines are at least 5 apart from their neighbors on the line.

DUTCH WHISPERS- Numbers on red and yellow lines are at least 4 apart from their neighbors on the line.

SUMMED REGIONS(+)- Numbers in dashed regions sum to the number in the top left corner of the region. Numbers may repeat in regions, if other rules allow.

EVEN- Cells with a gray square are even.
