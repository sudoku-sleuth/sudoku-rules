---
format: open-rules
title: Mesh
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1jp3k057wx
case: https://sudoku-sleuth.com/cases/mesh
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=8
exported: 366415c1dd1ffcec0d83ec26182f9326
---

```rules
sudoku 9x9
arrow-1: arrow r1c4-r1c3-r1c2 bulb ["r2c5"]
arrow-2: arrow r3c7-r4c6-r4c5 bulb ["r3c8"]
arrow-3: arrow r5c6-r6c5-r6c4 bulb ["r5c7"]
arrow-4: arrow r4c3-r5c2-r5c1 bulb ["r4c4"]
arrow-5: arrow r7c5-r8c4-r8c3 bulb ["r7c6"]
arrow-6: arrow r8c8-r9c7-r9c6 bulb ["r8c9"]
whispers-1: whispers r1c2-r1c3-r2c4-r2c5-r2c6-r3c7-r3c8 gap 4
whispers-2: whispers r3c1-r3c2-r4c3-r4c4-r4c5-r5c6-r5c7 gap 4
whispers-3: whispers r6c3-r6c4-r7c5-r7c6-r7c7-r8c8-r8c9 gap 4
```

**Sudoku, Whisper-4, Arrows**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
