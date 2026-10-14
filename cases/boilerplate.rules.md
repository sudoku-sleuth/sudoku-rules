---
format: open-rules
title: Boilerplate
setter: Blobz
source: https://sudokupad.app/blobz/boilerplate
case: https://sudoku-sleuth.com/cases/boilerplate
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7958a82badc23726073a0a67298fdaf4
---

```rules
sudoku 9x9
cage-1: cage r5c7-r5c8-r6c7-r6c8-r7c7-r7c8 total 28 connected true
cage-2: cage r2c4-r2c5-r3c4-r3c5-r4c4-r4c5 total 29 connected true
cage-3: cage r7c3-r7c4-r7c5-r8c3-r8c4-r8c5 total 36 connected true
cage-4: cage r1c6-r1c7-r1c8-r1c9-r2c6-r2c7-r2c8-r2c9 total 41 connected true
cage-5: cage r1c2-r1c3-r2c2-r2c3-r3c2-r3c3 total 29 connected true
cage-6: cage r3c6-r3c7-r4c6-r4c7 total 20 connected true
kropki-1: kropki r1c1-r1c2 black
kropki-2: kropki r3c3-r3c4 black
kropki-3: kropki r4c3-r4c4 black
kropki-4: kropki r2c1-r2c2 black
kropki-5: kropki r6c6-r6c7 black
kropki-6: kropki r7c6-r7c7 black
kropki-7: kropki r8c8-r8c9 black
kropki-8: kropki r9c8-r9c9 black
kropki-9: kropki r4c5-r5c5 black
kropki-10: kropki r5c5-r6c5 black
kropki-11: kropki r5c4-r5c5 white
kropki-12: kropki r5c5-r5c6 white
kropki-13: kropki r3c6-r4c6 white
kropki-14: kropki r3c7-r4c7 white
kropki-15: kropki r1c8-r2c8 white
kropki-16: kropki r1c9-r2c9 white
kropki-17: kropki r6c4-r7c4 white
kropki-18: kropki r6c3-r7c3 white
kropki-19: kropki r8c2-r9c2 white
kropki-20: kropki r8c1-r9c1 white
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the value shown.

Black dots separate two digits where one is double the other. White dots separate consecutive digits. NOT all such dots are shown.
