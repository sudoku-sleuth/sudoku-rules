---
format: open-rules
title: Flower
setter: Jobo
source: https://tinyurl.com/563hfuv7
case: https://sudoku-sleuth.com/cases/flower-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5ee42ec595acbce7f328a0f54b921be0
---

```rules
sudoku 9x9
thermo-1: thermo r5c5-r6c4-r7c3
thermo-2: thermo r5c5-r5c4-r5c3-r5c2
thermo-3: thermo r5c5-r4c4-r3c3
thermo-4: thermo r5c5-r4c5-r3c5-r2c5
thermo-5: thermo r5c5-r5c6-r5c7-r5c8
thermo-6: thermo r5c5-r4c6-r3c7
thermo-7: thermo r5c5-r6c6-r7c7
whispers r5c5-r6c5-r7c5-r8c5-r9c5 gap 5
parity r7c4-r8c3-r8c2-r7c2-r6c3-r6c2-r5c1-r4c2-r4c3-r3c2-r2c2-r2c3-r3c4-r2c4-r1c5-r2c6-r3c6-r2c7-r2c8-r3c8-r4c7-r4c8-r5c9-r6c8-r6c7-r7c8-r8c8-r8c7-r7c6
renban-1: renban r6c3-r5c4-r4c3
renban-2: renban r4c7-r5c6-r6c7
pair-1: pair r8c2-r9c2 sum 10
pair-2: pair r8c8-r9c8 sum 10
pair-3: pair r1c7-r2c7 sum 5
```

```drawing
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFEE00","stroke":"#FFEE00","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the yellow bulb.

Digits along a purple line are a set of consecutive, non-repeating digits in any order.

Adjacent digits along the green line must differ by at least 5.

Adjacent digits along the red line must alternate in parity (odd/even).

Digits separated by a V must sum to 5. Digits separated by an X must sum to 10. Not all XV are given.
