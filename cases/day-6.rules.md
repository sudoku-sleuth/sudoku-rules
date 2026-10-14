---
format: open-rules
title: Day 6
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5q75texdus
case: https://sudoku-sleuth.com/cases/day-6
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7c445cff8a2622704fd37ec5384d7f15
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r4c5 white
kropki-2: kropki r8c2-r9c2 white
kropki-3: kropki r7c8-r7c9 white
kropki-4: kropki r8c8-r8c9 white
kropki-5: kropki r8c7-r9c7 white
kropki-6: kropki r3c3-r4c3 white
kropki-7: kropki r4c1-r4c2 white
kropki-8: kropki r4c1-r5c1 white
kropki-9: kropki r1c3-r1c4 white
kropki-10: kropki r1c6-r1c7 white
kropki-11: kropki r1c7-r1c8 white
kropki-12: kropki r1c6-r2c6 black
kropki-13: kropki r8c6-r9c6 black
kropki-14: kropki r7c7-r8c7 black
kropki-15: kropki r4c6-r5c6 black
whispers-1: whispers r3c2-r3c1-r2c1-r1c1-r1c2-r2c3 gap 5 loop true
whispers-2: whispers r3c6-r2c5-r2c4-r3c4-r3c5 gap 5
whispers-3: whispers r2c7-r3c7-r3c8 gap 5
whispers-4: whispers r2c8-r3c8-r4c8-r4c7 gap 5
whispers-5: whispers r5c5-r5c4-r5c3-r6c3-r7c3-r8c3-r9c3-r9c4-r9c5-r8c5-r7c5-r7c4 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a green German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
