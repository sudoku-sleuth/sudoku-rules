---
format: open-rules
title: Marked Trail
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r0jvreajqj
case: https://sudoku-sleuth.com/cases/marked-trail
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=4
---

```rules
sudoku 9x9
arrow-1: arrow r1c4-r2c5 bulb ["r1c3"]
arrow-2: arrow r3c7-r3c8 bulb ["r2c6"]
arrow-3: arrow r5c6-r5c5 bulb ["r4c7"]
arrow-4: arrow r3c2-r3c3 bulb ["r2c1"]
arrow-5: arrow r7c3-r7c2 bulb ["r6c4"]
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r2c5-r3c5 sum 10
pair-3: pair r1c6-r2c6 sum 10
pair-4: pair r4c7-r5c7 sum 10
pair-5: pair r4c8-r5c8 sum 10
pair-6: pair r5c4-r5c5 sum 10
pair-7: pair r7c1-r7c2 sum 10
pair-8: pair r7c3-r8c3 sum 10
pair-9: pair r8c3-r8c4 sum 10
pair-10: pair r7c5-r8c5 sum 10
pair-11: pair r7c8-r8c8 sum 10
pair-12: pair r4c2-r5c2 sum 10
pair-13: pair r1c3-r2c3 sum 5
pair-14: pair r2c5-r2c6 sum 5
pair-15: pair r3c7-r4c7 sum 5
pair-16: pair r3c8-r4c8 sum 5
pair-17: pair r5c5-r6c5 sum 5
pair-18: pair r6c8-r7c8 sum 5
pair-19: pair r7c2-r8c2 sum 5
pair-20: pair r8c4-r8c5 sum 5
pair-21: pair r8c7-r9c7 sum 5
```

**Sudoku, XV, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- XV: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
