---
format: open-rules
title: Oil, Water, Thermo
setter: Blobz
source: https://sudokupad.app/f12xlowxkz
case: https://sudoku-sleuth.com/cases/oil-water-thermo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3-r8c1-r8c2-r9c1 connected true
cage-2: cage r1c1-r2c1-r2c2-r3c2-r3c3 connected true
cage-3: cage r1c9-r2c8-r2c9-r3c7-r3c8 connected true
cage-4: cage r3c5-r3c6-r4c5-r5c5-r6c5-r7c4-r7c5 connected true
cage-5: cage r5c7-r5c8-r6c8-r6c9-r7c9 connected true
cage-6: cage r7c7-r7c8-r8c8-r8c9-r9c9 connected true
cage-7: cage r5c1-r5c2-r5c3-r6c1-r6c2-r7c1 connected true
cage-8: cage r1c6-r2c5-r2c6 connected true
cage-9: cage r8c4-r8c5-r9c4 connected true
cage-10: cage r6c6-r7c6-r8c6-r8c7 connected true
cage-11: cage r2c4-r3c4-r4c3-r4c4 connected true
cage-12: cage r3c9-r4c8-r4c9 connected true
layered-cage-1: layered-cage r7c2-r7c3-r8c1-r8c2-r9c1 upper [2,4,6,8]
layered-cage-2: layered-cage r1c1-r2c1-r2c2-r3c2-r3c3 upper [2,4,6,8]
layered-cage-3: layered-cage r1c9-r2c8-r2c9-r3c7-r3c8 upper [2,4,6,8]
layered-cage-4: layered-cage r3c5-r3c6-r4c5-r5c5-r6c5-r7c4-r7c5 upper [2,4,6,8]
layered-cage-5: layered-cage r5c7-r5c8-r6c8-r6c9-r7c9 upper [2,4,6,8]
layered-cage-6: layered-cage r7c7-r7c8-r8c8-r8c9-r9c9 upper [2,4,6,8]
layered-cage-7: layered-cage r5c1-r5c2-r5c3-r6c1-r6c2-r7c1 upper [2,4,6,8]
layered-cage-8: layered-cage r1c6-r2c5-r2c6 upper [2,4,6,8]
layered-cage-9: layered-cage r8c4-r8c5-r9c4 upper [2,4,6,8]
layered-cage-10: layered-cage r6c6-r7c6-r8c6-r8c7 upper [2,4,6,8]
layered-cage-11: layered-cage r2c4-r3c4-r4c3-r4c4 upper [2,4,6,8]
layered-cage-12: layered-cage r3c9-r4c8-r4c9 upper [2,4,6,8]
thermo-1: thermo r3c3-r3c2-r2c2-r2c1-r1c1
thermo-2: thermo r1c9-r2c9-r2c8-r3c8-r3c7
thermo-3: thermo r7c7-r7c8-r8c8-r8c9-r9c9
thermo-4: thermo r9c1-r8c1-r8c2-r7c2-r7c3
thermo-5: thermo r4c6-r5c6-r6c6
```

Normal sudoku rules apply.

Digits on thermometers must increase from the bulb end.

Digits in cages do not repeat.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
