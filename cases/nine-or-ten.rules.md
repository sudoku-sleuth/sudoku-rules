---
format: open-rules
title: Nine or Ten?
setter: Kennet's Dad
source: https://tinyurl.com/yntsy2ca
case: https://sudoku-sleuth.com/cases/nine-or-ten
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: d87d4ce762f07f83c0c0ad100d23f568
---

```rules
sudoku 9x9
cage r4c5-r5c5-r6c5 total 9 connected true
arrow-1: arrow r2c4-r1c4 bulb ["r3c5"]
arrow-2: arrow r8c6-r9c6 bulb ["r7c5"]
arrow-3: arrow r7c1-r7c2-r7c3 bulb ["r6c1"]
arrow-4: arrow r3c9-r3c8-r3c7 bulb ["r4c9"]
arrow-5: arrow r1c8-r1c7 bulb ["r2c9"]
arrow-6: arrow r2c2-r2c3 bulb ["r1c1"]
arrow-7: arrow r9c2-r8c1 bulb ["r9c3"]
arrow-8: arrow r8c8-r9c9 bulb ["r8c7"]
arrow-9: arrow r4c4-r4c5 bulb ["r3c3"]
arrow-10: arrow r6c6-r6c5 bulb ["r7c7"]
pair-1: pair r7c8-r7c9 sum 10
pair-2: pair r3c1-r3c2 sum 10
pair-3: pair r1c5-r2c5 sum 10
pair-4: pair r1c6-r2c6 sum 10
pair-5: pair r8c4-r9c4 sum 10
pair-6: pair r9c5-r9c6 sum 10
pair-7: pair r6c7-r6c8 sum 10
```

Normal sudoku rules apply. Digits along an arrow sum to the digit in that arrow's circle. Digits separated by an X sum to 10. Digits in a cage sum to the number given.
