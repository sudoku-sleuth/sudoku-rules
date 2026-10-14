---
format: open-rules
title: Whisper Around The Circle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/whisper-around-the-circle
case: https://sudoku-sleuth.com/cases/whisper-around-the-circle
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4 r1c9=7 r5c3=1 r9c1=6 r9c9=4
exported: bed283732ac062035880b2d4b670c3c5
---

```rules
sudoku 9x9
whispers-1: whispers r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c9-r5c9-r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1 gap 4 loop true
whispers-2: whispers r2c1-r1c2 gap 4
whispers-3: whispers r1c8-r2c9 gap 4
whispers-4: whispers r8c9-r9c8 gap 4
whispers-5: whispers r9c2-r8c1 gap 4
whispers-6: whispers r4c2-r3c3-r2c4 gap 4
whispers-7: whispers r6c2-r7c3-r8c4 gap 4
whispers-8: whispers r6c3-r7c4 gap 4
whispers-9: whispers r4c3-r3c4 gap 4
whispers-10: whispers r6c7-r7c6 gap 4
whispers-11: whispers r3c6-r4c7 gap 4
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 11
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 12
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 11
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 13
little-killer-5: little-killer r2c1-r1c2 sum 8
little-killer-6: little-killer r2c9-r1c8 sum 10
little-killer-7: little-killer r8c9-r9c8 sum 10
little-killer-8: little-killer r8c1-r9c2 sum 11
little-killer-9: little-killer r1c6-r2c7-r3c8-r4c9 sum 23
little-killer-10: little-killer r6c9-r7c8-r8c7-r9c6 sum 30
little-killer-11: little-killer r9c4-r8c3-r7c2-r6c1 sum 25
little-killer-12: little-killer r4c1-r3c2-r2c3-r1c4 sum 27
```

**Sudoku, Whisper-4 Lines, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
