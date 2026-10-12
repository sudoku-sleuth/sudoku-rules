---
format: open-rules
title: Happy 23rd
setter: Blobz
source: https://sudokupad.app/6jebgjmnwl
case: https://sudoku-sleuth.com/cases/happy-23rd
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1 r2c6=9 r3c7=9 r4c8=9
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1 total 12 connected true
cage-2: cage r1c2-r1c3 total 12 connected true
cage-3: cage r2c3-r2c4 total 12 connected true
cage-4: cage r1c7-r1c8 total 12 connected true
cage-5: cage r2c9-r3c9 total 12 connected true
cage-6: cage r4c7-r5c7 total 12 connected true
cage-7: cage r5c5-r5c6 total 12 connected true
cage-8: cage r5c3-r5c4 total 12 connected true
cage-9: cage r7c1-r8c1 total 12 connected true
cage-10: cage r7c3-r8c3 total 12 connected true
cage-11: cage r7c4-r7c5 total 12 connected true
cage-12: cage r8c6-r9c6 total 12 connected true
palindrome-1: palindrome r7c4-r7c3-r7c2-r7c1-r6c2-r5c3-r4c3-r3c2-r4c1
palindrome-2: palindrome r5c6-r5c7-r6c6-r7c7-r8c7-r8c6-r7c5
pair-1: pair r1c8-r2c8 relation {"op":"sum","value":10}
pair-2: pair r5c1-r6c1 relation {"op":"sum","value":5}
pair-3: pair r5c9-r6c9 relation {"op":"sum","value":5}
parity-cells r1c5-r2c6-r3c7-r4c8 parity "odd"
```

Normal sudoku rules apply. The grey lines are palindromes that read the same in both directions. Digits in cages sum to 12; negative constraint applies -- no unmarked dominoes sum to 12. Digits separated by a V sum to 5, digits separated by X sum to 10, (not all V’s and X’s are shown).
