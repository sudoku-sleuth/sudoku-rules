---
format: open-rules
title: Charlie Brown
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/a4kxn7hc50
case: https://sudoku-sleuth.com/cases/charlie-brown
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c4=4 r3c7=7 r4c2=6 r6c6=6 r7c8=2 r8c5=4 r9c3=3
exported: 74bbdc8f5f2952b815fdd6587863509b
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r2c2-r3c3-r2c4-r1c5-r2c6-r3c7-r2c8-r1c9 gap 5
whispers-2: whispers r3c1-r4c2-r5c3-r4c4-r3c5-r4c6-r5c7-r4c8-r3c9 gap 5
whispers-3: whispers r6c6-r7c7-r6c8-r5c9 gap 5
whispers-4: whispers r5c1-r6c2-r7c3-r6c4 gap 5
whispers-5: whispers r7c1-r8c2-r9c3-r8c4 gap 5
whispers-6: whispers r8c6-r9c7-r8c8-r7c9 gap 5
```

**Sudoku, German Whispers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
