---
format: open-rules
title: Quiet Wiggles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/989ab0bm99
case: https://sudoku-sleuth.com/cases/quiet-wiggles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=3 r2c7=4 r7c6=9
exported: d8b7f1ee77287133ac73db25599382e0
---

```rules
sudoku 9x9
whispers-1: whispers r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r2c3 gap 5
whispers-2: whispers r7c7-r8c7-r9c7-r9c8-r9c9-r8c9-r8c8-r7c8 gap 5
whispers-3: whispers r8c2-r9c2-r9c1-r8c1 gap 5
whispers-4: whispers r5c1-r6c1-r6c2-r6c3-r5c3 gap 5
whispers-5: whispers r5c2-r5c3 gap 5
whispers-6: whispers r8c3-r8c4-r8c5 gap 5
whispers-7: whispers r7c3-r7c4-r7c5-r8c5 gap 5
whispers-8: whispers r4c4-r5c4-r6c4 gap 5
whispers-9: whispers r4c6-r4c5-r4c4 gap 5
whispers-10: whispers r4c7-r3c7-r3c6-r3c5 gap 5
whispers-11: whispers r4c9-r4c8-r3c8-r3c9 gap 5
```

**Sudoku, Whisper-5 Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
