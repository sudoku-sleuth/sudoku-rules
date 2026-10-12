---
format: open-rules
title: Driving Me Dotty
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0qwz96h8qs
case: https://sudoku-sleuth.com/cases/driving-me-dotty
library: https://rules.sudoku-sleuth.com/
status: read
givens: 3.......5.2.....4...1...3.....1.3.......9.......7.5.....7...5...8.....6.9.......7
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 colour "white"
kropki-2: kropki r4c3-r5c3 colour "white"
kropki-3: kropki r2c4-r3c4 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r5c7-r6c7 colour "white"
kropki-6: kropki r6c7-r6c8 colour "white"
kropki-7: kropki r7c5-r7c6 colour "white"
kropki-8: kropki r6c5-r7c5 colour "white"
kropki-9: kropki r5c2-r6c2 colour "white"
kropki-10: kropki r5c6-r5c7 colour "black"
kropki-11: kropki r5c3-r5c4 colour "black"
kropki-12: kropki r2c3-r2c4 colour "black"
```

Normal sudoku rules apply.

Kropki dots: White dots mark consecutive pairs. Black dots mark a number and its double. 

Not all pairs are marked.
