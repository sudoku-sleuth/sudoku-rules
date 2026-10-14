---
format: open-rules
title: SudokuCon Day One 2026
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uig71u005e
case: https://sudoku-sleuth.com/cases/sudokucon-day-one-2026
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=3 r2c9=1 r9c1=7
exported: 20921cb97676ab903e3b90f1395f9041
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r4c8-r5c8 white
kropki-3: kropki r3c8-r4c8 white
kropki-4: kropki r3c8-r3c9 white
kropki-5: kropki r5c1-r5c2 black
kropki-6: kropki r2c2-r3c2 black
kropki-7: kropki r2c3-r3c3 black
kropki-8: kropki r2c6-r2c7 black
kropki-9: kropki r6c7-r6c8 black
whispers-1: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 4
whispers-2: whispers r5c2-r5c1-r6c1-r6c2 gap 4
whispers-3: whispers r4c3-r5c3-r6c3 gap 4
whispers-4: whispers r5c3-r5c4-r6c4 gap 4
whispers-5: whispers r6c6-r6c5-r5c6-r5c5-r6c5 gap 4
whispers-6: whispers r5c8-r5c7-r6c8-r6c7 gap 4
whispers-7: whispers r7c2-r8c2-r9c2-r9c3 gap 4
whispers-8: whispers r8c2-r8c3 gap 4
whispers-9: whispers r9c5-r9c4-r8c5-r8c4-r9c4 gap 4
whispers-10: whispers r9c6-r8c6-r8c7 gap 4
whispers-11: whispers r3c6-r2c5-r3c5-r3c4-r2c4-r2c5 gap 4
whispers-12: whispers r3c7-r2c7-r2c8-r3c8 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki Pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
