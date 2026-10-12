---
format: open-rules
title: Counterpoint
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cid9sxz5yf
case: https://sudoku-sleuth.com/cases/counterpoint
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=3 r9c9=9
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r2c1-r3c1 colour "white"
kropki-3: kropki r7c3-r8c3 colour "black"
kropki-4: kropki r3c9-r4c9 colour "black"
kropki-5: kropki r4c2-r5c2 colour "black"
kropki-6: kropki r8c8-r9c8 colour "black"
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-2: arrow r3c2-r4c2-r5c2 bulb ["r2c2"]
arrow-3: arrow r4c4-r5c4-r6c4 bulb ["r3c4"]
arrow-4: arrow r5c5-r6c5-r7c5 bulb ["r4c5"]
arrow-5: arrow r6c7-r7c7-r8c7 bulb ["r5c7"]
arrow-6: arrow r7c8-r8c8-r9c8 bulb ["r6c8"]
arrow-7: arrow r4c3-r3c3-r2c3 bulb ["r5c3"]
arrow-8: arrow r6c6-r7c6 bulb ["r5c6"]
arrow-9: arrow r7c9-r6c9 bulb ["r8c9"]
arrow-10: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-11: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-12: arrow r8c3-r7c3 bulb ["r9c3"]
arrow-13: arrow r2c8-r1c8 bulb ["r3c8"]
```

- Normal sudoku rules apply.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
