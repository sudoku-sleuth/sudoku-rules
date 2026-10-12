---
format: open-rules
title: Taxes Driving Us Dotty
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/g1zg7yphir
case: https://sudoku-sleuth.com/cases/taxes-driving-us-dotty
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r6c3 colour "white"
kropki-2: kropki r2c5-r3c5 colour "white"
kropki-3: kropki r8c8-r9c8 colour "black"
kropki-4: kropki r3c6-r3c7 colour "black"
kropki-5: kropki r2c7-r3c7 colour "black"
kropki-6: kropki r1c9-r2c9 colour "black"
kropki-7: kropki r4c5-r4c6 colour "black"
kropki-8: kropki r2c1-r2c2 colour "black"
kropki-9: kropki r7c2-r8c2 colour "black"
kropki-10: kropki r5c7-r5c8 colour "black"
whispers-1: whispers r1c1-r2c1-r3c1 gap 5
whispers-2: whispers r3c4-r4c4-r4c5-r5c5 gap 5
whispers-3: whispers r4c5-r3c5 gap 5
whispers-4: whispers r6c2-r6c1-r7c1-r8c1-r8c2 gap 5
whispers-5: whispers r7c1-r7c2 gap 5
whispers-6: whispers r7c3-r7c4-r7c5-r8c4-r9c3-r9c4-r9c5 gap 5
whispers-7: whispers r7c7-r6c8-r7c9-r8c8 gap 5
whispers-8: whispers r4c6-r5c6-r6c6-r6c7-r5c7-r4c7 gap 5 loop true
whispers-9: whispers r2c2-r3c2-r4c2-r4c3-r3c3-r2c3 gap 5 loop true
```

**Sudoku, Whisper-5, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
