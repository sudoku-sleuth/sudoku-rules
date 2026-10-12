---
format: open-rules
title: Sands of Time
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k2loc7uz0r
case: https://sudoku-sleuth.com/cases/sands-of-time
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=3 r2c4=4 r2c6=9 r4c3=2 r5c5=5 r6c7=7 r7c9=9 r8c4=8 r8c6=1 r9c3=7
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
modular-1: modular r1c1-r2c2-r3c3-r4c4-r4c5-r4c6-r3c7-r2c8-r1c9
modular-2: modular r8c2-r7c3-r6c4-r6c5-r6c6-r7c7-r8c8
modular-3: modular r4c1-r4c2-r5c3-r6c2-r6c1
modular-4: modular r4c9-r4c8-r5c7-r6c8-r6c9
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Diagonal: Digits may not repeat along either of the marked diagonals.
• Modular Lines: Any set of three sequential cells along a teal line must contain digits with different remainders when divided by 3. i.e. A digit with remainder 1 (147), a digit with remainder 2 (258), and a digit with remainder 0 (369). Digits may repeat on lines, if allowed by other rules.
