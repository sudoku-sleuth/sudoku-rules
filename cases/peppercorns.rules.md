---
format: open-rules
title: Peppercorns
setter: Blobz
source: https://sudokupad.app/blobz/peppercorns
case: https://sudoku-sleuth.com/cases/peppercorns
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6
thermo-2: thermo r9c1-r8c2-r7c3
thermo-3: thermo r3c7-r2c7-r1c7
thermo-4: thermo r8c9-r9c8-r9c7
thermo-5: thermo r1c3-r1c2-r2c1
thermo-6: thermo r6c1-r5c1-r4c1
thermo-7: thermo r6c9-r5c9-r4c9
kropki-1: kropki r7c4-r7c5 colour "black"
kropki-2: kropki r9c5-r9c6 colour "black"
kropki-3: kropki r1c4-r1c5 colour "black"
kropki-4: kropki r3c5-r3c6 colour "black"
kropki-5: kropki r4c1-r5c1 colour "black"
kropki-6: kropki r5c3-r6c3 colour "black"
kropki-7: kropki r4c7-r5c7 colour "black"
kropki-8: kropki r5c9-r6c9 colour "black"
kropki-9: kropki r2c2-r3c2 colour "black"
kropki-10: kropki r7c8-r8c8 colour "black"
negative relations [{"op":"ratio","value":2}] except [["r7c4","r7c5"],["r9c5","r9c6"],["r1c4","r1c5"],["r3c5","r3c6"],["r4c1","r5c1"],["r5c3","r6c3"],["r4c7","r5c7"],["r5c9","r6c9"],["r2c2","r3c2"],["r7c8","r8c8"]]
```

Normal sudoku rules apply.

Black dots separate digits where one is double the other; ALL such dots are given (negative constraint applies).

Along thermometers, digits increase as they move away from the bulb.
