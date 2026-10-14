---
format: open-rules
title: Sum Get Half as Many
setter: Alexander Hamilton (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/irlkx72bg0
case: https://sudoku-sleuth.com/cases/sum-get-half-as-many
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c2=7
exported: 671b16bf7d73ec0e3d028fad3f16c61a
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 9 connected true
cage-2: cage r1c9-r2c9-r3c9 total 11 connected true
cage-3: cage r9c7-r9c8-r9c9 total 9 connected true
cage-4: cage r7c1-r8c1-r9c1 total 9 connected true
cage-5: cage r3c2-r3c3-r3c4 total 13 connected true
cage-6: cage r7c6-r7c7-r7c8 total 14 connected true
cage-7: cage r6c3-r7c3-r8c3 total 17 connected true
cage-8: cage r2c7-r3c7-r4c7 total 24 connected true
cage-9: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 18 connected true
kropki-1: kropki r1c2-r1c3 black
kropki-2: kropki r2c9-r3c9 black
kropki-3: kropki r9c8-r9c9 black
kropki-4: kropki r3c2-r3c3 black
kropki-5: kropki r8c1-r9c1 black
kropki-6: kropki r6c3-r7c3 black
kropki-7: kropki r7c6-r7c7 black
kropki-8: kropki r5c4-r5c5 black
kropki-9: kropki r5c5-r5c6 black
kropki-10: kropki r6c7-r6c8 black
```

- Normal Sudoku rules apply.
- Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within cages.
- Cells separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.
