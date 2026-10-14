---
format: open-rules
title: Triskadekasusurria
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2hywpxz3f5
case: https://sudoku-sleuth.com/cases/triskadekasusurria
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0bb50d2ebc8abc652ab13987a713215d
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r2c3-r2c4 total 13 connected true
cage-2: cage r3c1-r3c2-r4c1-r4c2 total 13 connected true
cage-3: cage r1c6-r1c7-r2c6-r2c7 total 13 connected true
cage-4: cage r3c8-r3c9-r4c8-r4c9 total 13 connected true
cage-5: cage r6c8-r6c9-r7c8-r7c9 total 13 connected true
cage-6: cage r8c6-r8c7-r9c6-r9c7 total 13 connected true
cage-7: cage r8c3-r8c4-r9c3-r9c4 total 13 connected true
cage-8: cage r6c1-r6c2-r7c1-r7c2 total 13 connected true
cage-9: cage r5c5-r5c6-r6c5-r6c6 total 13 connected true
whispers-1: whispers r7c2-r6c2 gap 5
whispers-2: whispers r4c2-r3c2 gap 5
whispers-3: whispers r2c3-r2c4 gap 5
whispers-4: whispers r2c6-r2c7 gap 5
whispers-5: whispers r3c8-r4c8 gap 5
whispers-6: whispers r8c3-r8c4 gap 5
whispers-7: whispers r8c2-r7c2 gap 5
whispers-8: whispers r8c2-r8c3 gap 5
whispers-9: whispers r2c8-r3c8 gap 5
whispers-10: whispers r4c1-r4c2 gap 5
whispers-11: whispers r7c8-r8c8 gap 5
whispers-12: whispers r6c7-r6c8 gap 5
```

**Sudoku, Cages, Whisper-5 Lines**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Whisper-5 Lines: Adjacent digits along Whisper-5 Lines must differ by at least 5.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
