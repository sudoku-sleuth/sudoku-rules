---
format: open-rules
title: Bisque
setter: Blobz
source: https://sudokupad.app/blobz/bisque
case: https://sudoku-sleuth.com/cases/bisque
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=2 r7c8=6 r8c1=6 r8c7=2
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6-r5c4-r6c4 total 15 connected true
cage-2: cage r5c5-r5c6-r5c7-r6c5-r7c5 total 27 connected true
cage-3: cage r6c6-r6c7-r7c6-r7c7 total 22 connected true
cage-4: cage r7c8-r7c9-r8c7-r8c8-r9c7 total 24 connected true
thermo-1: thermo r4c5-r3c5-r2c5-r1c4-r1c3
thermo-2: thermo r4c5-r3c5-r2c5-r2c4-r2c3
thermo-3: thermo r5c4-r5c3-r5c2-r4c1-r3c1
thermo-4: thermo r5c4-r5c3-r5c2-r4c2-r3c2
thermo-5: thermo r6c7-r6c8-r6c9
thermo-6: thermo r7c6-r8c6-r9c6
thermo-7: thermo r5c7-r5c8-r5c9
thermo-8: thermo r7c5-r8c5-r9c5
thermo-9: thermo r5c6-r4c7-r4c8
thermo-10: thermo r6c5-r7c4-r8c4
thermo-11: thermo r6c4-r7c3-r8c2-r9c2
thermo-12: thermo r4c6-r3c7-r3c8-r2c9
kropki-1: kropki r4c3-r4c4 colour "black"
kropki-2: kropki r3c4-r4c4 colour "black"
```

Normal sudoku rules apply.

Digits in cages do not repeat and must sum to the given total.

Along thermometers, digits must increase as they move away from the bulb.

Black dots separate digits where one is double the other.
