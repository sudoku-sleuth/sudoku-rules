---
format: open-rules
title: Piccadilly to Euston
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fei8tbn614
case: https://sudoku-sleuth.com/cases/piccadilly-to-euston
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c1=6 r3c7=5 r5c5=1 r6c9=7 r7c8=1 r9c2=2 r9c6=3
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r4c1-r5c2-r6c3 bulb ["r2c3"]
arrow-2: arrow r3c8-r4c9-r5c8-r6c7 bulb ["r2c7"]
arrow-3: arrow r4c3-r5c4-r6c5 bulb ["r3c4"]
arrow-4: arrow r4c7-r5c6 bulb ["r3c6"]
arrow-5: arrow r1c4-r1c5-r2c6-r1c7 bulb ["r1c3"]
arrow-6: arrow r8c4-r8c5-r7c6-r8c7 bulb ["r8c3"]
```

**Sudoku, Arrows**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Arrows: Digits on the shaft of an arrow sum to the value in the attached circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
