---
format: open-rules
title: Connections
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r30h7gk6lh
case: https://sudoku-sleuth.com/cases/connections
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
between-1: between r3c1-r2c2-r1c3 ends ["r4c1","r1c4"]
between-2: between r1c7-r2c8-r3c9 ends ["r1c6","r4c9"]
between-3: between r7c9-r8c8-r9c7 ends ["r6c9","r9c6"]
between-4: between r7c1-r8c2-r9c3 ends ["r6c1","r9c4"]
between-5: between r4c4 ends ["r5c3","r4c5"]
between-6: between r6c6 ends ["r6c7","r5c5"]
between-7: between r6c3 ends ["r7c3","r5c4"]
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 18
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 18
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 18
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 18
little-killer-5: little-killer r4c9-r3c8-r2c7-r1c6 sum 13
little-killer-6: little-killer r6c1-r7c2-r8c3-r9c4 sum 13
little-killer-7: little-killer r9c6-r8c7-r7c8-r6c9 sum 13
little-killer-8: little-killer r1c4-r2c3-r3c2-r4c1 sum 13
little-killer-9: little-killer r1c2-r2c1 sum 8
little-killer-10: little-killer r9c8-r8c9 sum 8
little-killer-11: little-killer r1c8-r2c9 sum 12
little-killer-12: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 42
little-killer-13: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 61
little-killer-14: little-killer r9c2-r8c1 sum 17
parity-cells-1: parity-cells r1c5 parity "odd"
parity-cells-2: parity-cells r4c4 parity "even"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Even/Odd: Cells marked with a grey square contain even digits. Cells marked with a grey circle contain odd digits.
