---
format: open-rules
title: Cloned Magic 7
setter: Blobz
source: https://sudokupad.app/blobz/cloned-magic-7
case: https://sudoku-sleuth.com/cases/cloned-magic-7
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c9=7
---

```rules
sudoku 9x9
cage-1: cage r2c8-r3c8 total 7 connected true
cage-2: cage r6c4-r7c4 total 7 connected true
cage-3: cage r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4 connected true
cage-4: cage r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8 connected true
palindrome-1: palindrome r4c2-r4c1-r5c2-r6c2-r7c1-r7c2-r6c3-r5c4-r4c5-r3c5-r3c6-r2c7-r3c7-r2c8
palindrome-2: palindrome r8c9-r7c9-r6c9-r5c9-r4c9-r4c8-r4c7-r5c6-r6c5-r6c4-r7c4-r8c5-r9c5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f7ffa4ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f7ffa4ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f7ffa4ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f7ffa4ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":3.02,"height":3.02,"rounded":false,"fill":"#e0e0ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":3.02,"height":3.02,"rounded":false,"fill":"#e0e0ffff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal sudoku rules apply.

The shaded 3x3 regions are cloned magic squares (comprising the digits 1 to 9 once each) where each row, column, and diagonal (of 3 digits) sum to the same number.

Digits in the cages (also cloned) sum to the clue in the top left corner.

Grey lines are palindromes; they read the same in both directions.
