---
format: open-rules
title: Hugs and Kisses
setter: Blobz
source: https://sudokupad.app/blobz/hugs-and-kisses
case: https://sudoku-sleuth.com/cases/hugs-and-kisses
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=7
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 colour "white"
kropki-2: kropki r2c5-r2c6 colour "white"
kropki-3: kropki r2c7-r2c8 colour "white"
kropki-4: kropki r2c1-r2c2 colour "white"
kropki-5: kropki r8c2-r8c3 colour "white"
kropki-6: kropki r8c4-r8c5 colour "white"
kropki-7: kropki r8c6-r8c7 colour "white"
kropki-8: kropki r8c8-r8c9 colour "white"
kropki-9: kropki r3c2-r4c2 colour "white"
kropki-10: kropki r5c2-r6c2 colour "white"
kropki-11: kropki r5c8-r6c8 colour "white"
kropki-12: kropki r2c9-r3c9 colour "white"
kropki-13: kropki r6c1-r7c1 colour "white"
kropki-14: kropki r9c3-r9c4 colour "white"
kropki-15: kropki r7c5-r7c6 colour "white"
pair-1: pair r2c2-r2c3 relation {"op":"sum","value":10}
pair-2: pair r2c4-r2c5 relation {"op":"sum","value":10}
pair-3: pair r2c6-r2c7 relation {"op":"sum","value":10}
pair-4: pair r2c8-r2c9 relation {"op":"sum","value":10}
pair-5: pair r8c1-r8c2 relation {"op":"sum","value":10}
pair-6: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-7: pair r8c5-r8c6 relation {"op":"sum","value":10}
pair-8: pair r8c7-r8c8 relation {"op":"sum","value":10}
pair-9: pair r4c2-r5c2 relation {"op":"sum","value":10}
pair-10: pair r6c8-r7c8 relation {"op":"sum","value":10}
pair-11: pair r4c8-r5c8 relation {"op":"sum","value":10}
pair-12: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-13: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-14: pair r6c6-r6c7 relation {"op":"sum","value":10}
pair-15: pair r5c6-r6c6 relation {"op":"sum","value":10}
```

Normal sudoku rules apply. 

Digits separated by a hug (o) are consecutive. Digits separated by a kiss (x) sum to 10.  Not all hugs and kisses are shown.
