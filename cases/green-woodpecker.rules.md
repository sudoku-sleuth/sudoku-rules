---
format: open-rules
title: Green Woodpecker
setter: Marty Sears
source: https://sudokupad.app/4mhjw1q53l
case: https://sudoku-sleuth.com/cases/green-woodpecker
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r2c6-r3c6 colour "black"
whispers-1: whispers r3c9-r3c8-r3c7-r4c6-r5c6-r6c6-r7c5-r7c4-r8c4-r8c5 gap 5
whispers-2: whispers r2c6-r3c7-r3c6 gap 5
whispers-3: whispers r8c1-r8c2-r8c3-r7c2 gap 5
whispers-4: whispers r8c2-r7c1 gap 5
whispers-5: whispers r8c6-r8c7-r7c7-r6c7 gap 5
whispers-6: whispers r6c9-r7c9-r8c9 gap 5
whispers-7: whispers r7c9-r6c8 gap 5
whispers-8: whispers r5c5-r6c4-r5c4 gap 5
region-sum r9c2-r9c3-r9c4-r9c5-r9c6 segments [["r9c2","r9c3"],["r9c4","r9c5","r9c6"]]
parity-cells r7c1-r7c2-r6c9-r6c7-r6c8-r1c4 parity "odd"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,2.5],[5.5,1.5],[5.5,0.5],[2,4]],"color":"#00ea0e","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,4.5],[2.5,3.5]],"color":"#e6261f","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.68,"height":0.68,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
```

• Normal sudoku rules apply.
• Adjacent digits on a green line have a difference of at least 5.
• Adjacent digits on a red line have different parity (one is odd, the other is even.)
• The blue line is divided by a box border into two segments with the same sum.
• The black dot separates two digits with a 1:2 ratio (one is double the other.)
• A digit on a yellow circle is odd.
