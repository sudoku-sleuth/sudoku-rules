---
format: open-rules
title: Three little burgers
setter: sujoyku
source: ""
case: https://sudoku-sleuth.com/cases/three-little-burgers
library: https://rules.sudoku-sleuth.com/
status: read
exported: 95afcffe4822be7f775bdff53370a85f
---

```rules
sudoku 9x9
cage-1: cage r8c5-r8c6 total 6 connected true
cage-2: cage r8c7-r8c8 total 11 connected true
cage-3: cage r7c6-r7c7 total 8 connected true
cage-4: cage r9c6-r9c7 total 13 connected true
cage-5: cage r5c6-r5c7 total 14 connected true
cage-6: cage r4c7-r4c8 total 7 connected true
cage-7: cage r3c6-r3c7 total 10 connected true
cage-8: cage r4c5-r4c6 total 11 connected true
cage-9: cage r5c2-r6c2 total 13 connected true
cage-10: cage r6c3-r7c3 total 8 connected true
cage-11: cage r5c4-r6c4 total 10 connected true
cage-12: cage r4c3-r5c3 total 12 connected true
anti-knight
anti-king
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Anti-king/anti-knight: Digits a king's or a knight's move (in chess) apart may not contain identical digits. Digits in a cage sum to the clue in the top left.
