---
format: open-rules
title: Eighteen Arrows [Turn 4 TSL2]
setter: sujoyku
source: https://sudokupad.app/y8hrwtj060
case: https://sudoku-sleuth.com/cases/eighteen-arrows-turn-4-tsl2
library: https://rules.sudoku-sleuth.com/
status: read
exported: 41cc5c79c6c4ef6e98d087c783e9e4b5
---

```rules
sudoku 9x9
arrow-1: arrow r6c3 bulb ["r7c2"]
arrow-2: arrow r3c1-r2c1-r1c1 bulb ["r4c1"]
arrow-3: arrow r7c5-r7c4-r7c3 bulb ["r7c6"]
arrow-4: arrow r6c7-r6c8-r6c9 bulb ["r6c6"]
arrow-5: arrow r9c4-r8c3 bulb ["r9c5"]
arrow-6: arrow r6c2-r5c2 bulb ["r7c1"]
arrow-7: arrow r8c7-r7c8 bulb ["r9c7"]
arrow-8: arrow r9c9-r8c9 bulb ["r9c8"]
arrow-9: arrow r5c4-r4c5 bulb ["r4c3"]
arrow-10: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-11: arrow r5c6-r4c7 bulb ["r6c5"]
arrow-12: arrow r4c8 bulb ["r3c9"]
arrow-13: arrow r2c9-r1c8 bulb ["r3c8"]
arrow-14: arrow r2c6-r3c6 bulb ["r2c7"]
arrow-15: arrow r2c4-r2c5 bulb ["r1c4"]
arrow-16: arrow r1c2-r2c2 bulb ["r1c3"]
arrow-17: arrow r3c3-r4c2 bulb ["r3c4"]
arrow-18: arrow r9c2-r9c3 bulb ["r8c2"]
```

- Normal Sudoku rules apply, i.e. place the digits from 1 to 9 once in each Row, Column, and 3x3 region.

- Arrows: Digits on an arrow must sum to the digit in the circle from which it emerges.

- Counting Arrow Circles: A digit in an arrow’s circle indicates exactly how many arrow circles contain this digit.
