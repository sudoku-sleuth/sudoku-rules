---
format: open-rules
title: Happy 49th
setter: Blobz
source: ""
case: https://sudoku-sleuth.com/cases/happy-49th
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1 r1c6=9 r1c7=7 r1c8=3
exported: bde5aeb2c8adf9ca8584148eb23ae72d
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6 total 7 connected true
cage-2: cage r2c7-r3c7 total 7 connected true
cage-3: cage r2c8-r3c8 total 7 connected true
cage-4: cage r4c7-r5c7 total 7 connected true
cage-5: cage r4c6-r5c6 total 7 connected true
cage-6: cage r4c4-r5c4 total 7 connected true
cage-7: cage r6c2-r6c3 total 7 connected true
cage-8: cage r8c3-r9c3 total 7 connected true
cage-9: cage r9c5-r9c6 total 7 connected true
thermo-1: thermo r8c3-r7c3-r6c3-r5c3-r4c3-r3c3
thermo-2: thermo r8c3-r7c3-r6c3-r6c2-r6c1-r5c1-r4c1
kropki r8c2-r9c2 white
palindrome r8c6-r7c7-r6c8-r5c8-r4c8-r3c7-r3c6-r4c5-r5c6-r5c7
```

Normal sudoku rules apply. Digits along the thermometer ("4") must increase from the bulb end. The grey line ("9") is a palindrome that reads the same in both directions. Digits in cages sum to 7; negative constraint applies -- no unmarked dominoes sum to 7. Digits separated by a white dot differ by 1 (not all dots are shown).
