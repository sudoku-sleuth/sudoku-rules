---
format: open-rules
title: Whisper-4rrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/e7j2m0ooag
case: https://sudoku-sleuth.com/cases/whisper-4rrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: 509979a3e10260518626cb61e2e66e9d
---

```rules
sudoku 9x9
arrow-1: arrow r1c3-r1c4-r2c4 bulb ["r1c2"]
arrow-2: arrow r2c6-r2c7-r1c7 bulb ["r2c5"]
arrow-3: arrow r3c5-r3c4 bulb ["r2c5"]
arrow-4: arrow r6c4-r5c3 bulb ["r7c5"]
arrow-5: arrow r6c6-r5c7 bulb ["r7c5"]
arrow-6: arrow r7c2-r6c1 bulb ["r8c3"]
arrow-7: arrow r7c7-r8c6 bulb ["r6c8"]
arrow-8: arrow r3c2-r2c3 bulb ["r4c1"]
arrow-9: arrow r5c2-r6c3 bulb ["r4c1"]
arrow-10: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-11: arrow r3c8-r4c8 bulb ["r2c8"]
arrow-12: arrow r7c8-r6c9 bulb ["r8c7"]
arrow-13: arrow r7c3-r8c4 bulb ["r6c2"]
arrow-14: arrow r2c9-r1c9 bulb ["r3c9"]
whispers-1: whispers r1c2-r1c3-r1c4-r2c4 gap 4
whispers-2: whispers r2c5-r2c6-r2c7-r1c7 gap 4
whispers-3: whispers r5c3-r6c4-r7c5-r6c6-r5c7 gap 4
whispers-4: whispers r8c3-r7c2-r6c1 gap 4
whispers-5: whispers r8c6-r7c7-r6c8 gap 4
```

**Sudoku, Whisper-4, Arrows**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
