---
format: open-rules
title: National Math Camp
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vzoofi242p
case: https://sudoku-sleuth.com/cases/national-math-camp
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r4c1-r3c1-r2c1-r3c2-r4c3-r3c3-r2c3 gap 4
whispers-2: whispers r4c4-r3c4-r2c4-r3c5-r2c6-r3c6-r4c6 gap 4
whispers-3: whispers r2c9-r2c8-r2c7-r3c7-r4c7-r4c8-r4c9 gap 4
whispers-4: whispers r6c1-r7c1-r8c1-r7c2-r8c3-r7c3-r6c3 gap 4
whispers-5: whispers r8c5-r7c5-r6c5-r6c6-r7c6 gap 4
whispers-6: whispers r7c6-r7c5 gap 4
whispers-7: whispers r6c8-r7c8-r8c8-r7c9-r6c9 gap 4
whispers-8: whispers r8c9-r7c9 gap 4
pair-1: pair r3c1-r4c1 relation {"op":"sum","value":10}
pair-2: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-3: pair r3c6-r3c7 relation {"op":"sum","value":10}
pair-4: pair r7c1-r7c2 relation {"op":"sum","value":10}
pair-5: pair r6c4-r7c4 relation {"op":"sum","value":10}
pair-6: pair r4c6-r5c6 relation {"op":"sum","value":10}
pair-7: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-8: pair r4c9-r5c9 relation {"op":"sum","value":5}
pair-9: pair r2c5-r2c6 relation {"op":"sum","value":5}
pair-10: pair r5c7-r6c7 relation {"op":"sum","value":5}
```

**Sudoku, Whisper-4 Lines, XV Pairs**


- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing.html
