---
format: open-rules
title: Quarity Padsums
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/quarity-padsums
library: https://rules.sudoku-sleuth.com/
status: read
exported: 273315c396f6f828004e2adb63dcfb0a
---

```rules
sudoku 9x9
region-sum-1: region-sum r4c1-r3c2-r2c3 segments [["r4c1"],["r3c2","r2c3"]]
region-sum-2: region-sum r5c3-r4c3-r3c3-r3c4-r3c5 segments [["r5c3","r4c3"],["r3c3"],["r3c4","r3c5"]]
region-sum-3: region-sum r4c2-r5c1-r6c1-r7c1-r8c1-r9c2 segments [["r4c2","r5c1","r6c1"],["r7c1","r8c1","r9c2"]]
region-sum-4: region-sum r8c2-r7c3-r6c4 segments [["r8c2","r7c3"],["r6c4"]]
region-sum-5: region-sum r8c3-r9c4-r8c5 segments [["r8c3"],["r9c4","r8c5"]]
region-sum-6: region-sum r9c6-r8c6-r8c7-r9c8-r9c9 segments [["r9c6","r8c6"],["r8c7","r9c8","r9c9"]]
region-sum-7: region-sum r8c8-r7c9-r6c9 segments [["r8c8","r7c9"],["r6c9"]]
region-sum-8: region-sum r7c5-r7c6-r7c7-r6c7-r5c7 segments [["r7c5","r7c6"],["r7c7"],["r6c7","r5c7"]]
region-sum-9: region-sum r4c6-r3c7-r2c8-r2c9 segments [["r4c6"],["r3c7","r2c8","r2c9"]]
region-sum-10: region-sum r2c5-r1c6-r2c7 segments [["r2c5","r1c6"],["r2c7"]]
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [4,6]
quadruple-2: quadruple r1c4-r1c5-r2c4-r2c5 digits [5]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [4,6]
quadruple-4: quadruple r4c4-r4c5-r5c4-r5c5 digits [6]
quadruple-5: quadruple r5c5-r5c6-r6c5-r6c6 digits [3]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,3,5]
quadruple-7: quadruple r4c8-r4c9-r5c8-r5c9 digits [1,3,5]
quadruple-8: quadruple r8c1-r8c2-r9c1-r9c2 digits [4,6]
quadruple-9: quadruple r8c5-r8c6-r9c5-r9c6 digits [5]
quadruple-10: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,6]
```

- Normal sudoku rules apply.
- Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- The sum of the digits on a blue line within a particular region must be the same for all of the regions the line passes through.
