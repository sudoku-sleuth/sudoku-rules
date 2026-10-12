---
format: open-rules
title: Modularrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fog931h530
case: https://sudoku-sleuth.com/cases/modularrows
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=8 r3c6=2
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-3: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-4: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-5: arrow r2c5-r2c4-r2c3 bulb ["r2c6"]
arrow-6: arrow r8c5-r8c6-r8c7 bulb ["r8c4"]
arrow-7: arrow r4c4-r4c3 bulb ["r4c5"]
arrow-8: arrow r6c6-r6c7 bulb ["r6c5"]
arrow-9: arrow r4c2-r5c1-r6c2 bulb ["r5c2"]
arrow-10: arrow r5c9-r6c8-r5c8 bulb ["r4c8"]
arrow-11: arrow r7c3-r6c4 bulb ["r8c3"]
arrow-12: arrow r7c8-r8c8 bulb ["r7c7"]
modular-1: modular r1c1-r1c2-r1c3-r1c4
modular-2: modular r1c9-r2c9-r3c9-r4c9
modular-3: modular r9c9-r9c8-r9c7-r9c6
modular-4: modular r9c1-r8c1-r7c1-r6c1
modular-5: modular r2c6-r2c5-r2c4-r2c3
modular-6: modular r8c4-r8c5-r8c6-r8c7
modular-7: modular r6c5-r6c6-r6c7
modular-8: modular r4c5-r4c4-r4c3
modular-9: modular r5c2-r4c2-r5c1-r6c2
modular-10: modular r4c8-r5c9-r6c8-r5c8
modular-11: modular r8c3-r7c3-r6c4
modular-12: modular r7c7-r7c8-r8c8
modular-13: modular r1c1-r1c2-r1c3-r1c4
modular-14: modular r1c9-r2c9-r3c9-r4c9
modular-15: modular r9c9-r9c8-r9c7-r9c6
modular-16: modular r9c1-r8c1-r7c1-r6c1
modular-17: modular r2c6-r2c5-r2c4-r2c3
modular-18: modular r8c4-r8c5-r8c6-r8c7
modular-19: modular r4c5-r4c4-r4c3
modular-20: modular r6c5-r6c6-r6c7
modular-21: modular r5c2-r4c2-r5c1-r6c2
modular-22: modular r4c8-r5c9-r6c8-r5c8
modular-23: modular r8c3-r7c3-r6c4
modular-24: modular r7c7-r7c8-r8c8
```

**Sudoku, Arrows, Modular lines **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- ALL ARROWS ARE ALSO MODULAR LINES: for example, r1c1234 is a length 4 modular line.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
