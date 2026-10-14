---
format: open-rules
title: Inner Sanctum
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d69lorjim4
case: https://sudoku-sleuth.com/cases/inner-sanctum
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=2 r5c4=3 r5c6=7 r9c5=8
exported: 00a4b02bdbbe35337f31973f7b862045
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r8c8 white
kropki-2: kropki r3c6-r3c7 white
kropki-3: kropki r6c1-r6c2 white
kropki-4: kropki r4c1-r4c2 white
kropki-5: kropki r9c6-r9c7 white
kropki-6: kropki r1c2-r2c2 white
kropki-7: kropki r8c2-r8c3 white
kropki-8: kropki r6c3-r6c4 white
kropki-9: kropki r4c3-r4c4 white
kropki-10: kropki r5c9-r6c9 white
kropki-11: kropki r8c1-r9c1 white
kropki-12: kropki r1c1-r2c1 white
kropki-13: kropki r8c5-r8c6 white
kropki-14: kropki r8c4-r8c5 white
kropki-15: kropki r3c4-r3c5 white
kropki-16: kropki r7c4-r8c4 white
kropki-17: kropki r2c4-r2c5 white
kropki-18: kropki r2c3-r3c3 white
kropki-19: kropki r7c2-r7c3 white
between-1: between r6c4-r7c4-r7c5-r7c6-r6c6-r6c7-r5c7-r4c7-r4c6-r3c6-r3c5-r3c4-r4c4 ends ["r6c3","r4c3"]
between-2: between r7c2-r7c3-r8c3-r8c4-r8c5-r8c6-r8c7 ends ["r6c2","r7c7"]
between-3: between r3c2-r3c3-r2c3-r2c4-r2c5-r2c6-r2c7 ends ["r4c2","r3c7"]
between-4: between r3c8-r4c8-r5c8-r6c8-r7c8 ends ["r2c8","r8c8"]
between-5: between r3c9-r2c9-r1c9-r1c8-r1c7 ends ["r4c9","r1c6"]
between-6: between r9c7-r9c8-r9c9-r8c9-r7c9 ends ["r9c6","r6c9"]
between-7: between r1c3-r1c2 ends ["r1c4","r2c2"]
between-8: between r9c3-r9c2 ends ["r9c4","r8c2"]
```

**Sudoku, Between Lines, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Consecutive dots: Digits separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
