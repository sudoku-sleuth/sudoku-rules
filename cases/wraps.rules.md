---
format: open-rules
title: Wraps
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9v0c6zuxgl
case: https://sudoku-sleuth.com/cases/wraps
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=5 r4c1=1 r6c9=9 r9c4=5
exported: 3e516ebc1f27906b4e9188113ac15949
---

```rules
sudoku 9x9
whispers-1: whispers r2c2-r2c1-r1c1-r1c2-r1c3-r2c3-r3c3-r3c2-r3c1 gap 4
whispers-2: whispers r2c8-r2c9-r1c9-r1c8-r1c7-r2c7-r3c7-r3c8-r3c9 gap 4
whispers-3: whispers r7c1-r8c1-r9c1-r9c2-r9c3-r8c3-r7c3-r7c2-r8c2 gap 4
whispers-4: whispers r9c9-r8c9-r7c9-r7c8-r7c7-r8c7-r9c7-r9c8-r8c8 gap 4
whispers-5: whispers r4c4-r4c5-r4c6-r5c6-r6c6-r6c5-r6c4 gap 4
whispers-6: whispers r5c5-r5c4-r6c4 gap 4
sandwich-1: sandwich r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 0
sandwich-2: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 5
sandwich-3: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 0
sandwich-4: sandwich r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 8
sandwich-5: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 14
```

**Sudoku, Whisper-4 Lines, Sandwich Sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
