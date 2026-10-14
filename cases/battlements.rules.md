---
format: open-rules
title: Battlements
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f7iew8xg43
case: https://sudoku-sleuth.com/cases/battlements
library: https://rules.sudoku-sleuth.com/
status: read
exported: c79329dbacb9ea8cbde8b7e639e1c370
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2 total 8 connected true
cage-2: cage r6c8-r6c9 total 14 connected true
cage-3: cage r4c8-r4c9 total 7 connected true
cage-4: cage r4c1-r4c2 total 15 connected true
cage-5: cage r2c3-r3c3 total 7 connected true
cage-6: cage r2c7-r3c7 total 11 connected true
cage-7: cage r7c7-r8c7 total 9 connected true
cage-8: cage r4c4-r4c5 total 7 connected true
cage-9: cage r8c5-r9c5 total 11 connected true
cage-10: cage r8c1-r9c1 total 9 connected true
cage-11: cage r8c9-r9c9 total 9 connected true
whispers-1: whispers r4c2-r3c2-r3c3-r4c3-r4c4-r3c4-r3c5-r4c5-r4c6-r3c6-r3c7-r4c7-r4c8-r3c8 gap 4
whispers-2: whispers r6c2-r7c2-r7c3-r6c3-r6c4-r7c4-r7c5-r6c5-r6c6-r7c6-r7c7-r6c7-r6c8-r7c8 gap 4
```

**Standard Sudoku, Dutch Whispers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
