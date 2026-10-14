---
format: open-rules
title: Sending a Quiet Message
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0w9riit62m
case: https://sudoku-sleuth.com/cases/sending-a-quiet-message
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=7 r7c4=4
exported: ad0e44db4093e0d4da8179966f6e6544
---

```rules
sudoku 9x9
whispers-1: whispers r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r3c3 gap 5
whispers-2: whispers r7c3-r7c2-r7c1-r8c1-r9c1-r9c2-r9c3 gap 5
whispers-3: whispers r3c7-r3c8-r3c9-r2c9-r1c9-r1c8-r1c7 gap 5
whispers-4: whispers r7c7-r8c7-r9c7-r9c8-r9c9-r8c9-r7c9 gap 5
whispers-5: whispers r5c4-r4c4 gap 5
whispers-6: whispers r6c5-r6c6 gap 5
whispers-7: whispers r6c2-r5c2-r4c2-r4c3-r4c4 gap 5
whispers-8: whispers r7c5-r6c5 gap 5
whispers-9: whispers r3c5-r4c5 gap 5
whispers-10: whispers r4c6-r4c7 gap 5
```

**Sudoku, Whisper-5**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 line must differ by at least five.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
