---
format: open-rules
title: Objects in the Mirror
setter: Meggen033
source: https://sudokupad.app/3lhod1e0hh
case: https://sudoku-sleuth.com/cases/objects-in-the-mirror
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c5-r4c5
thermo-2: thermo r6c8-r7c8
thermo-3: thermo r9c1-r8c1
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r2c1-r2c2 colour "black"
kropki-3: kropki r3c1-r3c2 colour "black"
kropki-4: kropki r4c2-r4c3 colour "black"
kropki-5: kropki r5c1-r5c2 colour "black"
kropki-6: kropki r5c3-r6c3 colour "black"
kropki-7: kropki r7c1-r7c2 colour "black"
kropki-8: kropki r7c3-r8c3 colour "black"
kropki-9: kropki r6c6-r7c6 colour "black"
kropki-10: kropki r6c5-r6c6 colour "black"
kropki-11: kropki r6c4-r6c5 colour "black"
kropki-12: kropki r2c4-r3c4 colour "black"
kropki-13: kropki r1c5-r2c5 colour "black"
kropki-14: kropki r5c8-r5c9 colour "black"
kropki-15: kropki r9c4-r9c5 colour "black"
kropki-16: kropki r4c2-r5c2 colour "black"
kropki-17: kropki r4c6-r4c7 colour "black"
kropki-18: kropki r2c7-r3c7 colour "black"
palindrome r1c1-r2c1-r3c1-r3c2-r4c1-r4c2-r5c2-r6c3-r6c2-r7c1-r8c2-r9c2-r9c3-r9c4-r8c3-r7c4-r8c4-r8c5-r7c6-r6c6-r7c5-r6c4-r5c4-r4c3-r3c4-r2c4-r2c5-r2c6-r2c7-r1c7-r1c8-r2c8-r3c9-r4c9-r4c8-r3c8-r4c7-r5c8-r6c7-r7c7-r8c8-r8c9-r9c9
negative relations [{"op":"ratio","value":2}] except [["r1c1","r1c2"],["r2c1","r2c2"],["r3c1","r3c2"],["r4c2","r4c3"],["r5c1","r5c2"],["r5c3","r6c3"],["r7c1","r7c2"],["r7c3","r8c3"],["r6c6","r7c6"],["r6c5","r6c6"],["r6c4","r6c5"],["r2c4","r3c4"],["r1c5","r2c5"],["r5c8","r5c9"],["r9c4","r9c5"],["r4c2","r5c2"],["r4c6","r4c7"],["r2c7","r3c7"]]
```

•	Normal Sudoku rules apply. 
•	A black dot between cells indicates cell values with a 2:1 ratio.  All possible black dots are given.
•	Digits along a grey palindrome line read the same forwards or backwards.
•	Digits along each thermometer must increase starting from the bulb end.
