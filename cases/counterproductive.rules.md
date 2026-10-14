---
format: open-rules
title: Counterproductive
setter: Marty Sears
source: https://sudokupad.app/k9rhoxxjvs
case: https://sudoku-sleuth.com/cases/counterproductive
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c1=7 r7c9=5
exported: 8225f7bd104a74fedb4a2f2292f4b9e3
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[-0.167,-0.167],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167]],"color":"#b48f31ff","thickness":17.92,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[9,9.25],[9.25,9.25],[9.25,-0.25],[-0.25,-0.25],[-0.25,9.25],[9,9.25]],"color":"#d6b77fff","thickness":12.16,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[0,1,9]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[63,72,73]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[71,79,80]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[7,8,17]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[10,11]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[24,25]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[55,56]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[69,70]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[58,59]}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[21,22]}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[14,23,32]}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[29,38,47]}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"cage","cells":[43,44]}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[49,50,51]}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"cage","cells":[74]}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"cage","cells":[33]}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"cage","cells":[3]}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"cage","cells":[75]}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"cage","cells":[76]}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"cage","cells":[77]}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"cage","cells":[52]}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"cage","cells":[48,57]}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"cage","cells":[46]}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"cage","cells":[41]}}
```

Normal sudoku rules apply. A cage's product (the result of multiplying its digits together) exactly equals the number of cages with that product. Note: if a cage has only one digit, that digit is considered to be the cage's product.
