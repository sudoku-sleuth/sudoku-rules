---
format: open-rules
title: Everything's Connected
setter: sujoyku
source: https://sudokupad.app/76bf9wzqys
case: https://sudoku-sleuth.com/cases/everything-s-connected
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
whispers-1: whispers r8c4-r9c4-r9c5-r9c6-r8c6-r8c5 gap 5 loop true
whispers-2: whispers r5c1-r6c1-r6c2-r5c2 gap 5 loop true
whispers-3: whispers r1c7-r2c7-r2c8-r1c8 gap 5 loop true
renban-1: renban r8c8-r9c8-r9c9-r8c9-r7c9-r6c9-r6c8-r7c8
renban-2: renban r8c1-r9c1-r9c2-r9c3-r8c3-r8c2
renban-3: renban r3c4-r4c4-r4c5-r3c5
renban-4: renban r1c5-r2c5-r2c6-r1c6
renban-5: renban r3c2-r3c3-r4c3-r4c2
renban-6: renban r1c3-r2c3-r2c4-r1c4
renban-7: renban r1c1-r2c1-r2c2-r1c2
pair-1: pair r2c2-r2c3 relation {"op":"sum","value":10}
pair-2: pair r1c4-r1c5 relation {"op":"sum","value":10}
pair-3: pair r4c1-r5c1 relation {"op":"sum","value":10}
pair-4: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-5: pair r2c2-r3c2 relation {"op":"sum","value":5}
pair-6: pair r2c6-r2c7 relation {"op":"sum","value":5}
pair-7: pair r5c8-r6c8 relation {"op":"sum","value":5}
```

Happy Birthday, Katie!
---
- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Renban: Each pink line must contain a set of consecutive non-repeating digits in any order.

- German Whisper: Adjacent digits on a green line must have a difference of at least 5.

- XV: Digits joined by an X sum to 10. Digits joined by a V sum to 5. (Not all XV are given.)
