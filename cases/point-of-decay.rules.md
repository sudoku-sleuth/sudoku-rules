---
format: open-rules
title: Point of Decay
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uh5effvy34
case: https://sudoku-sleuth.com/cases/point-of-decay
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=5 r3c3=7 r8c2=3 r9c7=1
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r2c3-r2c4 bulb ["r2c1"]
arrow-2: arrow r3c8-r2c7-r2c6 bulb ["r2c9"]
arrow-3: arrow r3c2-r4c1 bulb ["r4c3"]
arrow-4: arrow r3c6-r4c5 bulb ["r4c7"]
arrow-5: arrow r5c9-r6c9 bulb ["r4c8"]
arrow-6: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-7: arrow r5c2-r6c2 bulb ["r5c1"]
arrow-8: arrow r7c2-r8c1 bulb ["r8c3"]
arrow-9: arrow r7c8-r8c7-r9c6 bulb ["r6c7"]
entropic-1: entropic r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
entropic-2: entropic r5c6-r5c7-r4c8
entropic-3: entropic r5c1-r4c2-r5c3
entropic-4: entropic r7c6-r8c7-r9c8-r8c9-r7c8-r6c7 loop true
entropic-5: entropic r6c3-r7c2-r8c1-r9c2-r8c3-r7c4 loop true
entropic-6: entropic r2c9-r3c8-r4c7-r3c6-r2c7-r1c8 loop true
entropic-7: entropic r2c1-r3c2-r4c3-r3c4-r2c3-r1c2 loop true
```

**Sudoku, Entropic Lines, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
