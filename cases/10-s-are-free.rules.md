---
format: open-rules
title: 10's are Free
setter: Meggen033
source: https://sudokupad.app/v8727nbq5t
case: https://sudoku-sleuth.com/cases/10-s-are-free
library: https://rules.sudoku-sleuth.com/
status: read
exported: fc3a9bffdc8e46eb405c782e3cfb8268
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 10 connected true
cage-2: cage r3c6-r3c7-r4c6-r4c7 total 10 connected true
cage-3: cage r6c3-r6c4-r7c3-r7c4 total 10 connected true
cage-4: cage r6c6-r6c7-r7c6-r7c7 total 10 connected true
kropki-1: kropki r9c3-r9c4 white
kropki-2: kropki r8c4-r9c4 white
kropki-3: kropki r1c2-r1c3 white
pair-1: pair r2c3-r3c3 sum 10
pair-2: pair r3c7-r3c8 sum 10
pair-3: pair r7c7-r8c7 sum 10
pair-4: pair r7c2-r7c3 sum 10
pair-5: pair r8c1-r9c1 sum 10
pair-6: pair r1c1-r1c2 sum 10
pair-7: pair r1c9-r2c9 sum 10
pair-8: pair r9c8-r9c9 sum 10
pair-9: pair r8c4-r8c5 sum 10
pair-10: pair r4c2-r5c2 sum 10
pair-11: pair r2c5-r2c6 sum 10
pair-12: pair r5c8-r6c8 sum 10
pair-13: pair r5c3-r6c3 sum 10
pair-14: pair r7c5-r7c6 sum 10
pair-15: pair r4c7-r5c7 sum 10
pair-16: pair r3c4-r3c5 sum 10
pair-17: pair r1c4-r1c5 sum 10
pair-18: pair r5c1-r6c1 sum 10
```

Normal sudoku rules apply.  Digits in a cage sum to the digit in that cage's top left corner.  Digits cannot repeat within a cage.  Digits separated by an X must sum to 10.  Digits separated by a white dot must be consecutive.
