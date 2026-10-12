---
format: open-rules
title: Good Friday
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ptz57dsaea
case: https://sudoku-sleuth.com/cases/good-friday
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c3-r7c4 colour "white"
kropki-2: kropki r7c2-r7c3 colour "white"
kropki-3: kropki r5c8-r6c8 colour "white"
kropki-4: kropki r3c8-r4c8 colour "white"
kropki-5: kropki r1c6-r1c7 colour "white"
kropki-6: kropki r7c8-r7c9 colour "white"
kropki-7: kropki r7c9-r8c9 colour "white"
kropki-8: kropki r1c7-r1c8 colour "white"
kropki-9: kropki r5c4-r5c5 colour "black"
kropki-10: kropki r5c5-r5c6 colour "black"
kropki-11: kropki r5c7-r5c8 colour "black"
kropki-12: kropki r6c3-r7c3 colour "black"
kropki-13: kropki r6c6-r7c6 colour "black"
kropki-14: kropki r2c4-r3c4 colour "black"
kropki-15: kropki r7c3-r8c3 colour "black"
kropki-16: kropki r3c3-r3c4 colour "black"
kropki-17: kropki r3c3-r4c3 colour "black"
kropki-18: kropki r4c2-r4c3 colour "black"
kropki-19: kropki r8c9-r9c9 colour "black"
whispers-1: whispers r2c4-r2c3-r2c2-r3c1-r4c1-r5c1-r6c2-r6c3-r6c4-r5c4-r4c4-r4c3 gap 5
whispers-2: whispers r2c9-r2c8-r2c7-r2c6-r3c6-r4c6-r5c6-r6c6 gap 5
whispers-3: whispers r4c6-r4c7-r4c8 gap 5
```

**Sudoku, Whisper-5, Kropki Pairs**

- Normal 9x9 Sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
