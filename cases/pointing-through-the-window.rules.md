---
format: open-rules
title: Pointing Through the Window
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/pointing-through-the-window
case: https://sudoku-sleuth.com/cases/pointing-through-the-window
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r7c9-r8c9 colour "white"
kropki-3: kropki r7c3-r7c4 colour "white"
kropki-4: kropki r3c4-r4c4 colour "white"
kropki-5: kropki r3c7-r3c8 colour "black"
kropki-6: kropki r3c3-r3c4 colour "black"
kropki-7: kropki r2c8-r2c9 colour "black"
kropki-8: kropki r8c2-r9c2 colour "black"
arrow-1: arrow r7c3-r7c4-r6c4 bulb ["r8c2"]
arrow-2: arrow r7c2-r6c2 bulb ["r8c2"]
arrow-3: arrow r3c3-r3c4-r4c4 bulb ["r2c2"]
arrow-4: arrow r2c3-r1c4 bulb ["r2c2"]
arrow-5: arrow r7c7-r7c6-r6c6 bulb ["r8c8"]
arrow-6: arrow r8c7-r9c6 bulb ["r8c8"]
arrow-7: arrow r3c7-r3c6-r4c6 bulb ["r2c8"]
arrow-8: arrow r3c8-r4c8 bulb ["r2c8"]
unique-1: unique r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4
unique-2: unique r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7-r4c8
unique-3: unique r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4
unique-4: unique r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8
```

**Sudoku, Extra Regions, Arrows, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Extra Regions: Each shaded extra region contains a complete set of the digits 1 to 9.
- Arrows: Digits along an arrow sum to the number in the circle from which the arrow emerges. If multiple arrows emerge from the same circle, each arrow is summed separately.
- Kropki Pairs: Digits separated by a black dot are in a 2:1 ratio. Digits separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
