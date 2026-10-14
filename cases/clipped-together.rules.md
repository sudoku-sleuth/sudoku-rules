---
format: open-rules
title: Clipped Together
setter: sujoyku
source: https://sudokupad.app/q0yebek0tb
case: https://sudoku-sleuth.com/cases/clipped-together
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: 9b02f5bf33302c30d66defe21a3375d0
---

```rules
sudoku 9x9
kropki r3c1-r4c1 white
region-sum-1: region-sum r5c4-r6c4-r7c4-r8c4-r9c4-r9c3-r9c2-r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r5c2-r6c3 segments [["r5c4","r6c4"],["r7c4","r8c4","r9c4"],["r9c3","r9c2","r9c1","r8c1","r7c1"],["r6c1","r5c1","r4c1","r5c2","r6c3"]]
region-sum-2: region-sum r9c8-r9c7-r8c6-r8c5-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c7-r2c8-r2c9-r3c9-r4c9-r5c9-r6c9-r6c8 segments [["r9c8","r9c7"],["r8c6","r8c5","r7c6"],["r6c6","r5c6","r4c6"],["r3c6","r2c6"],["r1c7","r2c8","r2c9","r3c9"],["r4c9","r5c9","r6c9","r6c8"]]
nabner-1: nabner r4c4-r4c5-r5c5-r6c5 distinct true
nabner-2: nabner r7c2-r7c3-r8c3 distinct true
nabner-3: nabner r3c7-r4c7-r5c7-r6c7-r7c7 distinct true
nabner-4: nabner r7c8-r8c8-r8c9-r9c9 distinct true
nabner-5: nabner r2c1-r2c2-r1c3-r2c3-r3c4 distinct true
nabner-6: nabner r3c2-r4c2-r5c3 distinct true
```

Normal sudoku rules apply.
Region Sum Lines: digits along blue region sum lines have the same sum within each box the line passes through. 
Nabner: each gold line contains a set of non-repeating digits and no two digits on such a line can be consecutive.
Kropki: digits separated by a white dot must be consecutive. Not all dots are given.
