---
format: open-rules
title: Juneteenth
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qwljt8mdxq
case: https://sudoku-sleuth.com/cases/juneteenth
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=1 r1c5=9 r1c7=6 r7c2=1 r7c3=8 r7c8=6 r9c8=5
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r4c8-r5c8 colour "black"
kropki-3: kropki r3c4-r3c5 colour "black"
whispers-1: whispers r1c1-r1c2-r1c3 gap 4
whispers-2: whispers r2c1-r3c1-r3c2-r2c2-r1c2 gap 4
whispers-3: whispers r2c3-r3c3-r2c4-r3c4 gap 4
whispers-4: whispers r3c6-r2c6-r3c5-r2c5 gap 4
whispers-5: whispers r3c9-r3c8-r2c7-r2c8-r2c9 gap 4
whispers-6: whispers r2c9-r3c8 gap 4
whispers-7: whispers r4c1-r5c1-r6c1-r6c2 gap 4
whispers-8: whispers r5c2-r5c1 gap 4
whispers-9: whispers r6c5-r6c4-r5c3-r5c4-r5c5 gap 4
whispers-10: whispers r5c5-r6c4 gap 4
whispers-11: whispers r5c8-r5c7-r4c6-r4c7-r4c8 gap 4
whispers-12: whispers r4c8-r5c7 gap 4
whispers-13: whispers r8c1-r9c1-r8c2-r9c2 gap 4
whispers-14: whispers r7c4-r8c4-r9c4-r9c5 gap 4
whispers-15: whispers r8c5-r8c4 gap 4
whispers-16: whispers r7c7-r8c7-r9c7 gap 4
whispers-17: whispers r9c8-r8c8-r8c7 gap 4
```

**Sudoku, Dutch Whispers, Ratio Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
