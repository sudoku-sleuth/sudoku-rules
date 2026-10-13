---
format: open-rules
title: Exes & Vees and Dots, Oh My!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3fn2ozwwkz
case: https://sudoku-sleuth.com/cases/exes-vees-and-dots-oh-my
library: https://rules.sudoku-sleuth.com/
status: read
givens: ..9...2.6.8..6..............2...6...........2....2.6........7.3...........2......
---

```rules
sudoku 9x9
pair-1: pair r2c1-r3c1 ratio 3
pair-2: pair r4c2-r5c2 ratio 3
pair-3: pair r8c4-r9c4 ratio 3
pair-4: pair r3c6-r4c6 ratio 3
pair-5: pair r7c8-r8c8 ratio 3
pair-6: pair r9c3-r9c4 ratio 3
pair-7: pair r1c1-r1c2 ratio 3
pair-8: pair r1c2-r1c3 ratio 3
pair-9: pair r6c9-r7c9 ratio 3
pair-10: pair r7c9-r8c9 ratio 3
pair-11: pair r3c7-r3c8 ratio 3
pair-12: pair r2c8-r3c8 ratio 3
pair-13: pair r5c6-r5c7 ratio 3
pair-14: pair r4c7-r5c7 ratio 3
pair-15: pair r8c2-r8c3 ratio 3
pair-16: pair r6c4-r7c4 ratio 3
pair-17: pair r2c1-r2c2 sum 10
pair-18: pair r4c9-r5c9 sum 10
pair-19: pair r1c7-r1c8 sum 10
pair-20: pair r6c5-r6c6 sum 10
pair-21: pair r8c5-r9c5 sum 10
pair-22: pair r5c5-r5c6 sum 10
pair-23: pair r6c7-r6c8 sum 10
pair-24: pair r5c4-r6c4 sum 10
pair-25: pair r8c7-r8c8 sum 10
pair-26: pair r3c7-r4c7 sum 10
pair-27: pair r6c3-r6c4 sum 10
pair-28: pair r8c2-r9c2 sum 10
pair-29: pair r7c8-r7c9 sum 5
pair-30: pair r7c2-r8c2 sum 5
pair-31: pair r4c1-r4c2 sum 5
pair-32: pair r4c5-r5c5 sum 5
pair-33: pair r2c6-r3c6 sum 5
pair-34: pair r1c4-r2c4 sum 5
pair-35: pair r6c8-r6c9 sum 5
pair-36: pair r2c3-r2c4 sum 5
pair-37: pair r6c4-r6c5 sum 5
pair-38: pair r8c3-r9c3 sum 5
```

Roman Numerals and New Ratios

Black dots with "3" in the center indicate that one of the cells they join is 3 times the other. For example, 6 and 2 could be on either side of a black dot in this puzzle.

Cells joined by a "V" must add to 5. For example, if a 2 is on one side of a V, the digit on the other side must be a 3.

Cells joined by an "X" must add to 10. For example, if a 2 is on one side of a X, the digit on the other side must be an 8.
