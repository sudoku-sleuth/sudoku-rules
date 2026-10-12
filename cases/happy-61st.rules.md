---
format: open-rules
title: Happy 61st
setter: Blobz
source: https://sudokupad.app/blobz/happy-61st
case: https://sudoku-sleuth.com/cases/happy-61st
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c1=1 r7c2=9 r8c3=6 r9c4=1
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2 total 13 connected true
cage-2: cage r1c4-r2c4 total 13 connected true
cage-3: cage r1c7-r1c8 total 13 connected true
cage-4: cage r2c7-r2c8 total 13 connected true
cage-5: cage r4c8-r5c8 total 13 connected true
cage-6: cage r5c9-r6c9 total 13 connected true
cage-7: cage r9c6-r9c7 total 13 connected true
cage-8: cage r8c4-r8c5 total 13 connected true
thermo r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r3c6
kropki-1: kropki r1c5-r1c6 colour "white"
kropki-2: kropki r4c3-r4c4 colour "white"
palindrome r2c4-r3c3-r4c2-r5c2-r6c2-r7c3-r7c4-r6c5-r5c4-r5c3
```

Normal sudoku rules apply.

The grey line ("6") is a palindrome that reads the same in both directions.

Digits along the thermometer ("1") must increase from the bulb end.

Digits in cages sum to 13; negative constraint applies -- no unmarked dominoes sum to 13.

Digits separated by a white dot differ by 1; not all such dots are shown.
