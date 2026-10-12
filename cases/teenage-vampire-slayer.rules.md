---
format: open-rules
title: Teenage Vampire Slayer
setter: Blobz
source: https://sudokupad.app/blobz/teenage-vampire-slayer
case: https://sudoku-sleuth.com/cases/teenage-vampire-slayer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r4c1=1 r4c2=6 r6c8=1 r6c9=7
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,5.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,6.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,7.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,7.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,3.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,2.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5]],"color":"#e2b599ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[1,10],"label":"3"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[18,19],"label":"4"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[11,20],"label":"20"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[3,12],"label":"6"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[4,5],"label":"13"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[13,14],"label":"6"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[15,24],"label":"6"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[16,25],"label":"18"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[34,35],"label":"3"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[31,32],"label":"19"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[29,38],"label":"2"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[46,47],"label":"7"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[45,54],"label":"19"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[63,64],"label":"11"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[72,73],"label":"5"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[74,75],"label":"5"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[68,77],"label":"14"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[69,70],"label":"1"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[71,80],"label":"12"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[58,59],"label":"2"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[49,50],"label":"7"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[39,48],"label":"3"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[42,51],"label":"23"}}
```

Normal sudoku rules apply.

Each wooden stake (line) sums to either 16 or 17.

Each grave (cage) sums to the value shown.

There are 9 vampires (digits 1-9 once each) in the grid; one in each row, column and box. There are also 9 victims (digits 1-9 once each) in the grid; one in each row, column and box. For purposes of cage and line totals: (a) vampire cells have a value equal to the sum of their digit plus the digit of the victim cell in their box, and (b) victim cells have a value of 0.
