---
format: open-rules
title: MDG is 70
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nnzkr5u0ke
case: https://sudoku-sleuth.com/cases/mdg-is-70
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=2 r5c9=7 r6c2=4
exported: 32847a733ec90cf25fc14748918cc4cd
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r5c7 white
kropki-2: kropki r1c2-r2c2 white
kropki-3: kropki r6c6-r7c6 white
kropki-4: kropki r7c9-r8c9 white
kropki-5: kropki r7c5-r8c5 white
kropki-6: kropki r6c4-r6c5 white
kropki-7: kropki r4c2-r4c3 white
kropki-8: kropki r3c6-r4c6 white
kropki-9: kropki r2c1-r3c1 black
kropki-10: kropki r6c4-r7c4 black
kropki-11: kropki r4c6-r5c6 black
kropki-12: kropki r3c3-r4c3 black
kropki-13: kropki r2c4-r2c5 black
kropki-14: kropki r6c9-r7c9 black
kropki-15: kropki r5c6-r5c7 black
kropki-16: kropki r1c5-r1c6 black
kropki-17: kropki r1c7-r1c8 black
whispers-1: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 4
whispers-2: whispers r3c4-r2c4-r1c4-r1c5-r2c6-r3c5 gap 4 loop true
whispers-3: whispers r1c9-r1c8-r1c7-r2c7-r3c7-r3c8-r3c9-r2c9-r2c8 gap 4
whispers-4: whispers r4c3-r5c3-r6c3 gap 4
whispers-5: whispers r4c6-r4c5-r5c5-r5c6-r6c6-r6c5 gap 4
whispers-6: whispers r7c2-r7c3-r7c4-r8c4-r9c3 gap 4
whispers-7: whispers r9c6-r8c6-r7c6-r7c7-r8c7-r9c7 gap 4 loop true
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 26
little-killer-2: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 56
```

**Sudoku, Whisper-4, Kropki Pairs, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki Pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
