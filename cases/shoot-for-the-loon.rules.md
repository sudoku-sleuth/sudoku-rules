---
format: open-rules
title: Shoot for the Loon
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pplds55x58
case: https://sudoku-sleuth.com/cases/shoot-for-the-loon
library: https://rules.sudoku-sleuth.com/
status: read
exported: 99a5062512b4329f226615d5e4293e6e
---

```rules
sudoku 9x9
kropki-1: kropki r1c6-r1c7 black
kropki-2: kropki r7c9-r8c9 black
kropki-3: kropki r9c8-r9c9 black
kropki-4: kropki r1c1-r1c2 black
kropki-5: kropki r3c2-r3c3 white
kropki-6: kropki r1c4-r2c4 white
kropki-7: kropki r4c5-r5c5 white
kropki-8: kropki r5c5-r6c5 white
kropki-9: kropki r7c7-r8c7 white
kropki-10: kropki r6c6-r6c7 white
arrow-1: arrow r3c2-r2c3 bulb ["r4c1"]
arrow-2: arrow r3c8-r2c7 bulb ["r4c9"]
arrow-3: arrow r7c8-r8c7 bulb ["r6c9"]
arrow-4: arrow r7c2-r8c3 bulb ["r6c1"]
arrow-5: arrow r3c5-r2c5-r1c5 bulb ["r4c5"]
renban-1: renban r4c1-r3c1-r2c1-r2c2-r1c2-r1c3-r1c4
renban-2: renban r1c6-r1c7-r1c8-r2c8-r2c9-r3c9-r4c9
renban-3: renban r6c9-r7c9-r8c9-r8c8-r9c8-r9c7-r9c6
renban-4: renban r9c4-r9c3-r9c2-r8c2-r8c1-r7c1-r6c1
renban-5: renban r3c3-r3c4-r4c5-r3c6-r3c7
renban-6: renban r7c3-r7c4-r6c5-r7c6-r7c7
renban-7: renban r4c3-r5c2-r6c3
renban-8: renban r4c7-r5c8-r6c7
```

**Sudoku, Renban, Arrow, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
