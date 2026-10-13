---
format: open-rules
title: Gear Shift
setter: Katie Splendor
source: https://sudokupad.app/oic84yqxdb
case: https://sudoku-sleuth.com/cases/gear-shift
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c7-r4c7 colour "black"
kropki-2: kropki r6c6-r6c7 colour "black"
kropki-3: kropki r8c7-r8c8 colour "black"
kropki-4: kropki r5c2-r6c2 colour "black"
modular-1: modular r9c1-r8c1-r9c2-r9c3-r8c2-r7c1-r7c2-r8c3-r7c3-r6c3-r5c3-r6c2-r6c1-r5c2-r4c3-r4c2-r5c1-r4c1-r3c1-r2c1-r3c2-r3c3-r2c2-r1c1-r1c2-r2c3-r1c3
modular-2: modular r1c7-r2c7-r1c8-r1c9-r2c8-r3c7-r3c8-r2c9-r3c9-r4c9-r5c9-r4c8-r4c7-r5c8-r6c9-r6c8-r5c7-r6c7-r7c7-r8c7-r7c8-r7c9-r8c8-r9c7-r9c8-r8c9-r9c9
pair-1: pair r3c3-r4c3 sum 10
pair-2: pair r6c1-r7c1 sum 10
pair-3: pair r4c5-r5c5 sum 10
pair-4: pair r2c1-r2c2 sum 10
window-classes classes "entropy"
```

- Normal Sudoku rules apply.
- Modular lines - every three digits along a teal modular line must have a digit from each of the following sets - [1,4,7], [2,5,8], and [3,6,9].
- Global entropy - every 2 by 2 box of cells must have at least one low digit (1,2,3), one medium digit (4,5,6), and one high digit (7,8,9).
- Ratio Kropki dots - digits separated by a black Kropki dot have a value ratio of 1:2. No negative constraint.
- X sums - digits separated by an X sum to a value of 10. No negative constraint.
