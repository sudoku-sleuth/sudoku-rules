---
format: open-rules
title: Lookie Here!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ec1ws9s5t8
case: https://sudoku-sleuth.com/cases/lookie-here
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9fed792d6ae75a8875718aaf951aebe9
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r6c2 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r7c5-r8c5 white
kropki-4: kropki r3c5-r4c5 white
kropki-5: kropki r6c4-r6c5 white
kropki-6: kropki r4c6-r5c6 white
kropki-7: kropki r8c9-r9c9 white
kropki-8: kropki r4c8-r5c8 white
kropki-9: kropki r2c8-r2c9 white
kropki-10: kropki r2c1-r2c2 white
kropki-11: kropki r4c1-r5c1 white
kropki-12: kropki r3c3-r3c4 white
kropki-13: kropki r8c2-r8c3 white
kropki-14: kropki r8c4-r9c4 white
kropki-15: kropki r2c4-r2c5 white
look-and-say-1: look-and-say r3c3-r3c6-r3c7-r4c3-r4c4-r4c7-r5c4-r5c7-r6c4-r6c5-r6c7-r7c5-r7c6-r7c7 counts [{"digit":1,"count":5},{"digit":3,"count":4},{"digit":5,"count":1}]
look-and-say-2: look-and-say r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r3c2-r3c5-r3c8-r4c2-r4c8-r5c2-r5c3-r5c8 counts [{"digit":5,"count":4},{"digit":1,"count":1}]
look-and-say-3: look-and-say r5c9-r6c2-r6c3-r6c8-r6c9-r7c3-r7c4-r7c8-r8c4-r8c5-r8c6-r8c7-r8c8 counts [{"digit":5,"count":2},{"digit":3,"count":1},{"digit":4,"count":3},{"digit":1,"count":1}]
```

**Sudoku, Look-and-Say Cages, Consecutive Pairs**

- Look-and-say Cages: The number in the top left of the cage is split up into pairs XY, each read as 'there are X Ys in the cage'. For example, if you had a cage that was labeled '1432', there would be one of the digit 4 and three of the digit 2 in the cage.
- Consecutive Pairs: Digits separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing.html
