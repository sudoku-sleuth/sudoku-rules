---
format: open-rules
title: Ziffer Spots
setter: Marty Sears
source: https://sudokupad.app/4iis0mjrme
case: https://sudoku-sleuth.com/cases/ziffer-spots
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r5c6-r5c7 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.5,"height":0.46,"rounded":true,"fill":"#c597fd","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5],[8.5,0.5],[8.5,8.5],[7.5,8.5],[7.5,7.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,0.5],[0.5,0.5],[0.5,8.5],[1.5,8.5],[1.5,6.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,4.5],[3.5,4.5],[4.5,3.5],[4.5,5.5],[5.5,4.5],[6.5,4.5],[6.5,5.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,4.5],[3.5,2.5],[2.5,2.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,6.5],[6.5,6.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5],[6.5,1.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[4.5,8.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[2.5,8.5],[2.5,7.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,0.5],[2.5,1.5]],"color":"#deb8fe","thickness":10,"rounded":true}}
```

• Normal sudoku rules apply.
• These are ziffer lines (zipper lines with a difference!) Each pair of digits that are an equal distance from the central spot on a ziffer line have the same difference. This difference will appear on the central spot.
• In this puzzle, the digit on a ziffer spot also indicates exactly how many ziffer spots contain that digit.
• The black dot joins two digits with a 1:2 ratio (one is double the other.)
