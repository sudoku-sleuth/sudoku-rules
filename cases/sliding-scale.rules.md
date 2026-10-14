---
format: open-rules
title: Sliding Scale
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kxq7wm0std
case: https://sudoku-sleuth.com/cases/sliding-scale
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=3 r6c2=2 r9c9=6
exported: 18c9bec8f5c1cc6b0db239a5986920c5
---

```rules
sudoku 9x9
arrow-1: arrow r1c3-r2c4-r3c4-r4c3 bulb ["r1c2"]
arrow-2: arrow r1c7-r2c6-r3c6-r4c7-r5c8 bulb ["r1c8"]
arrow-3: arrow r3c2-r4c2-r5c3-r6c4 bulb ["r2c2"]
arrow-4: arrow r6c7-r7c6-r8c5 bulb ["r5c7"]
arrow-5: arrow r7c1-r8c2-r9c3 bulb ["r6c1"]
arrow-6: arrow r7c9-r8c8-r9c7-r9c6 bulb ["r6c9"]
```

**Sudoku, Arrows**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
