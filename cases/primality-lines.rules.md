---
format: open-rules
title: Primality Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/letaurpn8l
case: https://sudoku-sleuth.com/cases/primality-lines
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=2
exported: e3141b19a3960858e07d10ee3a72b2e8
---

```rules
sudoku 9x9
product-cage-1: product-cage r1c2-r1c3-r2c3 product 8 distinct true
product-cage-2: product-cage r1c7-r2c7-r2c8 product 30 distinct true
product-cage-3: product-cage r4c1-r4c2-r5c2 product 24 distinct true
product-cage-4: product-cage r4c7-r4c8-r5c7 product 36 distinct true
product-cage-5: product-cage r6c6-r6c7 product 28 distinct true
product-cage-6: product-cage r6c3-r7c3 product 12 distinct true
product-cage-7: product-cage r7c4-r7c5-r8c4 product 42 distinct true
product-cage-8: product-cage r8c5-r8c6-r8c7 product 64 distinct true
product-cage-9: product-cage r5c8-r6c8 product 8 distinct true
product-cage-10: product-cage r2c5-r3c5 product 12 distinct true
product-cage-11: product-cage r4c4-r5c4 product 24 distinct true
primality-1: primality r1c1-r2c1-r3c1-r4c1-r5c1-r5c2
primality-2: primality r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
primality-3: primality r2c8-r3c8-r4c8-r5c8-r5c7
primality-4: primality r4c4-r5c4-r6c4-r6c5-r6c6-r5c6-r4c6
primality-5: primality r7c8-r7c9-r6c9
primality-6: primality r6c3-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7
primality-7: primality r6c1-r6c2-r7c2
primality-8: primality r9c1-r9c2-r9c3
```

**Sudoku, Product Cages, Primality Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Product Cages: The PRODUCT of all the digits in a cage is equal to the value shown in the upper left corner of the cage. Digits in cages cannot repeat.
- Primality Lines: Digits along a primality line alternate prime (2357) and composite (4689). Since 1 is neither prime nor composite, 1 can never appear on a primality line. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing
