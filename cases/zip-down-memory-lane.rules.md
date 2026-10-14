---
format: open-rules
title: Zip Down Memory Lane
setter: Dr Logic
source: https://sudokupad.app/1yk687wlgi
case: https://sudoku-sleuth.com/cases/zip-down-memory-lane
library: https://rules.sudoku-sleuth.com/
status: read
exported: 29e90bcf17827c5b26f02adc8c8a91a1
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r5c2-r5c3 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r2c5-r3c5 white
kropki-4: kropki r4c2-r4c3 white
kropki-5: kropki r9c1-r9c2 white
kropki-6: kropki r5c8-r5c9 black
kropki-7: kropki r2c4-r3c4 black
zipper-1: zipper r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
zipper-2: zipper r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
zipper-3: zipper r3c3-r4c4-r5c5-r6c6-r7c7
zipper-4: zipper r4c6-r3c7-r3c8-r2c8-r1c9
zipper-5: zipper r9c1-r8c2-r7c2-r7c3-r6c4
zipper-6: zipper r9c7-r9c8-r9c9-r8c9-r7c9
zipper-7: zipper r4c8-r5c7-r6c8
zipper-8: zipper r1c1-r2c1-r3c1-r2c2-r3c2
zipper-9: zipper r5c1-r6c1-r6c2
zipper-10: zipper r8c6-r9c5-r9c6
```

Normal Sudoku Rules
Normal zipper rules. - On lavender lines, digits an equal distance from the center must sum to the digit in the middle of the line. Zipper lines do not branch. (For clarity there is a line containing R4C8,R5C7,R6C8) Lines passing through the centre are all straight.
Kropki - Black dots separate digits in 1:2 ratio+ White dot separates consecutive digits (not all are given)
Anti-Knight - Cells separated by a knights move (chess) cannot contain the same digit.
