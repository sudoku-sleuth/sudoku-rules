---
format: open-rules
title: Tigger Uncaged
setter: Blobz
source: https://sudokupad.app/71qie8k0p4
case: https://sudoku-sleuth.com/cases/tigger-uncaged
library: https://rules.sudoku-sleuth.com/
status: read
exported: d5ec87c4b4223861ffb6c7b9d9c0f624
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r2c1-r2c3-r3c1-r4c1-r5c1 connected true
cage-2: cage r7c1-r7c3-r8c1-r8c2-r8c3-r8c4-r9c1-r9c3-r9c4 connected true
cage-3: cage r3c2-r3c3-r4c2-r4c3-r5c2-r6c1-r6c2-r6c3-r7c2 connected true
cage-4: cage r1c5-r1c6-r2c4-r2c5-r3c4-r4c4-r4c5-r5c4-r5c5 connected true
cage-5: cage r6c5-r6c7-r6c8-r7c4-r7c5-r7c6-r7c7-r7c8-r8c8 connected true
cage-6: cage r7c9-r8c5-r8c6-r8c7-r8c9-r9c6-r9c7-r9c8-r9c9 connected true
cage-7: cage r1c7-r1c8-r1c9-r2c9-r3c8-r3c9-r4c9-r5c9-r6c9 connected true
cage-8: cage r2c6-r3c5-r3c6-r3c7-r4c6-r4c7-r5c6-r5c7-r5c8 connected true
thermo-1: thermo r8c2-r8c1
thermo-2: thermo r4c8-r5c8
thermo-3: thermo r1c3-r2c4
thermo-4: thermo r8c7-r8c8
thermo-5: thermo r6c3-r5c2
thermo-6: thermo r6c9-r7c9
thermo-7: thermo r2c6-r1c5
thermo-8: thermo r2c1-r3c1
```

Normal sudoku rules apply.

Cells separated by a "Tigger's Bounce", also known as a "Long Knight's Move" (move three cells in one direction, then one to the side), cannot contain the same digit. 

Digits may not repeat in a cage.

Digits on thermometers must increase from the bulb end.
