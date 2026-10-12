---
fog:
  initiallyLit:
    - 2
    - 10
    - 11
    - 18
    - 19
    - 20
    - 21
    - 34
    - 49
    - 51
    - 56
format: open-rules
title: Swiss Cheese
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4wz8ppocdy
case: https://sudoku-sleuth.com/cases/swiss-cheese
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r2c3 colour "white"
kropki-2: kropki r3c1-r3c2 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r6c4-r6c5 colour "white"
kropki-5: kropki r6c5-r7c5 colour "white"
kropki-6: kropki r3c4-r3c5 colour "white"
kropki-7: kropki r7c3-r7c4 colour "white"
kropki-8: kropki r2c2-r2c3 colour "white"
kropki-9: kropki r2c6-r3c6 colour "white"
kropki-10: kropki r3c5-r4c5 colour "white"
kropki-11: kropki r6c9-r7c9 colour "white"
kropki-12: kropki r6c8-r7c8 colour "white"
kropki-13: kropki r1c3-r1c4 colour "black"
arrow-1: arrow r2c4-r2c3-r3c2 bulb ["r2c5"]
arrow-2: arrow r5c2-r4c2-r3c3 bulb ["r6c2"]
arrow-3: arrow r1c4-r1c3-r2c2 bulb ["r1c5"]
arrow-4: arrow r5c1-r4c1-r3c1 bulb ["r6c1"]
arrow-5: arrow r7c2-r8c1-r9c1 bulb ["r7c3"]
arrow-6: arrow r8c3-r9c4-r9c5 bulb ["r7c3"]
arrow-7: arrow r2c7-r1c8-r1c9 bulb ["r3c7"]
arrow-8: arrow r5c5-r4c5-r3c4 bulb ["r6c5"]
arrow-9: arrow r7c9-r6c9-r5c9 bulb ["r8c8"]
arrow-10: arrow r8c7-r8c6-r8c5 bulb ["r8c8"]
arrow-11: arrow r7c7-r6c7-r5c7 bulb ["r8c8"]
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from surrounding cells. 

Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules. All arrows in this puzzle have three digits along the shaft. No arrow shaft has a bend of 90 degrees or less. Arrows do not intersect along shafts.

Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
