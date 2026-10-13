---
format: open-rules
title: Pinwheel
setter: Blobz
source: https://sudokupad.app/blobz/pinwheel
case: https://sudoku-sleuth.com/cases/pinwheel-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c1-r2c2-r3c1
thermo-2: thermo r9c1-r8c1-r7c1-r8c2
thermo-3: thermo r5c6-r6c5-r5c4-r4c5
thermo-4: thermo r1c9-r2c9-r3c9-r2c8
thermo-5: thermo r7c9-r8c9-r9c9-r8c8
pair-1: pair r2c2-r3c2 sum 10
pair-2: pair r3c3-r4c3 sum 10
pair-3: pair r5c1-r5c2 sum 10
pair-4: pair r6c2-r6c3 sum 10
pair-5: pair r7c3-r7c4 sum 10
pair-6: pair r8c2-r8c3 sum 10
pair-7: pair r8c5-r9c5 sum 10
pair-8: pair r7c6-r8c6 sum 10
pair-9: pair r6c7-r7c7 sum 10
pair-10: pair r7c8-r8c8 sum 10
pair-11: pair r5c8-r5c9 sum 10
pair-12: pair r4c7-r4c8 sum 10
pair-13: pair r3c6-r3c7 sum 10
pair-14: pair r2c7-r2c8 sum 10
pair-15: pair r1c5-r2c5 sum 10
pair-16: pair r2c4-r3c4 sum 10
pair-17: pair r4c4-r5c4 sum 10
pair-18: pair r4c5-r4c6 sum 10
pair-19: pair r5c6-r6c6 sum 10
pair-20: pair r6c4-r6c5 sum 10
negative relations [{"op":"sum","value":10}] except [["r2c2","r3c2"],["r3c3","r4c3"],["r5c1","r5c2"],["r6c2","r6c3"],["r7c3","r7c4"],["r8c2","r8c3"],["r8c5","r9c5"],["r7c6","r8c6"],["r6c7","r7c7"],["r7c8","r8c8"],["r5c8","r5c9"],["r4c7","r4c8"],["r3c6","r3c7"],["r2c7","r2c8"],["r1c5","r2c5"],["r2c4","r3c4"],["r4c4","r5c4"],["r4c5","r4c6"],["r5c6","r6c6"],["r6c4","r6c5"]]
```

Normal sudoku rules apply. 

Digits on a thermometer must increase from the bulb end. 

Digits separated by an X sum to 10. ALL such X’s are given; that is to say, negative constraints apply.
