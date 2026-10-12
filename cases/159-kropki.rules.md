---
format: open-rules
title: 159 Kropki
setter: Blobz
source: https://sudokupad.app/16ptm7m18i
case: https://sudoku-sleuth.com/cases/159-kropki
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 colour "white"
kropki-2: kropki r7c1-r8c1 colour "white"
kropki-3: kropki r7c9-r8c9 colour "white"
kropki-4: kropki r2c9-r3c9 colour "white"
kropki-5: kropki r1c7-r1c8 colour "white"
kropki-6: kropki r1c5-r2c5 colour "white"
kropki-7: kropki r6c5-r7c5 colour "white"
kropki-8: kropki r8c4-r9c4 colour "white"
kropki-9: kropki r9c7-r9c8 colour "white"
kropki-10: kropki r5c2-r5c3 colour "white"
kropki-11: kropki r5c8-r5c9 colour "white"
kropki-12: kropki r7c1-r7c2 colour "black"
kropki-13: kropki r3c1-r3c2 colour "black"
kropki-14: kropki r3c8-r3c9 colour "black"
kropki-15: kropki r7c8-r7c9 colour "black"
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

Normal sudoku rules apply.

159: Digits in column 1 indicate the column in which the digit 1 appears in that row (e.g. if r4c1 is a 6, r4c6 is a 1). The same applies to columns 5 and 9, with the digits 5 and 9 respectively.

Kropki: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 2:1 ratio (one is double the other). Not all such dots are shown.
