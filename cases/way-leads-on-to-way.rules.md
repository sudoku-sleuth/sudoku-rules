---
format: open-rules
title: "'way leads on to way'"
setter: Kennet's Dad
source: https://sudokupad.app/pysxzqf1hc
case: https://sudoku-sleuth.com/cases/way-leads-on-to-way
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - Some source features still need to be checked against our reading.
  - The source describes Renban lines that are not yet included in our reading.
exported: 1a4421dd23bc0fc7b4ce144c27ce6317
---

```rules
sudoku 9x9
thermo r6c7-r6c8-r6c9-r5c9-r4c9
modular r1c3-r2c3-r3c3-r3c2-r3c1
parity r1c6-r2c6-r3c6-r3c5-r3c4
nabner r6c6-r5c6-r4c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#cdb1ecff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,8.5],[0.5,8.5]],"color":"#cdb1ecff","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[5.5,2.5],[5.5,0.5]],"color":"#67f067ff","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,5.3]],"color":"#c6c6c6ff","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[8.5,2.5],[8.5,0.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[8.5,5.5],[8.5,3.5]],"color":"#ffdabfff","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[8.5,8.5],[8.5,6.5]],"color":"#f6a1f6ff","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#fffc","stroke":"#CFCFCF","thickness":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#fffc","stroke":"#CFCFCF","thickness":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1],"width":0.54,"height":0.54,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.54,"height":0.54,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.54,"height":0.54,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,2.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"MOD","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,5.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"PAR","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,8.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"ZIP","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.167,2.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"GW","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.167,3.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"TEN","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.167,5.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"NAB","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.167,8.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"TH","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,2.167],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"BL","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,5.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"ENT","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,8.333],"width":0,"height":0.317,"rounded":true,"thickness":0,"angle":0,"text":"REN","textColor":"#afafafff","fontSize":11.8,"textStroke":"#ffffff","textStrokeWidth":1}}
```

• Normal Sudoku rules apply.
• Sum Dots: Digits in a circle gives the sum of the four cells the circle touches..

In the boxes, the lines have the following properties.
• Box 1: Modular (MOD): Every set of three sequential digits contains one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}.
• Box 2: Parity (PAR): Adjacent digits alternate between odd/even parity.
• Box 3: Zipper (ZIP): Digits an equal distance from the center of the line must sum to the digit in the center of that line.
• Box 4: Whisper (GW) - Adjacent digits differ by 5 or more.
• Box 5: Nabner (NAB): No two digits anywhere on the line may be consecutive.
  10 Line (TEN): The line consists of one or more contiguous groups of cells, each of which sums to 10. Groups cannot overlap.
• Box 6: Thermo (TH): Digits strictly increase from the bulb to the end.
• Box 7: Between (BL): Digits on the line are between the values in the circled ends. 
• Box 8: Entropic (ENT): Every set of three sequential digits contains one digit from {1,2,3}, one from {4,5,6}, and one from {7,8,9}.
• Box 9: Renban (RB): The line contains a set of consecutive digits in any order.
