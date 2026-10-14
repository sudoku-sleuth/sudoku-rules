---
format: open-rules
title: Between Bounds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ad32ztlew4
case: https://sudoku-sleuth.com/cases/between-bounds
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=4 r4c5=3 r6c7=6
exported: 041eb937d7d96d6005039c9a6a34162c
---

```rules
sudoku 9x9
between-1: between r1c4-r1c5-r1c6 ends ["r1c3","r1c7"]
between-2: between r9c4-r9c5-r9c6 ends ["r9c3","r9c7"]
between-3: between r4c1-r5c1-r6c1 ends ["r3c1","r7c1"]
between-4: between r4c9-r5c9-r6c9 ends ["r3c9","r7c9"]
between-5: between r6c2-r7c2-r8c2-r8c3-r8c4 ends ["r5c2","r8c5"]
between-6: between r8c6-r8c7-r8c8-r7c8-r6c8 ends ["r8c5","r5c8"]
between-7: between r4c8-r3c8-r2c8-r2c7-r2c6 ends ["r5c8","r2c5"]
between-8: between r2c4-r2c3-r2c2-r3c2-r4c2 ends ["r2c5","r5c2"]
between-9: between r6c5-r6c6-r5c6 ends ["r6c4","r4c6"]
between-10: between r4c5-r4c4-r5c4 ends ["r4c6","r6c4"]
extremum-1: extremum r1c5-r2c2-r3c1-r5c2-r7c3-r9c5-r5c8 type "min" exhaustive false
extremum-2: extremum r3c7-r5c5-r4c6-r9c7-r8c8 type "max" exhaustive false
```

**Standard Sudoku, Between Lines, Min/Max**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Minimum/maximum cells: Digits placed in blue cells with arrows pointing in must be smaller than all orthogonally adjacent cells. Digits placed in yellow cells with arrows pointing out must be larger than all orthogonally adjacent cells.
