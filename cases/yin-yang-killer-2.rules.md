---
format: open-rules
title: "Yin-Yang Killer #2"
setter: Sir Moose
source: https://sudokupad.app/k00wwexayb
case: https://sudoku-sleuth.com/cases/yin-yang-killer-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 08fb74bd2566befadd4642f9c28cbbba
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[0,1,2,9,11,18,20,27],"label":"43"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[10,19,28,37],"label":"2"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[12,21,29,30],"label":"3"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[3,4,5,13,14],"label":"0"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[22,23],"label":"-5"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[31,32],"label":"13"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[41,50],"label":"11"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[40,49],"label":"3"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[39,48],"label":"3"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[66,75],"label":"5"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[58,67,68],"label":"2"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[38,47,56,57],"label":"5"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[65,74],"label":"7"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[55,64,73],"label":"0"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[36,45,46],"label":"2"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[54,63,72],"label":"18"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[77,78,79,80],"label":"10"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[69,70],"label":"2"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[6,7,8,15,16],"label":"4"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[17,25,26,34],"label":"5"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[35,44,53,62,71],"label":"-1"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[42,51],"label":"-2"}}
```

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area may be fully shaded or unshaded.

Digits in cages may not repeat and sum to the given number.  In these cages, shaded digits count as positive numbers, and unshaded digits count as negative numbers.

In each cage, all unshaded digits must be  orthogonally connected.
