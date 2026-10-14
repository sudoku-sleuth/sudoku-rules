---
format: open-rules
title: Octopus
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zx7jv6u86f
case: https://sudoku-sleuth.com/cases/octopus
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=7 r4c9=8 r5c3=5 r5c7=9 r6c1=6 r7c5=9
exported: d447d895712fd91f69d42f4d70cdac2f
---

```rules
sudoku 9x9
arrow-1: arrow r3c4-r2c4-r1c3 bulb ["r4c4"]
arrow-2: arrow r4c3-r4c2-r3c1 bulb ["r4c4"]
arrow-3: arrow r7c6-r8c6-r9c7 bulb ["r6c6"]
arrow-4: arrow r6c7-r6c8-r7c9 bulb ["r6c6"]
arrow-5: arrow r6c3-r6c2-r7c1 bulb ["r6c4"]
arrow-6: arrow r7c4-r8c4-r9c3 bulb ["r6c4"]
arrow-7: arrow r3c6-r2c6-r1c7 bulb ["r4c6"]
arrow-8: arrow r4c7-r4c8-r3c9 bulb ["r4c6"]
little-killer-1: little-killer r7c1-r8c2-r9c3 sum 13
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 12
little-killer-3: little-killer r1c3-r2c2-r3c1 sum 10
little-killer-4: little-killer r9c7-r8c8-r7c9 sum 11
little-killer-5: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 25
little-killer-6: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 28
little-killer-7: little-killer r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 sum 36
little-killer-8: little-killer r7c9-r6c8-r5c7-r4c6-r3c5-r2c4-r1c3 sum 30
```

**Sudoku, Arrows, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
