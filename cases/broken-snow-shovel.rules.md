---
format: open-rules
title: Broken Snow Shovel
setter: Blobz
source: https://sudokupad.app/gc6h0jr16t
case: https://sudoku-sleuth.com/cases/broken-snow-shovel
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9a8acafa7666eeaf0eec1477f828d459
---

```rules
sudoku 9x9
cage r9c5-r9c6 total 16 connected true
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r1c2-r1c3 white
kropki-3: kropki r1c4-r2c4 white
kropki-4: kropki r5c8-r6c8 white
kropki-5: kropki r6c8-r6c9 white
kropki-6: kropki r8c6-r9c6 white
kropki-7: kropki r4c1-r4c2 white
kropki-8: kropki r2c4-r2c5 white
kropki-9: kropki r2c2-r3c2 white
kropki-10: kropki r1c6-r1c7 white
kropki-11: kropki r7c8-r8c8 white
kropki-12: kropki r2c2-r2c3 white
kropki-13: kropki r3c1-r4c1 white
kropki-14: kropki r7c8-r7c9 white
kropki-15: kropki r2c7-r2c8 black
kropki-16: kropki r2c8-r3c8 black
whispers-1: whispers r5c4-r4c4-r3c5-r3c6-r4c7-r5c7-r6c6-r6c5 gap 5
whispers-2: whispers r3c6-r2c6-r1c7-r1c8-r2c9-r3c9-r4c8-r4c7 gap 5
palindrome-1: palindrome r4c4-r3c3-r2c3
palindrome-2: palindrome r6c6-r7c7-r7c8
palindrome-3: palindrome r7c9-r8c8-r9c7-r9c6-r9c5
region-sum r6c1-r5c2-r5c3-r5c4-r6c5-r7c5-r8c5-r9c4-r9c3-r9c2-r8c1-r7c1 segments [["r6c1","r5c2","r5c3"],["r5c4","r6c5"],["r7c5","r8c5","r9c4"],["r9c3","r9c2","r8c1","r7c1"]]
parity-cells r3c7-r8c2-r7c3-r6c4 parity "odd"
```

Normal sudoku rules apply.

Grey lines are palindromes, they read the same in both directions.

Adjacent digits along green lines differ by at least 5.

Digits along blue lines have an equal sum N within each box the line passes through.

Digits in cages sum to the clue in the top left corner.

Digits separated by a white dot are consecutive. Digits separated by a black dot have a 2:1 ratio. Not all such dots are shown.

Digits in grey circles are odd.
