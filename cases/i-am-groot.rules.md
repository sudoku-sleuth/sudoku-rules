---
format: open-rules
title: I Am Groot
setter: Blobz
source: https://sudokupad.app/jbgodhcutc
case: https://sudoku-sleuth.com/cases/i-am-groot
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c1-r8c2-r8c3-r9c2 total 18 connected true
cage-2: cage r7c8-r8c7-r8c8-r8c9-r9c8 total 19 connected true
cage-3: cage r4c1-r5c1-r6c1 total 16 connected true
cage-4: cage r4c9-r5c9-r6c9 total 18 connected true
cage-5: cage r1c4-r1c5-r1c6 total 12 connected true
cage-6: cage r9c4-r9c5-r9c6 total 13 connected true
cage-7: cage r1c1-r1c2-r2c2 total 15 connected true
cage-8: cage r1c8-r1c9-r2c8 total 18 connected true
cage-9: cage r5c4-r5c5-r5c6 total 13 connected true
cage-10: cage r2c5-r3c4-r3c5-r3c6 total 18 connected true
cage-11: cage r7c4-r7c5-r7c6-r8c5 total 16 connected true
cage-12: cage r3c8-r4c8-r5c8 total 6 connected true
cage-13: cage r3c2-r4c2-r5c2 total 21 connected true
palindrome-1: palindrome r9c5-r8c4-r7c3-r6c2-r5c2-r4c2-r3c2-r2c3-r3c4-r2c5-r3c6-r2c7-r3c8-r4c8-r5c8-r6c8-r7c7-r8c6
palindrome-2: palindrome r8c6-r9c5
palindrome-3: palindrome r7c4-r7c5-r6c6
parity-cells r5c4-r5c6 parity "odd"
```

Normal sudoku rules apply.

Digits in cages must sum to the value given.

The small grey line is a palindrome (it reads the same from both directions). The grey loop is also a palindrome containing the digits 1-9 exactly twice each. The solver must determine where the palindrome starts and ends.

Grey circles denote odd digits.
