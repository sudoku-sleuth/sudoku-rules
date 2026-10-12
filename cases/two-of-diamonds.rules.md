---
format: open-rules
title: Two of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/trvmx5461n
case: https://sudoku-sleuth.com/cases/two-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=9
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "black"
kropki-2: kropki r2c2-r2c3 colour "black"
kropki-3: kropki r3c7-r3c8 colour "black"
kropki-4: kropki r9c1-r9c2 colour "black"
kropki-5: kropki r6c9-r7c9 colour "black"
kropki-6: kropki r7c7-r7c8 colour "black"
kropki-7: kropki r9c7-r9c8 colour "black"
kropki-8: kropki r3c3-r4c3 colour "black"
kropki-9: kropki r4c6-r5c6 colour "black"
whispers-1: whispers r9c3-r8c2-r7c1-r6c2-r5c3 gap 5
whispers-2: whispers r1c7-r2c8-r3c9-r4c8-r5c7 gap 5
whispers-3: whispers r1c1-r1c2-r2c2-r2c1-r3c1-r3c2 gap 5
whispers-4: whispers r7c8-r7c9-r8c9-r8c8-r9c8-r9c9 gap 5
renban-1: renban r5c3-r6c4-r7c5-r8c4-r9c3
renban-2: renban r5c7-r4c6-r3c5-r2c6-r1c7
```

**Normal Sudoku, German Whispers, Renban, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Renban: Digits placed on Renban lines must be a non-repeating set of consecutive digits, in any order.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.

In this puzzle, thinner green lines are German Whispers. Thicker purple lines are Renbans.

For more of our puzzles, visit https://missingdeck.net
