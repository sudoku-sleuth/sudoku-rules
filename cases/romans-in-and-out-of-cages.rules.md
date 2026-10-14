---
format: open-rules
title: Romans In and Out of Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fw9mrlhldu
case: https://sudoku-sleuth.com/cases/romans-in-and-out-of-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 11b0a63c705bfec22e6540ee35adc0c0
---

```rules
sudoku 9x9
cage-1: cage r6c2-r7c2 total 5 connected true
cage-2: cage r3c2-r4c2 total 6 connected true
cage-3: cage r6c8-r7c8 total 10 connected true
cage-4: cage r3c8-r4c8 total 11 connected true
cage-5: cage r6c4-r7c3-r7c4 total 10 connected true
cage-6: cage r6c6-r7c6-r7c7 total 18 connected true
cage-7: cage r3c3-r3c4-r4c4 total 9 connected true
cage-8: cage r3c6-r3c7-r4c6 total 20 connected true
pair-1: pair r4c3-r4c4 sum 10
pair-2: pair r6c3-r6c4 sum 10
pair-3: pair r6c7-r6c8 sum 10
pair-4: pair r4c7-r4c8 sum 10
pair-5: pair r7c2-r8c2 sum 10
pair-6: pair r2c8-r3c8 sum 10
pair-7: pair r7c4-r8c4 sum 10
pair-8: pair r7c6-r8c6 sum 10
pair-9: pair r1c2-r1c3 sum 10
pair-10: pair r9c1-r9c2 sum 10
pair-11: pair r6c2-r6c3 sum 5
pair-12: pair r4c2-r4c3 sum 5
pair-13: pair r4c6-r4c7 sum 5
pair-14: pair r6c6-r6c7 sum 5
pair-15: pair r7c8-r8c8 sum 5
pair-16: pair r2c4-r3c4 sum 5
pair-17: pair r9c8-r9c9 sum 5
```

**Sudoku, XV, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- XV: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
- Cages: Within a cage, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
