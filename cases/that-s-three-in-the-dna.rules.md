---
format: open-rules
title: That's Three in the DNA
setter: EPH
source: https://tinyurl.com/mr3y9ebx
case: https://sudoku-sleuth.com/cases/that-s-three-in-the-dna
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=3
---

```rules
sudoku 9x9
whispers-1: whispers r1c3-r2c2-r3c1-r4c2-r5c3-r6c2-r7c1-r8c2-r9c3 gap 5
whispers-2: whispers r1c7-r2c8-r3c9-r4c8-r5c7-r6c8-r7c9-r8c8-r9c7 gap 5
whispers-3: whispers r3c4-r2c4-r1c4-r1c5-r1c6 gap 5
whispers-4: whispers r7c6-r8c6-r9c6-r9c5-r9c4 gap 5
renban-1: renban r2c2-r3c3-r4c2-r5c1-r6c2-r7c3-r8c2
renban-2: renban r2c8-r3c7-r4c8-r5c9-r6c8-r7c7-r8c8
renban-3: renban r5c4-r5c5-r5c6
renban-4: renban r7c5-r6c5-r6c6
renban-5: renban r3c5-r4c5-r4c4
parity-cells-1: parity-cells r2c7 parity "odd"
parity-cells-2: parity-cells r8c3 parity "even"
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Green lines are Whispers lines: adjacent digits connected by a green line must have a difference of at least 5.

Purple lines are Renban lines: each line contains a non-repeating set of consecutive digits in any order.

The grey circle is an odd digit.  The grey square is an even digit.
