---
format: open-rules
title: Glyph
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/smwplnh6vb
case: https://sudoku-sleuth.com/cases/glyph
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=4 r4c1=2 r6c9=8 r9c4=6
exported: be974cebebb7c23309fedc6aa7f39a4e
---

```rules
sudoku 9x9
entropic-1: entropic r7c4-r6c3-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2
entropic-2: entropic r8c3-r8c4-r8c5-r8c6-r7c6-r6c7
entropic-3: entropic r2c7-r2c6-r2c5-r2c4-r3c4-r4c3
entropic-4: entropic r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r4c7-r3c6
renban-1: renban r1c1-r2c1-r3c1
renban-2: renban r1c3-r2c3-r3c3
renban-3: renban r7c1-r7c2-r7c3
renban-4: renban r9c1-r9c2-r9c3
renban-5: renban r7c7-r8c7-r9c7
renban-6: renban r7c9-r8c9-r9c9
renban-7: renban r1c7-r1c8-r1c9
renban-8: renban r3c7-r3c8-r3c9
renban-9: renban r1c4-r1c5
renban-10: renban r9c5-r9c6
renban-11: renban r5c4-r4c4-r4c5-r4c6
renban-12: renban r5c6-r6c6-r6c5-r6c4
renban-13: renban r4c9-r5c9
renban-14: renban r5c1-r6c1
renban-15: renban r8c1-r8c2
renban-16: renban r2c8-r2c9
```

- Normal sudoku rules apply.
- Renban Lines: Digits on pink Renban Lines contain a set of consecutive digits in some order.
- Entropic Lines: Every set of three adjacent digits along a peach Entropic Line contains one low digit (123), one middle digit (456), and one high digit (789).
