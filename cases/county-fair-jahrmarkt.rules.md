---
format: open-rules
title: County Fair (Jahrmarkt)
setter: Will Power
source: https://f-puzzles.com/?id=yahqap2k
case: https://sudoku-sleuth.com/cases/county-fair-jahrmarkt
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c7-r3c7 connected true
cage-2: cage r2c8-r3c8 connected true
cage-3: cage r2c9-r3c9 connected true
cage-4: cage r1c8-r1c9 connected true
thermo-1: thermo r3c1-r2c1-r3c2-r2c2-r1c1
thermo-2: thermo r1c2-r1c3-r2c3-r3c3
kropki-1: kropki r1c4-r1c5 colour "white"
kropki-2: kropki r1c5-r1c6 colour "white"
kropki-3: kropki r1c6-r2c6 colour "white"
kropki-4: kropki r2c4-r3c4 colour "white"
kropki-5: kropki r3c4-r3c5 colour "white"
kropki-6: kropki r2c5-r3c5 colour "white"
kropki-7: kropki r4c1-r5c1 colour "black"
kropki-8: kropki r5c2-r5c3 colour "black"
kropki-9: kropki r6c2-r6c3 colour "black"
arrow-1: arrow r9c3-r8c3 bulb ["r9c2"]
arrow-2: arrow r7c2-r7c3 bulb ["r7c1"]
pair-1: pair r9c7-r9c8 sum 10
pair-2: pair r3c7-r3c8 sum 10
pair-3: pair r2c8-r2c9 sum 10
pair-4: pair r1c7-r1c8 sum 10
negative relations [{"op":"sum","value":10}] except [["r1c4","r1c5"],["r1c5","r1c6"],["r1c6","r2c6"],["r2c4","r3c4"],["r3c4","r3c5"],["r2c5","r3c5"],["r4c1","r5c1"],["r5c2","r5c3"],["r6c2","r6c3"],["r9c7","r9c8"],["r3c7","r3c8"],["r2c8","r2c9"],["r1c7","r1c8"]]
parity-cells r6c7-r5c7-r5c8-r5c9-r4c9 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[4.5,5.5],[3.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,4.5],[5.5,3.5],[4.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers in thermometers increase from the bulb end. Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all dots are given. Numbers inside cages sum to the number in the top left corner OF THE 3x3 BOX the cage is in. Numbers on a line with two circles at each end are between the numbers in the two endpoints. Numbers with gray circles in box 6 are odd. Numbers on arrows sum to the number in the arrow's circle. Numbers with an X between them sum to 10.  All possible X in box 9 are given. Carry your county fair winnings forward to the next attraction. Numbers in the same colored boxes are the same as one another.
