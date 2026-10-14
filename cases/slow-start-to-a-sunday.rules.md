---
format: open-rules
title: Slow Start to a Sunday
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5mau6klb2d
case: https://sudoku-sleuth.com/cases/slow-start-to-a-sunday
library: https://rules.sudoku-sleuth.com/
status: read
exported: b65cf08329b650cd9fb3575c68d4cc77
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 black
kropki-2: kropki r6c3-r6c4 black
kropki-3: kropki r4c6-r5c6 black
kropki-4: kropki r4c4-r5c4 black
kropki-5: kropki r3c2-r4c2 black
kropki-6: kropki r5c9-r6c9 white
kropki-7: kropki r9c6-r9c7 white
kropki-8: kropki r8c4-r8c5 white
kropki-9: kropki r4c9-r5c9 white
kropki-10: kropki r1c6-r2c6 white
kropki-11: kropki r3c1-r3c2 white
kropki-12: kropki r7c5-r8c5 white
kropki-13: kropki r3c9-r4c9 white
modular-1: modular r9c7-r8c8-r7c9-r6c9-r7c8-r8c7-r8c6-r8c5
modular-2: modular r9c6-r9c5-r9c4-r8c3-r7c2-r6c1-r5c1-r4c1-r3c2-r2c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c8-r5c8-r6c7-r7c6-r7c5-r7c4-r6c3-r5c3-r4c3-r3c4
modular-3: modular r3c5-r4c6-r5c6-r6c5-r5c4-r4c4
```

**Sudoku, Modular Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
