---
format: open-rules
title: Professor X-Sums
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/professor-x-sums
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2-r3c3 total 9 connected true
cage-2: cage r2c7-r2c8-r3c7 total 8 connected true
cage-3: cage r7c3-r8c2-r8c3 total 8 connected true
cage-4: cage r7c7-r7c8-r8c8 total 9 connected true
kropki-1: kropki r5c2-r6c2 colour "white"
kropki-2: kropki r4c2-r4c3 colour "black"
arrow-1: arrow r1c4-r1c5-r1c6 bulb ["r2c3"]
arrow-2: arrow r4c9-r5c9-r6c9 bulb ["r3c8"]
arrow-3: arrow r9c6-r9c5-r9c4 bulb ["r8c7"]
arrow-4: arrow r6c1-r5c1-r4c1 bulb ["r7c2"]
palindrome-1: palindrome r4c3-r5c4
palindrome-2: palindrome r5c3-r4c4
palindrome-3: palindrome r4c6-r5c7
palindrome-4: palindrome r5c6-r4c7
palindrome-5: palindrome r7c5-r6c6
palindrome-6: palindrome r6c5-r7c6
palindrome-7: palindrome r7c3-r6c4
palindrome-8: palindrome r3c3-r2c4
palindrome-9: palindrome r4c1-r3c2
palindrome-10: palindrome r6c9-r7c8
pair-1: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-2: pair r4c5-r4c6 relation {"op":"sum","value":10}
pair-3: pair r5c6-r6c6 relation {"op":"sum","value":10}
pair-4: pair r6c4-r6c5 relation {"op":"sum","value":10}
parity-cells-1: parity-cells r1c1-r7c5-r3c5 parity "odd"
parity-cells-2: parity-cells r8c5 parity "even"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal sudoku rules apply.
Digits in a grey circle must be odd.
Cells seperated by a black dot must be in a 1:2 ratio
Cells seperated by a white dot are consecutive
Cells along a grey line form a palindrome.
Cells along an arrow must sum to the digit in the circle at the end.
Cells in a cage must sum to the clue in the top left of the cage, with no repeats.
Cells on a grey square must be even.
