---
format: open-rules
title: Ten of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/63wcieu2hl
case: https://sudoku-sleuth.com/cases/ten-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 10 connected true
cage-2: cage r9c6-r9c7 total 10 connected true
cage-3: cage r9c3-r9c4 total 10 connected true
cage-4: cage r5c6-r6c6 total 10 connected true
cage-5: cage r2c5-r2c6-r2c7 total 10 connected true
cage-6: cage r8c2-r8c3-r9c2 total 10 connected true
cage-7: cage r3c2-r3c3-r4c3 total 10 connected true
whispers-1: whispers r1c2-r2c1-r3c2-r2c3 gap 5 loop true
whispers-2: whispers r3c3-r4c2-r5c3-r4c4 gap 5 loop true
whispers-3: whispers r5c2-r6c1-r7c2-r6c3 gap 5 loop true
whispers-4: whispers r7c3-r8c2-r9c3-r8c4 gap 5 loop true
whispers-5: whispers r1c8-r2c7-r3c8-r2c9 gap 5 loop true
whispers-6: whispers r3c7-r4c6-r5c7-r4c8 gap 5 loop true
whispers-7: whispers r5c8-r6c7-r7c8-r6c9 gap 5 loop true
whispers-8: whispers r7c7-r8c6-r9c7-r8c8 gap 5 loop true
renban-1: renban r2c5-r3c4-r4c5-r3c6
renban-2: renban r6c5-r7c4-r8c5-r7c6
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
-Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
