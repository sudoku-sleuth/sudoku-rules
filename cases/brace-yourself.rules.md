---
format: open-rules
title: Brace Yourself
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d0fx6gyg17
case: https://sudoku-sleuth.com/cases/brace-yourself
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5522ec602fd6487c8320f4bbb0ee8dce
---

```rules
sudoku 9x9
kropki-1: kropki r5c8-r5c9 white
kropki-2: kropki r5c1-r5c2 white
kropki-3: kropki r4c1-r4c2 black
kropki-4: kropki r8c9-r9c9 black
modular-1: modular r6c1-r6c2-r7c3-r8c4-r9c4
modular-2: modular r4c1-r4c2-r3c3-r2c4-r1c4
modular-3: modular r1c6-r2c6-r3c7-r4c8-r4c9
modular-4: modular r6c9-r6c8-r7c7-r8c6-r9c6
modular-5: modular r3c1-r2c1-r1c1-r1c2-r1c3
modular-6: modular r9c7-r9c8-r9c9-r8c9-r7c9
modular-7: modular r7c1-r8c1-r9c2-r9c3
modular-8: modular r1c7-r1c8-r2c9-r3c9
modular-9: modular r5c2-r5c3-r5c4
modular-10: modular r5c6-r5c7-r5c8
renban-1: renban r4c1-r4c2-r3c3-r2c4-r1c4
renban-2: renban r1c6-r2c6-r3c7-r4c8-r4c9
renban-3: renban r6c9-r6c8-r7c7-r8c6-r9c6
renban-4: renban r9c4-r8c4-r7c3-r6c2-r6c1
renban-5: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-6: renban r9c7-r9c8-r9c9-r8c9-r7c9
renban-7: renban r7c1-r8c1-r9c2-r9c3
renban-8: renban r1c7-r1c8-r2c9-r3c9
renban-9: renban r5c2-r5c3-r5c4
renban-10: renban r5c6-r5c7-r5c8
```

**Sudoku, Duality Lines (modular/renban), Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Duality Lines: All lines are both Renban AND Modular.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Kropki pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
