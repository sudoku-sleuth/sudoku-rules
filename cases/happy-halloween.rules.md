---
format: open-rules
title: Happy Halloween!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gwaoudi6fg
case: https://sudoku-sleuth.com/cases/happy-halloween
library: https://rules.sudoku-sleuth.com/
status: read
exported: aa32687d2f6240877441f678ca8a03b9
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 white
kropki-2: kropki r9c7-r9c8 white
kropki-3: kropki r9c4-r9c5 white
kropki-4: kropki r9c5-r9c6 white
kropki-5: kropki r2c3-r2c4 white
kropki-6: kropki r2c5-r2c6 white
kropki-7: kropki r2c7-r2c8 white
kropki-8: kropki r1c8-r1c9 white
kropki-9: kropki r4c4-r5c4 black
kropki-10: kropki r4c6-r5c6 black
kropki-11: kropki r3c8-r4c8 black
whispers-1: whispers r1c2-r2c2-r3c2-r3c3-r2c3 gap 5
whispers-2: whispers r2c3-r2c2 gap 5
whispers-3: whispers r1c4-r2c4-r2c5-r1c5 gap 5 loop true
whispers-4: whispers r1c6-r2c6-r2c7-r1c7 gap 5 loop true
whispers-5: whispers r2c8-r3c8 gap 5
modular r9c3-r8c4-r9c5-r8c6-r9c7-r9c8-r8c7-r7c7-r6c7-r5c7-r4c7-r3c6-r3c5-r3c4-r4c3-r5c3-r6c3-r7c3-r8c3-r9c2
```

**Sudoku, Modular Lines, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 Line differ by at least 5.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

The outline of the ghost is a modular line. The word "Boo!" is formed of Whisper-5 Lines.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
