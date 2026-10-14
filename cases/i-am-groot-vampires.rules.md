---
format: open-rules
title: I Am Groot -- Vampires
setter: Blobz
source: https://sudokupad.app/kgm00cihnd
case: https://sudoku-sleuth.com/cases/i-am-groot-vampires
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: e3a1289efad9b42cf40d31f99f6acfa7
---

```rules
sudoku 9x9
parity-cells r5c4-r5c6 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[35,44],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[54,55,63],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[64,65],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[71,80],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[69,78],"label":"6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[70,79],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[67,68,76],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[13,14],"label":"17","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[21,22],"label":"4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[49,58],"label":"17","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[52,53],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[33,34],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[42,43],"label":"1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[31,40],"label":"2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[11,12],"label":"2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[50,51,60],"label":"30","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,2.5],[7.5,3.5],[8.5,4.5],[7.5,5.5],[6.5,6.5],[5.5,7.5],[4.5,7.5],[3.5,7.5],[2.5,7.5],[1.5,6.5],[2.5,5.5],[1.5,4.5],[2.5,3.5],[1.5,2.5],[2.5,1.5]],"color":"#77AAEEaa","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5]],"color":"#77AAEEaa","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,4.5],[6.5,3.5]],"color":"#77AAEEaa","thickness":11.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#77AAEE","stroke":"#77AAEE","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#77AAEE","stroke":"#77AAEE","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply.

Digits along a blue line have an equal sum N within each box it passes through. Different lines may have different values for N.

Blue circles denote odd digits.

Digits in cages do not repeat and sum to the value shown.

There are 9 vampires (digits 1-9 once each) in the grid; one in each row, column and box. There are also 9 victims (digits 1-9 once each) in the grid; one in each row, column and box. For purposes of cage totals and blue lines: (a) vampire cells have a value equal to the sum of their digit plus the digit of the victim cell in their box, and (b) victim cells have a value of 0.
