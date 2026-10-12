---
format: open-rules
title: In Memoriam Tom Lehrer
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/40vhc4qt5c
case: https://sudoku-sleuth.com/cases/in-memoriam-tom-lehrer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=2 r1c8=8 r2c1=4 r2c3=9 r5c3=7 r7c8=2 r7c9=5 r8c4=2 r9c4=6
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r6c6 colour "white"
kropki-2: kropki r3c7-r4c7 colour "white"
kropki-3: kropki r2c8-r2c9 colour "white"
kropki-4: kropki r2c7-r2c8 colour "white"
whispers-1: whispers r1c1-r1c2-r1c3 gap 4
whispers-2: whispers r1c2-r2c2-r3c2 gap 4
whispers-3: whispers r2c4-r3c4-r3c5-r2c5 gap 4 loop true
whispers-4: whispers r3c7-r2c7-r3c8-r2c9-r3c9 gap 4
whispers-5: whispers r4c1-r5c1-r6c1-r6c2 gap 4
whispers-6: whispers r6c4-r5c5-r5c4 gap 4
whispers-7: whispers r5c4-r6c4-r6c5 gap 4
whispers-8: whispers r4c7-r5c7-r6c7 gap 4
whispers-9: whispers r5c7-r5c8-r6c8 gap 4
whispers-10: whispers r8c2-r9c2 gap 4
whispers-11: whispers r8c3-r8c2 gap 4
whispers-12: whispers r9c6-r9c5-r8c5-r8c6 gap 4
whispers-13: whispers r8c6-r9c5 gap 4
whispers-14: whispers r8c8-r9c8 gap 4
whispers-15: whispers r8c9-r8c8 gap 4
```

**Sudoku, Whispers-4, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whispers-4 Lines: Adjacent digits along a Whispers-4 line must differ by at least four.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
