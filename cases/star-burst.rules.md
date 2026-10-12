---
format: open-rules
title: Star Burst
setter: The Bard
source: https://sudokupad.app/nr80iisqi7
case: https://sudoku-sleuth.com/cases/star-burst
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r2c2-r3c3-r4c4 gap 5
whispers-2: whispers r1c5-r2c5 gap 5
whispers-3: whispers r3c5-r4c5 gap 5
whispers-4: whispers r4c6-r3c7-r2c8 gap 5
whispers-5: whispers r5c6-r5c7 gap 5
whispers-6: whispers r5c8-r5c9 gap 5
whispers-7: whispers r6c6-r7c7-r8c8 gap 5
whispers-8: whispers r6c5-r7c5 gap 5
whispers-9: whispers r8c5-r9c5 gap 5
whispers-10: whispers r6c4-r7c3-r8c2 gap 5
whispers-11: whispers r5c4-r5c3 gap 5
whispers-12: whispers r5c2-r5c1 gap 5
pair-1: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-2: pair r4c2-r4c3 relation {"op":"sum","value":10}
pair-3: pair r4c1-r5c1 relation {"op":"sum","value":10}
pair-4: pair r4c4-r4c5 relation {"op":"sum","value":5}
pair-5: pair r2c2-r2c3 relation {"op":"sum","value":5}
pair-6: pair r3c4-r4c4 relation {"op":"sum","value":5}
pair-7: pair r1c7-r1c8 relation {"op":"sum","value":5}
negative relations [{"op":"difference","value":1}] except [["r4c4","r4c5"],["r3c1","r3c2"],["r2c2","r2c3"],["r3c4","r4c4"],["r1c7","r1c8"],["r4c2","r4c3"],["r4c1","r5c1"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Non-Consecutive: Digits in orthogonally adjacent cells may not be consecutive.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
