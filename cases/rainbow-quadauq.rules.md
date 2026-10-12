---
format: open-rules
title: Rainbow Quadauq
setter: Timotab
source: https://sudokupad.app/wywwmu0cwi
case: https://sudoku-sleuth.com/cases/rainbow-quadauq
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
palindrome-1: palindrome r4c2-r5c3-r5c4
palindrome-2: palindrome r5c2-r6c2-r7c3-r8c4
palindrome-3: palindrome r8c5-r8c6-r7c7-r6c8
palindrome-4: palindrome r6c9-r7c9-r8c8
palindrome-5: palindrome r4c8-r5c8-r6c7-r7c6-r7c5
palindrome-6: palindrome r7c4-r6c5-r5c5
palindrome-7: palindrome r1c5-r1c6-r1c7-r2c8-r3c8
palindrome-8: palindrome r4c5-r4c6-r5c7
palindrome-9: palindrome r5c1-r6c1-r7c1-r8c2-r8c3
palindrome-10: palindrome r5c1-r4c1-r3c2-r2c2-r1c2
palindrome-11: palindrome r2c5-r3c4-r4c4
quadruple-1: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,6]
quadruple-2: quadruple r1c4-r1c5-r2c4-r2c5 digits [1]
quadruple-3: quadruple r4c7-r4c8-r5c7-r5c8 digits [4]
quadruple-4: quadruple r7c4-r7c5-r8c4-r8c5 digits [2]
quadruple-5: quadruple r4c1-r4c2-r5c1-r5c2 digits [5]
quadruple-6: quadruple r1c1-r1c2-r2c1-r2c2 digits [5]
quadruple-7: quadruple r7c2-r7c3-r8c2-r8c3 digits [7]
quadruple-8: quadruple r5c8-r5c9-r6c8-r6c9 digits [8]
quadruple-9: quadruple r2c5-r2c6-r3c5-r3c6 digits [3]
quadruple-10: quadruple r7c7-r7c8-r8c7-r8c8 digits [2,9]
quadruple-11: quadruple r2c7-r2c8-r3c7-r3c8 digits [2]
quadruple-12: quadruple r8c5-r8c6-r9c5-r9c6 digits [3]
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[3.5,8.5],[2.7,7.7]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,6.5],[4.1,6.5],[4.3,6.7],[4.5,6.7]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,1.7],[0.5,2.5],[1.5,3.5],[1.5,4.1],[1.3,4.3],[1.3,4.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

• Normal Sudoku Rules apply
• Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
• Palindrome lines: Digits along the grey lines read the same forwards and backwards. (e.g. 1534351)
