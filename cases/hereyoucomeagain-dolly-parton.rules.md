---
format: open-rules
title: HereYouComeAgain Dolly Parton
setter: Will Power
source: https://sudokupad.app/77351mtghh
case: https://sudoku-sleuth.com/cases/hereyoucomeagain-dolly-parton
library: https://rules.sudoku-sleuth.com/
status: read
exported: 38d092952ae36b41fd89cf717f135ae1
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r2c9 total 11 connected true
cage-2: cage r5c1-r5c2-r5c3 total 10 connected true
kropki-1: kropki r2c3-r2c4 white
kropki-2: kropki r2c4-r2c5 white
kropki-3: kropki r5c4-r5c5 white
kropki-4: kropki r5c5-r5c6 white
kropki-5: kropki r8c6-r8c7 white
kropki-6: kropki r8c7-r8c8 white
kropki-7: kropki r7c1-r8c1 white
kropki-8: kropki r8c1-r9c1 white
kropki-9: kropki r6c8-r7c8 white
kropki-10: kropki r1c6-r1c7 white
pair-1: pair r8c6-r9c6 sum 10
pair-2: pair r8c7-r9c7 sum 10
pair-3: pair r8c8-r9c8 sum 10
pair-4: pair r8c9-r9c9 sum 10
pair-5: pair r5c4-r6c4 sum 10
pair-6: pair r5c5-r6c5 sum 10
pair-7: pair r5c6-r6c6 sum 10
pair-8: pair r5c7-r6c7 sum 10
pair-9: pair r2c3-r3c3 sum 10
pair-10: pair r2c4-r3c4 sum 10
pair-11: pair r2c5-r3c5 sum 10
pair-12: pair r2c6-r3c6 sum 10
pair-13: pair r9c6-r9c7 sum 5
pair-14: pair r9c8-r9c9 sum 5
pair-15: pair r6c4-r6c5 sum 5
pair-16: pair r6c6-r6c7 sum 5
pair-17: pair r3c3-r3c4 sum 5
pair-18: pair r3c5-r3c6 sum 5
```

'All you gotta do, is smile that smile...' Dolly Parton, 1977. Normal Sudoku rules apply. XV PAIRS- Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all X, V and dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
