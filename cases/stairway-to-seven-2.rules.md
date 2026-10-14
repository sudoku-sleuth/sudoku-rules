---
format: open-rules
title: Stairway to seven
setter: sujoyku
source: https://tinyurl.com/2aesarht
case: https://sudoku-sleuth.com/cases/stairway-to-seven-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c6=7
exported: 8f70872f696e97d7813cb4f5016a7d72
---

```rules
sudoku 9x9
arrow-1: arrow r5c1-r4c1 bulb ["r6c1"]
arrow-2: arrow r6c4-r7c4-r7c5 bulb ["r7c3"]
arrow-3: arrow r3c7-r3c6-r2c6-r1c6 bulb ["r2c7"]
palindrome r4c1-r5c2-r6c2-r7c2-r8c2-r8c3-r9c4-r9c5-r8c5-r9c6-r9c7
whispers-1: whispers r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 gap 5
whispers-2: whispers r8c9-r7c8-r6c7-r5c6-r4c5-r3c4-r2c3-r1c2 gap 5
entropic r2c9-r2c8-r3c8-r4c8-r4c7-r5c7-r5c6-r6c6-r6c5-r5c5-r4c5-r4c4-r3c4-r3c3-r2c3-r2c2-r1c2-r1c1
pair-1: pair r7c1-r8c1 sum 10
pair-2: pair r9c2-r9c3 sum 5
```

Normal Sudoku rules apply. The orange line is an entropy line, i.e. each set of three consecutive digits on the orange line has to contain a low (1, 2 or 3), a medium (4, 5 and 6) and a high digit (7, 8 or 9). The green lines are German whisper lines, i.e. adjacent digits on a green line have a difference of at least 5. Digits on the grey line form a palindrome, i.e. they read the same forward and backward. Digits on an arrow sum to the digit in the circle from which the arrow emerges. Digits joined by a V sum to 5. Digits joined by an X sum to 10. (Not all V and X are given.)
