---
format: open-rules
title: Peppermint Tea
setter: FullDeck and Missing a Few Cards, youcancallmeMartha
source: https://sudokupad.app/d5ir2tdtcu
case: https://sudoku-sleuth.com/cases/peppermint-tea
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=2
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r1c1-r1c2 colour "white"
kropki-3: kropki r6c6-r6c7 colour "white"
kropki-4: kropki r3c7-r3c8 colour "white"
kropki-5: kropki r6c2-r7c2 colour "white"
kropki-6: kropki r8c5-r8c6 colour "white"
kropki-7: kropki r7c1-r7c2 colour "white"
whispers-1: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8 gap 5
whispers-2: whispers r2c2-r3c2-r4c2-r5c3-r6c3-r7c3-r6c2-r5c2-r4c2 gap 5
whispers-3: whispers r4c4-r3c5-r3c6-r3c7-r4c8-r4c7-r4c6-r3c5 gap 5
whispers-4: whispers r6c6-r7c6-r8c6-r9c7-r8c7-r7c6 gap 5
```

**Sudoku, Whisper-5, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive.

Set as a collaboration for SudokuCon 2026
