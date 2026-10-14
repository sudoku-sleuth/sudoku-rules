---
format: open-rules
title: Good Fences
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wm7hxsqbts
case: https://sudoku-sleuth.com/cases/good-fences
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=3 r3c4=5 r4c3=2 r4c9=4 r5c5=9 r6c1=5 r6c7=7 r7c6=4 r8c3=6 r9c8=1
exported: 907c254ac1aab676495f27fcd58a7113
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
negative relations [{"op":"difference","value":1}] except []
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Diagonal: Digits may not repeat along either of the marked diagonals.
• Non-Consecutive: Digits in orthogonally adjacent cells may not be consecutive.
