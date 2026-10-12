---
format: open-rules
title: Con Grad Ulations!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/95ga7qobfm
case: https://sudoku-sleuth.com/cases/con-grad-ulations
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c1=2 r4c1=8 r6c6=5 r9c3=2 r9c4=6
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r3c9 colour "white"
kropki-2: kropki r7c5-r8c5 colour "white"
kropki-3: kropki r4c2-r4c3 colour "white"
whispers-1: whispers r1c4-r1c3-r1c2-r2c2-r3c2-r3c3-r3c4 gap 5
whispers-2: whispers r2c3-r2c2 gap 5
whispers-3: whispers r3c6-r2c6-r1c7-r2c8-r3c8 gap 5
whispers-4: whispers r2c6-r2c7-r2c8 gap 5
whispers-5: whispers r8c3-r7c3-r6c3-r5c3-r5c4-r5c5-r6c4-r7c5-r8c4 gap 5
whispers-6: whispers r8c7-r7c7-r6c7-r5c8-r6c9-r7c9-r8c9 gap 5
whispers-7: whispers r6c7-r6c8-r6c9 gap 5
```

**Sudoku, Whisper-5, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Consecutive Pairs: Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
