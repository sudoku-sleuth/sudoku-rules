---
format: open-rules
title: Quiet Corridors
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/a5ffdlxw1g
case: https://sudoku-sleuth.com/cases/quiet-corridors
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=3 r9c1=4 r9c9=1
---

```rules
sudoku 9x9
whispers-1: whispers r3c1-r2c1-r1c1-r1c2-r2c2-r3c2 gap 5
whispers-2: whispers r4c2-r5c2-r6c2-r6c3-r5c3-r4c3 gap 5
whispers-3: whispers r7c3-r7c2-r7c1-r8c1-r8c2-r8c3 gap 5
whispers-4: whispers r8c4-r8c5-r8c6-r9c6-r9c5-r9c4 gap 5
whispers-5: whispers r9c8-r8c8-r7c8 gap 5
whispers-6: whispers r4c7-r5c7-r6c7 gap 5
whispers-7: whispers r6c9-r5c9-r4c9 gap 5
whispers-8: whispers r1c7-r1c8-r1c9 gap 5
whispers-9: whispers r4c4-r4c5-r4c6 gap 5
whispers-10: whispers r6c4-r6c5-r6c6 gap 5
whispers-11: whispers r5c6-r4c6 gap 5
whispers-12: whispers r3c6-r3c5-r3c4 gap 5
whispers-13: whispers r2c4-r3c4 gap 5
```

**Standard Sudoku, German Whispers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.

More more of our puzzles, visit https://missingdeck.net
