---
format: open-rules
title: Playing with Blocks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z62omfful2
case: https://sudoku-sleuth.com/cases/playing-with-blocks
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0dd1c181b20eb7be85642c1c299f31da
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 11 connected true
cage-2: cage r8c9-r9c8-r9c9 total 13 connected true
cage-3: cage r8c1-r9c1-r9c2 total 13 connected true
cage-4: cage r1c8-r1c9-r2c9 total 16 connected true
cage-5: cage r2c5-r3c5-r3c6 total 9 connected true
cage-6: cage r4c7-r5c7-r5c8 total 17 connected true
cage-7: cage r6c6-r7c5-r7c6 total 11 connected true
cage-8: cage r4c3-r4c4-r5c3 total 15 connected true
cage-9: cage r6c3-r6c4-r7c4 total 15 connected true
cage-10: cage r8c4-r8c5-r9c5 total 8 connected true
whispers-1: whispers r4c3-r5c4-r4c5 gap 5
whispers-2: whispers r7c6-r8c7-r7c8-r6c7 gap 5 loop true
whispers-3: whispers r8c7-r9c8-r8c9-r7c8 gap 5
whispers-4: whispers r4c5-r3c6-r4c7-r5c6 gap 5
whispers-5: whispers r5c4-r6c5-r5c6-r4c5 gap 5
whispers-6: whispers r6c5-r7c6 gap 5
whispers-7: whispers r5c6-r6c7 gap 5
whispers-8: whispers r2c7-r1c8-r2c9-r3c8 gap 5 loop true
whispers-9: whispers r6c3-r7c4-r8c3-r7c2 gap 5 loop true
whispers-10: whispers r7c2-r8c1-r9c2 gap 5
whispers-11: whispers r9c2-r8c3 gap 5
whispers-12: whispers r5c2-r6c1 gap 5
whispers-13: whispers r6c1-r7c2 gap 5
whispers-14: whispers r8c3-r9c4 gap 5
whispers-15: whispers r9c4-r8c5 gap 5
whispers-16: whispers r8c5-r7c4 gap 5
whispers-17: whispers r2c3-r3c2-r2c1-r1c2 gap 5 loop true
whispers-18: whispers r2c7-r1c6 gap 5
whispers-19: whispers r3c8-r4c9 gap 5
whispers-20: whispers r5c8-r4c9 gap 5
whispers-21: whispers r5c2-r6c3 gap 5
whispers-22: whispers r3c2-r4c3-r3c4 gap 5
whispers-23: whispers r2c3-r3c4-r4c5 gap 5
whispers-24: whispers r2c5-r1c6 gap 5
```

**Sudoku, Whisper-5, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
