---
format: open-rules
title: Bat
setter: Jobo
source: https://tinyurl.com/35fzdf3j
case: https://sudoku-sleuth.com/cases/bat
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r8c2=4 r8c8=5
exported: cd34d764c4acbc4ca0d588947f90033f
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r3c1-r3c2 white
kropki-2: kropki r3c8-r3c9 white
kropki-3: kropki r6c2-r7c2 white
kropki-4: kropki r6c8-r7c8 white
kropki-5: kropki r4c4-r4c5 black
kropki-6: kropki r4c5-r4c6 black
region-sum r6c5-r5c6-r5c7-r4c8-r3c9-r3c8-r3c7-r4c6-r4c5-r4c4-r3c3-r3c2-r3c1-r4c2-r5c3-r5c4 segments [["r6c5","r5c6","r5c4"],["r5c7","r4c8"],["r3c9","r3c8","r3c7"],["r4c6","r4c5","r4c4"],["r3c3","r3c2","r3c1"],["r4c2","r5c3"]]
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5]],"color":"#FF1166","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5]],"color":"#FF1166","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Digits along the blue line sum to the same value in each 3x3 box the line passes through (if the line visits a box multiple times, each visit is counted as a separate sum).

Digits along a red line must differ by at most 3.

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.

Cells separated by a knight's move cannot contain the same digit.
