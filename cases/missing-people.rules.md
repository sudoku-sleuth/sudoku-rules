---
format: open-rules
title: Missing People
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pkxbsl1qbh
case: https://sudoku-sleuth.com/cases/missing-people
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=1 r2c7=2 r4c1=1 r4c9=4 r5c2=9 r6c3=4 r7c4=4 r9c3=2 r9c4=5
exported: 253c5c69193d43646aead7be17705129
---

```rules
sudoku 9x9
kropki-1: kropki r9c7-r9c8 black
kropki-2: kropki r7c1-r7c2 black
kropki-3: kropki r3c8-r3c9 black
kropki-4: kropki r2c2-r2c3 black
whispers-1: whispers r1c2-r1c3-r1c4 gap 5
whispers-2: whispers r3c1-r4c2-r3c3-r2c3-r1c3 gap 5
whispers-3: whispers r6c4-r5c4-r4c4-r3c4-r3c5-r4c6-r5c5-r6c6 gap 5
whispers-4: whispers r9c7-r8c7-r7c7-r6c7-r6c8-r6c9-r7c8-r8c9-r9c9-r9c8 gap 5
```

**Sudoku, Whisper-5, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, all lines except the tree trunk are Whisper-5 Lines.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
