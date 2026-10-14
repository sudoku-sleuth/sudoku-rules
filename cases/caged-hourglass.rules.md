---
format: open-rules
title: Caged Hourglass
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/caged-hourglass
case: https://sudoku-sleuth.com/cases/caged-hourglass
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=5
exported: eb0f85d0e5eae38215ae29d9b3632530
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r1c5 total 11 connected true
cage-2: cage r9c5-r9c6-r9c7 total 11 connected true
cage-3: cage r3c1-r3c2 total 11 connected true
cage-4: cage r3c8-r3c9 total 10 connected true
cage-5: cage r7c1-r7c2 total 10 connected true
cage-6: cage r7c8-r7c9 total 10 connected true
cage-7: cage r3c3-r3c4-r4c4 total 10 connected true
cage-8: cage r3c6-r3c7-r4c6 total 17 connected true
cage-9: cage r7c3-r7c4 total 9 connected true
cage-10: cage r7c6-r7c7 total 9 connected true
whispers-1: whispers r9c3-r8c2-r7c1-r6c2-r5c3-r4c2-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c8-r5c7-r6c8-r7c9-r8c8-r9c7-r9c6-r9c5-r9c4 gap 4 loop true
whispers-2: whispers r3c6-r3c7-r3c8-r3c9 gap 4
whispers-3: whispers r7c3-r7c2-r7c1 gap 4
whispers-4: whispers r7c7-r7c8-r7c9 gap 4
whispers-5: whispers r4c5-r3c6 gap 4
whispers-6: whispers r4c5-r3c4-r3c3-r3c2-r3c1 gap 4
whispers-7: whispers r6c4-r7c3 gap 4
whispers-8: whispers r6c6-r7c7 gap 4
```

**Sudoku, Whisper-4 Lines, Cages**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line must differ by at least 4.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
