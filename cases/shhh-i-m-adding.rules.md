---
format: open-rules
title: Shhh ... I'm Adding!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cx13abul2n
case: https://sudoku-sleuth.com/cases/shhh-i-m-adding
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=5 r3c1=6 r6c2=2 r8c4=4
exported: b8906844b1e07f3f44589d337b1d5348
---

```rules
sudoku 9x9
whispers-1: whispers r5c2-r4c3-r3c4-r3c5-r3c6 gap 5
whispers-2: whispers r4c4-r4c5-r4c6-r5c7-r6c8 gap 5
whispers-3: whispers r4c7-r4c8-r3c9-r2c9 gap 5
whispers-4: whispers r5c3-r5c4-r5c5 gap 5
whispers-5: whispers r6c4-r7c3-r7c2 gap 5
whispers-6: whispers r6c6-r7c7-r7c8 gap 5
whispers-7: whispers r7c4-r8c3-r8c2 gap 5
whispers-8: whispers r7c5-r7c6-r8c7-r8c8 gap 5
whispers-9: whispers r8c5-r8c6-r9c7-r9c8 gap 5
whispers-10: whispers r5c2-r4c3-r3c4-r3c5-r3c6 gap 5
whispers-11: whispers r4c4-r4c5-r4c6-r5c7-r6c8 gap 5
whispers-12: whispers r4c7-r4c8-r3c9-r2c9 gap 5
whispers-13: whispers r5c3-r5c4-r5c5 gap 5
whispers-14: whispers r6c4-r7c3-r7c2 gap 5
whispers-15: whispers r6c6-r7c7-r7c8 gap 5
whispers-16: whispers r7c4-r8c3-r8c2 gap 5
whispers-17: whispers r7c5-r7c6-r8c7-r8c8 gap 5
whispers-18: whispers r8c5-r8c6-r9c7-r9c8 gap 5
region-sum-1: region-sum r5c2-r4c3-r3c4-r3c5-r3c6 segments [["r5c2","r4c3"],["r3c4","r3c5","r3c6"]]
region-sum-2: region-sum r4c4-r4c5-r4c6-r5c7-r6c8 segments [["r4c4","r4c5","r4c6"],["r5c7","r6c8"]]
region-sum-3: region-sum r4c7-r4c8-r3c9-r2c9 segments [["r4c7","r4c8"],["r3c9","r2c9"]]
region-sum-4: region-sum r5c3-r5c4-r5c5 segments [["r5c3"],["r5c4","r5c5"]]
region-sum-5: region-sum r6c4-r7c3-r7c2 segments [["r6c4"],["r7c3","r7c2"]]
region-sum-6: region-sum r6c6-r7c7-r7c8 segments [["r6c6"],["r7c7","r7c8"]]
region-sum-7: region-sum r7c4-r8c3-r8c2 segments [["r7c4"],["r8c3","r8c2"]]
region-sum-8: region-sum r7c5-r7c6-r8c7-r8c8 segments [["r7c5","r7c6"],["r8c7","r8c8"]]
region-sum-9: region-sum r8c5-r8c6-r9c7-r9c8 segments [["r8c5","r8c6"],["r9c7","r9c8"]]
```

**Sudoku, Duality Lines (Region Sum, Whisper-5)**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Duality Lines: All lines in this puzzle are BOTH region sum lines AND whisper-5 lines.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 line must differ by at least five.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
