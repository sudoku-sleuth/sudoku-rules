---
format: open-rules
title: Poseidon's Trident
setter: Tingo
source: https://tinyurl.com/2p2z56wp
case: https://sudoku-sleuth.com/cases/poseidon-s-trident
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 124dc5f970d403d711e202d156e29764
---

```rules
sudoku 9x9
anti-king
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r4c1-r3c2-r4c2-r4c3
thermo-2: thermo r4c9-r3c8-r4c8-r4c7
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r2c5-r3c5 white
kropki-3: kropki r3c5-r4c5 white
kropki-4: kropki r4c4-r5c4 black
kropki-5: kropki r4c6-r5c6 black
kropki-6: kropki r6c5-r7c5 black
arrow-1: arrow r6c5-r7c5-r8c5 bulb ["r5c5"]
arrow-2: arrow r5c4-r6c3-r7c3-r8c3 bulb ["r5c5"]
arrow-3: arrow r5c6-r6c7-r7c7-r8c7 bulb ["r5c5"]
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[2.5,4.5],[1.5,4.5],[0.5,4.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
```

Normal Sudoku Rules Apply
Cells that are a king's move (in chess) apart, cannot contain the same digit.
Cells in the same relative position in each box cannot contain the same digit (disjoint sets)
Digits may not repeat on diagonals
Thermometer digits must strictly increase from the bulb
Digits along the line of an arrow must sum to the digit in the arrow's circle.
Digits along a between line must be from values between the digits on the terminating circles.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in a ratio of 2:1. Not all dots are given.
