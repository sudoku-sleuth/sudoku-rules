---
format: open-rules
title: She Said She Said
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cnev659pk6
case: https://sudoku-sleuth.com/cases/she-said-she-said
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r5c7 colour "white"
kropki-2: kropki r5c4-r6c4 colour "white"
kropki-3: kropki r3c4-r4c4 colour "white"
kropki-4: kropki r7c7-r8c7 colour "white"
kropki-5: kropki r4c2-r5c2 colour "black"
kropki-6: kropki r1c6-r2c6 colour "black"
kropki-7: kropki r7c1-r8c1 colour "black"
kropki-8: kropki r8c8-r9c8 colour "black"
kropki-9: kropki r8c2-r8c3 colour "black"
kropki-10: kropki r9c5-r9c6 colour "black"
whispers-1: whispers r3c7-r2c6-r1c6-r1c7-r1c8-r2c9-r3c9-r3c8-r4c7 gap 4 loop true
whispers-2: whispers r7c3-r6c3-r5c2-r4c2-r4c3-r4c4-r5c5-r6c5-r6c4 gap 4 loop true
whispers-3: whispers r7c2-r7c1-r8c1-r8c2-r9c2-r9c1 gap 4
whispers-4: whispers r7c4-r8c4-r9c4 gap 4
whispers-5: whispers r8c4-r8c5-r9c5 gap 4
whispers-6: whispers r9c7-r8c8-r8c7 gap 4
whispers-7: whispers r8c7-r9c7-r9c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
