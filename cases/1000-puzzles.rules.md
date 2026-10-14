---
format: open-rules
title: 1000 Puzzles!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/iffmnvx4y0
case: https://sudoku-sleuth.com/cases/1000-puzzles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=4 r1c4=1 r1c5=6 r4c8=2 r4c9=6
exported: fef5a00c633e93a3e621ed1fd61b8fa9
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r8c8 black
kropki-2: kropki r3c3-r4c3 black
kropki-3: kropki r7c4-r8c4 black
kropki-4: kropki r5c5-r6c5 black
whispers-1: whispers r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 gap 4
whispers-2: whispers r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3 gap 4 loop true
whispers-3: whispers r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5 gap 4 loop true
whispers-4: whispers r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r9c7-r8c7-r7c7-r6c7-r5c7-r4c7 gap 4 loop true
whispers-5: whispers r9c8-r8c8-r7c8-r6c8-r6c9-r7c9 gap 4
whispers-6: whispers r7c9-r7c8 gap 4
```

**Sudoku, Whisper-4 Lines, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line must differ by at least four.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
