---
format: open-rules
title: Swing Shift
setter: Katie Splendor
source: https://sudokupad.app/kslcysmkrx
case: https://sudoku-sleuth.com/cases/swing-shift
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3059e51bb890c52bb4513a87557bf0b6
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 black
kropki-2: kropki r5c6-r5c7 black
kropki-3: kropki r8c4-r9c4 black
entropic-1: entropic r1c3-r2c3-r1c2-r1c1-r2c2-r3c3-r3c2-r2c1-r3c1-r4c1-r5c1-r4c2-r4c3-r5c2-r6c1-r6c2-r5c3-r6c3-r7c3-r8c3-r7c2-r7c1-r8c2-r9c3-r9c2-r8c1-r9c1
entropic-2: entropic r1c7-r2c7-r1c8-r1c9-r2c8-r3c7-r3c8-r2c9-r3c9-r4c9-r5c9-r4c8-r4c7-r5c8-r6c9-r6c8-r5c7-r6c7-r7c7-r8c7-r7c8-r7c9-r8c8-r9c7-r9c8-r8c9-r9c9
pair-1: pair r8c7-r8c8 sum 10
pair-2: pair r1c2-r2c2 sum 10
pair-3: pair r5c3-r5c4 sum 10
pair-4: pair r2c2-r2c3 sum 5
window-classes classes "mod3"
```

- Normal sudoku rules apply.
- Global modularity - every 2 by 2 box of cells must contain at least one digit from each of the following sets: (1,4,7), (2,5,8) and (3,6,9).
- Entropy - any set of three consecutive digits on a peach entropy line must have a low digit (1, 2, 3), middle digit (4, 5, 6) and high digit (7,8,9).
- XV sums - digits separated by a V sum to 5, digits separated by X sum to 10. No negative constraint.
- Ratio Kropki Dots - digits separated by a black Kropki dot have a value ratio of 2:1. No negative constraint.
