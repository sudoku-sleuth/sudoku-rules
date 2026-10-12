---
format: open-rules
title: Another Archery Contest!
setter: The Bard
source: https://sudokupad.app/2n64rg0c1y
case: https://sudoku-sleuth.com/cases/another-archery-contest
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c5=8
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4-r6c5 total 24 connected true
cage-2: cage r4c4-r4c5 total 10 connected true
cage-3: cage r4c6-r5c6-r6c6 total 10 connected true
cage-4: cage r4c7-r5c7-r6c7-r7c6-r7c7 total 35 connected true
cage-5: cage r7c3-r7c4-r7c5 total 7 connected true
cage-6: cage r3c5-r3c6-r3c7 total 15 connected true
cage-7: cage r5c3-r6c3 total 8 connected true
cage-8: cage r3c3-r3c4-r4c3 total 18 connected true
cage-9: cage r3c1-r4c1-r5c1-r6c1-r7c1 total 35 connected true
cage-10: cage r3c9-r4c9-r5c9-r6c9-r7c9 total 16 connected true
cage-11: cage r1c3-r1c4-r1c5-r1c6-r1c7 total 20 connected true
cage-12: cage r9c3-r9c4-r9c5-r9c6-r9c7 total 25 connected true
cage-13: cage r2c7-r2c8-r3c8 total 14 connected true
cage-14: cage r2c2-r2c3-r3c2 total 14 connected true
cage-15: cage r7c2-r8c2-r8c3 total 20 connected true
cage-16: cage r7c8-r8c7-r8c8 total 8 connected true
arrow-1: arrow r5c6-r6c5 bulb ["r4c7"]
arrow-2: arrow r6c3-r7c4 bulb ["r5c2"]
arrow-3: arrow r4c4-r3c5 bulb ["r5c3"]
arrow-4: arrow r5c7-r6c6 bulb ["r4c8"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
```

Your turn!
Normal Sudoku Rules Apply
Place the digits 1-9 in each row, column, and box.
Killer Cages: Digits add up to the value in the corner.
Arrows: Digits along the arrow add up to the digit in the circle.
Colors are purely aesthetic.
