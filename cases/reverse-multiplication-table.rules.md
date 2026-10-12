---
format: open-rules
title: Reverse Multiplication Table
setter: Will Power
source: https://sudokupad.app/9qcacmas7r
case: https://sudoku-sleuth.com/cases/reverse-multiplication-table
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c2 connected true
cage-2: cage r2c1-r3c1-r3c2 connected true
cage-3: cage r1c3-r2c3-r3c3 connected true
cage-4: cage r1c4-r1c5-r2c5 connected true
cage-5: cage r2c4-r3c4-r3c5 connected true
cage-6: cage r1c6-r2c6-r3c6 connected true
cage-7: cage r1c7-r1c8-r2c8 connected true
cage-8: cage r2c7-r3c7-r3c8 connected true
cage-9: cage r1c9-r2c9-r3c9 connected true
cage-10: cage r4c1-r4c2-r5c2 connected true
cage-11: cage r5c1-r6c1-r6c2 connected true
cage-12: cage r4c3-r5c3-r6c3 connected true
cage-13: cage r4c4-r4c5-r5c5 connected true
cage-14: cage r5c4-r6c4-r6c5 connected true
cage-15: cage r4c6-r5c6-r6c6 connected true
cage-16: cage r4c7-r4c8-r5c8 connected true
cage-17: cage r5c7-r6c7-r6c8 connected true
cage-18: cage r4c9-r5c9-r6c9 connected true
cage-19: cage r7c1-r7c2-r8c2 connected true
cage-20: cage r8c1-r9c1-r9c2 connected true
cage-21: cage r7c3-r8c3-r9c3 connected true
cage-22: cage r7c4-r7c5-r8c5 connected true
cage-23: cage r8c4-r9c4-r9c5 connected true
cage-24: cage r7c6-r8c6-r9c6 connected true
cage-25: cage r7c7-r7c8-r8c8 connected true
cage-26: cage r8c7-r9c7-r9c8 connected true
cage-27: cage r7c9-r8c9-r9c9 connected true
kropki-1: kropki r3c7-r3c8 colour "white"
kropki-2: kropki r7c1-r7c2 colour "white"
```

```drawing
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"8","textColor":"#000000","fontSize":17}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":17}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"6","textColor":"#000000","fontSize":17}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"10","textColor":"#000000","fontSize":17}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":17}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"35","textColor":"#000000","fontSize":17}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"28","textColor":"#000000","fontSize":17}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"27","textColor":"#000000","fontSize":17}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"5","textColor":"#000000","fontSize":17}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"8","textColor":"#000000","fontSize":17}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":17}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","textColor":"#000000","fontSize":17}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"45","textColor":"#000000","fontSize":17}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":17}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":17}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":17}}
```

Normal Sudoku rules apply. 
KILLER CAGES- Numbers in cages sum to either 6, 15 or 24. 
MULTIPLICATION TABLE- The numbers above the grid are the product of two factors in their column. The numbers to the left of the grid are the product of two factors in their row. There are four pairs of products ABOVE THE GRID. Each pair has factors INSIDE THE GRID that form a rectangle, and correctly multiply to get the products to the LEFT OF THE GRID, and vice versa. Columns and rows only contain two factors each, except the ones with no numbers outside the grid, which have no factors. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
