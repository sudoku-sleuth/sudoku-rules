---
format: open-rules
title: Valentine's Day 2025
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hs6txph8o5
case: https://sudoku-sleuth.com/cases/valentine-s-day-2025
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=2 r1c9=5 r4c3=2 r8c6=1 r8c7=4
exported: 7850e9f153c4032d5da886f02ab1590a
---

```rules
sudoku 9x9
kropki-1: kropki r7c3-r7c4 black
kropki-2: kropki r5c8-r5c9 black
kropki-3: kropki r5c9-r6c9 black
kropki-4: kropki r8c5-r9c5 black
kropki-5: kropki r4c5-r5c5 black
kropki-6: kropki r5c2-r6c2 black
kropki-7: kropki r1c3-r2c3 black
kropki-8: kropki r2c8-r3c8 black
kropki-9: kropki r1c7-r1c8 black
kropki-10: kropki r6c7-r6c8 black
kropki-11: kropki r2c1-r3c1 black
kropki-12: kropki r1c1-r2c1 black
arrow r3c3-r4c4-r5c5-r6c6-r7c7 bulb ["r2c2"]
renban-1: renban r2c3-r2c4-r3c5-r2c6-r2c7-r3c8-r4c8-r5c8-r6c7
renban-2: renban r3c2-r4c2-r5c2-r6c3-r7c4-r8c5-r7c6
```

**Standard Sudoku, Renban, Arrow, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. 
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.
