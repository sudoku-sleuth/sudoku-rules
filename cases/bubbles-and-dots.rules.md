---
format: open-rules
title: Bubbles and Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qmk9a3xj4s
case: https://sudoku-sleuth.com/cases/bubbles-and-dots
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2d8b04e85ff1ae0bbbcef21104554a7d
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r5c4-r5c5 white
kropki-3: kropki r3c8-r3c9 white
kropki-4: kropki r7c6-r7c7 white
kropki-5: kropki r1c8-r2c8 black
kropki-6: kropki r2c1-r3c1 black
kropki-7: kropki r2c5-r3c5 black
kropki-8: kropki r4c2-r5c2 black
kropki-9: kropki r7c9-r8c9 black
kropki-10: kropki r7c4-r8c4 black
kropki-11: kropki r6c7-r6c8 black
kropki-12: kropki r8c6-r9c6 black
kropki-13: kropki r5c6-r5c7 black
kropki-14: kropki r3c4-r4c4 black
kropki-15: kropki r7c1-r7c2 black
kropki-16: kropki r4c8-r4c9 black
between-1: between r1c2-r1c3-r1c4-r1c5-r1c6-r1c7 ends ["r1c1","r1c8"]
between-2: between r2c9-r3c9-r4c9-r5c9-r6c9-r7c9 ends ["r1c9","r8c9"]
between-3: between r9c8-r9c7-r9c6-r9c5-r9c4-r9c3 ends ["r9c9","r9c2"]
between-4: between r8c1-r7c1-r6c1-r5c1-r4c1-r3c1 ends ["r9c1","r2c1"]
between-5: between r3c4-r3c5-r3c6 ends ["r3c3","r3c7"]
between-6: between r7c4-r7c5-r7c6 ends ["r7c3","r7c7"]
between-7: between r6c7-r5c7-r4c7 ends ["r7c7","r3c7"]
between-8: between r4c3-r5c3-r6c3 ends ["r3c3","r7c3"]
between-9: between r2c7-r2c8-r3c8-r4c8 ends ["r2c6","r5c8"]
between-10: between r7c8-r8c8-r8c7-r8c6 ends ["r6c8","r8c5"]
between-11: between r8c3-r8c2-r7c2 ends ["r8c4","r6c2"]
between-12: between r2c3-r2c2-r3c2-r4c2 ends ["r2c4","r5c2"]
between-13: between r4c4-r5c4-r6c4-r6c5-r6c6-r5c6 ends ["r4c5","r4c6"]
```

- Normal sudoku rules apply.
- Between lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
