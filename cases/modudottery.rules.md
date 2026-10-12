---
format: open-rules
title: Modudottery
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/33a62t861b
case: https://sudoku-sleuth.com/cases/modudottery
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c9=2 r3c5=6 r5c3=2 r5c7=1 r7c5=4 r9c1=3 r9c9=4
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r4c2 colour "white"
kropki-2: kropki r1c4-r2c4 colour "white"
kropki-3: kropki r6c8-r6c9 colour "white"
kropki-4: kropki r8c4-r9c4 colour "white"
kropki-5: kropki r8c6-r9c6 colour "white"
kropki-6: kropki r4c8-r4c9 colour "white"
kropki-7: kropki r1c6-r2c6 colour "white"
kropki-8: kropki r6c5-r6c6 colour "white"
kropki-9: kropki r5c4-r6c4 colour "white"
kropki-10: kropki r4c4-r4c5 colour "white"
kropki-11: kropki r4c6-r5c6 colour "white"
kropki-12: kropki r7c4-r7c5 colour "white"
kropki-13: kropki r5c3-r6c3 colour "white"
kropki-14: kropki r4c3-r5c3 colour "white"
kropki-15: kropki r5c7-r6c7 colour "white"
kropki-16: kropki r7c5-r7c6 colour "white"
modular-1: modular r4c1-r3c1-r3c2-r2c2-r2c3-r1c3-r1c4
modular-2: modular r1c6-r1c7-r2c7-r2c8-r3c8-r3c9-r4c9
modular-3: modular r6c9-r7c9-r7c8-r8c8-r8c7-r9c7-r9c6
modular-4: modular r9c4-r9c3-r8c3-r8c2-r7c2-r7c1-r6c1
modular-5: modular r6c2-r6c3-r7c3-r7c4-r8c4
modular-6: modular r8c6-r7c6-r7c7-r6c7-r6c8
modular-7: modular r4c2-r4c3-r3c3-r3c4-r2c4
modular-8: modular r2c6-r3c6-r3c7-r4c7-r4c8
```

**Standard Sudoku, Modular Lines, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, visit https://missingdeck.net
