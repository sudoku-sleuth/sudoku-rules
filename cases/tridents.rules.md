---
format: open-rules
title: Tridents
setter: Jobo
source: https://sudokupad.app/ricwygx0i3
case: https://sudoku-sleuth.com/cases/tridents
library: https://rules.sudoku-sleuth.com/
status: read
exported: b174db38c819d963d9e2d07f93b75893
---

```rules
sudoku 9x9
thermo-1: thermo r4c2-r3c1-r2c1
thermo-2: thermo r4c2-r3c3-r2c3
thermo-3: thermo r4c2-r3c2-r2c2-r1c2
thermo-4: thermo r4c2-r5c2-r6c2-r7c2
thermo-5: thermo r6c5-r5c4-r4c4
thermo-6: thermo r6c5-r5c6-r4c6
thermo-7: thermo r6c5-r5c5-r4c5-r3c5
thermo-8: thermo r6c5-r7c5-r8c5-r9c5
thermo-9: thermo r5c8-r4c7-r3c7
thermo-10: thermo r5c8-r4c9-r3c9
thermo-11: thermo r5c8-r4c8-r3c8-r2c8
thermo-12: thermo r5c8-r6c8-r7c8-r8c8
kropki-1: kropki r6c2-r7c2 black
kropki-2: kropki r8c5-r9c5 black
kropki-3: kropki r7c8-r8c8 black
renban-1: renban r6c2-r5c2-r4c2-r3c2-r2c2
renban-2: renban r8c5-r7c5-r6c5-r5c5-r4c5
renban-3: renban r7c8-r6c8-r5c8-r4c8-r3c8
negative relations [{"op":"sum","value":5},{"op":"sum","value":10}] except [["r6c2","r7c2"],["r8c5","r9c5"],["r7c8","r8c8"]]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Purple lines contain a non-repeating set of consecutive digits in any order.

Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.

Any two orthogonally adjacent cells cannot sum to 5 or 10.
