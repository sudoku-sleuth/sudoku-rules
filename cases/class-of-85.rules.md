---
format: open-rules
title: Class of '85
setter: Blobz
source: https://sudokupad.app/63mjzu3sqr
case: https://sudoku-sleuth.com/cases/class-of-85
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=8 r1c7=5
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5 total 8 connected true
cage-2: cage r2c2-r3c2 total 8 connected true
cage-3: cage r4c3-r5c3 total 8 connected true
cage-4: cage r4c4-r5c4 total 8 connected true
cage-5: cage r4c5-r4c6 total 8 connected true
cage-6: cage r3c5-r3c6 total 8 connected true
cage-7: cage r2c8-r3c8 total 8 connected true
cage-8: cage r5c8-r6c8 total 8 connected true
cage-9: cage r7c6-r7c7 total 8 connected true
cage-10: cage r8c6-r8c7 total 8 connected true
cage-11: cage r8c4-r8c5 total 8 connected true
cage-12: cage r8c1-r9c1 total 8 connected true
cage-13: cage r6c2-r7c2 total 8 connected true
cage-14: cage r6c3-r7c3 total 8 connected true
cage-15: cage r6c4-r6c5 total 8 connected true
palindrome-1: palindrome r6c4-r7c5-r8c4-r8c3-r7c2-r6c3-r5c4-r4c5-r3c4-r3c3-r4c2-r5c3
palindrome-2: palindrome r3c8-r3c7-r3c6-r4c6-r5c7-r5c8-r6c9-r7c8-r7c7
pair-1: pair r6c4-r7c4 sum 5
pair-2: pair r7c2-r7c3 sum 5
pair-3: pair r3c9-r4c9 sum 5
```

Normal sudoku rules apply.

Grey lines are palindromes and read the same in both directions.

Digits in cages must sum to the small clue in the top left corner.

Digits separated by a V must sum to 5 (not all such V's are necessarily shown).
