---
format: open-rules
title: Pick-up Sticks (Grey)
setter: Marty Sears
source: https://sudokupad.app/1inc2ck4kl
case: https://sudoku-sleuth.com/cases/pick-up-sticks-grey
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: b889b694ab3e4c25eac82b76a1380ba9
---

```rules
sudoku 9x9
palindrome-1: palindrome r7c7-r6c8-r5c9
palindrome-2: palindrome r7c7-r6c8-r5c9
palindrome-3: palindrome r2c3-r1c4
palindrome-4: palindrome r7c7-r6c8-r5c9
palindrome-5: palindrome r3c5-r2c4-r1c3
palindrome-6: palindrome r5c9-r4c8-r3c7-r2c6
palindrome-7: palindrome r7c6-r6c7
palindrome-8: palindrome r6c7-r5c6-r4c5
palindrome-9: palindrome r5c7-r6c8-r7c9
palindrome-10: palindrome r8c4-r7c5-r6c6
palindrome-11: palindrome r4c1-r5c2-r6c3-r7c4-r8c5
palindrome-12: palindrome r7c4-r6c5-r5c6-r4c7-r3c8-r2c9
palindrome-13: palindrome r2c2-r3c3-r4c4
palindrome-14: palindrome r6c5-r5c4-r4c3
palindrome-15: palindrome r6c3-r5c4
palindrome-16: palindrome r4c2-r3c3-r2c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":9,"height":9,"rounded":false,"fill":"#f4f5ffff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3,7],[3,9],[6,9],[6,6],[3,6],[3,7]],"color":"#b9cbeeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3,9],[0,9],[0,6],[3,6],[3,3],[0,3],[0,6]],"color":"#b9cbeeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6,9],[9,9],[9,0],[6,0],[6,6],[9,6]],"color":"#b9cbeeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[9,3],[3,3],[3,0],[0,0],[0,3]],"color":"#b9cbeeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0]],"color":"#b9cbeeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0,1],[9,1]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[9,2],[8,2],[8,0]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7,0],[7,2],[8,2],[8,4],[9,4]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[9,5],[8,5],[8,4],[7,4],[7,2],[5,2],[5,0]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4,0],[4,2],[5,2],[5,4],[7,4],[7,5],[8,5],[8,7],[9,7]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[9,8],[8,8],[8,7],[7,7],[7,5],[5,5],[5,4],[4,4],[4,2],[2,2],[2,0]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8,9],[8,8],[7,8],[7,9]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5,9],[5,5],[4,5],[4,4],[2,4],[2,2],[1,2],[1,0]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4,9],[4,5],[2,5],[2,4],[1,4],[1,2],[0,2]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2,9],[2,5],[1,5],[1,4],[0,4]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1,9],[1,5],[0,5]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0,8],[7,8],[7,7],[0,7]],"color":"#b9cbeeff","thickness":2.56,"rounded":true,"layer":"over"}}
```

Normal sudoku rules apply.

Each grey stick is a palindrome, reading the same in either direction.

A stick always has a lower total (the sum of its digits) than any stick which lies on top of it.
