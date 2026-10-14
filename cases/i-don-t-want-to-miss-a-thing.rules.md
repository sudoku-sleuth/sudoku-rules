---
format: open-rules
title: I Don't Want to Miss a Thing
setter: sujoyku
source: https://sudokupad.app/4ydla2orwj
case: https://sudoku-sleuth.com/cases/i-don-t-want-to-miss-a-thing
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2cf8c02561396e1ba99f5974fab8a08b
---

```rules
sudoku 9x9
cage-1: cage r9c7-r9c8 total 14 connected true
cage-2: cage r7c9-r8c9 total 13 connected true
cage-3: cage r1c2-r1c3 total 14 connected true
cage-4: cage r2c1-r3c1 total 13 connected true
cage-5: cage r4c5-r4c6 total 10 connected true
cage-6: cage r6c4-r6c5 total 11 connected true
cage-7: cage r7c1-r8c1 total 6 connected true
cage-8: cage r9c2-r9c3 total 7 connected true
cage-9: cage r1c7-r1c8 total 6 connected true
cage-10: cage r2c9-r3c9 total 7 connected true
cage-11: cage r4c1-r4c2-r5c1 total 9 connected true
cage-12: cage r8c4-r9c4-r9c5 total 9 connected true
cage-13: cage r4c7-r4c8-r5c7 total 22 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Diagonals: On the main diagonals digits do not repeat.

- Killer Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
