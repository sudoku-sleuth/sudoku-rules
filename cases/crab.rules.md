---
format: open-rules
title: Crab
setter: Jobo
source: https://tinyurl.com/zebn2x2s
case: https://sudoku-sleuth.com/cases/crab
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r5c5-r5c4-r5c3-r4c2-r3c2-r2c3-r2c4
thermo-2: thermo r5c5-r5c4-r5c3-r4c2-r4c3-r3c4
thermo-3: thermo r5c5-r5c6-r5c7-r4c8-r3c8-r2c7-r2c6
thermo-4: thermo r5c5-r5c6-r5c7-r4c8-r4c7-r3c6
thermo-5: thermo r5c5-r5c4
kropki-1: kropki r8c4-r8c5 colour "white"
kropki-2: kropki r8c5-r8c6 colour "white"
kropki-3: kropki r2c5-r3c5 colour "white"
kropki-4: kropki r1c9-r2c9 colour "black"
palindrome-1: palindrome r6c3-r6c2-r7c1
palindrome-2: palindrome r6c7-r6c8-r7c9
palindrome-3: palindrome r7c4-r7c3-r8c2
palindrome-4: palindrome r7c6-r7c7-r8c8
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,2.5],[5.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[5.5,6.5],[4.5,6.5],[3.5,5.5]],"color":"#FF6666","thickness":12.8,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Dark grey lines are palindromes and must read the same in both directions.

Digits along the red line all have the same parity (odd or even).

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
