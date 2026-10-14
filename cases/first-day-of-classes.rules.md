---
format: open-rules
title: First Day of Classes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/72m76nswdc
case: https://sudoku-sleuth.com/cases/first-day-of-classes
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=8 r3c6=2 r4c7=6 r8c5=1 r8c6=9
exported: ccae5988aedb2f13adc97a8cc89a4cba
---

```rules
sudoku 9x9
kropki r6c7-r7c7 white
whispers-1: whispers r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r3c1-r3c2 gap 5
whispers-3: whispers r3c3-r4c3-r5c3-r6c3-r7c3-r7c4-r6c5-r5c5-r4c5-r3c4 gap 5 loop true
whispers-4: whispers r5c6-r6c6-r6c7-r5c7 gap 5 loop true
whispers-5: whispers r7c9-r7c8-r7c7-r8c7-r9c7-r9c8-r9c9 gap 5
whispers-6: whispers r4c9-r4c8-r5c8-r6c8 gap 5
whispers-7: whispers r5c8-r5c9 gap 5
whispers-8: whispers r9c2-r9c3-r9c4 gap 5
```

**Sudoku, Whisper-5, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
