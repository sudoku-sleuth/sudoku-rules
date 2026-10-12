---
format: open-rules
title: No More Dots...
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/no-more-dots-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 6 connected true
cage-2: cage r8c1-r9c1 total 9 connected true
cage-3: cage r1c9-r2c9 total 12 connected true
cage-4: cage r8c9-r9c9 total 12 connected true
thermo-1: thermo r6c3-r6c4
thermo-2: thermo r5c8-r5c7
kropki-1: kropki r1c2-r2c2 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r1c3-r1c4 colour "black"
kropki-4: kropki r2c4-r3c4 colour "black"
kropki-5: kropki r2c7-r3c7 colour "black"
kropki-6: kropki r5c1-r5c2 colour "black"
kropki-7: kropki r4c2-r5c2 colour "black"
kropki-8: kropki r4c4-r5c4 colour "black"
kropki-9: kropki r4c5-r4c6 colour "black"
kropki-10: kropki r6c8-r6c9 colour "black"
kropki-11: kropki r8c1-r8c2 colour "black"
kropki-12: kropki r8c2-r8c3 colour "black"
kropki-13: kropki r9c4-r9c5 colour "black"
kropki-14: kropki r9c5-r9c6 colour "black"
kropki-15: kropki r7c6-r8c6 colour "black"
kropki-16: kropki r7c7-r7c8 colour "black"
kropki-17: kropki r6c9-r7c9 colour "black"
negative relations [{"op":"ratio","value":2}] except [["r1c2","r2c2"],["r1c3","r2c3"],["r1c3","r1c4"],["r2c4","r3c4"],["r2c7","r3c7"],["r5c1","r5c2"],["r4c2","r5c2"],["r4c4","r5c4"],["r4c5","r4c6"],["r6c8","r6c9"],["r8c1","r8c2"],["r8c2","r8c3"],["r9c4","r9c5"],["r9c5","r9c6"],["r7c6","r8c6"],["r7c7","r7c8"],["r6c9","r7c9"]]
```

Normal Sudoku rules apply.

Digits along each thermometer must increase starting from the bulb end.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

A black dot between cells indicates cell values with a 2:1 ratio.  ***ALL black dots are shown***

Exported from sudokulab.net
