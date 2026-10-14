---
format: open-rules
title: Sircular Logic
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jd1m50j9dd
case: https://sudoku-sleuth.com/cases/sircular-logic
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=2 r3c7=8 r5c5=9 r7c7=6 r9c4=5
exported: 934703977a0d36e0e8554aa6a1c54462
---

```rules
sudoku 9x9
anti-knight
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 23
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 7
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 24
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 6
little-killer-5: little-killer r2c1-r1c2 sum 4
little-killer-6: little-killer r1c8-r2c9 sum 16
little-killer-7: little-killer r8c9-r9c8 sum 5
little-killer-8: little-killer r9c2-r8c1 sum 15
little-killer-9: little-killer r1c4-r2c3-r3c2-r4c1 sum 23
little-killer-10: little-killer r4c9-r3c8-r2c7-r1c6 sum 26
little-killer-11: little-killer r9c6-r8c7-r7c8-r6c9 sum 20
little-killer-12: little-killer r6c1-r7c2-r8c3-r9c4 sum 18
```

- Normal Sudoku rules apply.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Anti-knight: Cells a chess knight's move apart must contain distinct digits
