---
format: open-rules
title: Palette Cleanser
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ep16lcf8ic
case: https://sudoku-sleuth.com/cases/palette-cleanser
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r4c6 colour "black"
kropki-2: kropki r3c3-r3c4 colour "black"
kropki-3: kropki r2c1-r2c2 colour "black"
kropki-4: kropki r8c8-r9c8 colour "black"
kropki-5: kropki r4c1-r4c2 colour "black"
kropki-6: kropki r5c3-r5c4 colour "black"
whispers-1: whispers r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 gap 5
whispers-2: whispers r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9 gap 5
whispers-3: whispers r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2 gap 5
whispers-4: whispers r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1 gap 5
whispers-5: whispers r7c3-r6c3-r5c3-r4c3-r3c3 gap 5
whispers-6: whispers r3c4-r3c5-r3c6 gap 5
```

**Sudoku, Whisper-5, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
