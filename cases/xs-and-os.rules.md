---
format: open-rules
title: Xs and Os
setter: Tingo
source: https://tinyurl.com/3cnh6t4f
case: https://sudoku-sleuth.com/cases/xs-and-os
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 06158409a86a1f0d84055db7a6ff2214
---

```rules
sudoku 9x9
thermo-1: thermo r6c8-r5c8-r4c8-r3c7-r3c6
thermo-2: thermo r8c7-r9c8-r8c8-r7c8
kropki-1: kropki r2c6-r3c6 white
kropki-2: kropki r1c6-r2c6 white
kropki-3: kropki r4c1-r5c1 white
kropki-4: kropki r5c3-r6c3 white
kropki-5: kropki r5c4-r6c4 white
kropki-6: kropki r5c5-r6c5 white
kropki-7: kropki r5c6-r6c6 white
kropki-8: kropki r5c7-r6c7 white
kropki-9: kropki r4c7-r4c8 white
kropki-10: kropki r4c4-r4c5 white
kropki-11: kropki r3c2-r3c3 white
palindrome-1: palindrome r1c4-r2c3-r3c2-r4c1-r5c1-r6c1
palindrome-2: palindrome r6c9-r5c9-r4c9-r3c8-r2c7-r2c6
renban r7c1-r7c2-r8c2-r8c3-r9c3
pair-1: pair r6c1-r7c1 sum 10
pair-2: pair r6c3-r7c3 sum 10
pair-3: pair r6c4-r7c4 sum 10
pair-4: pair r6c5-r7c5 sum 10
pair-5: pair r6c6-r7c6 sum 10
pair-6: pair r6c7-r7c7 sum 10
pair-7: pair r6c8-r7c8 sum 10
pair-8: pair r7c9-r8c9 sum 10
pair-9: pair r8c6-r8c7 sum 10
pair-10: pair r9c5-r9c6 sum 10
pair-11: pair r9c3-r9c4 sum 10
parity-cells r8c8 parity "odd"
```

```drawing
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FFFF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Grey lines are palindromes. The sequence of digits along a palindrome must be read the same forwards and backwards.
Pink lines are Renban lines. Digits along the line are consecutive in any order.
Digits along thermometers must strictly increase from the bulb end.
Cells joined by white dots are consecutive in value. Not all dots are given.
Cells joined by X sum to 10. Not all Xs are given.
The digit in the yellow circle is odd.
