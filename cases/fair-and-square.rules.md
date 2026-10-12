---
format: open-rules
title: Fair and square
setter: sujoyku
source: https://sudokupad.app/1g4a34fup1
case: https://sudoku-sleuth.com/cases/fair-and-square
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1-r9c2 total 20 connected true
cage-2: cage r1c8-r1c9-r2c9 total 10 connected true
cage-3: cage r5c9-r6c9-r7c9 total 22 connected true
cage-4: cage r3c1-r4c1-r5c1 total 9 connected true
cage-5: cage r9c6-r9c7 total 7 connected true
cage-6: cage r1c3-r1c4 total 13 connected true
cage-7: cage r4c7-r4c8-r5c8 total 22 connected true
cage-8: cage r5c2-r6c2-r6c3 total 22 connected true
cage-9: cage r7c4-r8c4 total 9 connected true
cage-10: cage r2c6-r3c6 total 9 connected true
whispers-1: whispers r6c5-r7c5-r7c6-r6c6 gap 5 loop true
whispers-2: whispers r3c3-r4c3-r4c4-r3c4 gap 5 loop true
whispers-3: whispers r2c7-r3c7-r3c8-r2c8 gap 5 loop true
whispers-4: whispers r8c8-r9c8-r9c9-r8c9 gap 5 loop true
whispers-5: whispers r1c1-r2c1-r2c2-r1c2 gap 5 loop true
whispers-6: whispers r7c2-r8c2-r8c3-r7c3 gap 5 loop true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage sum to the clue in the top left.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.
