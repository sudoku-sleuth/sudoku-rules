---
format: open-rules
title: Shifting
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/shifting
case: https://sudoku-sleuth.com/cases/shifting
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=3 r6c6=8 r8c2=9 r8c8=5
exported: 6a474ba684d6e1efb5bc4d9d87865f02
---

```rules
sudoku 9x9
whispers-1: whispers r2c4-r2c5-r2c6 gap 5
whispers-2: whispers r4c8-r5c8-r6c8 gap 5
whispers-3: whispers r8c6-r8c5-r8c4 gap 5
whispers-4: whispers r6c2-r5c2-r4c2 gap 5
whispers-5: whispers r3c1-r4c1 gap 5
whispers-6: whispers r1c3-r1c4 gap 5
whispers-7: whispers r9c7-r9c6 gap 5
whispers-8: whispers r7c9-r6c9 gap 5
whispers-9: whispers r8c1-r9c2-r9c3-r9c4 gap 5
whispers-10: whispers r4c6-r4c7 gap 5
renban-1: renban r4c2-r3c3-r2c4
renban-2: renban r2c6-r3c7-r4c8
renban-3: renban r6c2-r7c3-r8c4
renban-4: renban r8c6-r7c7-r6c8
renban-5: renban r3c1-r2c1-r1c2-r1c3
renban-6: renban r9c7-r9c8-r8c9-r7c9
renban-7: renban r6c4-r6c5-r5c6-r4c6
```

**Sudoku, Renban, Whisper-5**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.  In this puzzle, the Renban lines are the THICKER pink lines.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, the Whisper-5 lines are the THINNER green lines.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
