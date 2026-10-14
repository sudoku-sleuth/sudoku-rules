---
format: open-rules
title: Radiance
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/radiance
case: https://sudoku-sleuth.com/cases/radiance
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c9=1 r9c4=2
exported: 8ddedb3a4212f1c9085b26f2473d3929
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r2c7 white
kropki-2: kropki r9c7-r9c8 white
kropki-3: kropki r9c8-r9c9 white
kropki-4: kropki r8c9-r9c9 white
kropki-5: kropki r7c9-r8c9 white
kropki-6: kropki r1c9-r2c9 white
kropki-7: kropki r6c5-r6c6 white
kropki-8: kropki r5c6-r5c7 white
kropki-9: kropki r1c1-r2c1 black
kropki-10: kropki r6c1-r7c1 black
kropki-11: kropki r7c1-r7c2 black
kropki-12: kropki r1c1-r1c2 black
kropki-13: kropki r1c6-r1c7 black
kropki-14: kropki r6c7-r7c7 black
kropki-15: kropki r9c6-r9c7 black
kropki-16: kropki r5c8-r6c8 black
kropki-17: kropki r3c8-r4c8 black
kropki-18: kropki r5c3-r6c3 black
arrow-1: arrow r5c3-r6c2-r7c1 bulb ["r4c4"]
arrow-2: arrow r3c5-r2c6-r1c7 bulb ["r4c4"]
arrow-3: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-4: arrow r3c4-r2c4 bulb ["r4c4"]
arrow-5: arrow r4c3-r4c2 bulb ["r4c4"]
arrow-6: arrow r5c5-r6c6-r7c7 bulb ["r4c4"]
arrow-7: arrow r5c4-r6c4 bulb ["r4c4"]
arrow-8: arrow r4c5-r4c6 bulb ["r4c4"]
```

**Sudoku, Arrows, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
