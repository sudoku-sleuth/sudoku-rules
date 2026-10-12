---
format: open-rules
title: Easter Candy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d1x9c1vp9q
case: https://sudoku-sleuth.com/cases/easter-candy
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=2 r3c8=5 r4c1=4 r5c9=2 r9c6=4
---

```rules
sudoku 9x9
whispers-1: whispers r3c1-r3c2 gap 5
whispers-2: whispers r1c3-r2c3 gap 5
whispers-3: whispers r3c3-r4c4-r5c5-r6c6-r7c7 gap 5
whispers-4: whispers r5c3-r6c4-r7c5 gap 5
whispers-5: whispers r6c2-r7c3-r8c4 gap 5
whispers-6: whispers r2c6-r3c7-r4c8 gap 5
whispers-7: whispers r3c5-r4c6-r5c7 gap 5
whispers-8: whispers r8c7-r9c7 gap 5
whispers-9: whispers r7c8-r7c9 gap 5
renban-1: renban r3c1-r2c2-r1c3
renban-2: renban r6c2-r5c2-r4c2-r3c2-r2c3-r2c4-r2c5-r2c6
renban-3: renban r4c8-r5c8-r6c8-r7c8-r8c7-r8c6-r8c5-r8c4
renban-4: renban r9c7-r8c8-r7c9
renban-5: renban r4c3-r5c4-r6c5
renban-6: renban r3c4-r4c5-r5c6
renban-7: renban r8c1-r9c1-r9c2-r9c3
renban-8: renban r1c7-r1c8-r1c9-r2c9
parity-cells r3c3-r6c4-r4c5 parity "odd"
```

**Sudoku, Renban, Whisper-5, Odds**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.  In this puzzle, the Renban lines are the THINNER pink lines.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, the Whisper-5 lines are the THICKER green lines.
- Odds: Digits in cells marked with a grey circle are odd.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
