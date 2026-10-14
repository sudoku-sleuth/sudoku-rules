---
format: open-rules
title: Topspin
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6x6hnsi6wf
case: https://sudoku-sleuth.com/cases/topspin
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=9 r1c9=7 r5c5=1 r9c1=7 r9c9=8
exported: 55ae80f53bb4485082eb3f978d461429
---

```rules
sudoku 9x9
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r7c5-r7c6 white
kropki-3: kropki r6c3-r6c4 white
kropki-4: kropki r5c3-r5c4 white
kropki-5: kropki r2c2-r2c3 black
kropki-6: kropki r2c7-r2c8 black
kropki-7: kropki r8c7-r8c8 black
kropki-8: kropki r8c2-r8c3 black
between-1: between r4c1-r3c1-r2c2-r1c3-r1c4 ends ["r5c1","r1c5"]
between-2: between r4c9-r3c9-r2c8-r1c7-r1c6 ends ["r5c9","r1c5"]
between-3: between r6c1-r7c1-r8c2-r9c3-r9c4 ends ["r5c1","r9c5"]
between-4: between r9c6-r9c7-r8c8-r7c9-r6c9 ends ["r9c5","r5c9"]
between-5: between r5c2-r5c3-r4c4-r3c5-r2c5 ends ["r5c1","r1c5"]
between-6: between r8c5-r7c5-r6c6-r5c7-r5c8 ends ["r9c5","r5c9"]
```

**Sudoku, Between Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
