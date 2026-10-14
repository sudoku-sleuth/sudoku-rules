---
format: open-rules
title: Arrular
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9ifo8iz8ep
case: https://sudoku-sleuth.com/cases/arrular
library: https://rules.sudoku-sleuth.com/
status: read
exported: 44a208831c88ff944421322327d30881
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 white
kropki-2: kropki r3c2-r4c2 white
kropki-3: kropki r1c1-r2c1 white
kropki-4: kropki r5c5-r6c5 white
kropki-5: kropki r5c6-r6c6 white
kropki-6: kropki r4c6-r4c7 white
kropki-7: kropki r7c5-r8c5 white
kropki-8: kropki r8c6-r9c6 black
kropki-9: kropki r9c7-r9c8 black
kropki-10: kropki r6c2-r7c2 black
arrow-1: arrow r1c3-r2c2-r3c1 bulb ["r1c4"]
arrow-2: arrow r2c8-r3c9 bulb ["r1c7"]
arrow-3: arrow r6c3-r5c3-r4c3 bulb ["r7c3"]
arrow-4: arrow r7c7-r6c7 bulb ["r7c6"]
arrow-5: arrow r9c7-r8c8-r7c9 bulb ["r9c6"]
arrow-6: arrow r8c2-r7c1 bulb ["r9c3"]
modular-1: modular r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9
modular-2: modular r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7-r5c7
modular-3: modular r7c1-r8c2-r9c3-r9c4-r9c5-r9c6-r9c7-r8c8-r7c9
```

**Normal Sudoku, Arrow, Modular Line, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.
