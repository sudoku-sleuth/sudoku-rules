---
format: open-rules
title: Quiet Connections
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/quiet-connections
case: https://sudoku-sleuth.com/cases/quiet-connections
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=6 r5c9=8 r7c5=3
---

```rules
sudoku 9x9
whispers-1: whispers r3c1-r3c2-r2c2-r2c3-r1c3 gap 5
whispers-2: whispers r1c7-r2c7-r2c8-r3c8-r3c9 gap 5
whispers-3: whispers r7c1-r7c2-r8c2-r8c3-r9c3 gap 5
whispers-4: whispers r9c7-r8c7-r8c8-r7c8-r7c9 gap 5
whispers-5: whispers r6c4-r6c3-r5c3-r4c3-r4c4-r4c5-r4c6-r4c7-r5c7-r6c7-r6c6 gap 5
renban-1: renban r6c4-r6c5-r6c6
renban-2: renban r3c2-r4c3
renban-3: renban r2c7-r3c7-r3c8
renban-4: renban r7c2-r7c3-r8c3
renban-5: renban r5c4-r5c5-r5c6
```

**Sudoku, Renban, Whisper-5**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.  In this puzzle, the Renban lines are the THICKER pink lines.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, the Whisper-5 lines are the THINNER green lines.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
