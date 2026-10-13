---
format: open-rules
title: Happy 58th
setter: Blobz
source: https://sudokupad.app/blobz/happy-58th
case: https://sudoku-sleuth.com/cases/happy-58th
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1 r1c6=9 r1c7=6 r1c8=4
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 8 connected true
cage-2: cage r7c2-r8c2 total 8 connected true
cage-3: cage r9c2-r9c3 total 8 connected true
cage-4: cage r7c4-r8c4 total 8 connected true
cage-5: cage r8c6-r9c6 total 8 connected true
cage-6: cage r6c8-r7c8 total 8 connected true
cage-7: cage r5c7-r5c8 total 8 connected true
cage-8: cage r4c5-r5c5 total 8 connected true
cage-9: cage r2c6-r3c6 total 8 connected true
cage-10: cage r3c8-r3c9 total 8 connected true
palindrome-1: palindrome r3c4-r3c3-r3c2-r4c2-r5c2-r5c3-r6c4-r7c4-r8c3-r8c2-r8c1
palindrome-2: palindrome r5c6-r4c5-r3c6-r3c7-r4c8-r5c7-r6c6-r7c5-r8c6-r8c7-r7c8-r6c7
pair-1: pair r9c3-r9c4 sum 5
pair-2: pair r9c5-r9c6 sum 5
```

Normal sudoku rules apply.

Grey lines are palindromes that read the same in both directions.

Digits in cages sum to 8; negative constraint applies -- no unmarked dominos sum to 8.

Digits separated by a V sum to 5; not all such V's are shown.
