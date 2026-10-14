---
format: open-rules
title: Same Zifference
setter: Marty Sears
source: ""
case: https://sudoku-sleuth.com/cases/same-zifference
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 998e34cf2b51760eec89572270b3c783
---

```rules
sudoku 9x9
kropki r3c5-r3c6 black
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,1.5],[1.5,1.5],[3.5,3.5],[1.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[3.5,5.5],[3.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5],[3.5,4.5],[1.5,4.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[2.5,0.5],[2.5,1.5],[4.5,3.5],[4.5,2.5],[3.5,1.5],[4.5,1.5],[5.5,0.5],[5.5,1.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[3.5,8.5],[3.5,7.5],[5.5,7.5],[4.5,6.5],[4.5,5.5],[6.5,7.5],[7.5,7.5],[8.5,8.5],[8.5,6.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[5.5,2.5],[5.5,3.5],[7.5,1.5],[7.5,0.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,1.5],[5.5,4.5],[6.5,4.5],[8.5,2.5],[8.5,3.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,5.5],[5.5,5.5],[6.5,6.5],[7.5,6.5]],"color":"#D8B2FF","thickness":11,"rounded":true}}
```

Normal sudoku rules apply. Ziffer lines are Zipper lines with a difference! Along a Ziffer line, each pair of digits that are the same distance from the line's central spot have the same difference. This difference value appears on the line's central spot. 

Eg: if the centre digit of a Ziffer line is a 3, then each pair of digits that are the same distance from that central spot have a difference of 3.

Digits separated by the black dot are in a 1:2 ratio (one is double the other.)
