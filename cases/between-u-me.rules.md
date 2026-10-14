---
format: open-rules
title: Between U + ME
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gigdgcloog
case: https://sudoku-sleuth.com/cases/between-u-me
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=5 r6c9=9 r7c4=4 r8c2=5
exported: 0728f2550932b547e8be8e82ff1de3b6
---

```rules
sudoku 9x9
between-1: between r2c1-r3c1-r4c2-r4c3-r4c4-r3c5-r2c5 ends ["r1c1","r1c5"]
between-2: between r2c8 ends ["r3c8","r2c9"]
between-3: between r2c8 ends ["r1c8","r2c7"]
between-4: between r8c1-r7c1-r6c1-r5c1-r6c2 ends ["r9c1","r7c3"]
between-5: between r6c4-r5c5-r6c5-r7c5-r8c5 ends ["r7c3","r9c5"]
between-6: between r5c7-r5c6-r6c6 ends ["r5c8","r7c6"]
between-7: between r8c6-r9c6-r9c7 ends ["r7c6","r9c8"]
between-8: between r7c7 ends ["r7c6","r7c8"]
region-sum-1: region-sum r9c1-r8c1-r7c1-r6c1-r5c1-r6c2-r7c3 segments [["r9c1","r8c1","r7c1"],["r6c1","r5c1","r6c2"],["r7c3"]]
region-sum-2: region-sum r6c4-r5c5-r6c5-r7c5-r8c5-r9c5 segments [["r6c4","r5c5","r6c5"],["r7c5","r8c5","r9c5"]]
region-sum-3: region-sum r5c6-r6c6-r7c6-r8c6-r9c6-r9c7-r9c8 segments [["r5c6","r6c6"],["r7c6","r8c6","r9c6"],["r9c7","r9c8"]]
region-sum-4: region-sum r4c5-r3c5-r2c5-r1c5 segments [["r4c5"],["r3c5","r2c5","r1c5"]]
region-sum-5: region-sum r2c1-r3c1-r4c2-r4c3 segments [["r2c1","r3c1"],["r4c2","r4c3"]]
region-sum-6: region-sum r2c9-r2c8-r2c7-r2c6 segments [["r2c9","r2c8","r2c7"],["r2c6"]]
```

```drawing
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.833,7.5],[3.5,7.5]],"color":"#fff9","thickness":6.4,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1.833,7.5],[3.5,7.5]],"color":"#2ecbff99","thickness":4.48,"rounded":true}}
```

**Sudoku, Between Lines, Region Sum Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on grey Between Lines must be strictly between the digits placed in the circles at the ends of those lines. The between lines in box 3 continue straight at the intersection.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
