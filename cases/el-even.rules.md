---
format: open-rules
title: El-Even
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/el-even
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=1 r2c5=3 r5c5=5 r8c5=7 r9c1=1
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 11 connected true
cage-2: cage r7c1-r8c1-r9c1 total 11 connected true
cage-3: cage r1c4-r1c5-r1c6 total 11 connected true
thermo-1: thermo r3c4-r4c4-r5c4-r6c4
thermo-2: thermo r3c7-r4c7-r5c7-r6c7
kropki-1: kropki r6c6-r7c6 colour "black"
kropki-2: kropki r6c8-r7c8 colour "black"
kropki-3: kropki r6c7-r7c7 colour "black"
kropki-4: kropki r6c5-r7c5 colour "black"
arrow-1: arrow r2c1-r3c2 bulb ["r1c1"]
arrow-2: arrow r8c8-r7c7 bulb ["r9c9"]
parity-cells r7c3-r7c4-r7c5 parity "even"
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#CFCFCF","thickness":0}}
```

Normal Sudoku rules apply.
Digits seperated by a black dot must be in a 1:2 ratio.
Cells on a grey square are even.
Digits along a thermometer must increase from the bulb end.
Cells in a cage must sum to the clue in the top left corner, with no repeats.
Cells along an arrow must sum to the digit in the circle.
Cells on a grey circle are even.
