---
format: open-rules
title: What's My Line
setter: EPH
source: https://tinyurl.com/bdzpmm9j
case: https://sudoku-sleuth.com/cases/what-s-my-line
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 78f2b3dd6a725234cbb8ab91a4f4f88c
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo r7c2-r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r7c1
whispers r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7-r8c7 gap 5
between r3c3-r3c2-r3c1-r2c1-r1c1-r1c2 ends ["r2c3","r1c3"]
renban r1c7-r1c8-r1c9-r2c9-r3c9-r3c8-r3c7-r2c7
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,4.5],[1.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,5.5],[6.5,5.5],[5.5,5.5],[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
```

Normal sudoku rules apply.

Diagonals: each of the main diagonals must contain all of the digits 1 to 9.

Between line:  all digits on the line must have values strictly between the values of the circles at the ends of the line.

Thermometer: values of cells on the thermometer are strictly increasing from the bulb end.

German whispers line (Green): consecutive cells along the line must have a difference of at least 5.

Renban line (purple): cells on this line have values that form a set of consecutive numbers, in any order, with no repetition.

Palindrome line (grey): cells equidistant from the middle must have the same value eg 146641.

Anti-palindrome line (red): cells equidistant from the middle must have values which sum to 10  eg 421986.  Equivalently: the Nth digit from one end plus the Nth digit from the other end must sum to 10.
