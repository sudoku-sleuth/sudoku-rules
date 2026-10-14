---
format: open-rules
title: Just Between Us
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/t82w8igk9j
case: https://sudoku-sleuth.com/cases/just-between-us
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=7 r1c9=2 r4c7=5 r5c1=9 r9c1=3
exported: 3fecc3d790adfe486bb0cc7721850e5d
---

```rules
sudoku 9x9
between-1: between r7c2-r8c3 ends ["r6c1","r9c4"]
between-2: between r2c7-r3c8 ends ["r1c6","r4c9"]
between-3: between r2c4-r3c5-r4c6-r5c7-r6c8 ends ["r1c3","r7c9"]
between-4: between r4c2-r5c3-r6c4-r7c5-r8c6 ends ["r3c1","r9c7"]
between-5: between r8c8 ends ["r7c7","r9c9"]
whispers-1: whispers r4c2-r5c3-r6c4-r7c5-r8c6 gap 5
whispers-2: whispers r2c4-r3c5-r4c6-r5c7-r6c8 gap 5
whispers-3: whispers r2c7-r3c8 gap 5
whispers-4: whispers r7c2-r8c3 gap 5
whispers-5: whispers r2c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7 gap 5
whispers-6: whispers r2c2-r1c2 gap 5
```

**Sudoku, Between Lines, Whisper-5 Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on grey Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Whisper-5 Lines: Adjacent digits along a green Whisper-5 line must differ by at least five.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
