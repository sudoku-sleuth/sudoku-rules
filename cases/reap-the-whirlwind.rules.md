---
format: open-rules
title: Reap the Whirlwind
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ypab7w2ggt
case: https://sudoku-sleuth.com/cases/reap-the-whirlwind
library: https://rules.sudoku-sleuth.com/
status: read
givens: ....1......9....1..1............52.1...1.4....61............1.81...6.........1...
---

```rules
sudoku 9x9
arrow-1: arrow r3c6-r3c7-r4c7-r5c7-r6c7 bulb ["r3c4","r3c5"]
arrow-2: arrow r7c5-r7c4-r7c3-r6c3-r5c3 bulb ["r7c6","r7c7"]
arrow-3: arrow r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r3c8 bulb ["r3c3","r4c3"]
arrow-4: arrow r6c8-r7c8-r8c8-r8c7-r8c6-r8c5-r8c4 bulb ["r4c8","r5c8"]
arrow-5: arrow r7c2-r6c2-r5c2-r4c2-r3c2-r2c2 bulb ["r8c2","r8c3"]
arrow-6: arrow r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 bulb ["r1c2","r1c3"]
arrow-7: arrow r4c9-r5c9-r6c9-r7c9-r8c9 bulb ["r2c9","r3c9"]
arrow-8: arrow r9c7-r9c6-r9c5-r9c4-r9c3-r9c2 bulb ["r9c8","r9c9"]
arrow-9: arrow r4c1-r3c1-r2c1-r1c1 bulb ["r5c1","r6c1"]
```

**Sudoku, Arrows**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Arrows: Digits along an arrow must sum to the number indicated in the circle or pill from which the arrow emerges. Multi-digit pills are read top-to-bottom or left-to-right.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
