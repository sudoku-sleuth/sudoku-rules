---
format: open-rules
title: Sunburn
setter: Jobo
source: https://tinyurl.com/yc2re8wp
case: https://sudoku-sleuth.com/cases/sunburn
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a17cd2182c7c7af6e280d81a200f04e6
---

```rules
sudoku 9x9
thermo-1: thermo r1c9-r2c8-r3c7-r4c6-r5c5
thermo-2: thermo r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9
thermo-3: thermo r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3
kropki r7c8-r7c9 black
palindrome-1: palindrome r6c1-r7c2-r8c3-r9c4-r9c5-r9c6-r9c7
palindrome-2: palindrome r4c2-r5c3-r6c4-r7c5-r7c6-r7c7-r7c8
palindrome-3: palindrome r5c6-r4c7
palindrome-4: palindrome r4c5-r3c6
parity-1: parity r7c6-r6c7-r7c8
parity-2: parity r9c5-r8c6-r9c7
parity-3: parity r4c2-r4c3-r4c4-r5c4-r6c4
parity-4: parity r6c1-r6c2-r6c3-r7c3-r8c3
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,5.5],[2.5,6.5],[1.5,7.5],[0.5,8.5]],"color":"#FFF888","thickness":19.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,8.5],[4.5,8.5],[3.5,8.5],[2.5,8.5],[1.5,8.5],[0.5,8.5]],"color":"#FFF888","thickness":19.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[0.5,6.5],[0.5,7.5],[0.5,8.5]],"color":"#FFF888","thickness":19.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFF888","stroke":"#FFF888","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Adjacent digits along a red line must alternate in parity (odd/even).

Grey lines are palindromes and must read the same in both directions.

Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
