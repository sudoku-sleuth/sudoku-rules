---
format: open-rules
title: Pirates' Whisper
setter: sujoyku
source: https://tinyurl.com/5n6wpcj5
case: https://sudoku-sleuth.com/cases/pirates-whisper
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
givens: r1c8=9 r2c9=7 r8c1=6 r9c2=8
exported: a6714c5d217a9cb97b36f4cc49076a6a
---

```rules
sudoku 9x9
whispers-1: whispers r5c1-r6c2-r6c3-r5c3-r4c2-r3c2-r4c3-r4c4-r3c4-r2c3 gap 5
whispers-2: whispers r7c4-r8c5-r8c6-r7c6-r6c5-r5c5-r6c6-r6c7-r5c7-r4c6 gap 5
renban r1c5-r1c6-r2c7-r3c8-r4c9
```

Normal Sudoku rules apply. The digits 5 represent treasures which are protected by pirates (digits 1 to 4) from commoners (digits 6 to 9). Each treasure is orthogonally adjacent only to pirates and never orthogonally adjacent to a commoner. In other words: Any digit orthogonally adjacent to a 5 has a value of at most 4. Adjacent digits on a green line have a difference of at least 5. The purple line contains a set of consecutive non-repeating digits in any order.
