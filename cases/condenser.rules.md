---
format: open-rules
title: Condenser
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wyf2nc7xmc
case: https://sudoku-sleuth.com/cases/condenser
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=8 r9c8=4
exported: 904a26c47e7a898da7e300c487257b8e
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r7c8-r8c8 black
kropki-2: kropki r2c1-r2c2 black
kropki-3: kropki r2c6-r3c6 black
kropki-4: kropki r8c3-r8c4 black
whispers-1: whispers r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8 gap 5
whispers-2: whispers r3c3-r4c2-r5c3-r6c4-r7c5-r8c6-r7c7 gap 5
whispers-3: whispers r8c2-r7c1-r6c2-r7c3-r8c4-r9c3 gap 5
whispers-4: whispers r2c4-r3c5-r4c6-r5c7-r6c8-r5c9-r4c8-r3c7-r2c6-r1c5 gap 5 loop true
```

**Sudoku, Diagonals, Whisper-5, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal: Digits cannot repeat along marked diagonals (running from r1c1 to r9c9 and from r1c9 to r9c1).
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
