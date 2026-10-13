---
format: open-rules
title: Winding Paths
setter: sujoyku
source: https://tinyurl.com/39ymfdek
case: https://sudoku-sleuth.com/cases/winding-paths
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=5 r5c2=6 r5c7=8 r8c9=2 r9c8=3
---

```rules
sudoku 9x9
diagonal direction "main"
pair r1c8-r1c9 ratio 3
kropki r6c2-r6c3 colour "black"
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r6c1-r5c1-r4c1-r3c2-r2c3-r1c4-r1c5-r1c6
renban-3: renban r6c4-r5c4-r4c4-r4c5-r4c6
renban-4: renban r9c4-r8c4-r7c4-r6c5-r5c6-r4c7-r4c8-r4c9
renban-5: renban r8c6-r8c7-r7c7-r7c8-r6c8
renban-6: renban r9c1-r9c2-r9c3-r8c3-r7c3
renban-7: renban r3c5-r2c5-r2c6-r2c7-r3c7-r3c8-r3c9-r2c9
```

Normal Sudoku rules apply. On the marked diagonal digits do not repeat. Each purple line contains a set of consecutive non-repeating digits in any order. Digits joined by a black dot have a 1:2 ratio. Digits joined by a black 3-dot have a 1:3 ratio. (Not all dots are given.)
