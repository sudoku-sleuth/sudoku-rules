---
format: open-rules
title: Jolly Jumper
setter: sujoyku
source: https://tinyurl.com/yucncvma
case: https://sudoku-sleuth.com/cases/jolly-jumper
library: https://rules.sudoku-sleuth.com/
status: read
exported: dcf420b05435baa0e46f8e153d720766
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 6 connected true
cage-2: cage r2c2-r3c2 total 6 connected true
cage-3: cage r3c4-r3c5 total 7 connected true
cage-4: cage r1c6-r2c6 total 5 connected true
cage-5: cage r9c6-r9c7 total 13 connected true
cage-6: cage r7c8-r8c8 total 15 connected true
cage-7: cage r7c5-r7c6 total 14 connected true
cage-8: cage r8c4-r9c4 total 14 connected true
cage-9: cage r1c8-r1c9 total 13 connected true
cage-10: cage r9c2-r9c3 total 13 connected true
cage-11: cage r4c7-r4c8 total 8 connected true
cage-12: cage r6c1-r6c2 total 12 connected true
cage-13: cage r4c9-r5c9 total 9 connected true
anti-knight
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from to 1 to 9 once each. Cells a knight's move (in chess) apart may not contain identical digits. Digits in a cage sum to the clue in the top left.
