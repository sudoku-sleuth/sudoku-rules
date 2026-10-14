---
format: open-rules
title: Ins and Outs of Arrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1gyu6y9w12
case: https://sudoku-sleuth.com/cases/ins-and-outs-of-arrows
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=9 r3c3=1 r4c9=9 r5c1=9 r5c4=3 r7c7=1 r9c2=2
exported: 3744ca3ee885ae909b4c3deebdb67365
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-2: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-3: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-4: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-5: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-6: arrow r8c9-r7c9-r6c9 bulb ["r9c9"]
arrow-7: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-8: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-9: arrow r4c7-r5c7-r6c8 bulb ["r3c7"]
arrow-10: arrow r3c6-r3c5-r2c4 bulb ["r3c7"]
arrow-11: arrow r6c3-r5c3-r4c2 bulb ["r7c3"]
arrow-12: arrow r7c4-r7c5-r8c6 bulb ["r7c3"]
arrow-13: arrow r5c6-r4c6 bulb ["r6c6"]
arrow-14: arrow r6c5-r6c4 bulb ["r6c6"]
```

**Sudoku, Arrows**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
