---
format: open-rules
title: Flip the Script
setter: sujoyku
source: https://sudokupad.app/q7q6iqv34f
case: https://sudoku-sleuth.com/cases/flip-the-script
library: https://rules.sudoku-sleuth.com/
status: read
exported: 433586108c5cbcd5ac62e2e026c48d12
---

```rules
sudoku 9x9
region-sum-1: region-sum r5c4-r6c4-r6c3-r5c3-r4c3-r4c2 segments [["r5c4","r6c4"],["r6c3","r5c3","r4c3","r4c2"]]
region-sum-2: region-sum r5c6-r4c6-r4c7-r5c7-r5c8-r6c8 segments [["r5c6","r4c6"],["r4c7","r5c7","r5c8","r6c8"]]
region-sum-3: region-sum r2c6-r2c5-r2c4-r1c3 segments [["r2c6","r2c5","r2c4"],["r1c3"]]
region-sum-4: region-sum r9c4-r8c5-r9c6-r9c7 segments [["r9c4","r8c5","r9c6"],["r9c7"]]
region-sum-5: region-sum r8c9-r7c8-r6c9 segments [["r8c9","r7c8"],["r6c9"]]
region-sum-6: region-sum r9c3-r8c3-r7c4 segments [["r9c3","r8c3"],["r7c4"]]
region-sum-7: region-sum r1c7-r2c7-r3c7-r4c8-r4c9-r5c9 segments [["r1c7","r2c7","r3c7"],["r4c8","r4c9","r5c9"]]
same-class-1: same-class r1c2-r2c1 classes "entropy"
same-class-2: same-class r1c3-r3c1 classes "entropy"
same-class-3: same-class r1c4-r4c1 classes "entropy"
same-class-4: same-class r1c5-r5c1 classes "entropy"
same-class-5: same-class r1c6-r6c1 classes "entropy"
same-class-6: same-class r1c7-r7c1 classes "entropy"
same-class-7: same-class r1c8-r8c1 classes "entropy"
same-class-8: same-class r1c9-r9c1 classes "entropy"
same-class-9: same-class r2c3-r3c2 classes "entropy"
same-class-10: same-class r2c4-r4c2 classes "entropy"
same-class-11: same-class r2c5-r5c2 classes "entropy"
same-class-12: same-class r2c6-r6c2 classes "entropy"
same-class-13: same-class r2c7-r7c2 classes "entropy"
same-class-14: same-class r2c8-r8c2 classes "entropy"
same-class-15: same-class r2c9-r9c2 classes "entropy"
same-class-16: same-class r3c4-r4c3 classes "entropy"
same-class-17: same-class r3c5-r5c3 classes "entropy"
same-class-18: same-class r3c6-r6c3 classes "entropy"
same-class-19: same-class r3c7-r7c3 classes "entropy"
same-class-20: same-class r3c8-r8c3 classes "entropy"
same-class-21: same-class r3c9-r9c3 classes "entropy"
same-class-22: same-class r4c5-r5c4 classes "entropy"
same-class-23: same-class r4c6-r6c4 classes "entropy"
same-class-24: same-class r4c7-r7c4 classes "entropy"
same-class-25: same-class r4c8-r8c4 classes "entropy"
same-class-26: same-class r4c9-r9c4 classes "entropy"
same-class-27: same-class r5c6-r6c5 classes "entropy"
same-class-28: same-class r5c7-r7c5 classes "entropy"
same-class-29: same-class r5c8-r8c5 classes "entropy"
same-class-30: same-class r5c9-r9c5 classes "entropy"
same-class-31: same-class r6c7-r7c6 classes "entropy"
same-class-32: same-class r6c8-r8c6 classes "entropy"
same-class-33: same-class r6c9-r9c6 classes "entropy"
same-class-34: same-class r7c8-r8c7 classes "entropy"
same-class-35: same-class r7c9-r9c7 classes "entropy"
same-class-36: same-class r8c9-r9c8 classes "entropy"
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Entropy Mirror: We consider the digits from 1 to 9 as three entropic groups: low (1, 2, 3), medium (4, 5, 6) and high digits (7, 8, 9). The diagonal from r1c1 to r9c9 acts as an entropy mirror. Each cell has the same entropy as the cell reflected in the mirror, i.e. if r2c6 contains a low digit, then r6c2 must also have a low digit.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)
