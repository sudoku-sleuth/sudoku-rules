---
format: open-rules
title: Can You Point Me To ...
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v3fp7psexa
case: https://sudoku-sleuth.com/cases/can-you-point-me-to
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=2 r3c3=1 r4c4=6 r6c8=2 r7c2=4 r8c9=1
exported: d03590cb4c13ca1df32bfefa365c88da
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r2c2-r2c1 bulb ["r1c1"]
arrow-2: arrow r1c8-r2c8-r2c9 bulb ["r1c9"]
arrow-3: arrow r9c2-r8c2-r8c1 bulb ["r9c1"]
arrow-4: arrow r9c8-r8c8-r8c9 bulb ["r9c9"]
arrow-5: arrow r6c6-r5c6 bulb ["r7c7"]
arrow-6: arrow r4c6-r4c5 bulb ["r3c7"]
arrow-7: arrow r6c4-r5c4 bulb ["r7c3"]
arrow-8: arrow r2c5-r3c5 bulb ["r1c5"]
arrow-9: arrow r9c5-r9c6 bulb ["r8c5"]
arrow-10: arrow r5c1-r4c1 bulb ["r5c2"]
arrow-11: arrow r5c7-r4c7 bulb ["r5c8"]
```

**Sudoku, Arrows**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Arrows: Digits on the shaft of an arrow sum to the value in the attached circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
