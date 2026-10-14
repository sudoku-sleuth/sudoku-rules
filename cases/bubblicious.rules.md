---
format: open-rules
title: Bubblicious
setter: Blobz
source: https://sudokupad.app/blobz/bubblicious
case: https://sudoku-sleuth.com/cases/bubblicious
library: https://rules.sudoku-sleuth.com/
status: read
exported: c84474bd4990ba1eb695cccaf4a18757
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r3c5 white
kropki-2: kropki r5c4-r6c4 white
kropki-3: kropki r9c2-r9c3 white
kropki-4: kropki r2c6-r2c7 white
kropki-5: kropki r5c8-r5c9 white
kropki-6: kropki r1c3-r1c4 white
kropki-7: kropki r4c7-r4c8 white
kropki-8: kropki r1c2-r2c2 white
kropki-9: kropki r2c1-r2c2 white
kropki-10: kropki r8c3-r8c4 white
kropki-11: kropki r1c1-r1c2 white
kropki-12: kropki r2c8-r2c9 white
kropki-13: kropki r4c1-r5c1 white
kropki-14: kropki r2c3-r2c4 white
kropki-15: kropki r2c8-r3c8 white
kropki-16: kropki r8c7-r8c8 white
kropki-17: kropki r6c8-r7c8 white
kropki-18: kropki r7c8-r7c9 white
diagonal direction "anti"
counting-circles r1c6-r1c9-r2c2-r3c3-r3c4-r3c5-r3c6-r3c7-r4c3-r4c7-r4c9-r5c3-r5c7-r6c3-r6c7-r7c3-r7c4-r7c5-r7c6-r7c7-r8c8
```

Normal sudoku rules apply.

A digit in a circle indicates how many circles contain that digit.

Digits separated by a white dot are consecutive.

Digits do not repeat along the marked diagonal.
