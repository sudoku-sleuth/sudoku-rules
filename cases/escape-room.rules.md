---
format: open-rules
title: Escape Room
setter: sujoyku
source: https://sudokupad.app/hu2inqymo8
case: https://sudoku-sleuth.com/cases/escape-room
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 8 connected true
cage-2: cage r3c2-r3c3 total 8 connected true
cage-3: cage r1c3-r1c4-r1c5 total 21 connected true
cage-4: cage r1c6-r1c7-r2c6 total 22 connected true
cage-5: cage r1c8-r2c8 total 7 connected true
cage-6: cage r8c2-r9c2 total 8 connected true
cage-7: cage r7c7-r7c8 total 7 connected true
cage-8: cage r8c8-r8c9 total 7 connected true
cage-9: cage r5c1-r5c2-r6c2-r6c3 total 10 connected true
cage-10: cage r4c7-r4c8-r5c8-r5c9 total 11 connected true
cage-11: cage r8c4-r9c3-r9c4 total 20 connected true
cage-12: cage r9c5-r9c6-r9c7 total 21 connected true
cage-13: cage r2c5-r3c5-r3c6-r4c6 total 12 connected true
cage-14: cage r5c7-r6c7 total 12 connected true
cage-15: cage r4c3-r5c3 total 12 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each.

- Digits in a cage do not repeat and sum to the clue in the top left.
