---
format: open-rules
title: Bonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/exa3icef4l
case: https://sudoku-sleuth.com/cases/bonds
library: https://rules.sudoku-sleuth.com/
status: read
exported: c3976f3c527ee51de5eb31266383a9b7
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r4c4 black
kropki-2: kropki r3c1-r4c1 black
kropki-3: kropki r2c3-r3c3 black
kropki-4: kropki r4c5-r5c5 black
kropki-5: kropki r5c4-r6c4 black
kropki-6: kropki r7c3-r8c3 black
kropki-7: kropki r8c3-r8c4 black
kropki-8: kropki r7c6-r8c6 black
kropki-9: kropki r2c7-r3c7 black
kropki-10: kropki r4c8-r5c8 black
whispers-1: whispers r4c1-r3c1-r2c2-r2c3-r3c4-r4c4 gap 4
whispers-2: whispers r3c3-r4c3-r5c4-r5c5-r4c6-r3c6 gap 4
whispers-3: whispers r4c5-r3c5-r2c6-r2c7-r3c8-r4c8 gap 4
whispers-4: whispers r3c7-r4c7-r5c8-r4c9-r3c9 gap 4
whispers-5: whispers r3c2-r4c2-r5c1 gap 4
whispers-6: whispers r5c4-r6c3-r7c3 gap 4
whispers-7: whispers r5c5-r6c6-r7c6 gap 4
whispers-8: whispers r6c5-r7c5-r8c6-r8c7-r7c8-r6c8 gap 4
whispers-9: whispers r6c4-r7c4-r8c3-r8c2-r7c1-r6c1 gap 4
whispers-10: whispers r7c8-r8c9 gap 4
whispers-11: whispers r2c2-r1c1 gap 4
whispers-12: whispers r2c6-r1c5 gap 4
whispers-13: whispers r8c2-r9c1 gap 4
```

**Sudoku, Whisper-4 Lines, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
