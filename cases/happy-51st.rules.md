---
format: open-rules
title: Happy 51st
setter: Blobz
source: https://sudokupad.app/2uo7ur2tpf
case: https://sudoku-sleuth.com/cases/happy-51st
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=1 r2c7=9 r3c8=7 r4c9=1
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 13 connected true
cage-2: cage r1c5-r2c5 total 13 connected true
cage-3: cage r3c5-r4c5 total 13 connected true
cage-4: cage r6c3-r6c4 total 13 connected true
cage-5: cage r6c7-r6c8 total 13 connected true
cage-6: cage r7c8-r8c8 total 13 connected true
cage-7: cage r6c6-r7c6 total 13 connected true
cage-8: cage r7c1-r7c2 total 13 connected true
cage-9: cage r8c2-r9c2 total 13 connected true
cage-10: cage r9c7-r9c8 total 13 connected true
thermo r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r4c6
kropki r8c1-r9c1 colour "white"
palindrome r3c4-r3c3-r3c2-r4c2-r5c2-r5c3-r6c4-r7c4-r8c3-r8c2-r8c1
```

Normal sudoku rules apply. The grey line ("5") is a palindrome that reads the same in both directions. Digits along the thermometer ("1") must increase from the bulb end. Digits in cages sum to 13; negative constraint applies -- no unmarked dominoes sum to 13. Digits separated by a white dot differ by 1 (not all dots are shown).
