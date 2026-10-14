---
format: open-rules
title: Agincourt
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ax2vuap0kj
case: https://sudoku-sleuth.com/cases/agincourt
library: https://rules.sudoku-sleuth.com/
status: read
exported: c1f9f62584954009f9d8ceebb539a059
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r5c6-r6c6 black
kropki-2: kropki r3c5-r3c6 black
kropki-3: kropki r5c4-r6c4 black
kropki-4: kropki r5c3-r5c4 black
kropki-5: kropki r2c2-r3c2 black
kropki-6: kropki r4c3-r5c3 black
kropki-7: kropki r7c6-r7c7 black
kropki-8: kropki r7c7-r8c7 black
kropki-9: kropki r7c1-r7c2 black
kropki-10: kropki r8c1-r9c1 black
kropki-11: kropki r1c5-r1c6 black
kropki-12: kropki r2c8-r3c8 black
kropki-13: kropki r4c7-r5c7 black
kropki-14: kropki r5c8-r5c9 black
kropki-15: kropki r9c4-r9c5 black
kropki-16: kropki r7c3-r7c4 black
kropki-17: kropki r7c1-r8c1 black
arrow-1: arrow r3c2-r4c3-r5c4 bulb ["r2c1"]
arrow-2: arrow r4c2-r5c3-r6c4 bulb ["r3c1"]
arrow-3: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-4: arrow r8c7-r7c6-r6c5 bulb ["r9c8"]
arrow-5: arrow r7c7-r6c6 bulb ["r8c8"]
arrow-6: arrow r6c7 bulb ["r7c8"]
arrow-7: arrow r3c8 bulb ["r4c9"]
arrow-8: arrow r7c3 bulb ["r6c2"]
arrow-9: arrow r3c7 bulb ["r2c6"]
arrow-10: arrow r3c5-r4c6 bulb ["r2c4"]
arrow-11: arrow r4c5 bulb ["r3c4"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Antiknight: Digits a chess knight's move apart must be different.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
