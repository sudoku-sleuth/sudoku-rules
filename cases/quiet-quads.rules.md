---
format: open-rules
title: Quiet Quads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nfc51y0umq
case: https://sudoku-sleuth.com/cases/quiet-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: 94dd4da52018732ed09f7637336c95cc
---

```rules
sudoku 9x9
whispers-1: whispers r5c1-r4c1-r4c2-r3c2-r3c3-r2c3-r2c4-r1c4-r1c5 gap 5
whispers-2: whispers r5c9-r6c9-r6c8-r7c8-r7c7-r8c7-r8c6-r9c6-r9c5 gap 5
whispers-3: whispers r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-4: whispers r9c7-r9c8-r9c9-r8c9-r7c9 gap 5
whispers-5: whispers r7c1-r7c2-r8c2-r8c3-r9c3 gap 5
whispers-6: whispers r1c7-r2c7-r2c8-r3c8-r3c9 gap 5
whispers-7: whispers r5c3-r5c4 gap 5
whispers-8: whispers r5c6-r5c7 gap 5
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,6]
quadruple-2: quadruple r7c7-r7c8-r8c7-r8c8 digits [4,9]
quadruple-3: quadruple r4c1-r4c2-r5c1-r5c2 digits [6]
quadruple-4: quadruple r5c8-r5c9-r6c8-r6c9 digits [4]
quadruple-5: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,8]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,8]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [7]
quadruple-8: quadruple r5c5-r5c6-r6c5-r6c6 digits [2]
```

**Sudoku, Whisper-5 Lines, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 line must differ by at least five.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
