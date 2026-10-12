---
format: open-rules
title: Combination Lock
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3ksjlj3k8p
case: https://sudoku-sleuth.com/cases/combination-lock
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=3 r1c9=8 r9c1=1 r9c9=9
---

```rules
sudoku 9x9
whispers-1: whispers r6c2-r5c2-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5-r2c6 gap 4
whispers-2: whispers r3c5-r3c4-r3c3-r4c3-r5c3 gap 4
whispers-3: whispers r6c4-r5c5-r4c6 gap 4
whispers-4: whispers r4c5-r4c4-r5c4 gap 4
whispers-5: whispers r7c3-r7c4-r7c5-r7c6-r7c7-r6c7-r5c7-r4c7-r3c7 gap 4
whispers-6: whispers r8c5-r8c6-r8c7-r8c8-r7c8-r6c8-r5c8 gap 4
whispers-7: whispers r6c5-r6c6-r5c6 gap 4
entropic-1: entropic r5c2-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5
entropic-2: entropic r5c4-r4c4-r4c5
entropic-3: entropic r6c5-r6c6-r5c6
entropic-4: entropic r7c2-r8c2-r8c3-r8c4
entropic-5: entropic r2c7-r2c8-r3c8
entropic-6: entropic r7c4-r7c5-r7c6-r7c7-r6c7-r5c7-r4c7
entropic-7: entropic r8c7-r8c8-r7c8
entropic-8: entropic r4c3-r5c3-r6c3
entropic-9: entropic r3c4-r3c5-r3c6
```

**Sudoku, Entropic Lines, Whisper-4 Lines**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Entropic lines: Any set of three adjacent cells along a THIN, peach entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
Wraps
- Whisper-4: Adjacent digits along a THICK, orange Whisper-4 line must differ by at least four.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
