---
format: open-rules
title: Whisper Across
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/whisper-across
case: https://sudoku-sleuth.com/cases/whisper-across
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c9-r3c9 colour "white"
kropki-2: kropki r2c8-r2c9 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r8c2-r9c2 colour "white"
kropki-5: kropki r4c3-r5c3 colour "white"
kropki-6: kropki r5c3-r6c3 colour "white"
kropki-7: kropki r4c7-r5c7 colour "white"
kropki-8: kropki r5c6-r6c6 colour "white"
kropki-9: kropki r1c1-r1c2 colour "white"
kropki-10: kropki r1c1-r2c1 colour "white"
kropki-11: kropki r3c2-r4c2 colour "black"
kropki-12: kropki r4c1-r4c2 colour "black"
kropki-13: kropki r5c8-r6c8 colour "black"
kropki-14: kropki r2c4-r2c5 colour "black"
kropki-15: kropki r2c5-r2c6 colour "black"
kropki-16: kropki r7c6-r8c6 colour "black"
kropki-17: kropki r8c4-r8c5 colour "black"
kropki-18: kropki r7c5-r8c5 colour "black"
kropki-19: kropki r4c2-r5c2 colour "black"
whispers r1c3-r2c3-r3c3-r3c2-r3c1-r4c1-r5c1-r6c1-r7c1-r7c2-r7c3-r8c3-r9c3-r9c4-r9c5-r9c6-r9c7-r8c7-r7c7-r7c8-r7c9-r6c9-r5c9-r4c9-r3c9-r3c8-r3c7-r2c7-r1c7-r1c6-r1c5-r1c4 gap 5 loop true
```

**Sudoku, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
