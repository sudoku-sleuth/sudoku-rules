---
format: open-rules
title: Between Up and Down
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yx0g31yqrq
case: https://sudoku-sleuth.com/cases/between-up-and-down
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c7-r7c7 colour "white"
kropki-2: kropki r9c1-r9c2 colour "white"
kropki-3: kropki r8c4-r8c5 colour "white"
kropki-4: kropki r8c5-r9c5 colour "white"
kropki-5: kropki r2c9-r3c9 colour "white"
kropki-6: kropki r3c9-r4c9 colour "white"
kropki-7: kropki r9c7-r9c8 colour "white"
kropki-8: kropki r9c6-r9c7 colour "white"
kropki-9: kropki r1c1-r1c2 colour "black"
kropki-10: kropki r1c4-r1c5 colour "black"
kropki-11: kropki r9c8-r9c9 colour "black"
kropki-12: kropki r9c5-r9c6 colour "black"
kropki-13: kropki r4c9-r5c9 colour "black"
kropki-14: kropki r5c1-r6c1 colour "black"
kropki-15: kropki r8c1-r9c1 colour "black"
kropki-16: kropki r1c9-r2c9 colour "black"
kropki-17: kropki r3c3-r3c4 colour "black"
kropki-18: kropki r3c3-r4c3 colour "black"
kropki-19: kropki r7c6-r7c7 colour "black"
between-1: between r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8 ends ["r1c1","r9c9"]
between-2: between r1c2-r1c3-r1c4 ends ["r1c1","r1c5"]
between-3: between r9c6-r9c7-r9c8 ends ["r9c5","r9c9"]
between-4: between r8c4-r7c3-r6c2 ends ["r9c5","r5c1"]
between-5: between r2c6-r3c7-r4c8 ends ["r1c5","r5c9"]
between-6: between r4c9-r3c9-r2c9 ends ["r5c9","r1c9"]
between-7: between r6c1-r7c1-r8c1 ends ["r5c1","r9c1"]
```

**Sudoku, Between Lines, Kropki Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Kropki dots: Digits separated by a black dot are in a 2:1 ratio. Digits separated by a white dots are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
