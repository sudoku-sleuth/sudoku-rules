---
format: open-rules
title: Sunshine On A Rainy Day
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/aqbpp2gzgx
case: https://sudoku-sleuth.com/cases/sunshine-on-a-rainy-day
library: https://rules.sudoku-sleuth.com/
status: read
exported: b30a8149cd82c8ef2c82257e6e831db5
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r3c2 white
kropki-2: kropki r3c2-r4c2 white
kropki-3: kropki r4c3-r5c3 white
kropki-4: kropki r5c3-r6c3 white
kropki-5: kropki r4c2-r4c3 white
kropki-6: kropki r4c1-r5c1 white
kropki-7: kropki r6c4-r7c4 white
kropki-8: kropki r6c5-r7c5 white
kropki-9: kropki r7c6-r8c6 white
kropki-10: kropki r8c7-r9c7 white
kropki-11: kropki r6c8-r7c8 white
kropki-12: kropki r7c2-r8c2 white
kropki-13: kropki r6c3-r7c3 white
kropki-14: kropki r7c4-r8c4 white
kropki-15: kropki r1c2-r2c2 white
kropki-16: kropki r6c2-r6c3 white
kropki-17: kropki r8c4-r9c4 white
kropki-18: kropki r1c8-r2c8 white
kropki-19: kropki r2c8-r3c8 white
kropki-20: kropki r3c8-r4c8 white
kropki-21: kropki r4c5-r5c5 white
kropki-22: kropki r4c4-r5c4 white
kropki-23: kropki r8c8-r9c8 white
kropki-24: kropki r2c6-r3c6 white
kropki-25: kropki r1c7-r1c8 black
kropki-26: kropki r3c8-r3c9 black
kropki-27: kropki r7c3-r8c3 black
kropki-28: kropki r5c4-r6c4 black
kropki-29: kropki r7c8-r7c9 black
kropki-30: kropki r4c1-r4c2 black
kropki-31: kropki r1c6-r2c6 black
kropki-32: kropki r3c5-r3c6 black
whispers-1: whispers r4c5-r3c6-r3c7-r4c8-r5c7-r5c6 gap 4 loop true
whispers-2: whispers r2c5-r3c6 gap 4
whispers-3: whispers r2c8-r3c7 gap 4
whispers-4: whispers r4c9-r4c8 gap 4
whispers-5: whispers r6c8-r5c7 gap 4
whispers-6: whispers r6c5-r5c6 gap 4
whispers-7: whispers r4c4-r4c5 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
