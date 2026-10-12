---
format: open-rules
title: Corner Cups
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/corner-cups
case: https://sudoku-sleuth.com/cases/corner-cups
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c3-r7c3 colour "white"
kropki-2: kropki r5c3-r6c3 colour "white"
kropki-3: kropki r3c3-r4c3 colour "white"
kropki-4: kropki r1c3-r1c4 colour "white"
kropki-5: kropki r1c6-r1c7 colour "white"
kropki-6: kropki r9c6-r9c7 colour "white"
kropki-7: kropki r5c9-r6c9 colour "white"
kropki-8: kropki r4c9-r5c9 colour "white"
kropki-9: kropki r5c5-r6c5 colour "white"
kropki-10: kropki r1c5-r2c5 colour "white"
kropki-11: kropki r4c1-r5c1 colour "white"
kropki-12: kropki r3c7-r4c7 colour "black"
kropki-13: kropki r4c7-r5c7 colour "black"
kropki-14: kropki r4c3-r5c3 colour "black"
kropki-15: kropki r4c5-r5c5 colour "black"
whispers-1: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3 gap 5
whispers-2: whispers r7c1-r8c1-r9c1-r9c2-r9c3-r8c3-r7c3 gap 5
whispers-3: whispers r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r3c9 gap 5
whispers-4: whispers r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7 gap 5
whispers-5: whispers r5c3-r5c4-r5c5-r5c6-r5c7 gap 5
```

**Sudoku, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
