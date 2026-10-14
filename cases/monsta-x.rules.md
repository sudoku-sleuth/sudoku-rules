---
format: open-rules
title: MONSTA X
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uy4gajk1k2
case: https://sudoku-sleuth.com/cases/monsta-x
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1
exported: a60c0faa75eba6786bbc170ca15ea771
---

```rules
sudoku 9x9
whispers-1: whispers r3c2-r2c2-r1c2-r2c3-r1c4-r2c4-r3c4 gap 4
whispers-2: whispers r1c6-r1c7-r1c8-r2c8-r3c8-r3c7-r3c6-r2c6 gap 4 loop true
whispers-3: whispers r6c2-r5c2-r4c2-r5c3-r6c4-r5c4-r4c4 gap 4
whispers-4: whispers r4c8-r4c7-r4c6-r5c6-r5c7-r5c8-r6c8-r6c7-r6c6 gap 4
whispers-5: whispers r7c2-r7c3-r7c4 gap 4
whispers-6: whispers r9c3-r8c3-r7c3 gap 4
whispers-7: whispers r9c6-r8c6-r7c6-r7c7-r7c8-r8c8-r9c8 gap 4
whispers-8: whispers r8c8-r8c7-r8c6 gap 4
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r1c3-r1c4 sum 10
pair-3: pair r1c8-r1c9 sum 10
pair-4: pair r2c4-r3c4 sum 10
pair-5: pair r2c8-r3c8 sum 10
pair-6: pair r4c2-r4c3 sum 10
pair-7: pair r6c1-r6c2 sum 10
pair-8: pair r7c8-r8c8 sum 10
pair-9: pair r7c6-r8c6 sum 10
pair-10: pair r2c5-r3c5 sum 10
pair-11: pair r3c9-r4c9 sum 10
pair-12: pair r5c5-r6c5 sum 10
pair-13: pair r7c5-r8c5 sum 10
pair-14: pair r5c7-r6c7 sum 10
pair-15: pair r7c7-r8c7 sum 10
pair-16: pair r5c8-r6c8 sum 10
pair-17: pair r9c4-r9c5 sum 10
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X pairs: Digits in cells connected by a X sum to 10. 
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
