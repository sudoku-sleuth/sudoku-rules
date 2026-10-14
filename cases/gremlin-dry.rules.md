---
format: open-rules
title: Gremlin (Dry)
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l3m6hh3hfq
case: https://sudoku-sleuth.com/cases/gremlin-dry
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=8 r2c8=9 r7c3=1 r7c7=6
exported: 98a7812f6f38d673c942e98cd5c920cc
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r5c3 white
kropki-2: kropki r9c6-r9c7 white
kropki-3: kropki r9c8-r9c9 white
kropki-4: kropki r9c1-r9c2 white
kropki-5: kropki r7c1-r8c1 white
kropki-6: kropki r8c8-r9c8 black
kropki-7: kropki r8c2-r9c2 black
kropki-8: kropki r4c4-r5c4 black
kropki-9: kropki r8c3-r9c3 black
kropki-10: kropki r8c7-r9c7 black
kropki-11: kropki r1c8-r1c9 black
kropki-12: kropki r1c1-r1c2 black
kropki-13: kropki r4c6-r5c6 black
kropki-14: kropki r5c1-r6c1 black
kropki-15: kropki r5c9-r6c9 black
arrow-1: arrow r9c4-r9c3 bulb ["r9c5"]
arrow-2: arrow r9c6-r9c7 bulb ["r9c5"]
arrow-3: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-4: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-5: arrow r5c6-r5c7 bulb ["r5c5"]
double-arrow-1: double-arrow r3c2-r2c1-r1c1-r1c2-r2c3 ends ["r4c3","r3c4"]
double-arrow-2: double-arrow r2c7-r1c8-r1c9-r2c9-r3c8 ends ["r3c6","r4c7"]
double-arrow-3: double-arrow r7c2-r8c2-r8c3 ends ["r6c3","r7c4"]
double-arrow-4: double-arrow r8c7-r8c8-r7c8 ends ["r7c6","r6c7"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Double Arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.Not all dots are necessarily given.
