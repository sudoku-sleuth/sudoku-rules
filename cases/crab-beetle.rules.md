---
format: open-rules
title: Crab Beetle
setter: BremSter & FullDeck & Missing a Few Cards
source: https://sudokupad.app/rf1quo1fpq
case: https://sudoku-sleuth.com/cases/crab-beetle
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=8 r7c3=8 r7c7=4
exported: 4df4b5205006ee911ba9d95a3e5fafa0
---

```rules
sudoku 9x9
entropic-1: entropic r1c3-r2c2-r3c1-r4c1-r5c1-r6c2
entropic-2: entropic r1c7-r2c8-r3c9-r4c9-r5c9-r6c8
entropic-3: entropic r2c4-r1c5-r2c6-r3c5
renban-1: renban r1c1-r1c2-r2c3
renban-2: renban r2c1-r3c2-r3c3
renban-3: renban r4c2-r4c3-r5c3
renban-4: renban r6c1-r5c2-r6c3
renban-5: renban r4c8-r4c7-r5c7
renban-6: renban r3c7-r3c8-r2c9
renban-7: renban r2c7-r1c8-r1c9
renban-8: renban r6c7-r5c8-r6c9
renban-9: renban r5c4-r6c5-r5c6
renban-10: renban r3c4-r4c5-r3c6
renban-11: renban r9c4-r8c4-r7c5-r8c6-r9c6
renban-12: renban r7c3-r8c3-r9c2
renban-13: renban r7c7-r8c7-r9c8
renban-14: renban r7c2-r8c1
```

• Normal Sudoku rules apply.
• Renban: Digits placed on purple lines must be a non-repeating set of consecutive digits, in any order.
• Entropic Lines: Any set of three sequential cells along a beige line must contain a low digit (123), a middle digit (456), and a high digit (789). Digits may repeat on lines, if allowed by other rules.
