---
format: open-rules
title: Cages and Palindromes Set In An Odd Way
setter: Chip Sounder
source: https://sudokupad.app/lj793w18w1
case: https://sudoku-sleuth.com/cases/cages-and-palindromes-set-in-an-odd-way
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c4=5 r3c6=9
exported: 3736ad6e2f55f03f3bc2590b4302fe95
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 6 connected true
cage-2: cage r6c7-r6c8-r6c9 total 6 connected true
cage-3: cage r8c3-r8c4 total 17 connected true
cage-4: cage r5c1-r5c2 total 8 connected true
cage-5: cage r1c1-r1c2 total 9 connected true
cage-6: cage r7c1-r7c2 total 9 connected true
cage-7: cage r8c8-r8c9 total 5 connected true
cage-8: cage r2c8-r2c9 total 13 connected true
cage-9: cage r6c3-r7c3 total 10 connected true
cage-10: cage r9c7-r9c8-r9c9 total 16 connected true
parity-cells r8c9-r4c9-r2c9-r8c1 parity "odd"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,5.5],[7.5,6.5],[7.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5],[5.5,3.5],[5.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,5.5],[3.5,6.5],[3.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[2.5,1.5],[2.5,0.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[1.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,3.5],[1.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Digits on a grey line must read the same forwards as backwards.
Cells highlighted with a grey circle has an odd digit.
