---
format: open-rules
title: Splat!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1rizlkqt63
case: https://sudoku-sleuth.com/cases/splat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r3c4 colour "black"
kropki-2: kropki r1c7-r1c8 colour "black"
kropki-3: kropki r6c7-r7c7 colour "black"
kropki-4: kropki r6c1-r6c2 colour "black"
kropki-5: kropki r4c2-r5c2 colour "black"
kropki-6: kropki r7c3-r7c4 colour "black"
kropki-7: kropki r5c6-r6c6 colour "black"
kropki-8: kropki r2c8-r2c9 colour "black"
kropki-9: kropki r8c1-r8c2 colour "black"
kropki-10: kropki r8c3-r8c4 colour "black"
kropki-11: kropki r8c9-r9c9 colour "black"
kropki-12: kropki r3c4-r3c5 colour "black"
kropki-13: kropki r3c8-r3c9 colour "black"
kropki-14: kropki r1c6-r2c6 colour "black"
kropki-15: kropki r3c9-r4c9 colour "black"
arrow-1: arrow r4c3-r3c3 bulb ["r5c3"]
arrow-2: arrow r6c3-r7c3 bulb ["r5c3"]
arrow-3: arrow r6c4-r7c4 bulb ["r5c3"]
arrow-4: arrow r4c4-r3c4 bulb ["r5c3"]
arrow-5: arrow r6c2-r7c2 bulb ["r5c3"]
arrow-6: arrow r4c2-r3c2 bulb ["r5c3"]
arrow-7: arrow r5c2-r5c1 bulb ["r5c3"]
arrow-8: arrow r5c4-r5c5 bulb ["r5c3"]
arrow-9: arrow r2c7-r1c7 bulb ["r3c7"]
arrow-10: arrow r2c8-r1c8 bulb ["r3c7"]
arrow-11: arrow r2c6-r1c6 bulb ["r3c7"]
arrow-12: arrow r4c6-r5c6 bulb ["r3c7"]
arrow-13: arrow r4c8-r5c8 bulb ["r3c7"]
arrow-14: arrow r4c7-r5c7 bulb ["r3c7"]
arrow-15: arrow r3c6-r3c5 bulb ["r3c7"]
arrow-16: arrow r3c8-r3c9 bulb ["r3c7"]
arrow-17: arrow r7c6-r6c6 bulb ["r8c7"]
arrow-18: arrow r9c6 bulb ["r8c7"]
arrow-19: arrow r9c8-r9c9 bulb ["r8c7"]
negative relations [{"op":"ratio","value":2}] except [["r3c3","r3c4"],["r1c7","r1c8"],["r6c7","r7c7"],["r6c1","r6c2"],["r4c2","r5c2"],["r7c3","r7c4"],["r5c6","r6c6"],["r2c8","r2c9"],["r8c1","r8c2"],["r8c3","r8c4"],["r8c9","r9c9"],["r3c4","r3c5"],["r3c8","r3c9"],["r1c6","r2c6"],["r3c9","r4c9"]]
```

**Normal Sudoku, Arrows, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Ratio Dots: Cells separated by a black dot are in a 2:1 ratio.


For an easier version, assume that all possible ratio dots are given.
