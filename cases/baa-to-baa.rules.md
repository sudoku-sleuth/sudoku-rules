---
format: open-rules
title: Baa to Baa
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ud26znoo0b
case: https://sudoku-sleuth.com/cases/baa-to-baa
library: https://rules.sudoku-sleuth.com/
status: read
exported: 251006981387a20d39a9d2eed9c0c99a
---

```rules
sudoku 9x9
kropki-1: kropki r6c7-r7c7 black
kropki-2: kropki r3c6-r4c6 black
kropki-3: kropki r8c5-r9c5 black
kropki-4: kropki r7c6-r8c6 black
kropki-5: kropki r7c4-r8c4 black
kropki-6: kropki r5c4-r6c4 black
kropki-7: kropki r6c3-r7c3 black
kropki-8: kropki r6c9-r7c9 black
kropki-9: kropki r4c9-r5c9 black
kropki-10: kropki r4c1-r5c1 black
kropki-11: kropki r1c3-r1c4 black
kropki-12: kropki r1c6-r1c7 black
between-1: between r5c1-r4c1-r3c1-r2c2 ends ["r6c1","r1c3"]
between-2: between r2c8-r3c9-r4c9-r5c9 ends ["r1c7","r6c9"]
between-3: between r7c4-r8c4-r9c5-r8c6-r7c6 ends ["r6c4","r6c6"]
between-4: between r3c4-r3c5-r3c6 ends ["r4c3","r4c7"]
between-5: between r6c3-r7c3-r8c3 ends ["r6c4","r8c2"]
between-6: between r6c7-r7c7-r8c7 ends ["r6c6","r8c8"]
```

**Sudoku, Between Lines, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
