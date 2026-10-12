---
format: open-rules
title: Impregnable III
setter: EPH
source: https://tinyurl.com/mr3ee4mu
case: https://sudoku-sleuth.com/cases/impregnable-iii
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c5=8 r5c2=8 r5c8=6 r8c5=6
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r9c5-r9c6 colour "white"
kropki-3: kropki r4c4-r4c5 colour "white"
kropki-4: kropki r1c4-r1c5 colour "white"
kropki-5: kropki r6c1-r7c1 colour "white"
kropki-6: kropki r5c5-r5c6 colour "black"
arrow-1: arrow r8c6-r9c7 bulb ["r9c5"]
arrow-2: arrow r6c2-r5c3-r4c2 bulb ["r7c1"]
arrow-3: arrow r4c8-r3c9 bulb ["r5c9"]
arrow-4: arrow r6c8-r7c9 bulb ["r5c9"]
arrow-5: arrow r2c4-r1c3 bulb ["r1c5"]
arrow-6: arrow r2c6-r1c7 bulb ["r1c5"]
region-sum r2c3-r2c2-r3c2-r4c2-r4c3-r5c3-r6c3-r6c2-r7c2-r8c2-r8c3-r8c4-r7c4-r7c5-r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r6c7-r5c7-r4c7-r4c8-r3c8-r2c8-r2c7-r2c6-r3c6-r3c5-r3c4-r2c4 segments [["r2c3","r2c2","r3c2"],["r4c2","r4c3","r5c3","r6c3","r6c2"],["r7c2","r8c2","r8c3"],["r8c4","r7c4","r7c5","r7c6","r8c6"],["r8c7","r8c8","r7c8"],["r6c8","r6c7","r5c7","r4c7","r4c8"],["r3c8","r2c8","r2c7"],["r2c6","r3c6","r3c5","r3c4","r2c4"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits on arrows must sum to the digit in the attached circle.

The teal line is a region sum line: the sum of the digits on the line within each 3x3 region is the same.

White dots separate consecutive digits.  Black dots separate digits in a 1:2 ratio.  Not all possible dots are given.

The pair of green squares in box 7 is a clone of the two green squares in box 3.  The pair of yellow squares in box 9 is a clone of the two yellow squares in box 1.
