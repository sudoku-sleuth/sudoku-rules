---
format: open-rules
title: All of a Quiver
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cmxgqceyep
case: https://sudoku-sleuth.com/cases/all-of-a-quiver
library: https://rules.sudoku-sleuth.com/
status: read
exported: 10ce091bdcd9b17f13a290d281217565
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 white
kropki-2: kropki r2c4-r3c4 white
kropki-3: kropki r8c6-r9c6 white
kropki-4: kropki r7c6-r8c6 white
kropki-5: kropki r4c1-r4c2 white
kropki-6: kropki r6c8-r6c9 white
kropki-7: kropki r4c2-r4c3 white
kropki-8: kropki r7c2-r7c3 white
kropki-9: kropki r3c7-r3c8 white
kropki-10: kropki r7c4-r8c4 white
kropki-11: kropki r1c6-r2c6 white
kropki-12: kropki r2c9-r3c9 white
kropki-13: kropki r8c1-r9c1 white
kropki-14: kropki r1c8-r1c9 white
kropki-15: kropki r7c9-r8c9 white
kropki-16: kropki r8c2-r9c2 white
kropki-17: kropki r4c8-r5c8 white
arrow-1: arrow r1c4-r2c4-r3c4-r4c5 bulb ["r1c3"]
arrow-2: arrow r9c6-r8c6-r7c6-r6c5 bulb ["r9c7"]
arrow-3: arrow r4c3-r4c2-r4c1 bulb ["r5c4"]
arrow-4: arrow r6c7-r6c8-r6c9 bulb ["r5c6"]
arrow-5: arrow r7c3-r7c2-r7c1 bulb ["r6c4"]
arrow-6: arrow r3c7-r3c8 bulb ["r4c6"]
```

**Sudoku, Arrows, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. 


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
