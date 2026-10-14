---
format: open-rules
title: Betwixt and Between
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cpbsoll5wu
case: https://sudoku-sleuth.com/cases/betwixt-and-between
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6bec47ead888abdb01ef32a64936fb2a
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r5c2-r5c3 white
kropki-3: kropki r2c4-r2c5 white
kropki-4: kropki r8c1-r9c1 black
kropki-5: kropki r1c9-r2c9 black
kropki-6: kropki r9c8-r9c9 black
kropki-7: kropki r1c1-r1c2 black
kropki-8: kropki r8c6-r9c6 black
kropki-9: kropki r1c4-r2c4 black
kropki-10: kropki r4c1-r4c2 black
kropki-11: kropki r7c7-r7c8 black
kropki-12: kropki r3c2-r3c3 black
kropki-13: kropki r4c4-r5c4 black
kropki-14: kropki r7c4-r7c5 black
kropki-15: kropki r3c5-r3c6 black
kropki-16: kropki r5c8-r5c9 black
between-1: between r2c1-r3c1-r3c2 ends ["r1c1","r3c3"]
between-2: between r2c3-r1c3-r1c2 ends ["r3c3","r1c1"]
between-3: between r3c8-r3c9-r2c9 ends ["r3c7","r1c9"]
between-4: between r1c8-r1c7-r2c7 ends ["r1c9","r3c7"]
between-5: between r9c8-r9c7-r8c7 ends ["r9c9","r7c7"]
between-6: between r7c8-r7c9-r8c9 ends ["r7c7","r9c9"]
between-7: between r9c2-r9c3-r8c3 ends ["r9c1","r7c3"]
between-8: between r7c2-r7c1-r8c1 ends ["r7c3","r9c1"]
between-9: between r4c8-r4c7-r4c6-r3c6-r2c6 ends ["r4c9","r1c6"]
between-10: between r4c2-r4c3-r4c4-r3c4-r2c4 ends ["r4c1","r1c4"]
between-11: between r6c2-r6c3-r6c4-r7c4-r8c4 ends ["r6c1","r9c4"]
between-12: between r8c6-r7c6-r6c6-r6c7-r6c8 ends ["r9c6","r6c9"]
```

- Normal sudoku rules apply.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
