---
format: open-rules
title: Pushed Aside
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/pushed-aside
case: https://sudoku-sleuth.com/cases/pushed-aside
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c9=7 r4c5=7 r9c1=8 r9c9=3
exported: a40257a563dcd49fefacc106022d478d
---

```rules
sudoku 9x9
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r5c1-r6c1 black
kropki-3: kropki r1c4-r1c5 black
kropki-4: kropki r4c9-r5c9 black
kropki-5: kropki r9c5-r9c6 black
kropki-6: kropki r6c3-r7c3 black
kropki-7: kropki r3c7-r4c7 black
kropki-8: kropki r3c3-r3c4 black
kropki-9: kropki r7c6-r7c7 black
unique-1: unique r1c4-r2c2-r2c3-r2c4-r3c2-r3c3-r4c1-r4c2-r5c1
unique-2: unique r6c1-r6c2-r7c2-r7c3-r8c2-r8c3-r8c4-r9c4-r9c5
unique-3: unique r5c9-r6c8-r6c9-r7c7-r7c8-r8c6-r8c7-r8c8-r9c6
unique-4: unique r1c5-r1c6-r2c6-r2c7-r2c8-r3c7-r3c8-r4c8-r4c9
```

**Sudoku, Extra Regions, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Extra Regions: Each shaded extra region contains a complete set of the digits 1 to 9.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
