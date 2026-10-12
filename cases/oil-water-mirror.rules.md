---
format: open-rules
title: Oil, Water, Mirror
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-mirror
case: https://sudoku-sleuth.com/cases/oil-water-mirror
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 connected true
cage-2: cage r4c2-r5c2-r5c3 connected true
cage-3: cage r6c2-r7c2-r8c2-r8c3 connected true
cage-4: cage r7c5-r8c5-r9c5 connected true
cage-5: cage r8c6-r8c7 connected true
cage-6: cage r7c9-r8c9-r9c9 connected true
cage-7: cage r5c9-r6c8-r6c9 connected true
cage-8: cage r4c7-r5c7 connected true
cage-9: cage r2c7-r2c8-r3c8-r4c8 connected true
cage-10: cage r3c6-r4c6 connected true
cage-11: cage r5c4-r5c5-r5c6 connected true
cage-12: cage r1c4-r2c4-r3c4 connected true
layered-cage-1: layered-cage r2c2-r3c2 upper [2,4,6,8]
layered-cage-2: layered-cage r4c2-r5c2-r5c3 upper [2,4,6,8]
layered-cage-3: layered-cage r6c2-r7c2-r8c2-r8c3 upper [2,4,6,8]
layered-cage-4: layered-cage r7c5-r8c5-r9c5 upper [2,4,6,8]
layered-cage-5: layered-cage r8c6-r8c7 upper [2,4,6,8]
layered-cage-6: layered-cage r7c9-r8c9-r9c9 upper [2,4,6,8]
layered-cage-7: layered-cage r5c9-r6c8-r6c9 upper [2,4,6,8]
layered-cage-8: layered-cage r4c7-r5c7 upper [2,4,6,8]
layered-cage-9: layered-cage r2c7-r2c8-r3c8-r4c8 upper [2,4,6,8]
layered-cage-10: layered-cage r3c6-r4c6 upper [2,4,6,8]
layered-cage-11: layered-cage r5c4-r5c5-r5c6 upper [2,4,6,8]
layered-cage-12: layered-cage r1c4-r2c4-r3c4 upper [2,4,6,8]
thermo-1: thermo r1c2-r1c3
thermo-2: thermo r1c4-r1c5-r1c6
thermo-3: thermo r1c7-r1c8
thermo-4: thermo r3c7-r2c8-r1c9
thermo-5: thermo r3c9-r2c9
thermo-6: thermo r6c9-r5c9-r4c9
thermo-7: thermo r8c9-r7c9
thermo-8: thermo r2c5-r2c4-r3c5
thermo-9: thermo r3c4-r4c4-r4c3
thermo-10: thermo r5c8-r6c8-r5c7
thermo-11: thermo r6c7-r6c6-r7c6
thermo-12: thermo r5c4-r6c5
thermo-13: thermo r6c4-r7c3-r8c2
thermo-14: thermo r7c1-r6c1-r6c2-r5c2
thermo-15: thermo r9c3-r9c4-r8c4-r8c5
diagonal direction "anti"
same-class-1: same-class r1c1-r9c9 classes "parity"
same-class-2: same-class r1c2-r8c9 classes "parity"
same-class-3: same-class r1c3-r7c9 classes "parity"
same-class-4: same-class r1c4-r6c9 classes "parity"
same-class-5: same-class r1c5-r5c9 classes "parity"
same-class-6: same-class r1c6-r4c9 classes "parity"
same-class-7: same-class r1c7-r3c9 classes "parity"
same-class-8: same-class r1c8-r2c9 classes "parity"
same-class-9: same-class r2c1-r9c8 classes "parity"
same-class-10: same-class r2c2-r8c8 classes "parity"
same-class-11: same-class r2c3-r7c8 classes "parity"
same-class-12: same-class r2c4-r6c8 classes "parity"
same-class-13: same-class r2c5-r5c8 classes "parity"
same-class-14: same-class r2c6-r4c8 classes "parity"
same-class-15: same-class r2c7-r3c8 classes "parity"
same-class-16: same-class r3c1-r9c7 classes "parity"
same-class-17: same-class r3c2-r8c7 classes "parity"
same-class-18: same-class r3c3-r7c7 classes "parity"
same-class-19: same-class r3c4-r6c7 classes "parity"
same-class-20: same-class r3c5-r5c7 classes "parity"
same-class-21: same-class r3c6-r4c7 classes "parity"
same-class-22: same-class r4c1-r9c6 classes "parity"
same-class-23: same-class r4c2-r8c6 classes "parity"
same-class-24: same-class r4c3-r7c6 classes "parity"
same-class-25: same-class r4c4-r6c6 classes "parity"
same-class-26: same-class r4c5-r5c6 classes "parity"
same-class-27: same-class r5c1-r9c5 classes "parity"
same-class-28: same-class r5c2-r8c5 classes "parity"
same-class-29: same-class r5c3-r7c5 classes "parity"
same-class-30: same-class r5c4-r6c5 classes "parity"
same-class-31: same-class r6c1-r9c4 classes "parity"
same-class-32: same-class r6c2-r8c4 classes "parity"
same-class-33: same-class r6c3-r7c4 classes "parity"
same-class-34: same-class r7c1-r9c3 classes "parity"
same-class-35: same-class r7c2-r8c3 classes "parity"
same-class-36: same-class r8c1-r9c2 classes "parity"
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits along thermometers must increase from the bulb end.

Digits along the marked diagonal do not repeat. Additionally, the diagonal line is a "parity mirror": every pair of cells reflected across this line share the same parity (even or odd).
