---
format: open-rules
title: Driving Rain
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5yv1bnluy1
case: https://sudoku-sleuth.com/cases/driving-rain
library: https://rules.sudoku-sleuth.com/
status: read
exported: 981a5cd98ac0040c0d5ad71678241e35
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r9c3 white
kropki-2: kropki r7c4-r8c4 white
kropki-3: kropki r6c7-r7c7 white
kropki-4: kropki r5c1-r6c1 white
kropki-5: kropki r3c5-r4c5 white
kropki-6: kropki r5c5-r6c5 white
kropki-7: kropki r6c5-r7c5 white
kropki-8: kropki r7c3-r8c3 white
kropki-9: kropki r1c1-r2c1 black
kropki-10: kropki r3c3-r4c3 black
kropki-11: kropki r2c5-r3c5 black
kropki-12: kropki r2c9-r3c9 black
kropki-13: kropki r4c7-r5c7 black
kropki-14: kropki r4c9-r5c9 black
kropki-15: kropki r6c2-r7c2 black
kropki-16: kropki r6c6-r7c6 black
kropki-17: kropki r8c7-r9c7 black
kropki-18: kropki r6c3-r7c3 black
kropki-19: kropki r1c2-r2c2 black
kropki-20: kropki r2c8-r3c8 black
arrow-1: arrow r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1 bulb ["r1c1","r1c2"]
arrow-2: arrow r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 bulb ["r3c3","r3c4"]
arrow-3: arrow r3c5-r4c5-r5c5-r6c5-r7c5 bulb ["r2c5","r2c6"]
arrow-4: arrow r5c7-r6c7-r7c7-r8c7-r9c7 bulb ["r4c7","r4c8"]
arrow-5: arrow r3c9-r4c9-r5c9-r6c9-r7c9-r8c9 bulb ["r2c8","r2c9"]
arrow-6: arrow r5c2-r6c2-r7c2 bulb ["r4c2"]
arrow-7: arrow r6c6-r7c6-r8c6 bulb ["r5c6"]
arrow-8: arrow r7c4-r8c4-r9c4 bulb ["r6c4"]
```

- Normal sudoku rules apply.

-Arrows: Digits along an arrow must sum to the number indicated in the circle or pill from which the arrow emerges. Multi-digit pills are read top-to-bottom or left-to-right.

-Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
